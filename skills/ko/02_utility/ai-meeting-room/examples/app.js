'use strict';
const $ = id => document.getElementById(id);
let records = [], aborter = null, token = '', busy = false;
let costState = {amount:0, unknown:0, input:0, output:0, calls:0};
const participants = $('participants');

function addParticipant(name = '') {
  if (participants.children.length >= 4) return;
  const node = $('participant-template').content.firstElementChild.cloneNode(true);
  node.querySelector('.name').value = name;
  const clearPrices = () => { node.querySelector('.input-price').value = ''; node.querySelector('.output-price').value = ''; node.querySelector('.price-status').textContent = ''; };
  node.querySelector('.provider').addEventListener('change', e => {
    clearPrices();
    node.querySelector('.credentials').hidden = e.target.value === 'demo';
    node.querySelector('.endpoint-field').hidden = e.target.value !== 'azure';
    node.querySelector('.price-nebius').hidden = e.target.value !== 'nebius';
    node.querySelector('.price-status').textContent = '';
  });
  node.querySelector('.model').addEventListener('input', clearPrices);
  node.querySelector('.price-nebius').addEventListener('click', async e => {
    const model = node.querySelector('.model').value.trim(), status = node.querySelector('.price-status');
    if (!model) { status.textContent = '먼저 모델명을 입력해 주세요.'; return; }
    const button = e.currentTarget; button.disabled = true; status.textContent = '단가를 확인하고 있습니다.';
    try {
      const tokenResponse = await fetch('/token');
      if (!tokenResponse.ok) throw Error('회의실 연결을 확인해 주세요.');
      const key = (await tokenResponse.json()).token;
      const response = await fetch('/price', {method:'POST', headers:{'Content-Type':'application/json','X-Meeting-Token':key}, body:JSON.stringify({model})});
      const data = await response.json();
      if (!response.ok) throw Error(data.error || '단가를 불러오지 못했습니다.');
      if (busy || node.querySelector('.provider').value !== 'nebius' || node.querySelector('.model').value.trim() !== model) throw Error('설정이 변경돼 단가를 적용하지 않았습니다.');
      node.querySelector('.input-price').value = data.input_price; node.querySelector('.output-price').value = data.output_price;
      status.textContent = 'Nebius 공개 단가를 적용했습니다. 캐시 할인 등은 청구액과 다를 수 있습니다.';
    } catch (error) { status.textContent = error.message || '단가를 불러오지 못했습니다.'; }
    finally { button.disabled = busy; }
  });
  node.querySelector('.remove').addEventListener('click', () => { node.remove(); renumber(); });
  participants.append(node); renumber();
}
function renumber() {
  [...participants.children].forEach((node, i) => {
    node.querySelector('.participant-title').textContent = `참여자 ${i + 1}`;
    node.querySelector('.remove').hidden = participants.children.length <= 2;
  });
  $('add').disabled = participants.children.length >= 4;
}
function identity(person) {
  const names = {demo:'테스트 모드', openai:'OpenAI', deepseek:'DeepSeek', nebius:'Nebius', azure:'Azure OpenAI', vertex:'Vertex AI Express', user:'사용자'};
  if (person.provider === 'user') return names.user;
  return person.provider === 'demo' ? names.demo : `${names[person.provider]} · ${person.model}`;
}
function entry(person, stage, text, failure = false) {
  const article = document.createElement('article');
  article.className = 'message' + (failure ? ' failure' : '');
  const meta = document.createElement('div'); meta.className = 'message-meta';
  const who = document.createElement('strong'); who.textContent = person.name;
  const model = document.createElement('span'); model.textContent = identity(person);
  const phase = document.createElement('span'); phase.textContent = stage;
  const body = document.createElement('div'); body.className = 'message-body'; body.textContent = text;
  meta.append(who, model, phase); article.append(meta, body);
  const empty = $('transcript').querySelector('.empty'); if (empty) empty.remove();
  $('transcript').append(article); records.push({name:person.name, identity:identity(person), stage, text, failure});
  $('count').textContent = `발언 ${records.filter(r => !r.failure).length}개`;
  $('download').disabled = false;
}
function settings() {
  const people = [...participants.children].map(node => ({
    name: node.querySelector('.name').value.trim(), provider: node.querySelector('.provider').value,
    model: node.querySelector('.model').value.trim(), key: node.querySelector('.key').value.trim(), endpoint: node.querySelector('.endpoint').value.trim(),
    inputPrice: node.querySelector('.input-price').value, outputPrice: node.querySelector('.output-price').value
  }));
  if (people.some(p => !p.name || (p.provider !== 'demo' && (!p.model || !p.key)))) throw Error('참여자 이름과 선택한 제공사의 모델명, API 키를 입력해 주세요.');
  if (people.some(p => p.provider === 'azure' && !p.endpoint)) throw Error('Azure 리소스 주소를 입력해 주세요.');
  if (people.some(p => [p.inputPrice, p.outputPrice].some(v => v !== '' && (!Number.isFinite(Number(v)) || Number(v) < 0)))) throw Error('비용 단가는 0 이상의 숫자로 입력해 주세요.');
  if (new Set(people.map(p => p.name)).size !== people.length) throw Error('참여자 이름을 서로 다르게 입력해 주세요.');
  return people;
}
function setBusy(value) {
  busy = value; $('start').disabled = value; $('stop').hidden = !value;
  $('add').disabled = value || participants.children.length >= 4;
  participants.querySelectorAll('input, select, button').forEach(el => { el.disabled = value; });
  $('topic').disabled = value; $('rounds').disabled = value; $('mode').disabled = value; $('on-error').disabled = value;
}
function updateCost() {
  const suffix = costState.unknown ? ` · 미확인 ${costState.unknown}건` : '';
  const amount = costState.amount > 0 && costState.amount < 0.000001 ? '< $0.000001' : `$${costState.amount.toFixed(6)}`;
  $('cost').textContent = `계산 가능한 예상 비용 ${amount}${suffix} · 입력 ${costState.input.toLocaleString()} / 출력 ${costState.output.toLocaleString()} 토큰`;
}
async function ask(person, prompt) {
  costState.calls++;
  try {
    const response = await fetch('/ask', {method:'POST', headers:{'Content-Type':'application/json','X-Meeting-Token':token}, body:JSON.stringify({...person, prompt}), signal:aborter.signal});
    const result = await response.json();
    if (!response.ok) throw Error(result.error || '응답을 받지 못했습니다.');
    const usage = result.usage;
    if (!usage || !Number.isSafeInteger(usage.input_tokens) || !Number.isSafeInteger(usage.output_tokens) || usage.input_tokens < 0 || usage.output_tokens < 0) {
      costState.unknown++;
    } else {
      costState.input += usage.input_tokens; costState.output += usage.output_tokens;
      if (person.provider !== 'demo') {
        if (person.inputPrice === '' || person.outputPrice === '') costState.unknown++;
        else costState.amount += (usage.input_tokens * Number(person.inputPrice) + usage.output_tokens * Number(person.outputPrice)) / 1000000;
      }
    }
    updateCost();
    return result.text;
  } catch (e) {
    costState.unknown++; updateCost();
    throw e;
  }
}
function waitForUser() {
  $('manual-controls').hidden = false;
  $('status').textContent = '이번 턴이 끝났습니다. 말씀을 추가하고 다음 턴을 진행하세요.';
  return new Promise((resolve, reject) => {
    const signal = aborter.signal;
    function cleanup() { $('next').removeEventListener('click', next); signal.removeEventListener('abort', stop); $('manual-controls').hidden = true; }
    function next() { const text = $('guidance').value.trim(); $('guidance').value = ''; cleanup(); resolve(text); }
    function stop() { cleanup(); reject(new DOMException('중단됨', 'AbortError')); }
    $('next').addEventListener('click', next); signal.addEventListener('abort', stop, {once:true});
    if (signal.aborted) stop();
  });
}
function continueAfterError(choice, name) {
  if (choice === 'continue') return true;
  if (choice === 'stop') return false;
  return confirm(`${name} 응답에 오류가 생겼습니다. 회의를 계속할까요?\n확인: 계속 / 취소: 중단`);
}
async function start() {
  if (busy) return;
  let people; const topic = $('topic').value.trim();
  const total = Number($('rounds').value), mode = $('mode').value, onError = $('on-error').value;
  try { if (!topic) throw Error('회의 주제를 입력해 주세요.'); if (!Number.isInteger(total) || total < 1 || total > 20) throw Error('턴 수는 1부터 20까지 입력해 주세요.'); people = settings(); }
  catch (e) { $('setup-error').textContent = e.message; return; }
  if (records.length && !confirm('새 회의를 시작하면 화면의 기존 기록이 지워집니다. 필요한 기록은 먼저 저장해 주세요. 계속할까요?')) return;
  $('setup-error').textContent = ''; records = []; costState = {amount:0, unknown:0, input:0, output:0, calls:0}; updateCost(); $('transcript').replaceChildren(); $('count').textContent = '발언 0개'; $('download').disabled = true;
  $('meeting-title').textContent = topic; setBusy(true); aborter = new AbortController();
  let stopped = false;
  try {
    const tokenResponse = await fetch('/token', {signal: aborter.signal});
    if (!tokenResponse.ok) throw Error('회의실 연결을 확인해 주세요.');
    token = (await tokenResponse.json()).token;
    for (let round = 1; round <= total; round++) {
      const stage = `${round}턴 · ${round === 1 ? '첫 의견' : '토론'}`;
      for (const person of people) {
        $('status').textContent = `${stage} · ${person.name} 님이 발언을 준비하고 있습니다.`;
        const history = records.filter(r => !r.failure).map(r => `[${r.stage} / ${r.name} / ${r.identity}]\n${r.text}`).join('\n\n');
        const prompt = `회의 주제: ${topic}\n당신의 이름: ${person.name}\n현재 단계: ${stage}\n\n이전 발언:\n${history || '(아직 없음)'}\n\n${round === 1 ? '주제에 대한 자신의 의견을 제시하세요.' : '앞선 다른 참여자의 의견에 직접 답하고 보완점이나 질문을 제시하세요.'}`;
        try {
          entry(person, stage, await ask(person, prompt));
        } catch (e) {
          if (e.name === 'AbortError') throw e;
          entry(person, stage, e.message || '연결에 실패했습니다.', true);
          if (!continueAfterError(onError, person.name)) throw Error('참여자 응답 오류로 회의를 중단했습니다.');
        }
      }
      const current = records.filter(r => r.stage === stage && !r.failure).map(r => `[${r.name} / ${r.identity}]\n${r.text}`).join('\n\n');
      const moderator = {...people[0], name:'진행자 요약'};
      $('status').textContent = `${round}턴을 진행자가 요약하고 있습니다.`;
      try {
        if (!current) throw Error('성공한 발언이 없어 요약할 수 없습니다.');
        const summary = await ask(moderator, `당신은 회의 진행자입니다. 아래 이번 턴 발언만 근거로 사용자에게 핵심 의견, 서로 다른 점, 다음에 확인할 질문을 짧게 보고하세요. 새 사실을 만들어 내지 마세요.\n회의 주제: ${topic}\n\n${current}`);
        entry(moderator, `${round}턴 보고`, summary);
      } catch (e) {
        if (e.name === 'AbortError') throw e;
        entry(moderator, `${round}턴 보고`, e.message || '요약에 실패했습니다.', true);
        if (!continueAfterError(onError, '진행자 요약')) throw Error('진행자 요약에 실패해 회의를 멈췄습니다.');
      }
      if (round < total && mode === 'manual') {
        const guidance = await waitForUser();
        if (guidance) entry({name:'사용자', provider:'user'}, `${round + 1}턴 지시`, guidance);
      }
    }
  } catch (e) {
    stopped = e.name === 'AbortError';
    if (!stopped) $('setup-error').textContent = e.message || '회의실 연결이 끊겼습니다.';
  } finally {
    $('status').textContent = stopped ? '회의를 중단했습니다. 이미 보낸 요청은 제공사에서 처리될 수 있습니다.' : ($('setup-error').textContent ? '회의가 중단되었습니다. 위 오류를 확인해 주세요.' : '회의가 끝났습니다. 오류가 있다면 해당 발언을 확인해 주세요.');
    setBusy(false); aborter = null;
  }
}
function save() {
  const escape = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const title = escape($('meeting-title').textContent);
  const body = records.map(r => `<section><h2>${escape(r.name)} · ${escape(r.stage)}${r.failure ? ' · 오류' : ''}</h2><div>${escape(r.identity)}</div><p>${escape(r.text)}</p></section>`).join('');
  const html = `<!doctype html><html lang="ko"><meta charset="utf-8"><title>${title}</title><style>body{font:16px/1.8 sans-serif;max-width:850px;margin:40px auto;padding:0 20px;color:#202523}section{border-top:1px solid #ddd;padding:12px 0}h2{font-size:16px}p{white-space:pre-wrap;overflow-wrap:anywhere}</style><h1>${title}</h1><p>${escape($('cost').textContent)} (추정치)</p>${body}</html>`;
  const url = URL.createObjectURL(new Blob([html], {type:'text/html;charset=utf-8'}));
  const a = document.createElement('a'); a.href = url; a.download = 'AI_회의록.html'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$('add').addEventListener('click', () => addParticipant()); $('start').addEventListener('click', start);
$('stop').addEventListener('click', () => aborter?.abort()); $('download').addEventListener('click', save);
addParticipant('참여자 A'); addParticipant('참여자 B');
