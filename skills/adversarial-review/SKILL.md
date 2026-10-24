---
name: adversarial-review
description: "적대적 레드팀 자가 검증 스킬. AI가 자신이 작성한 코드나 설계안의 환각과 자기합리화 편향을 파괴하기 위해 '악마의 변호인(공격자)' 모드로 전환하여 가혹한 스트레스 테스트와 결함 감사를 수행합니다. 트리거: '적대적 검증해', '하네스 돌려', '공격자 입장에서 털어봐', '약점 찾아봐'."
---

# Adversarial Review (적대적 레드팀 검증 스킬)

단일 AI 모델의 가장 치명적인 약점은 **"자기가 짠 코드는 자기가 비판하지 못하는 자기 확증 편향(Self-Confirmation Bias)"**입니다. 
이 스킬은 작업 완료 후 AI를 **"악마의 변호인(Devil's Advocate)"**이자 **"외부 침투 보안 감사관"**으로 강제 전환하여, 칭찬을 금지하고 오직 결함과 취약점만을 집요하게 적출하도록 만듭니다.

---

## ⚡ 10초 적용법 (Zero-Install)

1. 이 `SKILL.md` 파일을 프로젝트 루트의 `.agents/skills/adversarial-review/SKILL.md` 또는 글로벌 스킬 디렉터리에 넣습니다.
2. AI에게 이렇게 말하세요:
   > 👉 **"방금 짠 코드 적대적으로 털어봐 (하네스 돌려)"**

---

## 🛡️ 검증 프로토콜 (행동 수칙)

적대적 검증이 발동되면 AI는 다음 3대 철칙을 100% 준수해야 합니다:

### 1. 칭찬 및 긍정적 미사여구 전면 금지
- *"좋은 접근입니다"*, *"잘 설계되었습니다"* 같은 겉치레 칭찬을 일절 금지합니다.
- 시작부터 즉시 **"발견된 결함 및 리스크 목록"**으로 직행합니다.

### 2. 5대 적대적 점검 체크리스트
1. **환각 및 미검증 가정:** 존재하지 않는 라이브러리 메서드나 설정을 '있다고 믿고' 호출했는가?
2. **동시성 경합 및 레이스 컨디션:** 비동기/멀티스레드 환경에서 데이터가 꼬일 가능성이 있는가?
3. **리소스 누수 및 미정리 잔재:** DB 커넥션, 파일 핸들, 임시 파일(`tmp`), 캐시가 닫히지 않고 방치되는가?
4. **침묵하는 실패(Silent Failures):** `except: pass`처럼 에러를 조용히 씹어서 디버깅을 불가능하게 만들었는가?
5. **극단적 엣지 케이스:** 네트워크 단절, 입력값 0 또는 음수, 수십만 건의 대용량 데이터 유입 시 터지는가?

### 3. 검수와 수정의 분리 (승인 전 수정 금지)
- 문제를 지적했다고 해서 AI가 코드를 마음대로 다시 고쳐 덮어쓰지 않습니다.
- **"① 결함 위치, ② 실패 시나리오, ③ 권장 해결책"**을 보고서로 먼저 제출하고, 사람의 수정 승인을 대기합니다.

---

## 🚨 [주의] AI의 '자기 편향' 한계와 극복법

### 왜 1인 2역에도 한계가 있는가?
동일한 AI 모델이 작성자와 공격자를 번갈아 연기하면, 모델의 근본적인 지식 공백(Knowledge Gap)이나 편향까지는 100% 뚫지 못할 수 있습니다.

### 💡 [Pro Tip] 다른 API 키로 교차 검증 확장하기
더 완벽한 무결점을 원한다면, 검증 스텝을 **"다른 모델 API를 호출하는 1줄 스크립트"**로 확장하세요:

```python
# sample_cross_check.py (DeepSeek / OpenAI 교차 검증 예시)
import urllib.request, json, os

code_to_audit = open("my_code.py", "r", encoding="utf-8").read()

prompt = f"""
당신은 이 코드와 아무 이해관계가 없는 냉혹한 시니어 보안 감사관입니다.
오직 숨은 결함, 레이스 컨디션, 메모리 누수만 찾아내어 비판하십시오.
칭찬은 일절 금지합니다.

[검토 대상 코드]
{code_to_audit}
"""

req = urllib.request.Request(
    "https://api.deepseek.com/chat/completions", # 또는 api.openai.com
    headers={
        "Authorization": f"Bearer {os.environ.get('CRITIC_API_KEY')}",
        "Content-Type": "application/json"
    },
    data=json.dumps({
        "model": "deepseek-chat",
        "messages": [{"role": "user", "content": prompt}]
    }).encode("utf-8")
)

res = json.loads(urllib.request.urlopen(req).read().decode("utf-8"))
print(res["choices"][0]["message"]["content"])
```

* 메인 코딩: **Claude**
* 적대적 비판: **DeepSeek** 또는 **GPT-4o**
* 이렇게 모델 2개를 엮는 순간, 환각 발생률이 거의 0%에 수렴하게 됩니다.
