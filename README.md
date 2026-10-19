# 🧭 AI Skill Navigator

> **"Give this single file to your AI, and it will analyze your job and recommend the best Skills & MCP tools for your project."**  
> *"이 파일 하나를 AI에게 건네주면, 당신의 직무를 분석해 가장 필요한 스킬과 MCP 도구를 알아서 찾아 추천해 줍니다."*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Lainholic/ai-skill-navigator/pulls)

---

## ⚡ 10초 퀵 스타트 (How to Use)

복잡한 설치나 설정이 필요 없습니다.

1. 이 저장소의 [`NAVIGATOR.md`](./NAVIGATOR.md) 파일 내용을 복사합니다.
2. 사용 중인 AI 챗봇(ChatGPT, Claude, Cursor, Antigravity, GitHub Copilot 등)에 붙여넣고 이렇게 말해보세요:
   > 👉 **"이 문서 읽고, 내 직무(또는 지금 하려는 작업)에 필요한 최적의 도구 좀 추천해줘."**

---

## 💡 왜 만들었나요? (Why Skill Navigator?)

수백 개의 MCP(Model Context Protocol) 서버와 AI 스킬들이 쏟아져 나오고 있지만, 대부분의 실무자와 비개발자는 **"내 상황에 대체 무엇을 써야 하는지"** 알지 못해 헤맵니다.

기존의 Awesome 목록들은 사람이 일일이 눈으로 뒤져야 했고, 코딩 규칙(`.cursorrules`)들은 단순 스타일 잔소리에 불과했습니다.

**AI Skill Navigator**는 AI 에이전트를 **'자율 도구 네비게이터'**로 변신시켜, 사용자가 도구를 공부할 필요 없이 **AI가 먼저 "이런 도구가 있는데 도와드릴까요?"라고 제안**하도록 만듭니다.

---

## 🧭 연동 및 탐색 허브 (Curated Hubs)

AI는 사용자의 직무와 프로젝트 스택에 맞춰 아래 공인 허브에서 최적의 도구를 발굴합니다.

* 🇰🇷 **[스킬북 (SkillBook)](https://www.getskillbook.com/)**: 한국어 실무자/비개발자 특화 (기획, 문서 작성, 데이터 분석, 취업, 자동화)
* 🌐 **[Model Context Protocol Registry](https://github.com/modelcontextprotocol/servers)**: Anthropic 공식 레퍼런스 서버 (파일, Git, 메모리, DB)
* 📦 **[Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)**: 전 세계 개발자 검증 오픈소스 도구 카탈로그
* ⚡ **[PulseMCP](https://www.pulsemcp.com/) / [Glama](https://glama.ai/mcp/servers)**: 실시간 인기 도구 순위 및 웹 스펙

---

## 📋 파일 구조 (File Structure)

```text
ai-skill-navigator/
├── LICENSE          # MIT License
├── README.md        # 프로젝트 소개 및 사용 가이드
└── NAVIGATOR.md     # AI에게 주입할 핵심 직무 분석 및 도구 추천 프로토콜
```

---

## 🤝 기여하기 (Contributing)

더 좋은 스킬 허브나 직무별 추천 시나리오가 있다면 언제든지 Issue나 Pull Request를 남겨주세요!

## 📄 라이선스 (License)

이 프로젝트는 [MIT License](./LICENSE) 하에 자유롭게 사용, 수정 및 배포할 수 있습니다.
