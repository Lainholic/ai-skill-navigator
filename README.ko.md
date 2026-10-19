# 🧭 AI 스킬 네비게이터 (AI Skill Navigator)

> **"이 파일 하나를 AI에게 건네주면, 당신의 직무를 분석해 가장 필요한 스킬과 MCP 도구를 알아서 찾아 추천해 줍니다."**  
> *"Feed this single file to any AI, and it will analyze your role and workspace to recommend the best Skills & MCP tools for your project."*

[English](./README.md) | [한국어](./README.ko.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Lainholic/ai-skill-navigator/pulls)

---

## ⚡ 10초 퀵 스타트 (사용법)

복잡한 설치나 설정이 전혀 필요 없습니다 (Zero-install).

1. 이 저장소의 [`NAVIGATOR.ko.md`](./NAVIGATOR.ko.md) (또는 영문 [`NAVIGATOR.md`](./NAVIGATOR.md)) 파일 내용을 복사합니다.
2. 사용 중인 AI 챗봇(ChatGPT, Claude, Cursor, Antigravity, GitHub Copilot, Windsurf 등)에 붙여넣고 이렇게 말해보세요:
   > 👉 **"이 문서 읽고, 내 직무(또는 지금 하려는 작업)에 필요한 최적의 도구 좀 추천해줘."**

---

## 🔎 실제 사용 예시 (Sample Interaction)

이 프로젝트는 완전한 **Zero-install(설치 불필요)** 방식입니다. `NAVIGATOR.ko.md` 문서를 AI에게 건네주었을 때 어떻게 작동하는지 보여주는 실제 사용 세션 예시입니다:

```markdown
사용자: "이제 NAVIGATOR 문서를 붙여넣습니다. 읽은 뒤 제 역할과 현재 프로젝트에 대해 필요한 질문을 하고, 상위 3개 도구 또는 MCP 서버를 추천해 주세요. 각각이 적합한 이유를 설명하고, 최우선 선택을 시도해볼 수 있는 한 가지 실행 가능한 다음 단계를 제안해 주세요.
- 제 역할: 소규모 스타트업의 프로덕트 매니저 (웹앱: 스케줄/알림)
- 기술 스택: React 프론트엔드, Node.js 백엔드, PostgreSQL
- 우선순위: 사용자 일정에 대한 문맥 기억 및 검색 개선"

AI 응답 예시:
1) 사전 확인 질문: 
   "단기(세션) 메모리와 장기(사용자 히스토리) 중 어느 것이 더 중요합니까? 데이터 규모는 대략 어느 정도인가요 (MB/GB)?"

2) 추천 상위 3개 도구:
   - 🛠️ **Memory-MCP**: 의미 기반 벡터 저장소 및 저지연 조회에 최적화되어 있어 React/Node 기반 앱에 적합합니다. (다음 단계: 개발 인스턴스를 띄우고 샘플 스케줄 로그를 적재해보세요.)
   - 🛠️ **Postgres-MCP 어댑터**: 기존 PostgreSQL을 그대로 활용해 일관성 있는 영속성을 보장합니다. (다음 단계: 소규모 사용자 기록 테이블을 색인화하고 검색 쿼리를 실행해 보세요.)
   - 🛠️ **FileSystem-MCP (청크 임베딩)**: 제로-비용 로컬 PoC로 개념을 빠르게 검증할 수 있습니다. (다음 단계: 최근 이벤트 100건으로 로컬 테스트 실행.)

3) 최우선 도구 설정 힌트:
   - Memory-MCP 연동을 위한 임베딩 모델 선택, 청크 사이즈, 유사도 임계값(cosine > 0.75) 등 즉시 실행 가능한 의사 설정을 함께 제안합니다.
```

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
├── LICENSE              # MIT License
├── README.md            # Global English Overview & Quick Start
├── README.ko.md         # 한국어 개요 및 사용 가이드
├── NAVIGATOR.md         # Global English AI Protocol
└── NAVIGATOR.ko.md      # 한국어 전용 AI 실행 프로토콜
```

---

## 🤝 기여하기 (Contributing)

더 좋은 스킬 허브나 직무별 추천 시나리오가 있다면 언제든지 Issue나 Pull Request를 남겨주세요!

## 📄 라이선스 (License)

이 프로젝트는 [MIT License](./LICENSE) 하에 자유롭게 사용, 수정 및 배포할 수 있습니다.
