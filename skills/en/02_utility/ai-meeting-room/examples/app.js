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
    if (!model) { status.textContent = 'Enter a model name first.'; return; }
    const button = e.currentTarget; button.disabled = true; status.textContent = 'Checking rates.';
    try {
      const tokenResponse = await fetch('/token');
      if (!tokenResponse.ok) throw Error('Check the meeting room connection.');
      const key = (await tokenResponse.json()).token;
      const response = await fetch('/price', {method:'POST', headers:{'Content-Type':'application/json','X-Meeting-Token':key}, body:JSON.stringify({model})});
      const data = await response.json();
      if (!response.ok) throw Error(data.error || 'Could not load rates.');
      if (busy || node.querySelector('.provider').value !== 'nebius' || node.querySelector('.model').value.trim() !== model) throw Error('Settings changed; rates were not applied.');
      node.querySelector('.input-price').value = data.input_price; node.querySelector('.output-price').value = data.output_price;
      status.textContent = 'Nebius public rates applied. Cache discounts and other factors may change the final bill.';
    } catch (error) { status.textContent = error.message || 'Could not load rates.'; }
    finally { button.disabled = busy; }
  });
  node.querySelector('.remove').addEventListener('click', () => { node.remove(); renumber(); });
  participants.append(node); renumber();
}
function renumber() {
  [...participants.children].forEach((node, i) => {
    node.querySelector('.participant-title').textContent = `Participant ${i + 1}`;
    node.querySelector('.remove').hidden = participants.children.length <= 2;
  });
  $('add').disabled = participants.children.length >= 4;
}
function identity(person) {
  const names = {demo:'Test mode', openai:'OpenAI', deepseek:'DeepSeek', nebius:'Nebius', azure:'Azure OpenAI', vertex:'Vertex AI Express', user:'User'};
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
  $('count').textContent = `${records.filter(r => !r.failure).length} messages`;
  $('download').disabled = false;
}
function settings() {
  const people = [...participants.children].map(node => ({
    name: node.querySelector('.name').value.trim(), provider: node.querySelector('.provider').value,
    model: node.querySelector('.model').value.trim(), key: node.querySelector('.key').value.trim(), endpoint: node.querySelector('.endpoint').value.trim(),
    inputPrice: node.querySelector('.input-price').value, outputPrice: node.querySelector('.output-price').value
  }));
  if (people.some(p => !p.name || (p.provider !== 'demo' && (!p.model || !p.key)))) throw Error('Enter each participant name, model, and API key.');
  if (people.some(p => p.provider === 'azure' && !p.endpoint)) throw Error('Enter the Azure resource endpoint.');
  if (people.some(p => [p.inputPrice, p.outputPrice].some(v => v !== '' && (!Number.isFinite(Number(v)) || Number(v) < 0)))) throw Error('Enter non-negative rates.');
  if (new Set(people.map(p => p.name)).size !== people.length) throw Error('Give each participant a unique name.');
  return people;
}
function setBusy(value) {
  busy = value; $('start').disabled = value; $('stop').hidden = !value;
  $('add').disabled = value || participants.children.length >= 4;
  participants.querySelectorAll('input, select, button').forEach(el => { el.disabled = value; });
  $('topic').disabled = value; $('rounds').disabled = value; $('mode').disabled = value; $('on-error').disabled = value;
}
function updateCost() {
  const suffix = costState.unknown ? ` · ${costState.unknown} unknown` : '';
  const amount = costState.amount > 0 && costState.amount < 0.000001 ? '< $0.000001' : `$${costState.amount.toFixed(6)}`;
  $('cost').textContent = `Estimated known cost ${amount}${suffix} · input ${costState.input.toLocaleString()} / output ${costState.output.toLocaleString()} tokens`;
}
async function ask(person, prompt) {
  costState.calls++;
  try {
    const response = await fetch('/ask', {method:'POST', headers:{'Content-Type':'application/json','X-Meeting-Token':token}, body:JSON.stringify({...person, prompt}), signal:aborter.signal});
    const result = await response.json();
    if (!response.ok) throw Error(result.error || 'No response received.');
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
  $('status').textContent = 'This round is complete. Add direction and continue when ready.';
  return new Promise((resolve, reject) => {
    const signal = aborter.signal;
    function cleanup() { $('next').removeEventListener('click', next); signal.removeEventListener('abort', stop); $('manual-controls').hidden = true; }
    function next() { const text = $('guidance').value.trim(); $('guidance').value = ''; cleanup(); resolve(text); }
    function stop() { cleanup(); reject(new DOMException('Stopped', 'AbortError')); }
    $('next').addEventListener('click', next); signal.addEventListener('abort', stop, {once:true});
    if (signal.aborted) stop();
  });
}
function continueAfterError(choice, name) {
  if (choice === 'continue') return true;
  if (choice === 'stop') return false;
  return confirm(`${name} encountered an error. Continue the meeting?\nOK: continue / Cancel: stop`);
}
async function start() {
  if (busy) return;
  let people; const topic = $('topic').value.trim();
  const total = Number($('rounds').value), mode = $('mode').value, onError = $('on-error').value;
  try { if (!topic) throw Error('Enter a meeting topic.'); if (!Number.isInteger(total) || total < 1 || total > 20) throw Error('Enter a round count between 1 and 20.'); people = settings(); }
  catch (e) { $('setup-error').textContent = e.message; return; }
  if (records.length && !confirm('Starting a new meeting clears the current transcript. Save it first if needed. Continue?')) return;
  $('setup-error').textContent = ''; records = []; costState = {amount:0, unknown:0, input:0, output:0, calls:0}; updateCost(); $('transcript').replaceChildren(); $('count').textContent = '0 messages'; $('download').disabled = true;
  $('meeting-title').textContent = topic; setBusy(true); aborter = new AbortController();
  let stopped = false;
  try {
    const tokenResponse = await fetch('/token', {signal: aborter.signal});
    if (!tokenResponse.ok) throw Error('Check the meeting room connection.');
    token = (await tokenResponse.json()).token;
    for (let round = 1; round <= total; round++) {
      const stage = `Round ${round} · ${round === 1 ? 'First response' : 'Discussion'}`;
      for (const person of people) {
        $('status').textContent = `${stage} · ${person.name} is preparing a response.`;
        const history = records.filter(r => !r.failure).map(r => `[${r.stage} / ${r.name} / ${r.identity}]\n${r.text}`).join('\n\n');
        const prompt = `Meeting topic: ${topic}\nYour name: ${person.name}\nCurrent stage: ${stage}\n\nPrevious responses:\n${history || '(none yet)'}\n\n${round === 1 ? 'Give your own view on the topic.' : 'Respond directly to the other participants and add a constructive point or question.'}`;
        try {
          entry(person, stage, await ask(person, prompt));
        } catch (e) {
          if (e.name === 'AbortError') throw e;
          entry(person, stage, e.message || 'Connection failed.', true);
          if (!continueAfterError(onError, person.name)) throw Error('The meeting stopped because a participant response failed.');
        }
      }
      const current = records.filter(r => r.stage === stage && !r.failure).map(r => `[${r.name} / ${r.identity}]\n${r.text}`).join('\n\n');
      const moderator = {...people[0], name:'Moderator summary'};
      $('status').textContent = `The moderator is summarizing round ${round}.`;
      try {
        if (!current) throw Error('No successful responses to summarize.');
        const summary = await ask(moderator, `You are the moderator. Based only on this round, briefly report the main ideas, disagreements, and questions to investigate. Do not invent facts.\nMeeting topic: ${topic}\n\n${current}`);
        entry(moderator, `Round ${round} summary`, summary);
      } catch (e) {
        if (e.name === 'AbortError') throw e;
        entry(moderator, `Round ${round} summary`, e.message || 'Summary failed.', true);
        if (!continueAfterError(onError, 'Moderator summary')) throw Error('The meeting stopped because the moderator summary failed.');
      }
      if (round < total && mode === 'manual') {
        const guidance = await waitForUser();
        if (guidance) entry({name:'User', provider:'user'}, `Round ${round + 1} direction`, guidance);
      }
    }
  } catch (e) {
    stopped = e.name === 'AbortError';
    if (!stopped) $('setup-error').textContent = e.message || 'The meeting room connection was interrupted.';
  } finally {
    $('status').textContent = stopped ? 'Meeting stopped. Requests already sent may still be processed by the provider.' : ($('setup-error').textContent ? 'Meeting stopped. Check the error above.' : 'Meeting complete. Check any responses marked as errors.');
    setBusy(false); aborter = null;
  }
}
function save() {
  const escape = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const title = escape($('meeting-title').textContent);
  const body = records.map(r => `<section><h2>${escape(r.name)} · ${escape(r.stage)}${r.failure ? ' · error' : ''}</h2><div>${escape(r.identity)}</div><p>${escape(r.text)}</p></section>`).join('');
  const html = `<!doctype html><html lang="en"><meta charset="utf-8"><title>${title}</title><style>body{font:16px/1.8 sans-serif;max-width:850px;margin:40px auto;padding:0 20px;color:#202523}section{border-top:1px solid #ddd;padding:12px 0}h2{font-size:16px}p{white-space:pre-wrap;overflow-wrap:anywhere}</style><h1>${title}</h1><p>${escape($('cost').textContent)} (estimate)</p>${body}</html>`;
  const url = URL.createObjectURL(new Blob([html], {type:'text/html;charset=utf-8'}));
  const a = document.createElement('a'); a.href = url; a.download = 'AI_meeting_transcript.html'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$('add').addEventListener('click', () => addParticipant()); $('start').addEventListener('click', start);
$('stop').addEventListener('click', () => aborter?.abort()); $('download').addEventListener('click', save);
addParticipant('Participant A'); addParticipant('Participant B');
