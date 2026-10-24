---
name: verification-before-completion
description: "완료 선언 전 실제 동작 검증 강제 족쇄 스킬. 코드가 수정되었거나 버그가 해결되었다고 주장하기 전에 반드시 터미널 명령어를 실행하고 그 출력을 증거로 확인해야만 완료를 선언할 수 있습니다. '다 고쳤습니다', '정상 작동합니다'라는 거짓말을 원천 차단합니다."
---

# Verification Before Completion (완료 선언 전 실행 검증 족쇄)

> **"증거 없는 완료 선언은 거짓말이다. (Evidence before assertions, always.)"**

AI 코딩 에이전트의 가장 흔한 결함은 코드를 저장하자마자 실제로 돌려보지도 않고 **"문제가 완벽히 해결되었습니다!"**라고 단정 짓는 것입니다.  
이 스킬은 AI가 사용자에게 '완료' 또는 '해결'을 주장하기 전에, **반드시 실제 컴파일/테스트/린터 명령어를 직접 실행하고 그 출력을 증거로 제시하도록 강제하는 행동 족쇄**입니다.

---

## ⚡ 10초 적용법 (Zero-Install)

1. 이 `SKILL.md` 파일을 프로젝트 루트의 `.agents/skills/verification-before-completion/SKILL.md`에 넣습니다.
2. AI는 모든 수정 작업 종료 시 자동으로 이 수칙에 구속됩니다.

---

## 🚨 절대 철칙 (The Iron Rule)

1. **말보다 실행 (Action over Words):**
   * 코드를 고쳤다면, 완료를 말하기 전에 터미널 도구로 `python -m py_compile`, `npm test`, `pytest`, `cargo check` 등 실제 검증 명령어를 실행해야 합니다.
2. **증거 제시 의무:**
   * 보고서에는 반드시 **"실제로 실행한 명령어"**와 **"터미널 출력 결과(Return Code 0, Pass 로그)"**를 포함해야 합니다.
3. **가정 금지:**
   * "코드가 논리적이므로 당연히 잘 돌 것입니다"라는 식의 주관적 추측을 전면 금지합니다.
   * 백그라운드로 띄워놓고 "화면이 떴습니다"라고 단정 짓는 것을 금지합니다.

---

## 📋 검증 보고서 서식 예시

AI는 다음과 같이 팩트 기반으로 보고해야 합니다:

```markdown
### ✅ 작업 완료 및 검증 보고
- **수정 파일**: `auth_service.py`
- **검증 명령어**: `pytest tests/test_auth.py`
- **실제 터미널 출력**:
  ```
  tests/test_auth.py::test_login_success PASSED [ 50%]
  tests/test_auth.py::test_token_expiry PASSED  [100%]
  2 passed in 0.42s
  ```
- **상태**: 팩트 검증 완료 (PASS)
```
