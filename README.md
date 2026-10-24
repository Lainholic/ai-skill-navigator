# 🧭 AI Skill Navigator

> **"Feed this single file to any AI, and it will analyze your role and workspace to recommend the best Skills & MCP tools for your project."**  
> *"이 파일 하나를 AI에게 건네주면, 당신의 직무를 분석해 가장 필요한 스킬과 MCP 도구를 알아서 찾아 추천해 줍니다."*

[English](./README.md) | [한국어](./README.ko.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Lainholic/ai-skill-navigator/pulls)

---

## ⚡ 10-Second Quick Start

No complex setup or CLI installation required.

1. Copy the content of [`NAVIGATOR.md`](./NAVIGATOR.md) (or [`NAVIGATOR.ko.md`](./NAVIGATOR.ko.md) for Korean).
2. Paste it into your AI assistant (ChatGPT, Claude, Cursor, Antigravity, GitHub Copilot, Windsurf, etc.) and say:
   > 👉 **"Read this document and recommend the best tools/skills for my job and current project."**

---

## 💡 Why AI Skill Navigator?

Hundreds of MCP (Model Context Protocol) servers and AI skills are released every week. Yet most builders and non-technical founders struggle with a simple question:  
**"Which tool should I actually use for my specific problem right now?"**

- Traditional **Awesome lists** force humans to manually read through endless links.
- Static **rules files** (`.cursorrules`) are mostly limited to coding style guidelines.

**AI Skill Navigator** turns your AI agent into an **autonomous tool consultant**. Instead of you researching tools, **your AI proactively steps forward and asks: "Here are the top tools for your context — want me to rank or configure any of them for you?"**

---

## 🧭 Curated Hubs Explored by AI

The AI dynamically navigates the top trusted registries based on your workspace context:

* 🌐 **[Model Context Protocol Registry](https://github.com/modelcontextprotocol/servers)**: Anthropic official reference servers (Filesystem, Git, Memory, Postgres)
* 📦 **[Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)**: Community-driven catalog of battle-tested open-source MCP tools
* ⚡ **[PulseMCP](https://www.pulsemcp.com/) / [Glama](https://glama.ai/mcp/servers)**: Real-time rankings & one-click configuration specs
* 🇰🇷 **[SkillBook (스킬북)](https://www.getskillbook.com/)**: Specialized for Korean business workflows, planning, and copywriting

---

## 🧰 Starter Skills Pack for Agents

Beyond recommendations, we provide **battle-tested, zero-install skills** you can immediately copy into your agent directory:

* [**`adversarial-review`**](./skills/adversarial-review/): Forces the AI into an aggressive "Devil's Advocate / Red Team" persona to break self-confirmation bias. *(💡 Includes Pro Tip for cross-model verification using secondary API keys)*
* [**`verification-before-completion`**](./skills/verification-before-completion/): Strictly forbids the agent from claiming "done/fixed" without running commands and showing verifiable terminal output.
* [**`session-journal`**](./skills/session-journal/): Single-file (`DEV_JOURNAL.md`) context persistence across sessions without heavy database dependencies.

👉 See the [**`skills/` Directory Guide**](./skills/README.md) for usage and self-bias warnings.

---

## 📋 Repository Structure

```text
ai-skill-navigator/
├── LICENSE              # MIT License
├── README.md            # Global English Overview & Quick Start
├── README.ko.md         # 한국어 개요 및 사용 가이드
├── NAVIGATOR.md         # Global English AI Protocol
├── NAVIGATOR.ko.md      # 한국어 전용 AI 실행 프로토콜
└── skills/              # Zero-install Starter Skills Pack
    ├── README.md        # Global English Skills Guide
    ├── README.ko.md     # 한국어 스킬 팩 안내 및 주의사항
    ├── adversarial-review/
    ├── verification-before-completion/
    └── session-journal/
```

---

## 🔎 Sample Interaction / 실제 사용 예시

This project is intentionally zero-install: give the `NAVIGATOR.md` content to an AI and ask it to analyze your role and project. Below is a short, realistic sample session you can paste into any LLM to show users what to expect.

---

### English (copy-paste into your AI)

User: "I will paste the AI Skill Navigator doc now. After you read it, please ask any clarifying questions about my role and current project, then recommend the top 3 tools or MCP servers I should consider, explain why each fits, and suggest one next action I can take to try the top choice. My role: Product Manager at a small startup building a web app for scheduling and notifications. Tech stack: React frontend, Node.js backend, PostgreSQL. Priority: improve contextual memory and retrieval for user schedules."

AI (example reply):
1) Clarifying question: "Do you need ephemeral session memory (short-term) or long-term user history retrieval? How large are the datasets (MBs, GBs)?"

2) Top 3 recommended tools/servers:
- Memory-MCP (example server): Reason: optimized for semantic vector store + low-latency lookup; fits React/Node with mild infra requirements. Next action: provision a dev instance and load a small sample of schedule logs.
- Postgres-MCP adapter: Reason: leverages your existing Postgres for reliable persistence and transactional guarantees. Next action: try indexing a small user history table and run sample retrieval queries.
- FileSystem-MCP with chunked embeddings: Reason: easy zero-cost PoC using filesystem; good to validate concept before moving to hosted vector DB. Next action: run a local proof-of-concept with 100 recent events.

3) Short config hint for top choice (Memory-MCP): include embedding model choice, chunk size, and an initial relevance threshold (e.g., cosine > 0.75). Provide sample pseudo-config.

This sample demonstrates the expected shape of the AI’s output: clarifying questions, ranked recommendations, concise reasons, and an immediately actionable next step.

---

### 한국어 (NAVIGATOR.ko.md 붙여넣기 용 예시)

사용자: "이제 NAVIGATOR 문서를 붙여넣습니다. 읽은 뒤 제 역할과 현재 프로젝트에 대해 질문을 하고, 상위 3개 도구 또는 MCP 서버를 추천해 주세요. 각각이 적합한 이유를 설명하고, 최우선 선택을 시도해볼 수 있는 한 가지 실행 가능한 다음 단계를 제안해 주세요. 제 역할: 소규모 스타트업의 프로덕트 매니저(웹앱: 스케줄/알림). 기술 스택: React, Node.js, PostgreSQL. 우선���위: 사용자 일정에 대한 문맥 기억 및 검색 개선."

AI(예시 응답):
1) 질문: "단기(세션) 메모리와 장기(사용자 히스토리) 중 어느 것이 더 중요합니까? 데이터 규모는 대략 어느 정도인가요 (MB/GB)?"

2) 추천 상위 3개:
- Memory-MCP: 이유: 의미 기반 벡터 저장소 + 저지연 조회에 최적화되어 있어 React/Node 기반 앱에 적합. 다음 단계: 개발 인스턴스를 띄우고 샘플 스케줄 로그를 적재해보세요.
- Postgres-MCP 어댑터: 이유: 기존 PostgreSQL을 활용해 일관성 있는 영속성 보장. 다음 단계: 소규모 사용자 기록 테이블을 색인화하고 검색 쿼리를 실행해 보세요.
- FileSystem-MCP(청크 임베딩): 이유: 제로-설치 PoC로 비용 없이 개념 검증 가능. 다음 단계: 최근 이벤트 100건으로 로컬 PoC 실행.

3) 최우선 도구(Memory-MCP) 간단 설정 힌트: 임베딩 모델, 청크 사이즈, relevance threshold(cosine > 0.75) 등을 포함한 샘플 의사설정.

---

## 🤝 Contributing

Contributions are welcome! If you know of a great skill hub, new MCP registry, or workflow scenario, feel free to open an Issue or submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — free to use, modify, and distribute.
