# 🔬 AI Skill Navigator — Production Benchmark & Live Evaluation Report

> **Runtime Specification & Verification Record**  
> - **Platform**: Google Cloud Vertex AI  
> - **Model**: `gemini-3.8-flash`  
> - **Verification Date**: 2026-11-15  
> - **Coverage**: 100% Full Verification across all 45 Production Skills (KO & EN Parity)  
> - **Interactive Web Viewer**: [https://synapse-creative.com/skills](https://synapse-creative.com/skills)  

---

## Overview (검증 개요)

본 리포트는 가짜 더미 데이터나 메타 요약을 배제하고, Google Cloud Vertex AI `gemini-3.8-flash` 실기 런타임에서 45개 스킬 전수를 1:1로 직접 구동하여 얻은 **실제 인풋(Input Prompts)**, **직접 확인된 솔직한 한계점(Failure Modes)**, 그리고 **모델이 생성한 날것 그대로의 실전 산출물 원본(Raw Deliverable)**을 가감 없이 기록한 공식 벤치마크 백서입니다.

모바일 및 깃허브 웹 인터페이스의 가독성을 위해 각 스킬의 방대한 원문 산출물(순수 인라인 SVG, 완성형 C# 스크립트, 마크다운 룰북 등)은 **접이식(`<details>`) 블록**으로 수록되어 있어, 필요한 스킬만 즉시 펼쳐서 확인하실 수 있습니다.

---

## Table of Contents (목차)

### 00. Core Official Skills (Inspired by Anthropic)
- [소크라테스식 개념 튜터 가이드 / Socratic Conceptual Tutor Guide (`academy-guide`)](#academy-guide)
- [브랜드 보이스 가이드 및 문체 검수 / Brand Voice Compass & Editorial Audit (`brand-guidelines`)](#brand-guidelines)
- [캔버스 디자인 — 썸네일 와이어프레임 및 헤드카피 플래너 / Canvas Design — Thumbnail Wireframe and Copy Planner (`canvas-design`)](#canvas-design)
- [에이전트 임의 결정 및 가정 추적 감사 / Decision & Assumption Audit (`decision-assumption-audit`)](#decision-assumption-audit)
- [문서 공동 작성기 / Collaborative Drafting Partner (`doc-coauthoring`)](#doc-coauthoring)
- [사내 커뮤니케이션 작성기 / Internal Communications Formatter (`internal-comms`)](#internal-comms)
- [발표 슬라이드 기획기 및 스크립트 설계기 / Presentation Deck Architect & Script Generator (`pptx`)](#pptx)
- [AI 스킬 생성기 / Skill Creator (`skill-creator`)](#skill-creator)
- [테마 팩토리 — 비주얼 아이덴티티 및 5색 팔레트 생성기 / Theme Factory — Visual Identity and Palette Generator (`theme-factory`)](#theme-factory)

### 01. Daily Automation (Productivity and Cleanup)
- [SNS 캐러셀 및 카드뉴스 카피라이터 / Social Carousel Copywriter (`landing-carousel-copy`)](#landing-carousel-copy)
- [부동산 공간 콘셉트 카피라이터 / Real Estate Concept Copywriter (`real-estate-copywriter`)](#real-estate-copywriter)
- [UI 기획서 및 구현 결과물 대조 검수기 / UI Spec-to-Implementation Diff Inspector (`spec-diff-checker`)](#spec-diff-checker)
- [브라우저 탭 세션 정리기 / Browser Tab Session Organizer (`tab-session-organizer`)](#tab-session-organizer)
- [업무 할 일 및 미리알림 변환기 / Task & Reminder Parser (`task-reminder-parser`)](#task-reminder-parser)
- [유튜브 영상 메타데이터 패키저 / YouTube Video Metadata Packager (`video-metadata-packager`)](#video-metadata-packager)
- [유튜브 영상 자막 압축 요약 및 타임라인 추출기 / Video Transcript Digest and Actionable Timeline Extractor (`video-transcript-digest`)](#video-transcript-digest)
- [웹페이지 본문 정제기 / Web Article Content Cleaner (`web-article-cleaner`)](#web-article-cleaner)

### 02. Practical Utilities (Everyday Utilities)
- [로컬 멀티 AI 회의실 웹 애플리케이션 / Local Multi-AI Meeting Room Web Application (`ai-meeting-room`)](#ai-meeting-room)
- [비즈니스 이메일 서식 변환기 / Business Email Formatter (`business-email-formatter`)](#business-email-formatter)
- [수신 이메일 분류 및 3종 회신 초안 생성기 / Inbox Email Classifier & 3-Draft Response Specialist (`inbox-response-drafter`)](#inbox-response-drafter)
- [메신저 가독성 포맷터 (모바일 최적화 변환) / Messenger Markdown Formatter (Mobile Chat Optimizer) (`messenger-markdown-formatter`)](#messenger-markdown-formatter)
- [멀티채널 콘텐츠 변환기 / Multi-Channel Content Adapter (`multichannel-content-adapter`)](#multichannel-content-adapter)
- [45초 숏폼 영상 대본 생성기 / Short-Form Video Script Generator (`shortform-script-builder`)](#shortform-script-builder)
- [프롬프트 검수 체크리스트 / Prompt Quality Audit Checklist (`skill-validation-checklist`)](#skill-validation-checklist)
- [소셜 미디어 스레드 포매터 / Social Thread Formatter (`social-thread-formatter`)](#social-thread-formatter)
- [스레드 및 회의록 핵심 요약기 / Thread & Meeting Noise Reducer (`thread-meeting-summarizer`)](#thread-meeting-summarizer)

### 03. Game Dev and Worldbuilding (Narrative & Mechanics)
- [보드게임 룰북 및 컴포넌트 명세서 생성 / Board Game Rulebook & Component Architect (`boardgame-rule-spec`)](#boardgame-rule-spec)
- [TCG 카드 세트 및 시너지 덱 빌더 / TCG Card Set & Synergy Deck Builder (`card-deck-synergy`)](#card-deck-synergy)
- [서브컬처 캐릭터 보이스 및 대사 명세서 생성기 / Subculture Character Voice Architecture & In-Game Dialogue Generator (`character-lore-codex`)](#character-lore-codex)
- [게임 밸런스 및 가챠 확률 계산기 / Game Balance & Gacha Probability Calculator (`game-balance-calculator`)](#game-balance-calculator)
- [스팀 리뷰 분석 및 벤치마킹 추출기 / Steam Review Digest & Competitor Benchmark (`game-review-digest`)](#game-review-digest)
- [인터랙티브 픽션 및 텍스트 TRPG 엔진 / Interactive Fiction & Text TRPG Engine (`interactive-fiction-helper`)](#interactive-fiction-helper)
- [절차적 픽셀 아트 VFX 및 타격 연출 생성기 / Procedural Pixel FX & Action Choreographer (`pixelfx`)](#pixelfx)
- [RPG 메이커 퀘스트 이벤트 대사 및 분기 로직 포맷터 / RPG Maker Quest Event Dialogue & Branch Logic Formatter (`rpg-dialogue-formatter`)](#rpg-dialogue-formatter)
- [TRPG 즉흥 인카운터 및 기믹 시트 생성기 / TTRPG Impromptu Encounter & Gimmick Generator (`ttrpg-encounter-helper`)](#ttrpg-encounter-helper)

### 04. Creative and Visual Content (Design & Media)
- [2.5D 캐릭터 레이어 분해기 / 2.5D Layer Decomposer (`2.5d-layer-decomposer`)](#2.5d-layer-decomposer)
- [명화 배색 및 구도 큐레이터 / Classic Art Palette Curator (`classic-art-palette-curator`)](#classic-art-palette-curator)
- [시각 컨셉 무드보드 생성기 / Concept Moodboard Builder (`concept-moodboard-builder`)](#concept-moodboard-builder)
- [인라인 SVG 벡터 생성기 / SVG Vector Generator (`inline-svg-generator`)](#inline-svg-generator)
- [가사 화성 및 운율 가이드 / Lyric Melody Harmonizer (`lyric-melody-harmonizer`)](#lyric-melody-harmonizer)
- [바이럴 밈 포맷 카피 빌더 / Viral Meme Format Copy Builder (`meme-copy-builder`)](#meme-copy-builder)
- [타로 기반 서사 플롯 오라클 / Tarot Narrative Plot Oracle (`narrative-plot-oracle`)](#narrative-plot-oracle)
- [조향 구조 기반 공감각적 공간 묘사기 / Sensory Scene Describer (`sensory-scene-describer`)](#sensory-scene-describer)
- [영상 분해 네비게이터 / Video Breakdown Navigator (`video-breakdown-navigator`)](#video-breakdown-navigator)
- [비주얼 프롬프트 옵티마이저 / Visual Prompt Optimizer (`visual-prompt-optimizer`)](#visual-prompt-optimizer)

---

## 00. Core Official Skills (Inspired by Anthropic)

<a name="academy-guide"></a>
### 소크라테스식 개념 튜터 가이드 / Socratic Conceptual Tutor Guide (`academy-guide`)
- **Skill Spec**: [KO](skills/ko/00_core_official/academy-guide/SKILL.md) | [EN](skills/en/00_core_official/academy-guide/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 비대칭 암호화(공개키 및 개인키 메커니즘)의 동작 원리를 이해할 수 있도록 academy-guide 규칙에 맞춰 안내해 줘.
2. 쿼리 최적화를 위한 데이터베이스 인덱싱 개념을 차근차근 익힐 수 있도록 academy-guide 형식으로 지도해 줘.
3. 심층 신경망의 핵심 원리인 역전파(Backpropagation) 메커니즘을 이해할 수 있도록 academy-guide 형식으로 첫 질문을 던져줘.

**[English Prompts]**
1. Use academy-guide to help me understand how asymmetric encryption (public and private keys) works.
2. Use academy-guide to guide me through the concept of database indexing for query optimization.
3. Use academy-guide to help me grasp the core mechanism of backpropagation in deep neural networks.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 사용자가 모호한 답변을 남겼을 때 다음 턴에서 규칙을 깨고 전문 용어나 정답을 미리 설명해 버리는 경향이 발생할 수 있습니다.
- 사원수(quaternion)나 그래디언트 텐서 필드처럼 고도로 추상화된 다차원 수학 개념에서는 일상 비유의 논리적 정합성이 훼손될 수 있습니다.
- 단일 턴 생성 특성상 실제 다회차 대화 세션에서 단일 질문 원칙을 끝까지 엄격하게 유지하는지 완전히 검증하기 어렵습니다.

**[English Analysis]**
- May inadvertently reveal technical terms or partial answers in later turns if the user gives ambiguous responses.
- Can struggle to keep analogies logically tight for highly abstract, multi-dimensional mathematical concepts (e.g., quaternions, gradient tensor fields).
- Without session state enforcement, single-prompt benchmarks cannot verify whether the model correctly restricts subsequent turns to one question at a time.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (668 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Topic: Asymmetric Encryption (Public and Private Keys)

### Everyday Analogy
> Imagine a special padlock that is left wide open in a public town square for anyone to take and snap shut on their own mailbox, but only you hold the one unique physical key at home that can actually unlock it once closed.

### Checkpoint Question
If a friend across town wants to send you a secret message without anyone tampering with it on the road, which item from the town square do they use before putting the envelope in the post, and who is the only person capable of opening it?

### Next Step
- Reply with your thought or hypothesis.
- Type "Hint" if you need a narrower clue.
```

</details>

---

<a name="brand-guidelines"></a>
### 브랜드 보이스 가이드 및 문체 검수 / Brand Voice Compass & Editorial Audit (`brand-guidelines`)
- **Skill Spec**: [KO](skills/ko/00_core_official/brand-guidelines/SKILL.md) | [EN](skills/en/00_core_official/brand-guidelines/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 오픈소스 분산 트레이싱 엔진인 ApexTelemetry의 작성 샘플 2건을 분석하여 에디토리얼 보이스 가이드를 도출하고, 신규 버전 출시 공지 초안에 대해 라인별 검수 및 교정안을 작성해 주세요.

### 샘플 1: 아키텍처 개요
분산 트레이싱은 대규모 인그레스 상황에서 컬렉터가 스팬(span)을 유실할 때 무너집니다. 우리는 워커 노드가 다운되는 대신 공유 메모리 링에 로컬 버퍼링하도록 Apex를 설계했습니다. 벤치마크 결과 12,000 동시 RPS 환경에서 메모리 사용량이 40% 절감되었습니다. 서비스 지연 발생 시 Apex는 200ms 이내에 근본 원인 스팬 ID를 정확히 찾아 경보를 보냅니다. 마법은 없습니다. 락프리(lock-free) 데이터 구조의 결과일 뿐입니다.

### 샘플 2: 장애 회고 (Post-Mortem)
10월 14일, 순서가 맞지 않는 압축 작업으로 인해 쿼리 파이프라인이 6분간 잠겼습니다. 설정된 대로 서킷 브레이커가 작동하여 다운스트림 컨슈머로 장애가 전파되는 것을 차단했습니다. 우리는 WAL(write-ahead log) 재생 루프에서 버그를 식별하고 커밋 c84e2a로 패치했습니다. 우리는 완곡한 표현 뒤에 숨지 않습니다. 테스트 스위트가 이 엣지 케이스를 놓쳤으며, 재발 방지를 위해 18개의 회귀 테스트를 추가했습니다.

### 검수 대상 초안: 버전 3.2 출시 공지문
우리는 혁신적이고 판도를 뒤흔들 ApexTelemetry 3.2 버전을 공개하게 되어 매우 가슴이 벅찹니다! 이 놀라운 업데이트는 현대 엔지니어링 팀이 엔드투엔드 가시성 여정을 이전과는 비교할 수 없을 정도로 손쉽게 강화할 수 있도록 지원합니다. 최첨단 AI 기반 이상 징후 탐지 기술을 바탕으로 당사의 패러다임 전환형 플랫폼은 원격 측정 스택을 진정으로 수월하고 무한히 확장 가능하게 만들어 줍니다.
2. 시리즈 A 기후 테크 하드웨어 스타트업 창업자의 주간 업데이트 이메일 3건을 분석하여 에디토리얼 보이스 가이드를 도출해 주세요. 페르소나 아키타입('실용주의 운영자') 정립, 승인된 도메인 핵심 지표 4개 선정, 금지된 그린워싱 클리셰 5개 정리, 문장 호흡 및 종결 형식에 대한 엄격한 규칙 수립에 집중해 주세요.
3. 핀테크 API 브랜드 보이스 가이드(어조: 실용적 엔지니어, 제약사항: 문장당 최대 18단어, 마케팅 수식어 전면 배제, 능동태 필수, 검증용 cURL 명령어로 종결)를 기준으로 4단계 사용자 온보딩 이메일 시퀀스 초안을 검수해 주세요. 기준 미달 항목에 대한 통과/실패 체크리스트와 수정본을 표 형태로 작성해 주세요.

**[English Prompts]**
1. Analyze the following two writing samples from ApexTelemetry (an open-source distributed tracing engine), extract our editorial voice specification, and perform a line-by-line audit with rewrites on our draft release announcement.

### Sample 1: Architecture Overview
Distributed tracing breaks down when collectors drop spans under heavy ingress. We designed Apex to buffer locally in shared memory rings rather than crashing your worker nodes. Benchmarks show a 40% memory reduction across 12,000 concurrent RPS. If a service degrades, Apex alerts you with the exact root-cause span ID in under 200 milliseconds. No magic, just lock-free data structures.

### Sample 2: Incident Post-Mortem
On October 14, an out-of-order compaction run locked the query pipeline for 6 minutes. The fallback circuit breaker tripped as configured, preventing cascading failures across downstream consumers. We identified the bug in the write-ahead log replay loop and patched it in commit c84e2a. We do not hide behind euphemisms: our test suite missed this edge case, and we have added 18 regression tests to guarantee it will not recur.

### Draft to Audit: Version 3.2 Announcement
We are beyond thrilled to unveil our game-changing, revolutionary new ApexTelemetry 3.2 release! This incredible update seamlessly empowers modern engineering teams to supercharge their end-to-end observability journey like never before. With cutting-edge AI-assisted anomaly detection, our paradigm-shifting platform makes your telemetry stack genuinely effortless and infinitely scalable.
2. Extract an editorial voice specification from these three founder update emails for a Series A climate-tech hardware startup. Focus on isolating our persona archetype ('pragmatic operator'), identifying 4 approved domain metrics, compiling 5 banned greenwashing buzzwords, and setting strict rules on sentence cadence and closing conventions.
3. Audit this 4-step user onboarding email sequence against our established FinTech API voice guidelines (Tone: Pragmatic Engineer; Constraints: Max 18 words per sentence, zero marketing adjectives, active voice only, ending with direct verification curls). Provide a pass/fail table and rewritten copy for any failing sections.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 명시적인 도메인 사전이 주어지지 않으면 기술적 표준 용어(예: '무중단 전환')까지 과장된 마케팅 버즈워드로 오인하여 제거할 수 있습니다.
- 외장형 코드 실행 도구 없이는 플레시-킨케이드(Flesch-Kincaid) 가독성 지수 등 수학적 문체 통계 점수를 완벽히 계산하지 못합니다.
- 엄격한 문장 길이 제한을 기계적으로 적용하는 과정에서 문맥 연결어가 지나치게 삭제되어 로봇이 쓴 듯한 단편적 문장으로 귀결될 위험이 있습니다.

**[English Analysis]**
- May flag valid technical industry terms (e.g., 'zero-downtime cutover') as buzzwords unless explicitly provided with a positive domain dictionary.
- Cannot reliably calculate exact mathematical readability scores (such as Flesch-Kincaid grade level) without external deterministic tooling.
- Prone to over-correcting natural narrative transitions into disjointed, robotic bullet sentences when enforcing strict length caps.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (3,353 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Voice Specification
- **Persona Archetype**: Pragmatic Systems Engineer (Direct, transparent, metric-grounded, zero marketing puffery).
- **Preferred Vocabulary**:
  - Concrete technical primitives (`spans`, `worker nodes`, `shared memory rings`, `circuit breaker`, `WAL replay`).
  - Measurable thresholds (`RPS`, `memory reduction`, `milliseconds`, `regression tests`).
  - Plain declarative verbs (`benchmarks show`, `designed`, `patched`, `missed`, `prevents`).
- **Prohibited Clichés**:
  - Hype adjectives (`game-changing`, `revolutionary`, `incredible`, `cutting-edge`).
  - Marketing filler (`beyond thrilled`, `seamlessly empowers`, `supercharge`, `paradigm-shifting`).
  - Abstract abstractions (`observability journey`, `effortless`, `infinitely scalable`).
- **Sentence Cadence**:
  - Target length: 12–18 words per sentence. Maximum limit: 22 words.
  - Voice: 100% active voice with clear subjects. Avoid vague corporate passives.
  - Punctuation & Tone: Direct periods; no exclamation marks (`!`). Statements rely on verified benchmarks, not assertions of superiority.
- **Ending Conventions**: Close with concrete operational accountability (commit hashes, test counts, measurable benchmark targets).

### Content Audit Checklist
- [x] Persona alignment: Pragmatic Systems Engineer
- [ ] Vocabulary compliance: FAILED (4 prohibited marketing buzzwords detected)
- [ ] Sentence cadence adherence: FAILED (Run-on compound sentences averaging 28 words)
- [ ] Punctuation compliance: FAILED (Exclamation marks present)
- [ ] Quantitative grounding: FAILED (Zero metrics or technical primitives provided)

### Sentence-by-Sentence Audit & Remediation

| Original Sentence | Compliance Status | Identified Violations | Remediated Version |
| :--- | :--- | :--- | :--- |
| *"We are beyond thrilled to unveil our game-changing, revolutionary new ApexTelemetry 3.2 release!"* | **FAIL** | Exclamation mark, hyperbole (`beyond thrilled`, `game-changing`, `revolutionary`). No version details. | "ApexTelemetry 3.2 is now available with automated root-cause clustering and an updated storage engine." |
| *"This incredible update seamlessly empowers modern engineering teams to supercharge their end-to-end observability journey like never before."* | **FAIL** | 20-word buzzword density, empty verbs (`seamlessly empowers`, `supercharge`), cliché (`observability journey`). | "Version 3.2 reduces trace query latency during peak ingress and automates pipeline partition rebalancing." |
| *"With cutting-edge AI-assisted anomaly detection, our paradigm-shifting platform makes your telemetry stack genuinely effortless and infinitely scalable."* | **FAIL** | Vague buzzwords (`cutting-edge`, `paradigm-shifting`, `effortless`, `infinitely scalable`). Unsubstantiated claims. | "The new heuristic analyzer flags anomalous span latency variations across 50,000 active services without manual threshold tuning." |

### Approved Final Draft
> ApexTelemetry 3.2 is now available. This release introduces automated root-cause clustering and an updated lock-free storage engine. Benchmarks show a 32% reduction in trace query latency during peak ingress. The included heuristic analyzer flags span latency anomalies across 50,000 active services without requiring manual threshold adjustments. Full change details are documented in release tag v3.2.0.
```

</details>

---

<a name="canvas-design"></a>
### 캔버스 디자인 — 썸네일 와이어프레임 및 헤드카피 플래너 / Canvas Design — Thumbnail Wireframe and Copy Planner (`canvas-design`)
- **Skill Spec**: [KO](skills/ko/00_core_official/canvas-design/SKILL.md) | [EN](skills/en/00_core_official/canvas-design/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 'FlowSync'라는 자동화 AI 할 일 관리 앱 출시를 알리는 인스타그램 1:1 정사각형 썸네일 기획안과 와이어프레임을 제작해 주세요. 간편한 일정 관리를 강조하되, 메인 카피는 공백 포함 7자 이내로 엄격히 제한해 주세요.
2. 개인 클라우드 스토리지 구독료 절약에 관한 블로그 커버 카드 와이어프레임을 디자인해 주세요. 높은 대비의 핵심 오브젝트 레이아웃과 7자 이내 메인 카피를 적용해야 합니다.
3. 초보자를 위한 가상자산 리스크 관리 웨비나용 1:1 카드뉴스 와이어프레임을 작성하고, 7자 이내 메인 카피 A/B 테스트 안 3가지를 함께 제시해 주세요.

**[English Prompts]**
1. Create an Instagram square thumbnail blueprint and wireframe for a productivity app release announcing an automated AI task manager called 'FlowSync'. Highlight effortless scheduling, keeping the main headline strictly within 7 characters.
2. Design a blog cover card wireframe for an article about reducing personal cloud storage bills, featuring a high-contrast focal layout and a primary headline under 7 characters.
3. Generate a 1:1 social card wireframe for a webinar on beginner crypto risk management with 3 A/B test main headlines under 7 characters.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 서브 토큰 분할 및 공백 처리 방식 차이로 인해 공백 포함 7자 제한 규칙을 간혹 초과할 수 있습니다.
- ASCII 기반 텍스트 와이어프레임은 고정폭(Monospace) 글꼴이 아닌 가변폭 렌더링 환경에서 정렬이 어긋나 보일 수 있습니다.
- 텍스트 도식화에 불과하므로 실제 모바일 기기 화면에서의 그래픽 가독성, 명도 대비, 안전 영역 여백 등을 직접 검증할 수 없습니다.

**[English Analysis]**
- May occasionally miscalculate or exceed the strict 7-character limit due to sub-token splitting and multi-byte whitespace handling.
- ASCII/text-based wireframes can misalign visually when viewed in variable-width or non-monospace rendering environments.
- Cannot evaluate actual graphic legibility, color contrast ratios, or safe-area clipping on specific mobile device screens.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (896 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Thumbnail Blueprint: FlowSync AI Launch

| Element | Specification |
| :--- | :--- |
| Main Headline (<=7 chars) | Sync AI |
| Sub-Headline | Effortless schedule automation |
| Focal Object Position | Center (Floating 3D Glass Calendar Icon) |
| Margin / Negative Space | 45% Negative Space, 55% Content Core |

### Text Wireframe Layout
+---------------------------------------+
| [Top Margin: 15%]                     |
|       PRODUCTIVITY / NEW RELEASE      |
|             **Sync AI**               |
|       "Effortless schedule auto"      |
|                                       |
|       [FLOATING 3D APP ICON / PHONE]  |
|                                       |
| [Bottom Safe Zone: 20%]               |
+---------------------------------------+
- **Recommended Margins**: Top/Bottom 18%, Left/Right 15%
- **Focal Contrast**: Dark slate backdrop with high-glow neon blue UI accents
```

</details>

---

<a name="decision-assumption-audit"></a>
### 에이전트 임의 결정 및 가정 추적 감사 / Decision & Assumption Audit (`decision-assumption-audit`)
- **Skill Spec**: [KO](skills/ko/00_core_official/decision-assumption-audit/SKILL.md) | [EN](skills/en/00_core_official/decision-assumption-audit/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 잠깐만, 이거 왜 이렇게 했어? 결정사항 털어보고, `src/webhooks/stripe.ts`의 결제 게이트웨이 웹훅 핸들러 리팩터링 작업 중에 네가 임의로 내린 결정과 가정들을 전부 까봐.
2. 왜 그렇게 된 거야? 방금 푸시한 재시도 로직이랑 데이터베이스 커넥션 풀 설정에 대해 임의 결정 나열하고 검토해봐.
3. `.github/workflows/deploy-staging.yml`에 작성한 스테이징 배포 스크립트에 대해 임의 결정 까봐. 가정 뭐했어?

**[English Prompts]**
1. Hold on, why did you do this? Audit decisions, list assumptions, and show me everything you decided on your own while refactoring the payment gateway webhook handler in `src/webhooks/stripe.ts`.
2. Why is it like this? Check decisions and audit choices regarding the retry logic and database connection pool settings you just pushed.
3. Audit decisions for the staging deployment script you prepared in `.github/workflows/deploy-staging.yml`. What did you assume?

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- gemini-2.5-flash 런타임의 다중 턴 컨텍스트 요약 과정에서 이전 턴의 세부 도구 호출 로그가 유실되어 출처 분류가 '[출처 미확인]'으로 퇴행할 수 있습니다.
- 과거 대화 로그를 엄격히 대조하도록 강제하지 않으면 작업 의도를 '속도 최적화' 등으로 사후 합리화하여 추측하려는 경향이 발생할 수 있습니다.
- 현재 활성화된 파일 검사 범위 외부의 커밋되지 않은 파일 시스템 상태나 미열람 설정 파일은 독립적으로 유효성을 검증할 수 없습니다.

**[English Analysis]**
- Under multi-turn context compaction on gemini-2.5-flash, the model may lose granular tool invocation logs from earlier turns, degrading provenance classification to '[Unverified Provenance]'.
- May occasionally attempt post-hoc rationalization by guessing user optimization intent unless strictly prompted to inspect historical conversation logs.
- Cannot independently validate uncommitted filesystem states or unread configuration files outside the immediate active inspection window.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (5,965 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### [Decision & Assumption Audit] Agent Introspection & Assumption Report

#### 1. Critical & Action Items
- **[D-01] [Impact: High]** Signature verification failure bypass in non-production environments / Skips cryptographically verifying Stripe signatures if `NODE_ENV !== 'production'`, creating spoofing vulnerability in staging environments / User approval and explicit environment gate definition required
- **[D-02] [Impact: High]** Unbounded in-memory event deduplication cache / Uses global `Set<string>` without TTL or size eviction, creating node process memory exhaustion risk under high traffic / User decision required on whether to integrate Redis deduplication or retain existing transactional DB idempotency table

#### 2. Audit Scope & Evidence Base
- **Target Task / Conversation Range**: Refactoring of Stripe webhook intake handler in `src/webhooks/stripe.ts` across session turns #14 to #22.
- **Examined Artifacts / Logs**: `src/webhooks/stripe.ts` (L1-L148), `git diff HEAD~1` commit log, CLI execution logs for `npm test -- stripe.test.ts` (Run #3, Exit Code 0).
- **7-Axis Inspection State**:
  - Requirements / Definition of Done: Verified
  - Authority / Delegation / Network: Verified
  - Data / Security: Verified
  - Environment / Dependencies: Verified
  - Verification / Green Check Blindspots: Verified
  - Operations / Recovery: Verified
  - Residue / Cost: Verified
- **Unverified Scope / Evidence Gaps**: Upstream Nginx reverse proxy buffering configuration could not be checked due to lack of filesystem access to `/etc/nginx/`.

#### 3. Decisions & Assumptions Matrix
| ID | Domain | Content | Provenance (5-Tier) | Execution State | Verified Claim Boundary | Concrete Evidence (File/Log) | Impact | Sign-off Required |
|---|---|---|---|---|---|---|---|---|
| D-01 | Omissions & Skipped Cases | Bypassed cryptographic signature check when `process.env.NODE_ENV !== 'production'` | Agent Pure Discretion | Execution & Artifact Verified | Proves conditional bypass is present in modified file; does not prove staging environment variables | `src/webhooks/stripe.ts#L42-L48` | High | Yes |
| D-02 | Path & Storage | Replaced Postgres idempotency check with in-memory `Set<string>` | Agent Pure Discretion | Execution & Artifact Verified | Proves in-memory set stores event IDs; does not prove memory growth rate in runtime | `src/webhooks/stripe.ts#L18`, `L61-L64` | High | Yes |
| D-03 | Defaults & Flags | Configured Stripe SDK API version override to `2023-10-16` | Tool/Library Default | Invocation Call Verified | Proves string passed to `new Stripe(apiKey, { apiVersion })`; does not prove upstream account default | `src/webhooks/stripe.ts#L12` | Medium | Yes |
| D-04 | Implicit Assumptions | Assumed webhook raw payload arrives as unparsed `Buffer` at `req.body` | Inherited from Code/Config | Static Inspection Verified | Proves handler accesses `req.body.toString()`; does not prove Express body-parser middleware configuration | `src/webhooks/stripe.ts#L35` | Medium | No |
| D-05 | Omissions & Skipped Cases | Omitted webhook processing timeout handling (returns 200 OK after asynchronous work) | Unverified Provenance | Static Inspection Verified | Proves absence of timeout wrapper within lines 50-120; does not prove Express route-level timeout absence | `src/webhooks/stripe.ts#L50-L120` | Medium | Yes |

#### 4. Reasoning & Alternatives by ID
- **[D-01] Historical Rationale**: Historical reference to bypassing signature checks for developer convenience is unrecorded in session logs.
  - **Audit-Time Rule Match**: Conflicts with repository security policy requiring cryptographically authenticated webhooks across all non-local deployed tiers (`SECURITY.md#L88`; not historical proof of intent).
  - **Historical Alternatives**: None recorded in session logs.
  - **Audit-Time Alternative**: Enforce signature checks unconditionally and provide local mock webhook signing keys via environment variables for integration tests.
- **[D-02] Historical Rationale**: Whether the intent was to reduce database query latency is unrecorded in logs.
  - **Historical Alternatives**: None recorded in session logs.
  - **Audit-Time Alternative**: Revert to the transactional database table `processed_webhook_events` with `ON CONFLICT DO NOTHING`, or connect to the existing Redis cluster using an atomic `SET NX EX` pattern.
- **[D-03] Historical Rationale**: Historical rationale for pinning API version `2023-10-16` is unrecorded in logs.
  - **Historical Alternatives**: None recorded in session logs.
  - **Audit-Time Alternative**: Remove hardcoded API version override to allow Stripe library to use package default, or align with team-wide Stripe account setting.
- **[D-04] Historical Rationale**: Inherited from previous implementation signature in `src/webhooks/legacy_handler.ts#L14`.
  - **Historical Alternatives**: None recorded in session logs.
  - **Audit-Time Alternative**: Validate middleware chain in `src/app.ts` to confirm `express.raw()` is mounted for route `/api/webhooks/stripe`.
- **[D-05] Historical Rationale**: Rationale unrecorded in logs (Strict ban on post-hoc rationalization).
  - **Historical Alternatives**: None recorded in session logs.
  - **Audit-Time Alternative**: Acknowledge Stripe webhook immediately with HTTP 200 after queuing job into worker pipeline (e.g., BullMQ), rather than processing inline.

#### 5. User Decisions Required
- **[Regarding D-01]**: Confirm whether to remove the `NODE_ENV !== 'production'` bypass and require test signing secrets in staging.
- **[Regarding D-02]**: Select target idempotency store: restore transactional PostgreSQL deduplication table or integrate centralized Redis cache with TTL.
- **[Regarding D-03]**: Approve pinning Stripe API version to `2023-10-16` or inherit account default.
- **[Regarding D-05]**: Decide whether webhook handlers must decouple ingestion from processing via background queue before deployment resumes.
```

</details>

---

<a name="doc-coauthoring"></a>
### 문서 공동 작성기 / Collaborative Drafting Partner (`doc-coauthoring`)
- **Skill Spec**: [KO](skills/ko/00_core_official/doc-coauthoring/SKILL.md) | [EN](skills/en/00_core_official/doc-coauthoring/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 고성능 결제 처리 파이프라인을 REST/JSON에서 gRPC/Protocol Buffers로 마이그레이션하기 위한 아키텍처 결정 레코드(ADR-0042)를 공동 작성하려고 합니다.
- 핵심 키워드: latency-reduction, protocol-buffers, backward-compatibility
- 대상 독자 및 의도: 엄격한 페이로드 검증, 10ms 미만의 직렬화 오버헤드, 18개 분산 마이크로서비스 간 무중단 스키마 발전을 구현해야 하는 시니어 백엔드 및 인프라 엔지니어.
- 확정된 뼈대:
  1. 맥락 및 문제 정의 (Context & Problem Statement)
  2. 결정 및 프로토콜 버퍼 계약 전략 (Decision & Protocol Buffer Contract Strategy)
  3. 성능 벤치마크 및 네트워크 지연 목표 (Performance Benchmarks & Network Latency Targets)
  4. 마이그레이션 단계 및 폐기 경로 (Migration Phases & Deprecation Path)
  5. 부정적 영향 및 완화 대책 (Negative Consequences and Mitigation Strategies)

doc-coauthoring 템플릿에 맞추어 '1. 맥락 및 문제 정의(Context & Problem Statement)' 섹션 초안을 작성해주세요.
2. 42분간 발생한 멀티 리전 결제 데이터베이스 장애에 대한 경영진 보고용 포스트모텀 사고 요약서를 공동 작성해야 합니다.
- 핵심 키워드: connection-pool-exhaustion, read-replica-failover, cascading-retry-storm
- 대상 독자: 비즈니스 손실 지표 및 근본적 시스템 개선 일정을 파악해야 하는 엔지니어링 디렉터 및 C레벨 임원진.
- 확정된 목차:
  1. 사고 개요 및 경영진 요약
  2. 근본 원인 분석(RCA) 및 장애 전파 경로
  3. 즉각적인 조치 및 복구 작업
  4. 영구적 아키텍처 보강 계획
1번 '사고 개요 및 경영진 요약' 섹션의 초안을 작성해주세요.
3. OpenTelemetry와 Jaeger를 활용한 사내 분산 트레이싱 표준 가이드 문서를 공동 작성하고자 합니다. 1단계 프로세스에 따라 범위 확인, 핵심 키워드 3개 수집, 초기 목차 뼈대를 제안해주세요.

**[English Prompts]**
1. Let's co-author an Architecture Decision Record (ADR-0042) for migrating our high-throughput payment processing pipeline from REST/JSON to gRPC/Protocol Buffers.
- Core Keywords: latency-reduction, protocol-buffers, backward-compatibility
- Target Audience Intent: Senior backend and infrastructure engineers needing strict payload validation, sub-10ms serialization overhead, and seamless schema evolution across 18 distributed microservices.
- Approved Skeleton:
  1. Context & Problem Statement
  2. Decision & Protocol Buffer Contract Strategy
  3. Performance Benchmarks & Network Latency Targets
  4. Migration Phases & Deprecation Path
  5. Negative Consequences and Mitigation Strategies

Draft Section 1: Context & Problem Statement strictly adhering to the doc-coauthoring template.
2. We need to co-write an executive post-mortem incident summary for a 42-minute multi-region checkout database outage.
- Core Keywords: connection-pool-exhaustion, read-replica-failover, cascading-retry-storm
- Target Audience: Engineering directors and C-suite stakeholders requiring business impact metrics and systemic remediation timelines.
- Approved Outline:
  1. Incident Overview & Executive Summary
  2. Root Cause Analysis (RCA) & Failure Sequence
  3. Immediate Triage & Recovery Actions
  4. Permanent Architectural Hardening
Draft Section 1: Incident Overview & Executive Summary.
3. I want to kick off a collaborative draft for a technical onboarding guide on our team's Distributed Tracing standard using OpenTelemetry and Jaeger. Let's start from Stage 1: confirm our scope, collect the 3 target keywords, and propose our initial structural skeleton.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 진도 제어 이탈: 사용자가 한 번에 방대한 피드백이나 여러 섹션 정보를 제공하면 한 문단/한 섹션씩 단계별로 진행하는 규칙을 깨고 전체 문서를 일괄 출력하려는 경향이 있습니다.
- 장기 대화 맥락 유지 한계: 8회 이상의 다회차 대화가 이어질 경우, 1단계에서 정의했던 세부 기술 용어나 제약 조건이 후반부 섹션 작성 시 희석되거나 미세하게 왜곡될 수 있습니다.
- 피드백 자가 해결 오류: 검토용 선택지 질문(Feedback Prompts)을 생성할 때, 사용자의 선택을 기다리지 않고 모델 임의로 특정 방향을 단정하여 초안 본문에 성급히 반영하는 현상이 발생할 수 있습니다.

**[English Analysis]**
- Pacing enforcement drift: When given detailed multi-section user inputs, the model often attempts to draft multiple sections at once rather than strictly enforcing single-paragraph/single-section pacing.
- Multi-turn context degradation: Over extended ping-pong iterations (8+ turns), early architectural constraints and glossary terms from Section 1 may be subtly altered or forgotten in subsequent sections unless explicitly refreshed in prompt state.
- Premature feedback self-resolution: When generating quick feedback prompts, the runtime occasionally predicts the user's preferred choice and incorporates it directly into the draft instead of waiting for explicit direction.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,483 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Section: Context & Problem Statement
### Working Draft
Our core payment processing mesh currently orchestrates transactions across 18 distributed microservices using synchronous REST over HTTP/1.1 with JSON serialization. During peak traffic events exceeding 28,000 requests per second, this architecture exhibits severe performance degradation: p99 latency escalates from 14ms to 182ms, with CPU profiling confirming that up to 34% of service compute cycles are consumed solely by JSON serialization and textual schema parsing. Furthermore, implicit JSON contracts and loose schema enforcement have introduced breaking runtime regressions during independent service deployments, while lack of multiplexing saturates TCP connection pools across edge gateways. To sustain projected international volume increases without exponential infrastructure cost, we must establish a transport and serialization layer that guarantees deterministic binary serialization, enforces compile-time type safety across service boundaries, and maintains strict backward compatibility for all inflight schema migrations.

### Quick Feedback Prompts
1. Would you like to explicitly cite the exact edge gateway connection pool exhaustion metrics (e.g., Envoy socket saturation thresholds), or keep the focus on CPU serialization overhead?
2. Should the tone remain strictly empirical and quantitative, or lean more heavily into operational risks and developer friction caused by runtime contract breaks?
```

</details>

---

<a name="internal-comms"></a>
### 사내 커뮤니케이션 작성기 / Internal Communications Formatter (`internal-comms`)
- **Skill Spec**: [KO](skills/ko/00_core_official/internal-comms/SKILL.md) | [EN](skills/en/00_core_official/internal-comms/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 다음 원문 메모를 임원 및 유관 부서 공유용 크로스 펑셔널 공지문으로 변환해 주세요.

- 핵심 업무 목적: 3분기 ERP v2.4 마이그레이션 컷오버(이관) 코드 동결 안내 및 필수 사전 승인서 제출 요청.
- 수신 대상: 타 부서 협업 대상 (엔지니어링 리드, 재무운영팀, 프로덕트 매니저).
- 의도한 톤앤매너: 단호함 및 책임 명시 (Direct and Accountable).
- 원문 메모: "다들 안녕하세요, 다음 주 금요일 ERP v2.4 이관을 위해 DB를 락다운합니다. 수요일 오후 6시(EST) 이후로는 스키마 변경 배포가 전면 금지됩니다. 재무팀은 기초 잔액 오류를 막기 위해 목요일 정오(EST)까지 모든 배치 대사 작업을 마쳐야 합니다. 그리고 각 파트 리드분들은 마감 전까지 #erp-cutover-war-room 채널에 데이터 검증 확인서를 제출해 주세요. 미제출 모듈은 이번 릴리즈 패키지에서 롤백 처리됩니다. 월요일 아침에 외부 감사 일정이 있어 절대 일정을 미룰 수 없습니다."
2. 고객지원팀에서 작성한 거친 불만 사항을 정중한 부서 간 협조 요청문으로 변환해 주세요. 수신자는 코어 백엔드 팀이며, 피크 시간대 결제 웹훅 누락 현상에 대한 원인 분석 및 금요일 15:00(PST)까지의 영구 패치 일정 회신을 요청하는 내용입니다.
3. 보안운영팀(SecOps) 명의의 전사 보안 공지문을 작성해 주세요. 프로덕션 환경 접근을 위한 FIDO2 보안키 등록 의무화, 정책 준수 기한(10월 31일 17:00 UTC), 보안키 분실 및 출장자용 예외 조치 가이드를 포함해야 합니다.

**[English Prompts]**
1. Format the following rough update into an executive-ready cross-team announcement.

- Core Business Objective: Q3 ERP v2.4 migration cutover freeze window announcement and mandatory pre-migration sign-off submissions.
- Recipient Group: Cross-team (Engineering Leads, Finance Operations, Product Managers).
- Intended Tone: Direct and accountable.
- Raw Source Notes: "Hey everyone, we're locking down the database for the ERP v2.4 cutover next Friday. Nobody can deploy schema migrations after Wednesday 6 PM EST. Finance needs to clear all pending batch reconciliations by Thursday noon EST so we don't skew opening balances. Also, all leads have to upload their verification sign-off sheet into the #erp-cutover-war-room Slack channel before the final cutoff, or your module gets rolled back from the release package. We can't slip this schedule because external auditors are on-site Monday morning."
2. Format this complaint from Customer Support into a diplomatic cross-functional request to the Core Backend team regarding recurring billing webhook dropouts during peak checkout hours, requesting root-cause investigation and an ETA for a permanent patch by Friday 3:00 PM PST.
3. Draft an all-hands internal reminder from SecOps regarding mandatory FIDO2 hardware key registration for production access, emphasizing the policy compliance deadline of October 31st at 17:00 UTC and clear remediation steps for employees traveling without keys.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 조직 구조 및 담당자 매핑 한계: 원문에 모호한 별칭이나 슬랙 핸들(예: '김 대리네 파트', '운영팀')만 주어질 경우, 명확한 맥락 정보 없이 실제 직책이나 담당 역할을 완벽히 매핑하기 어렵습니다.
- 캘린더 및 시차 검증 불가: 지정된 마감 기한이 국가별 공휴일, 다국적 팀의 업무 시간대, 또는 사내 변경 동결 기간과 충돌하는지 여부를 능동적으로 교차 검증할 수 없습니다.
- 과도한 톤 정제 위험: 높은 긴급성이나 심각한 장애 에스컬레이션 상황을 규격화된 비즈니스 템플릿으로 변환하는 과정에서 사안의 본질적인 위급성이 지나치게 희석될 위험이 있습니다.

**[English Analysis]**
- Organizational Ambiguity: If the user provides informal nicknames or vague team handles (e.g., 'Sam's crew', 'ops guys'), the model cannot accurately map formal corporate roles without explicit guidance.
- Calendar & Timezone Blindness: The model cannot cross-reference external corporate holiday calendars, regional working hours, or active incident freezes when validating feasibility of requested deadlines.
- Risk of Over-Sterilization: Aggressively converting high-urgency or escalation-sensitive language into standardized neutral formats may unintentionally diminish the genuine severity of critical incidents.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (739 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
**Subject**: [ACTION REQUIRED] Q3 ERP v2.4 Cutover Freeze and Sign-Off Submissions - Enterprise Systems

**Context**: Enterprise Systems is initiating the scheduled database and deployment freeze for the Q3 ERP v2.4 migration to ensure data integrity prior to external audit arrival. Compliance with module cutoffs and verification sign-offs is mandatory to prevent release exclusions.

**Action Items**:
- Freeze all database schema deployments and release merges | Owner: Engineering Leads
- Complete and verify all outstanding batch financial reconciliations | Owner: Finance Operations
- Submit signed module verification sheets to #erp-cutover-war-room | Owner: Department Leads & Product Managers

**Deadline**: 2024-10-24, 12:00 EST
```

</details>

---

<a name="pptx"></a>
### 발표 슬라이드 기획기 및 스크립트 설계기 / Presentation Deck Architect & Script Generator (`pptx`)
- **Skill Spec**: [KO](skills/ko/00_core_official/pptx/SKILL.md) | [EN](skills/en/00_core_official/pptx/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 1,200만 달러 규모의 시리즈 A 투자를 유치하려는 엔터프라이즈 AI 관측성 및 비용 거버넌스 플랫폼 'NexusPulse'의 5장짜리 경영진 대상 피치덱을 기획해 주세요. 대상 청중은 탑티어 벤처캐피털 파트너들입니다. 각 슬라이드마다 4개 필수 구성요소 규격(슬라이드 번호/주제, 핵심 헤드라인, 3개 이하의 본문 불릿, 시각 자료 기획, 구어체 발표 스크립트)을 엄격히 준수해 작성해 주세요.
2. 사내 B2B 영업 지원 도구의 제품 출시 메모를 부서장 대상의 4장짜리 킥오프 프레젠테이션 덱과 발표 대본으로 변환해 주세요.
3. 고객 유지율 지표, 이탈 원인 분석, 확장 전략을 입증하는 고객 성공(Customer Success) 팀의 6장짜리 분기별 비즈니스 리뷰(QBR) 덱을 구성해 주세요.

**[English Prompts]**
1. Design a complete 5-slide executive pitch deck for 'NexusPulse', an enterprise AI observability and cost-governance platform seeking a $12M Series A funding round. Target audience: Tier-1 venture capital partners. Follow the four-field standard format strictly for each slide (Slide Number/Topic Title, Core Headline, Slide Body with max 3 bullets, Visual Concept, and Speaker Script).
2. Convert this product launch memo for an internal B2B sales enablement tool into a 4-slide kickoff presentation deck with talking notes for department heads.
3. Outline a 6-slide quarterly business review (QBR) deck for a customer success team demonstrating retention metrics, churn root-cause analysis, and expansion strategy.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 네이티브 프레젠테이션 바이너리 파일(.pptx 또는 Google Slides API 페이로드)을 직접 생성하지 않으므로 사용자가 마크다운 요소를 슬라이드 제작 소프트웨어에 직접 복사해야 합니다.
- 실시간 그래픽 렌더링 및 공간 배치 검증 기능이 없어 제안된 시각 자료 기획이 실제 슬라이드 화면 비율이나 시각적 위계 한계를 초과할 수 있습니다.
- 사용자가 명시적인 발화 속도나 시간 제약을 보정해주지 않으면 슬라이드당 정확한 발화 시간(예: 슬라이드당 정확히 45초)에 맞춰 스크립트 분량을 동적으로 제어하기 어렵습니다.

**[English Analysis]**
- Does not output native presentation binary files (.pptx or Google Slides API payloads), requiring users to manually copy markdown elements into their slide authoring software.
- Lacks real-time graphical rendering and spatial validation, which can result in suggested visual concepts that exceed real-world slide aspect ratios or visual hierarchy constraints.
- Cannot dynamically adjust spoken word count to strictly enforce precise vocal timing (e.g., exactly 45 seconds per slide) without explicit pacing and speech-rate calibration from the user.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (6,898 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Slide 1: Problem & Industry Shift
- **Core Headline**: Enterprise generative AI spending has surged 400%, but 78% of engineering teams are flying blind on unit economics and model drift.
- **Slide Body**:
  - Uncontrolled API consumption and silent model degradation cause catastrophic cloud budget overruns.
  - Engineering leaders lack per-query attribution across hybrid LLM clusters.
  - Legacy observability tools (Datadog, Dynatrace) detect latency anomalies but miss token-level cost attribution and semantic hallucination risks.
- **Visual Concept**: Split layout: Left side displays a chaotic tangled server graph with red cost spikes; right side presents three callout metric cards highlighting key friction points (400% Spend Surge, 78% Visibility Deficit, $2.4M Avg Annual Waste).
- **Speaker Script**: "Good morning, partners. Over the past eighteen months, Fortune 500 enterprises rushed generative AI into production. But here is the silent crisis: CFOs are facing massive cloud invoices while VPs of Engineering cannot answer a fundamental question: 'Which feature, customer tier, or model invocation generated that $40,000 overnight spike?' Traditional APM tools monitor host metrics and network latency; they are completely blind to token dynamics, semantic degradation, and vector query failures. This $18B enterprise visibility gap is what NexusPulse solves."

### Slide 2: The Solution & Architecture
- **Core Headline**: NexusPulse delivers granular, token-level observability and automated fiscal governance through zero-latency eBPF telemetry.
- **Slide Body**:
  - Instant integration via a lightweight eBPF sidecar agent with zero pipeline code modifications.
  - Real-time semantic validation engine flagging hallucinations and prompt leakage at millisecond scale.
  - Autonomous policy enforcement that dynamically routes queries between frontier and open-weight models to cut costs.
- **Visual Concept**: Architectural flow diagram: Enterprise application layer on top, routing through the 'NexusPulse Governance Mesh' in the center, and splitting down into public LLMs (OpenAI/Anthropic) and self-hosted models (Llama/Mistral) with green cost-reduction tags.
- **Speaker Script**: "NexusPulse is an enterprise-grade AI observability mesh. Instead of forcing developers to rewrite complex orchestration pipelines, our zero-overhead eBPF telemetry drops directly into Kubernetes clusters in under ten minutes. Once deployed, NexusPulse parses every token, prompt, and vector search in real time. Our governance engine doesn't just log anomalies—it autonomously routes non-critical traffic from costly proprietary frontier models to optimized open-weight alternatives, instantly dropping inference overhead by 42% on day one without degrading answer accuracy."

### Slide 3: Market Opportunity & Expansion
- **Core Headline**: Capturing the $22B AI infrastructure stack by becoming the mission-critical telemetry standard for enterprise software.
- **Slide Body**:
  - Total Addressable Market (TAM) expanding from $6.2B in 2024 to $22.4B by 2028 at a 38% CAGR.
  - Immediate beachhead: Series B through public tech companies running production workloads with >$50k/month LLM bills.
  - High barrier-to-entry telemetry data moat creating defensible multi-product expansion into enterprise compliance and safety.
- **Visual Concept**: Concentric circle TAM/SAM/SOM diagram: Outer ring ($22.4B Global Enterprise AI Ops), Middle ring ($7.1B Cloud-Native LLM Governance), Core bullseye ($1.8B High-Spend Tech Beachhead).
- **Speaker Script**: "The cloud transition gave birth to Datadog, Snowflake, and Palo Alto Networks. As software architectures shift fundamentally from deterministic compute to probabilistic AI models, an entirely new infrastructure layer must be established. Our addressable market is riding a 38% compound annual growth wave, projected to reach $22B within four years. We are capturing our wedge today by securing cloud-native mid-market enterprises already bleeding seven-figure annual API bills, establishing the core telemetry moat before expanding across traditional Global 2000 enterprises."

### Slide 4: Traction & Unit Economics
- **Core Headline**: $2.8M ARR achieved in 11 months with 148% net revenue retention and top-decile sales efficiency.
- **Slide Body**:
  - Annual Recurring Revenue scaled from $250k to $2.8M across 42 enterprise accounts.
  - 148% Net Revenue Retention (NRR) driven by natural token consumption expansion.
  - 8.2x LTV-to-CAC ratio with a capital-efficient 4.5-month customer acquisition payback window.
- **Visual Concept**: Dual-chart panel: Left side features a monthly ARR growth bar chart showing steep MoM acceleration; right side displays a clean cohort retention heat map highlighting expansion across enterprise tiers.
- **Speaker Script**: "Product-market fit is unequivocally validated. Over the past eleven months, we grew ARR from $250k to $2.8M, purely driven by technical founder-led sales and word-of-mouth in enterprise engineering circles. Because our billing model aligns directly with active observability volume, our Net Revenue Retention sits at 148%. When our customers' AI usage expands, our platform revenue scales alongside them automatically. Our customer acquisition cost pays back in under five months, delivering an exceptional 8.2x LTV-to-CAC ratio."

### Slide 5: The Series A Ask & Growth Roadmap
- **Core Headline**: Raising $12M to accelerate enterprise sales distribution and deepen proprietary edge-governance R&D.
- **Slide Body**:
  - 55% Allocated to Go-to-Market: Tripling dedicated enterprise quota-carrying account executives and forward-deployed engineers.
  - 30% Allocated to R&D: Expanding autonomous guardrail routing and proprietary hardware-accelerated telemetry.
  - 15% Allocated to Regulatory & Compliance: Achieving FedRAMP and HIPAA compliance certifications for financial services and healthcare expansion.
- **Visual Concept**: Horizontal milestone roadmap spanning Q1 2025 to Q4 2026, paired with a simple 3-part capital allocation donut chart showing GTM (55%), R&D (30%), and Compliance/Ops (15%). Target milestone: $10M ARR.
- **Speaker Script**: "We are raising a $12M Series A to transition from inbound product velocity to an aggressive global enterprise go-to-market engine. Fifty-five percent of this round will fund our enterprise sales expansion across North America and Europe, supported by forward-deployed engineers to shorten enterprise onboarding. Thirty percent will scale our core systems engineering talent to cement our patents in eBPF LLM telemetry, while the remainder secures government and healthcare compliance certifications. With this capital, NexusPulse will achieve $10M ARR within eighteen months and solidify its position as the de facto operating standard for enterprise AI. We welcome you to lead this journey with us."
```

</details>

---

<a name="skill-creator"></a>
### AI 스킬 생성기 / Skill Creator (`skill-creator`)
- **Skill Spec**: [KO](skills/ko/00_core_official/skill-creator/SKILL.md) | [EN](skills/en/00_core_official/skill-creator/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 인터뷰 질문을 생략하고 원샷 모드로 실무 표준 SKILL.md 지침 문서를 즉시 작성해줘.

도구 목적: SRE(사이트 신뢰성 엔지니어)를 위한 장애 사후 분석(Postmortem) 보고서 작성기.
대상 사용자: 온콜 SRE, 인시던트 커맨더, 플랫폼 엔지니어링 리드.
입력 데이터: PagerDuty 알람 로그, Slack 장애 대응 채널 대화 덤프, Datadog 이상 지표 타임라인.
요구 출력 포맷: 경영진 요약, 장애 영향도(지속 시간, MTTR, 영향 엔드포인트, SLA 위반 여부), UTC 타임라인 표, 5 Whys 기반 근본 원인 분석, 조치 과제(Action Items) 표(Jira 이슈 유형, P0-P2 우선순위, 담당자, 검증 기준)를 포함하는 무비난(Blameless) 포스트모텀 문서.
2. 고객지원팀을 위해 난잡한 B2B Zendesk 티켓을 구조화된 Jira 버그 리포트로 변환하는 내부용 스킬을 만들고 싶습니다. 1단계 인터뷰 질문을 제시해 주세요.
3. 기업 법무팀 패럴리걸을 대상으로 비밀유지계약서(NDA)의 위험 조항을 스크리닝하는 스킬 지침을 설계해줘. 출력 서식은 엄격한 JSON 스키마를 준수하도록 고정해줘.

**[English Prompts]**
1. Skip intake questions and execute one-shot generation of a production-grade SKILL.md.

Tool Intent: An incident response postmortem writer for Site Reliability Engineers (SREs).
Target Audience: On-call SREs, Incident Commanders, and Platform Engineering leads.
Input Material: PagerDuty alert alert logs, Slack war-room channel text dumps, and Datadog anomaly timelines.
Expected Output: Standardized Blameless Postmortem document with Executive Summary, Impact Radius (duration, MTTR, affected endpoints, SLA breaches), Timeline table (UTC), Root Cause Analysis (5 Whys framework), and Action Items table (Jira issue type, priority P0-P2, owner, verification criteria).
2. I want to build an internal skill for our customer support team that converts messy incoming B2B Zendesk tickets into structured Jira bug reports. Please provide the Step 1 Intake Questionnaire.
3. Draft a skill specification for a legal contract NDA risk screener targeting corporate paralegals. Require the output format to be strictly validated JSON matching an explicit schema.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 매우 긴 분량의 Slack 워룸 대화 덤프가 입력될 경우 컨텍스트 윈도우 제한으로 인해 일부 타임라인 이벤트나 중요 의사결정이 누락될 수 있습니다.
- 입력 로그에 서로 다른 시간대(PST, EDT, KST 등)가 혼재되어 있고 타임존 표기가 모호한 경우 UTC 타임라인 변환 시 시간 순서가 뒤엉킬 위험이 있습니다.
- 입력된 원시 로그가 장애 현상(증상)만 담고 있고 아키텍처 원인 진단 정보가 부족할 경우 5 Whys 분석 단계에서 임의의 원인을 그럴듯하게 추론(할루시네이션)할 수 있습니다.

**[English Analysis]**
- Context length restrictions on extremely long raw Slack war-room text dumps may lead to truncated conversation analysis or omitted timeline events.
- Timestamp parsing across mixed arbitrary timezones (e.g., PST without daylight savings labels, EDT, local server logs) can cause misaligned chronological ordering in the final timeline.
- Tendency to hallucinate unprovided root-cause steps in the 5 Whys section if the provided log inputs only cover incident symptoms without architectural diagnostic data.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (4,663 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
---
name: sre-postmortem-generator
description: Transforms incident chat dumps, alert logs, and telemetry metrics into standardized blameless SRE postmortem reports.
---

# SRE Postmortem Generator — Blameless Incident Analysis Builder

Automates the generation of comprehensive, blameless postmortem documentation from raw incident logs, war-room chats, and monitoring timelines, ensuring consistent root-cause analysis and actionable remediation tracking.

---

### 1. Operating Rules
- **Strict Blameless Language**: Frame all timeline entries, root causes, and failure points around systemic, architectural, and procedural flaws rather than individual human error.
- **Chronological Normalization**: Standardize all timestamp inputs into UTC ISO-8601 format (`YYYY-MM-DD HH:mm:ss UTC`). Discard duplicate conversational banter while preserving decision checkpoints.
- **Action Item Enforceability**: Every remediation task must carry an explicit severity tag (`P0`, `P1`, or `P2`), an accountable owner role, and measurable pass/fail acceptance criteria.
- **Data Gap Notification**: Explicitly tag unverified or missing timestamps as `[TBD - Pending Telemetry Audit]` rather than fabricating values.

---

### 2. Output Template
```markdown
# Incident Postmortem: [INCIDENT-ID] — [High-Level Incident Title]

## 1. Executive Summary
- **Incident Date**: [YYYY-MM-DD]
- **Incident Commander**: [Name/Handle]
- **Primary SRE On-Call**: [Name/Handle]
- **Overall Status**: Resolved
- **Executive Brief**: [2-3 sentence overview explaining what broke, why it broke, and the final resolution].

## 2. Impact Radius & SLA Assessment
| Metric | Observed Value | Threshold / SLA Limit |
| :--- | :--- | :--- |
| **Detection Time (MTTD)** | [X minutes] | < 5 minutes |
| **Resolution Time (MTTR)** | [X minutes] | < 45 minutes |
| **Total Outage Duration** | [HH:MM:SS] | N/A |
| **Affected Services / Endpoints** | [e.g., `/api/v2/checkout`, Auth Gateway] | 0 degraded |
| **Estimated User Impact** | [X% of requests failed / Y accounts affected] | 0.00% |
| **SLA / Error Budget Breach** | [Yes / No (Detail margin)] | No breach |

## 3. Incident Timeline (UTC)
| Timestamp (UTC) | Source (Slack / PagerDuty / Datadog) | Event / Decision / Telemetry Indicator |
| :--- | :--- | :--- |
| `YYYY-MM-DD HH:mm:ss` | PagerDuty | Alert triggered: [Alert Rule Name] |
| `YYYY-MM-DD HH:mm:ss` | Slack (#incident-warroom) | Incident commander established; rollback initiated |
| `YYYY-MM-DD HH:mm:ss` | Datadog | Error rate dropped below 0.1%; traffic normalized |

## 4. Root Cause Analysis (5 Whys Framework)
1. **Why did the outage occur?**: [Direct failure mode observed in production].
2. **Why did that failure mode trigger?**: [Immediate underlying technical condition].
3. **Why was that condition not caught earlier?**: [Testing gap or configuration oversight].
4. **Why was the deployment allowed to proceed?**: [CI/CD gate or staging environment discrepancy].
5. **Why was there no automated failover?**: [Systemic architectural or resiliency limitation (Fundamental Root Cause)].

## 5. Prioritized Remediation Action Items
| ID | Issue Type | Priority | Description & Action | Owner | Target Due Date | Verification Criteria |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Bug | P0 | [Critical fix preventing immediate recurrence] | @[Owner] | [YYYY-MM-DD] | [Unit/E2E test verifying edge case] |
| 2 | Task | P1 | [Monitoring / Alert threshold refinement] | @[Owner] | [YYYY-MM-DD] | [Datadog monitor alert dry-run verified] |
| 3 | Story | P2 | [Architectural refactor or runbook documentation] | @[Owner] | [YYYY-MM-DD] | [Runbook merged and tested in GameDay] |
```

### Output Contract (Completion Checklist)
- **What changed**: Generated full operational `SKILL.md` template tailored to SRE incident postmortems with standardized sections for timeline, impact, 5-Whys, and action items.
- **What was NOT tested**: Integration with direct Jira or PagerDuty APIs; actual live Slack transcript parsing regex.
- **Assumptions**: Raw input logs provide identifiable UTC or timezone-convertible timestamps, and teams adhere to blameless culture conventions.

---

### 3. User Notes
- Review generated timeline events against telemetry data before distributing across engineering leads.
- Action item owners should be verified against current sprint capacity during the formal postmortem sync.

---

### 🛠️ Quick Customization Tips
- **Jira Automation Mode**: Request output action items as raw Jira Markdown syntax or CSV import rows.
- **Single-Service Focus**: Narrow the metric impact table down to specific microservice latency deciles (p95, p99).
```

</details>

---

<a name="theme-factory"></a>
### 테마 팩토리 — 비주얼 아이덴티티 및 5색 팔레트 생성기 / Theme Factory — Visual Identity and Palette Generator (`theme-factory`)
- **Skill Spec**: [KO](skills/ko/00_core_official/theme-factory/SKILL.md) | [EN](skills/en/00_core_official/theme-factory/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 벤처 캐피털리스트와 기관 투자자를 위한 하이엔드 핀테크 포트폴리오 대시보드의 완성형 비주얼 테마를 생성해 주세요. 무드 키워드: '스위스 네오 브루탈리즘, 딥 인스티튜셔널 옵시디언, 일렉트릭 에메랄드, 고빈도 매매, 아카이벌 모더니즘'. 정확한 HEX 코드, 이모지 스와치, 레이아웃 역할 매핑, 명도 대비 가이드, 디지털 인터페이스용 타이포그래피 추천을 포함한 규격화된 5색 팔레트를 제공해 주세요.
2. 수공예 도자기 이커머스 브랜드 및 노션 워크스페이스를 위한 차분하고 자연 친화적인 테마를 제작해 주세요. 무드 키워드: '테라코타 가마, 사암 미니멀리스트, 햇볕에 바랜 리넨, 와비사비, 올리브 가지'.
3. 인디 SF 게임 개발 투자 유치용 피치덱을 위한 레트로 퓨처리즘 사이버펑크 팔레트를 개발해 주세요. 무드 키워드: '도쿄 레인, 네온 탠저린, 차가운 CRT 형광체, 젖은 아스팔트, 로우파이 크롬'.

**[English Prompts]**
1. Generate a complete visual theme for a high-end fintech portfolio dashboard aimed at venture capitalists and institutional investors. Mood keywords: 'Swiss Neo-Brutalism, Deep Institutional Obsidian, Electric Emerald, High-Frequency Trading, Archival Modernism'. Include the 5-slot color palette with exact HEX codes, emoji swatches, layout role mappings, contrast notes, and typography recommendations for digital interfaces.
2. Create a soothing, earthy theme for an artisan ceramics e-commerce brand and Notion workspace. Mood keywords: 'Terracotta Kiln, Sandstone Minimalist, Sun-bleached Linen, Wabi-Sabi, Olive Branch'.
3. Develop a retro-futuristic cyberpunk palette for an indie sci-fi game dev pitch deck. Mood keywords: 'Tokyo Rain, Neon Tangerine, Cold CRT Phosphor, Asphalt Wetness, Lo-Fi Chrome'.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 상대 휘도 공식에 기반한 정확한 WCAG 명도 대비 계산은 언어 모델의 근사치이므로, 엄격한 웹 접근성 표준 인증을 위해서는 전용 측정 도구를 통한 교차가 필요합니다.
- 마크다운 내 색상 프리뷰는 유니코드 이모지 블록(⬛, ⬜, 🟩, 🟥 등)으로 제한되어 미세한 채도, 틴트, 뮤트 톤의 차이를 정확하게 시각화하지 못합니다.
- 프롬프트에서 추가 형식을 명시적으로 지정하지 않는 한 Tailwind CSS 설정 파일, CSS 변수, Style Dictionary JSON 등 개발용 디자인 토큰 코드를 자동 출력하지 않습니다.

**[English Analysis]**
- Precise mathematical WCAG contrast calculations (e.g., relative luminance equations) are approximated by the model and require external validation for strict legal compliance.
- Emoji preview swatches are constrained to Unicode block shapes (⬛, ⬜, 🟩, 🟥, 🟨, 🟦), which cannot accurately reflect exact chroma, tint, or desaturated undertones.
- Does not natively export code-ready design tokens (e.g., Tailwind CSS configs, CSS variables, or Style Dictionary JSON) unless supplementary formatting is explicitly requested.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,528 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Palette: Swiss Neo-Brutalism & Deep Institutional Obsidian

| Role | Color Name | HEX Code | Preview |
| :--- | :--- | :--- | :--- |
| Dominant Background | Obsidian Monolith | `#0A0C0E` | ⬛ |
| Secondary Surface | Slate Vault | `#161A1E` | 📓 |
| Primary Text / Body | Archival White | `#F2F4F7` | ⬜ |
| Primary Accent | Electric Emerald | `#00E599` | 🟩 |
| Highlight / Alert | Kinetic Crimson | `#FF334B` | 🟥 |

### Typography & Application Guide
- **Header Font**: Space Grotesk Bold / Inter Display SemiBold (Monolinear, structural Neo-Grotesque)
- **Body Font**: Inter Regular (UI copy) / JetBrains Mono (Tabular data, monetary values, and live tickers)
- **Usage Ratio**: 60% Dominant, 30% Secondary, 10% Accent

### Layout & Contrast Mapping
- **Base Layer (60%)**: `#0A0C0E` applied across root app viewports and presentation background canvases.
- **Cards & Modules (30%)**: `#161A1E` for interactive portfolio containers, balance sheets, and data grids. Pair with 1px solid border at `#242A31` for subtle structural delineation.
- **Typography & Readability (WCAG 2.1)**:
  - Primary Body (`#F2F4F7` on `#0A0C0E`): Contrast ratio **18.4:1** (Passes AAA).
  - Container Text (`#F2F4F7` on `#161A1E`): Contrast ratio **15.2:1** (Passes AAA).
- **High-Impact Signals (10%)**:
  - Primary Action / Alpha Metric: `#00E599` reserved for positive yield charts, primary CTA buttons, and buy order confirmations.
  - Risk & Volatility: `#FF334B` reserved for drawdown thresholds, critical margin alerts, and stop-loss badges.
```

</details>

---

## 01. Daily Automation (Productivity and Cleanup)

<a name="landing-carousel-copy"></a>
### SNS 캐러셀 및 카드뉴스 카피라이터 / Social Carousel Copywriter (`landing-carousel-copy`)
- **Skill Spec**: [KO](skills/ko/01_automation/landing-carousel-copy/SKILL.md) | [EN](skills/en/01_automation/landing-carousel-copy/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 다음 엔지니어링 블로그 발췌문을 표준 출력 템플릿에 맞춰 링크드인 및 인스타그램에 즉시 사용할 수 있는 6장짜리 정형화된 캐러셀 슬라이드 대본으로 변환해 주세요:

'마이크로서비스 도입의 80%가 스케일링에 실패하는 이유 (그리고 도메인 경계로 해결하는 법)
많은 엔지니어링 팀이 개발 속도 병목을 해결해 줄 것이라 믿고 성급하게 마이크로서비스 아키텍처로 전환합니다. 하지만 명확한 도메인 경계가 없으면, 독립 배포의 이점은 전혀 누리지 못한 채 분산 시스템의 복잡성만 떠안는 '분산 모놀리스(Distributed Monolith)'로 전락하고 맙니다.

첫째, 트랜잭션 경계 없이 서비스별 데이터베이스를 무리하게 분리하는 안티패턴에 빠집니다. A 서비스가 동기식 HTTP 호출을 통해 B 서비스와 원자적 일관성을 유지해야 할 때, 지연 시간이 급증하고 클러스터 전체로 부분 장애가 연쇄 전파됩니다.

둘째, 공유 라이브러리가 숨겨진 결합 종속성을 만듭니다. 5개의 독립된 서비스가 동일한 내부 'common-utils' 저장소를 가져다 쓰면, 핵심 모델 하나만 수정해도 여러 팀이 동시에 배포를 진행해야 하므로 자율적 배포 능력이 상실됩니다.

셋째, 동기식 REST 체인이 네트워크 취약성을 증폭시킵니다. 하나의 사용자 요청이 5개의 동기식 REST 서비스를 거치면 장애 발생 확률이 지수함수적으로 증가합니다. 이벤트 소싱이나 Kafka 토픽 파티션을 통한 비동기 이벤트 기반 아키텍처로 전환해야 장애를 안정적으로 격리할 수 있습니다.

이를 해결하려면 마이크로서비스 보일러플레이트를 작성하기 전에 반드시 이벤트 스토밍(Event Storming)을 통해 바운디드 컨텍스트(Bounded Context)를 정의해야 합니다. 기술적 DB 스키마가 아닌 비즈니스 도메인 중심으로 기능을 그룹화하고, 비동기 pub/sub 인터페이스 계약을 강제해야 합니다.'
2. 회사의 새로운 하이브리드 유연근무제 정책(화/목 의무 출근, 오전 10시~오후 4시 코어타임제, 50만 원 상당의 재택근무 환경 세팅 지원비 지급) 공지사항을 사내 슬랙 및 링크드인 공유용 5장 카드뉴스 대본으로 변환해 주세요.
3. 원클릭 주소 자동완성과 동적 결제 라우팅을 도입해 결제 이탈률을 34% 개선한 이커머스 SaaS 고객 성공 사례(1,200자 분량)를 4장 구성의 마이크로 캐러셀 형식으로 압축해 주세요.

**[English Prompts]**
1. Transform the following engineering blog post excerpt into a standardized 6-slide carousel script ready for LinkedIn and Instagram, following the strict template format:

'Why 80% of Microservices Fail to Scale (And How Domain Boundaries Fix It)
Many engineering teams rush into microservices architectures thinking it will automatically solve their developer velocity bottlenecks. However, without well-defined domain boundaries, they end up creating a distributed monolith—inheriting all the complexity of distributed systems without any of the decoupled deployment benefits.

First, teams fall into the database-per-service anti-pattern without transactional boundaries. When Service A needs atomic consistency with Service B across synchronous HTTP calls, latency skyrockets and partial failure cascades across the entire cluster.

Second, shared libraries become hidden coupled dependencies. When five independent services import the same internal 'common-utils' repository, updating a single core model forces synchronized redeployments across multiple teams, defeating the purpose of autonomous deployability.

Third, synchronous REST chains create network fragility. A single user request traversing five synchronous REST services compounds failure probability exponentially. Shifting to asynchronous event-driven architecture via event sourcing or Kafka topic partitions isolates failures gracefully.

To remediate this, teams must map bounded contexts using Event Storming before writing a single line of microservice boilerplate. Group capabilities around business domains, not technical database schemas, and enforce asynchronous pub/sub contracts.'
2. Convert an HR policy announcement about our company's new flexible hybrid work policy (mandatory in-office Tuesdays/Thursdays, flexible core hours between 10 AM and 4 PM, and a $500 home-office stipend) into a 5-slide internal Slack/LinkedIn carousel script.
3. Condense a 1,200-word SaaS case study detailing how an e-commerce brand reduced checkout drop-offs by 34% using 1-click address autofill and dynamic payment routing into a 4-slide micro-carousel format.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 특정 모바일 가로세로 비율(예: 4:5, 1:1)이나 그래픽 툴의 텍스트 박스 크기에 맞춰 실제 글자 수 여백을 완벽히 맞추지 못할 수 있어 수동 줄바꿈 수정이 필요합니다.
- 슬라이드당 1~2문장으로 압축하는 과정에서 복잡한 기술 용어나 세부적인 도메인 맥락이 지나치게 단순화될 위험이 있습니다.
- 피그마(Figma), 캔바(Canva) 템플릿 파일이나 완성된 이미지 형태로 직접 내보낼 수 없으며, 순수 마크다운 텍스트 대본 형태로만 출력됩니다.

**[English Analysis]**
- May struggle to adapt text length automatically to precise visual bounding boxes or specific mobile aspect ratios (e.g., 4:5 vs. 1:1) without manual graphic editing.
- Complex technical jargon or highly nuanced domain concepts can occasionally be oversimplified during the compression into 1-2 sentence body limits.
- Cannot generate or export native design assets (such as Figma layers, Canva templates, or raster image files), providing markdown text scripts only.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,509 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Slide 1: Cover (Hook)
- **Visual Cue**: Split-screen diagram comparing a clean modular structure against an interconnected, tangled "distributed monolith" mesh.
- **Headline**: Why 80% of Microservices Fail to Scale
- **Sub-headline**: For engineering leads stuck in distributed monolith traps

## Slides 2–5: Core Points (1 Key Point / Slide, Max 5)
- **Slide 2 [Anti-Pattern 1: The Database Trap]**: Cross-service synchronous transactions destroy performance. Enforcing atomic consistency over HTTP creates cascade failures and exponential latency across your entire cluster.
- **Slide 3 [Anti-Pattern 2: Hidden Shared Libraries]**: Shared utilities kill team autonomy. When five independent microservices depend on a single internal common repo, a minor model change forces painful, multi-team lockstep redeployments.
- **Slide 4 [Anti-Pattern 3: Fragile Synchronous REST]**: Deep synchronous REST call chains compound failure rates. Decouple services using asynchronous event-driven pipelines and Kafka partitions to isolate faults gracefully.
- **Slide 5 [The Solution: Domain-Driven Boundaries]**: Design around business domains, not database schemas. Run Event Storming workshops to map clean bounded contexts before writing boilerplate code, and enforce pub/sub contracts.

## Slide 6: Call to Action (CTA)
- **Header**: Audit Your Service Boundaries Today
- **Body**: Found this architectural breakdown helpful? Save this slide deck for your next architecture review, and repost it with your team.
```

</details>

---

<a name="real-estate-copywriter"></a>
### 부동산 공간 콘셉트 카피라이터 / Real Estate Concept Copywriter (`real-estate-copywriter`)
- **Skill Spec**: [KO](skills/ko/01_automation/real-estate-copywriter/SKILL.md) | [EN](skills/en/01_automation/real-estate-copywriter/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 다음 공간 사양 정보를 바탕으로 타깃 페르소나, 인테리어 스타일링 콘셉트, 매물 브로슈어 카피를 작성해 주세요:

- 매물 유형: 인더스트리얼 로프트 개조 아파트 (방 2개, 욕실 2개)
- 전용면적: 88㎡ (약 26.6평)
- 천장고: 3.8m 노출 원목 보(beam) 및 오리지널 붉은 벽돌 마감
- 채광 및 향: 남서향 바닥부터 천장까지 이어지는 격자형 스틸 프레임 창호; 오후 1시부터 일몰까지 풍부한 자연광 유입
- 평면 구성:
  - 오픈형 거실/다이닝/주방 존 (46㎡): 콘크리트 아일랜드 식탁 및 빌트인 인덕션 적용
  - 마스터 침실 스위트 (22㎡): 워크인 드레스룸 및 반투명 유리 마감의 샤워/습식 욕실 포함
  - 세컨드 멀티룸 (14㎡): 현관 인근 배치, 현재 방음 패널이 시공된 팟캐스트 스튜디오 겸 재택근무 오피스로 활용 중
  - 게스트 욕실 (4㎡): 현관 복도 측면 위치
  - 히든 팬트리 및 세탁실 (2㎡): 타워형 세탁기/건조기 및 수직 수납장 내장
- 타깃 시장: 작업과 주거가 결합된 감각적인 공간을 찾는 크리에이티브 디렉터, 스타트업 창업자 또는 고소득 원격 전문직.
2. 교통 요충지에 위치한 초소형 원룸 스튜디오(32㎡, 층고 2.7m, 남향 베란다 확장형 썬룸, 빌트인 머피베드 수납장 구비)를 위한 1인 가구 타깃 페르소나, 스칸디나비안 미니멀리즘 홈스테이징 가이드, 고전환 분양/임대 홍보 카피를 작성해 주세요.
3. 5.6m 복층 보이드(보이드 오픈형 거실), 북향 파노라마 통창 커튼월, 35㎡ 둘레형 원목 테라스를 갖춘 160㎡ 복층 펜트하우스 평면도 명세를 바탕으로 은퇴 자산가 및 아트 컬렉터를 타깃으로 한 럭셔리 매거진 에디토리얼 브로슈어를 제작해 주세요.

**[English Prompts]**
1. Generate a target persona, interior styling concept, and brochure copy based on the following spatial specification:

- Property Type: Converted Industrial Loft Apartment (2-Bed, 2-Bath)
- Usable Area: 88 sqm (approx. 947 sq ft)
- Ceiling Height: 3.8m exposed timber beam ceilings with original brick accents
- Exposure & Light: Southwest-facing floor-to-ceiling steel-framed casement windows; maximum natural daylight from 1:00 PM to sunset
- Current Layout:
  - Open-plan living/dining/kitchen zone (46 sqm) featuring a poured-concrete central island and integrated induction cooktop
  - Primary bedroom suite (22 sqm) with dedicated walk-in wardrobe and frosted-glass en-suite wet room
  - Secondary flex room (14 sqm) positioned near entryway, currently utilized as a hybrid podcast studio/remote work office with acoustic wall panels
  - Guest bathroom (4 sqm) off entry corridor
  - Concealed utility closet with stacked washer/dryer and vertical storage (2 sqm)
- Target Market: Creative directors, tech founders, or senior remote professionals seeking an editorial work-live residence.
2. Draft a buyer persona, Scandinavian minimalist staging guide, and high-conversion listing copy for a micro-studio apartment (32 sqm) with 2.7m ceilings, an enclosed south-facing sunroom balcony, and built-in murphy bed cabinetry located in a high-density transit hub.
3. Transform the blueprint specs of a 160 sqm suburban bi-level penthouse featuring a double-height void (5.6m), north-facing panoramic glass curtain wall, and a 35 sqm wraparound timber terrace into a luxury editorial brochure tailored for downsizers and art collectors.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 텍스트로 입력된 수치만으로는 실제 건축법규, 비상 탈출 동선 유효 폭, 설비/배관(MEP) 위치 간섭 여부를 검증할 수 없습니다.
- 가구 동선 여유 공간(예: 통로 폭 90cm 확보 등)을 물리적 CAD 도면 없이 정밀 검증하지 못해 비현실적인 대형 가구 배치를 추천할 위험이 있습니다.
- 구체적인 금지어 규칙을 지정하지 않으면 '햇살 가득한 안식처', '유기적 연결' 등 상투적인 부동산 미사여구를 반복해서 생성하는 경향이 있습니다.

**[English Analysis]**
- Cannot detect real-world building code infractions, egress path width violations, or MEP (mechanical, electrical, plumbing) conflicts from raw dimension text alone.
- Prone to hallucinating furniture clearance margins (e.g., claiming a space fits an 8-seater dining table when physical clearance requires smaller footprints).
- May default to repetitive real-estate buzzwords ('sanctuary', 'sun-drenched', 'seamless flow') unless explicitly constrained with stylistic negative constraints.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,754 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Target Persona & Lifestyle Fit
- **Primary Persona**: Senior Creative Director or Venture-backed Tech Founder (Mid-30s to early 40s), hybrid or fully remote, balancing intense screen-based strategy sprints with creative hosting and content production.
- **Spatial Match**: The 46 sqm open-plan central volume provides an impressive backdrop for casual client meetings and evening salon-style gatherings, while the dedicated 14 sqm acoustically isolated flex room preserves uncompromising focus and broadcast-ready audio environments without intruding into the private primary suite.

## Interior Design Concept
- **Design Theme**: Industrial Warm Modernism (Refined Brutalism meets tactile Scandinavian warmth)
- **Color Palette & Materials**: Raw exposed red brick, cast-in-place honed concrete, smoked European oak cabinetry, blackened steel architectural hardware, layered with linen drapery, bouclé seating, and brushed unlacquered brass accents to soften industrial edges.
- **Spatial Optimization**: Anchor the 3.8m verticality with floor-to-ceiling modular open shelving on the structural brick party wall; position a low-slung, double-sided modular sectional between the kitchen island and southwest window line to preserve sightlines and delineate zones without physical partitions.

## Property Narrative Copy
### Headline
Architectural Provenance Meets Tactile Urban Retreat

### Body Copy
Bathed in golden southwest light through dramatic steel-framed casements, this 88-square-meter warehouse conversion transforms industrial heritage into a masterclass of residential balance. Soaring 3.8-meter timber-beamed ceilings immediately establish an expansive spatial rhythm, grounding an open-concept living and culinary arena anchored by a monolith concrete island. Here, fluid sightlines invite effortless transitions from solo morning espresso rituals to evening entertaining against the backdrop of raw brick texture and sunset hues.

Thoughtfully zoned for modern executive demands, the floor plan prioritizes functional separation without compromising openness. The secluded primary suite offers a sanctuary of calm complete with an expansive walk-in dressing hall and spa-grade wet room, while the purpose-built secondary chamber serves as a studio-grade workspace engineered for pristine focus. Every proportion honors the building’s structural integrity while delivering quiet, contemporary refinement in every square meter.

### Feature Bullets
- 3.8-meter soaring timber-beamed ceilings paired with original exposed brick masonry
- Dedicated 14 sqm acoustic flex studio engineered for executive home-office isolation or podcasting
- Expansive southwest steel-framed fenestration yielding uninterrupted afternoon natural illumination
```

</details>

---

<a name="spec-diff-checker"></a>
### UI 기획서 및 구현 결과물 대조 검수기 / UI Spec-to-Implementation Diff Inspector (`spec-diff-checker`)
- **Skill Spec**: [KO](skills/ko/01_automation/spec-diff-checker/SKILL.md) | [EN](skills/en/01_automation/spec-diff-checker/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 아래 승인된 제품 기획서 명세와 현재 프론트엔드 결제 페이지 구현 상태를 대조하여 spec-diff-checker 검수를 실행해 주세요.

### 기획서 요구사항 (Expected Spec):
1. **주문 요약 카드 (Order Summary)**:
   - 품목 리스트, 소계(Subtotal), 프로모션 할인(녹색 강조 '#10B981'), 배송비(기본 $5.00, 소계 $50 초과 시 무료), 최종 결제 금액 표기.
   - '배송비' 항목 우측에 표준 배송 기간(영업일 기준 3-5일)을 안내하는 툴팁 배치.
2. **결제 수단 선택 (Payment Methods)**:
   - 라디오 버튼 그룹: '신용/체크카드', 'PayPal Express', 'Apple Pay / Google Pay' (OS별 동적 노출).
   - 기본 선택값: '신용/체크카드'.
   - 카드 입력 폼: 카드 소유자명, 카드 번호(카드사 브랜드 아이콘 자동 감지), 유효기간(MM/YY), CVV/CVC(안내 팝오버 아이콘 포함).
3. **청구지 주소 일치 토글 (Billing Address)**:
   - 체크박스: '배송지 주소와 동일' (기본값: 체크됨).
   - 체크 해제 시 인라인 아코디언이 펼쳐지며 주소 1, 주소 2, 도시, 주(State) 드롭다운, 우편번호 입력창 노출.
4. **주요 CTA 및 보안 뱃지**:
   - 버튼 문구: 'Pay $XX.XX Now' (최종 결제 금액 동적 반영).
   - 컬러 토큰: 프라이머리 퍼플(#6366F1), 모바일 100% 너비, 데스크톱 320px 우측 정렬.
   - 버튼 하단: 자물쇠 아이콘 + '256-Bit SSL Encrypted & PCI-DSS Compliant' 안내 문구.
5. **약관 동의 문구**:
   - 인라인 링크 문구: 'By placing this order, you agree to our Terms of Sale and Privacy Policy.'

### 현재 구현 현황 설명 (CheckoutView.vue 및 검토 노트):
- 주문 요약: 소계, 배송비(조건문 없이 $5.00 하드코딩, $50 초과 무료 배송 로직 없음), 최종 결제 금액만 노출됨. 프로모션 할인 행 누락. 배송비 툴팁 누락.
- 결제 수단: 라디오 그룹 대신 탭 컴포넌트로 구현됨. 'Credit Card'(체크카드 누락), 'PayPal' 2가지만 노출. Apple Pay / Google Pay 연동 버튼 누락.
- 카드 입력 폼: 카드 번호(카드사 자동 감지 아이콘 없음), 유효기간, CVV 필드만 있음. '카드 소유자명(Cardholder Name)' 필드 누락.
- 청구지 주소: 배송지와 무조건 동일하도록 고정됨. 체크 해제 토글 및 상세 주소 입력 아코디언 미구현.
- 결제 버튼: 고정 텍스트 'Submit Order' (동적 금액 미표시). 색상이 지정된 퍼플이 아닌 슬레이트 블루(#3B82F6) 적용. 전 디바이스 중앙 정렬.
- 보안 뱃지: 자물쇠 아이콘 누락, 문구가 'Secure Checkout'으로 축약됨.
- 약관 문구: 텍스트는 있으나 'Terms of Service'만 링크 처리되어 있고 'Privacy Policy' 링크 누락.
2. 인증 기반 핀테크 앱의 모바일 온보딩 화면 기획서와 실제 iOS SwiftUI 구현 검토 노트를 대조하여, 규정 준수 리스크와 누락된 생체 인증 옵트인 요소를 중점으로 검수표를 작성해 주세요.
3. SaaS 팀 설정 모달의 피그마(Figma) 디자인 토큰 및 승인 카피와 배포된 React 컴포넌트 간의 차이점을 대조하고, 기능 배포 블로커 이슈만 선별해 주세요.

**[English Prompts]**
1. Run spec-diff-checker to audit our Checkout Payment Page implementation against the approved product specification below.

### Expected Product Specification:
1. **Order Summary Card**:
   - Shows itemized list, Subtotal, Promo Discount (highlighted green text '#10B981'), Shipping Fee ($5.00 flat or FREE if subtotal > $50), and Total Due.
   - Tooltip next to 'Shipping Fee' explaining standard delivery window (3-5 business days).
2. **Payment Methods**:
   - Radio group options: 'Credit / Debit Card', 'PayPal Express', 'Apple Pay / Google Pay' (dynamic based on OS).
   - Default selected: 'Credit / Debit Card'.
   - Credit card form fields: Cardholder Name, Card Number (with card brand icon auto-detection), Expiration (MM/YY), CVV/CVC with info icon popover.
3. **Billing Address Toggle**:
   - Checkbox: 'Billing address same as shipping address' (default: checked).
   - When unchecked, expands inline accordion with Address Line 1, Line 2, City, State dropdown, ZIP code.
4. **Primary CTA & Security Badge**:
   - Button label: 'Pay $XX.XX Now' (dynamic amount reflecting final Total Due).
   - Color token: Primary Brand Purple (#6366F1), full width on mobile, 320px right-aligned on desktop.
   - Below CTA: Lock icon with text '256-Bit SSL Encrypted & PCI-DSS Compliant'.
5. **Terms Acceptance**:
   - Inline copy with hyperlink: 'By placing this order, you agree to our Terms of Sale and Privacy Policy.'

### Current Frontend Implementation Description (CheckoutView.vue + Review Notes):
- Order Summary: Displays Subtotal, Shipping Fee ($5.00 always hardcoded; no free shipping logic), and Total Due. Promo Discount row is completely missing. No tooltip beside Shipping Fee.
- Payment Methods: Tabs component instead of radio buttons. Options present: 'Credit Card' (label does not mention Debit), 'PayPal'. Apple Pay / Google Pay dynamic button is omitted.
- Card Inputs: Card Number (no auto-detect card brand icon), Expiration Date, CVV field. 'Cardholder Name' field is missing from the template.
- Billing Address: Hardcoded to always match shipping; checkbox toggle and expandable secondary address form were not implemented.
- Submit Button: Fixed label 'Submit Order' (does not display dynamic total amount). Background color is standard slate blue (#3B82F6) rather than Brand Purple. Centered on all viewports.
- Security Badge: Missing lock icon; text says 'Secure Checkout'.
- Legal Copy: Text exists, but only links to 'Terms of Service'; link to 'Privacy Policy' is missing.
2. Compare the mobile onboarding specification for an authenticated fintech app against the current iOS Swift UI view inspect notes, highlighting any compliance risks and missing biometric opt-ins.
3. Perform a spec discrepancy audit between the Figma tokens/copy for the SaaS Team Settings modal and the deployed React component inspect output, listing only blocking functional bugs.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 실제 브라우저 렌더링 DOM, 계산된 CSS 스타일, 피그마 바이너리 파일을 직접 검사하지 못하며 프롬프트로 전달된 코드 및 서술형 텍스트에만 의존합니다.
- 텍스트 명세에 명시적으로 드러나지 않는 반응형 서브픽셀 깨짐, z-index 겹침, 브라우저별 렌더링 엔진 차이로 인한 미세 레이아웃 결함은 감지하지 못할 수 있습니다.
- A/B 테스트 분기나 다단계 스텝 위저드처럼 상태 조건이 복잡한 UI의 경우, 기획서의 예외 케이스 명세가 완벽히 제공되지 않으면 잘못된 불일치 판정(오탐)을 낼 수 있습니다.

**[English Analysis]**
- Cannot directly inspect live rendered DOM, computed CSS, or Figma canvas binaries; relies strictly on textual code, AST snapshots, or description inputs provided in context.
- May overlook visual z-index conflicts, sub-pixel responsive clipping, or dynamic browser rendering quirks that are not explicitly surfaced in the implementation text.
- Complex conditional branching in stateful UI (e.g., split-testing variations or deeply nested multi-step wizards) requires exhaustive spec coverage in the prompt to avoid false positives.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (3,992 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Specification Discrepancy Audit

| Component / Area | Expected Spec | Current Implementation | Status | Recommended Fix |
| :--- | :--- | :--- | :--- | :--- |
| **Order Summary: Promo Discount** | Itemized row showing applied promo discount in green (`#10B981`) | Completely omitted from summary card | Missing | Add conditional promo discount table row with color token `#10B981` |
| **Order Summary: Shipping Logic** | $5.00 flat fee or FREE if subtotal > $50.00 | Hardcoded flat $5.00 fee regardless of subtotal | Functional Defect | Implement threshold check (`subtotal > 50 ? 0 : 5.00`) and display 'FREE' |
| **Order Summary: Shipping Tooltip** | Tooltip icon explaining 3-5 business days delivery window | Tooltip icon and popover missing | Missing | Insert tooltip trigger icon beside 'Shipping Fee' label |
| **Payment Methods: Control Type** | Mutually exclusive Radio Button group | Tab container component | Discrepancy | Replace tab control with accessible Radio Group component |
| **Payment Methods: Options & Copy** | 'Credit / Debit Card', 'PayPal Express', dynamic Apple/Google Pay | Tabs: 'Credit Card', 'PayPal'; mobile wallets omitted | Discrepancy / Missing | Update label to 'Credit / Debit Card', add dynamic Apple Pay / Google Pay button |
| **Card Form: Cardholder Name** | Dedicated text input for 'Cardholder Name' | Input field omitted from template | Missing | Add required 'Cardholder Name' input above card number field |
| **Card Form: Brand Detection** | Auto-detected brand badge (Visa, MC, Amex) inside/beside card input | Plain text card number field without brand detection | Missing | Integrate card BIN detection hook and render brand SVGs |
| **Billing Address: Toggle & Form** | Checkbox toggle with expandable accordion form when unchecked | Uneditable state; hardcoded to shipping address | Missing | Add toggle checkbox and accordion containing secondary address inputs |
| **Primary CTA: Label & Token** | 'Pay $XX.XX Now' (dynamic), `#6366F1`, 320px right-aligned (desktop) | Static 'Submit Order', `#3B82F6`, centered alignment | Discrepancy | Bind dynamic total to CTA copy, apply `#6366F1`, set desktop `max-width: 320px; margin-left: auto` |
| **Security Assurance Badge** | Lock icon + '256-Bit SSL Encrypted & PCI-DSS Compliant' | Plain text 'Secure Checkout'; lock icon missing | Discrepancy | Add lock SVG icon and restore compliance copy per legal specification |
| **Legal Copy: Privacy Policy** | Hyperlinks for both 'Terms of Sale' and 'Privacy Policy' | Only 'Terms of Service' linked; 'Privacy Policy' anchor missing | Discrepancy | Update copy to 'Terms of Sale' and wrap 'Privacy Policy' in valid anchor link |

## Critical Action Items
1. **Blocking Issues**:
   - **Cardholder Name Field Missing**: Payment gateway API calls will fail validation without cardholder name payload.
   - **Incorrect Shipping Calculation**: Customers spending over $50 are improperly charged $5.00, causing pricing discrepancy and checkout abandonment.
   - **Billing Address Unavailability**: Card transactions requiring distinct billing addresses (e.g., corporate cards) cannot be submitted.
2. **Text Discrepancies**:
   - CTA button displays generic `'Submit Order'` instead of approved conversion copy `'Pay $XX.XX Now'`.
   - Missing debit card notation in payment method label (`'Credit Card'` vs. `'Credit / Debit Card'`).
   - Security disclaimer simplified to `'Secure Checkout'` instead of regulatory `'256-Bit SSL Encrypted & PCI-DSS Compliant'`.
   - Legal hyperlink mismatch: refers to `'Terms of Service'` rather than `'Terms of Sale'` and omits `'Privacy Policy'`.
3. **Cosmetic Adjustments**:
   - Switch primary CTA background color token from slate blue (`#3B82F6`) to brand purple (`#6366F1`).
   - Re-align desktop CTA button from centered to 320px width right-aligned.
   - Implement card brand logo preview inside the Card Number field container.
   - Add tooltip hover/click interaction beside the shipping fee line item.
```

</details>

---

<a name="tab-session-organizer"></a>
### 브라우저 탭 세션 정리기 / Browser Tab Session Organizer (`tab-session-organizer`)
- **Skill Spec**: [KO](skills/ko/01_automation/tab-session-organizer/SKILL.md) | [EN](skills/en/01_automation/tab-session-organizer/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 오늘 개발 브라우저 세션에서 열려 있는 14개 탭 목록입니다. 트리아지 규칙에 따라 업무용(Active Work), 나중에 읽기(Read Later), 아이디어/참고 창고(Reference Depot)로 분류하고 중복 제거, 우선순위 할당, 즉시 닫아도 안전한 탭을 표시해 주세요:

1. PR #412: Fix JWT token refresh race condition - GitHub (https://github.com/acme-org/backend/pull/412)
2. Datadog APM - Production Service Latency Spikes (https://app.datadoghq.com/apm/traces?env=prod)
3. PostgreSQL 16 Docs: EXPLAIN ANALYZE execution cost parameters (https://www.postgresql.org/docs/16/using-explain.html)
4. Hacker News: Show HN: A lightweight SQLite migration tool (https://news.ycombinator.com/item?id=39120481)
5. Jira: BACK-892 Investigation - Intermittent 401s on mobile checkout (https://acme-corp.atlassian.net/browse/BACK-892)
6. Stack Overflow: Go sync.Mutex vs sync.RWMutex memory footprint benchmarks (https://stackoverflow.com/questions/42119028/)
7. PR #412: Fix JWT token refresh race condition - GitHub (https://github.com/acme-org/backend/pull/412)
8. Martin Fowler: Patterns of Distributed Systems - Write-Ahead Log (https://martinfowler.com/articles/patterns-of-distributed-systems/wal.html)
9. AWS CloudWatch Metrics: auth-service-cluster CPUUtilization (https://us-east-1.console.aws.amazon.com/cloudwatch/home)
10. Substack: Engineering Leadership in Async-First Remote Teams (https://newsletter.engleaders.io/p/async-first-teams)
11. Stripe API Documentation: Idempotency Keys and Webhook Retries (https://stripe.com/docs/api/idempotent_requests)
12. GitHub: golangci-lint release v1.58.0 notes (https://github.com/golangci/golangci-lint/releases/tag/v1.58.0)
13. Jira: BACK-892 Investigation - Intermittent 401s on mobile checkout (https://acme-corp.atlassian.net/browse/BACK-892)
14. Google Workspace: Q3 Backend Sprint Retro & Planning Notes (https://docs.google.com/document/d/1Z8f...)
2. 쿠버네티스 파드 오토스케일링 알고리즘 및 metrics-server 설정과 관련된 열린 탭 8개가 있습니다. 프로젝트 맥락에 맞춰 그룹화하고 즉각적인 구현 가이드와 이론 백서를 구분한 뒤 15분 이내에 읽을 수 있는 큐를 생성해 주세요.
3. 마케팅 및 경쟁사 분석 관련 탭 12개(랜딩 페이지, 가격 정책, SaaS 블로그) 목록을 드릴 테니 동일 도메인 중복을 제거하고 오늘 당장 분석할 항목과 장기 참고용 북마크로 분류해 주세요.

**[English Prompts]**
1. Here is a dump of 14 open tabs from my development browser session today. Organize them according to your triage rules into Active Work, Read Later, and Reference Depot, deduplicate, assign priorities, and tell me what to close safely:

1. PR #412: Fix JWT token refresh race condition - GitHub (https://github.com/acme-org/backend/pull/412)
2. Datadog APM - Production Service Latency Spikes (https://app.datadoghq.com/apm/traces?env=prod)
3. PostgreSQL 16 Docs: EXPLAIN ANALYZE execution cost parameters (https://www.postgresql.org/docs/16/using-explain.html)
4. Hacker News: Show HN: A lightweight SQLite migration tool (https://news.ycombinator.com/item?id=39120481)
5. Jira: BACK-892 Investigation - Intermittent 401s on mobile checkout (https://acme-corp.atlassian.net/browse/BACK-892)
6. Stack Overflow: Go sync.Mutex vs sync.RWMutex memory footprint benchmarks (https://stackoverflow.com/questions/42119028/)
7. PR #412: Fix JWT token refresh race condition - GitHub (https://github.com/acme-org/backend/pull/412)
8. Martin Fowler: Patterns of Distributed Systems - Write-Ahead Log (https://martinfowler.com/articles/patterns-of-distributed-systems/wal.html)
9. AWS CloudWatch Metrics: auth-service-cluster CPUUtilization (https://us-east-1.console.aws.amazon.com/cloudwatch/home)
10. Substack: Engineering Leadership in Async-First Remote Teams (https://newsletter.engleaders.io/p/async-first-teams)
11. Stripe API Documentation: Idempotency Keys and Webhook Retries (https://stripe.com/docs/api/idempotent_requests)
12. GitHub: golangci-lint release v1.58.0 notes (https://github.com/golangci/golangci-lint/releases/tag/v1.58.0)
13. Jira: BACK-892 Investigation - Intermittent 401s on mobile checkout (https://acme-corp.atlassian.net/browse/BACK-892)
14. Google Workspace: Q3 Backend Sprint Retro & Planning Notes (https://docs.google.com/document/d/1Z8f...)
2. I have 8 open research tabs about Kubernetes pod autoscaling algorithms and metrics-server setups. Group them by project context, flag any immediate implementation guides versus theoretical whitepapers, and build a 15-minute quick reading queue.
3. Please take this list of 12 marketing and competitor analysis tabs (landing pages, pricing tiers, and SaaS blogs), de-duplicate identical domains, and classify them into daily action items versus long-term reference bookmarks.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 브라우저 API나 확장 프로그램(예: Chrome Tabs API)과 직접 연동되지 않으므로 탭을 자동으로 닫거나 실제 북마크 폴더로 저장할 수 없습니다.
- 예상 소요 시간(예: 'Est: 8 min')은 실제 웹페이지 본문 단어 수를 실시간 크롤링하지 않고 제목과 일반적인 문서 길이에 기반해 추정합니다.
- 사용자가 구체적인 맥락을 제공하지 않으면 제목(예: '운영 장애' vs '경영 에세이')의 어조에만 의존해 우선순위(P1/P2)를 추론하게 됩니다.

**[English Analysis]**
- Cannot directly interact with browser APIs or extensions (e.g., Chrome Tabs API) to close, group, or bookmark tabs automatically.
- Reading time estimates (e.g., 'Est: 8 min') are heuristic guesses based on standard technical article lengths rather than live web scraping of word counts.
- Without explicit user context, prioritization (P1/P2) relies on inferring urgency from titles (e.g., 'Production Latency Spikes' vs 'Substack Leadership').

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (3,272 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Browser Tab Triage & Action Plan

## 1. Active Work (Execute Today)
- [ ] **[Jira: BACK-892 Investigation - Intermittent 401s on mobile checkout](https://acme-corp.atlassian.net/browse/BACK-892)** `[P1 - High]`
  - Objective: Resolve the root cause of production mobile checkout 401 authentication errors and document incident findings.
- [ ] **[PR #412: Fix JWT token refresh race condition - GitHub](https://github.com/acme-org/backend/pull/412)** `[P1 - High]`
  - Objective: Review code diff, ensure regression tests pass, and merge fix to unblock downstream auth stabilization.
- [ ] **[Datadog APM - Production Service Latency Spikes](https://app.datadoghq.com/apm/traces?env=prod)** `[P1 - High]`
  - Objective: Correlate latency spikes with token validation requests during the reported incident window.
- [ ] **[AWS CloudWatch Metrics: auth-service-cluster CPUUtilization](https://us-east-1.console.aws.amazon.com/cloudwatch/home)** `[P2 - Medium]`
  - Objective: Verify if CPU saturation coincides with the race conditions or latency spikes.
- [ ] **[Google Workspace: Q3 Backend Sprint Retro & Planning Notes](https://docs.google.com/document/d/1Z8f...)** `[P2 - Medium]`
  - Objective: Log today's incident action items and backlog follow-ups before the end-of-day sprint review.

## 2. Read Later (Async Reading Queue)
- [ ] **[Stack Overflow: Go sync.Mutex vs sync.RWMutex memory footprint benchmarks](https://stackoverflow.com/questions/42119028/)** (Est: 4 min)
  - Relevance: Reference for evaluating concurrency lock overhead in high-throughput Go microservices.
- [ ] **[GitHub: golangci-lint release v1.58.0 notes](https://github.com/golangci/golangci-lint/releases/tag/v1.58.0)** (Est: 5 min)
  - Relevance: Inspect new linter rules and deprecations before bumping backend CI pipeline dependencies.
- [ ] **[Hacker News: Show HN: A lightweight SQLite migration tool](https://news.ycombinator.com/item?id=39120481)** (Est: 8 min)
  - Relevance: Benchmark utility for local embedded database migration ergonomics.
- [ ] **[Martin Fowler: Patterns of Distributed Systems - Write-Ahead Log](https://martinfowler.com/articles/patterns-of-distributed-systems/wal.html)** (Est: 15 min)
  - Relevance: Deep-dive architectural reading on durable replication patterns for planned storage revamps.
- [ ] **[Substack: Engineering Leadership in Async-First Remote Teams](https://newsletter.engleaders.io/p/async-first-teams)** (Est: 10 min)
  - Relevance: Non-urgent management practices and documentation workflow inspiration for team retros.

## 3. Reference Depot (Archive & Bookmark)
- **[PostgreSQL 16 Docs: EXPLAIN ANALYZE execution cost parameters](https://www.postgresql.org/docs/16/using-explain.html)**: Bookmark under `Dev > Databases` for query plan optimization runs; close active tab.
- **[Stripe API Documentation: Idempotency Keys and Webhook Retries](https://stripe.com/docs/api/idempotent_requests)**: Bookmark under `Dev > Integrations > Payments` for webhook retry handling logic; close active tab.

## 4. Recommended Tab Actions
- **Safe to Close Now**:
  - `Tab #7` (Duplicate of PR #412): Exactly identical GitHub pull request tab.
  - `Tab #13` (Duplicate of Jira BACK-892): Identical issue tracking page open in secondary window/session.
```

</details>

---

<a name="task-reminder-parser"></a>
### 업무 할 일 및 미리알림 변환기 / Task & Reminder Parser (`task-reminder-parser`)
- **Skill Spec**: [KO](skills/ko/01_automation/task-reminder-parser/SKILL.md) | [EN](skills/en/01_automation/task-reminder-parser/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 고객사 미팅 직후 차 안에서 녹음하는 메모입니다. 첫째로, 오늘 아침 6시에 스테이징 데이터베이스 마이그레이션이 실패했는데, 데이브 말로는 낮 12시(12:00 PM) 전까지 유저 테이블 락을 해결하지 않으면 오늘 스프린트 릴리즈용 QA가 완전히 중단된다고 합니다. 둘째로, 아크메(Acme Corp) 갱신 계약서에 Q3 SLA 보고서가 누락되어 사라에게서 항의 문자가 왔습니다. 갱신 계약서는 오늘 오후 3시(3:00 PM)까지 반드시 도큐사인(DocuSign)으로 발송되어야 하므로, 메타베이스(Metabase)에서 가동 시간 수치를 추출해 첨부해야 합니다. 셋째로, 결제 웹훅 재시도 관련해서 마커스가 블로킹된 상태인데, 오후 1시 30분(1:30 PM)까지 PR #412를 리뷰해주기로 약속했습니다(약 20분 소요 예정). 보조 업무로는 Gusto에서 밀린 휴가 결재 승인, 회의실 B용 대체 HDMI 케이블 2개 주문, 법무팀 NDA 수정본 회신(바쁘면 내일 오전까지 미뤄도 됨), 그리고 금요일 퇴근 전까지 시카고 출장 경비 영수증 정산 제출이 있습니다. 이를 정형화된 일일 실행 브리프로 변환해 주세요.
2. 오전 프로덕트 싱크 미팅 메모: 모바일 QA 최종 승인을 위해 오후 4시(4:00 PM)까지 앱스토어 제출용 v2.4 릴리즈 노트를 마감해야 합니다. 또한 어젯밤 Stripe 웹훅 불일치 경고가 두 번 발생했는데, 데이비드가 유럽 피크 트래픽 시작 전인 오후 2시(2:00 PM)까지 예외 처리를 패치해야 합니다. 저는 오후 5시 30분(5:30 PM) 이사회 보고용 슬라이드를 준비해야 합니다(최소 60분 소요 예상). 백로그 언급 항목: 프리랜서 카피라이터에게 메인 히어로 섹션 초안 독촉, 다음 주 월요일 전 Figma 엔터프라이즈 라이선스 갱신, Jira에서 지난 분기 고객 피드백 보드 아카이빙. 이 내용을 3대 핵심 우선순위 및 임포트용 페이로드로 정리해 주세요.
3. 음성 메모 브레인덤프: 오늘 할 일이 너무 몰렸네요. 오전 11시(11:00 AM)까지 헬리오스 헬스(Helios Health)에 수정된 가격 제안서를 보내야 합니다. 오후 2시(2:00 PM)에는 시니어 백엔드 지원자와 45분간 기술 면접을 진행해야 하고요. 오후 6시(6:00 PM) 퇴근 전까지는 재무팀에 수정된 AWS 예산 전망치를 제출해야 합니다. 기타 자잘한 일: 읽지 않은 슬랙 DM 28개 정리, 제니와의 1:1 미팅 일정 변경, 온라인으로 기념일 선물 구매하기.

**[English Prompts]**
1. Recording this from my car right after the client call. First, the staging database migration failed at 6 AM, and Dave said the user table lock needs to be resolved before 12:00 PM or QA is completely blocked for today's sprint release. Second, Sarah texted that Acme Corp is furious because the Q3 SLA report wasn't attached to their renewal agreement—that contract must go out via DocuSign by 3:00 PM today without fail, so I need to pull the Metabase uptime numbers and attach them. Third, Marcus is blocked on payment webhook retries; I promised to review PR #412 by 1:30 PM, which should take about 20 minutes. As for secondary stuff: approve pending PTO requests in Gusto, order two replacement HDMI cables for Conference Room B, respond to legal about the NDA redlines (can wait until tomorrow morning if slammed), and compile Expensify receipts from the Chicago trip before EOD Friday. Please extract this into the structured daily execution brief.
2. Raw notes from our morning product sync: We need to finalize the v2.4 launch changelog for the App Store submission by 4:00 PM so mobile QA can sign off. Also, the Stripe webhook discrepancy alert triggered twice overnight—David needs to patch that edge case by 2:00 PM before EU peak traffic starts. I have to prep slides for the board sync at 5:30 PM (at least 60 mins needed). Backlog items mentioned: ping freelance copywriter for the hero section draft, renew Figma enterprise seats before next Monday, and archive last quarter's customer feedback board in Jira. Convert this into the 3 core priorities and import payload.
3. Voice memo braindump: I'm completely overwhelmed today. By 11:00 AM I have to send the updated pricing proposal to Helios Health. Need to conduct a 45-minute technical screen interview at 2:00 PM with the senior backend candidate. Before EOD at 6:00 PM, I must submit the revised AWS budget forecast to finance. Other things: clear my 28 unread Slack DMs, reschedule my 1-on-1 with Jenny, and buy an anniversary gift online.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 소요 시간 임의 추정: 음성 메모에 구체적인 소요 시간이 명시되지 않은 경우, 모델이 사용자의 실제 작업 속도를 반영하지 못하고 일반적인 휴리스틱에 기반해 분 단위 소요 시간을 임의로 생성합니다.
- 상대적 시간 기준점 모호성: 기준 날짜나 타임스탬프 없이 '점심 전까지', '피크 시간 전', '금요일 퇴근 전'과 같은 상대적 표현만 주어지면 미리알림 임포트용 ISO 8601 일시가 부정확하게 생성될 수 있습니다.
- 3대 미션 제약으로 인한 우선순위 왜곡: 원문에 4개 이상의 긴급 차단 요소(Blocker)가 포함되어 있어도 3대 핵심 미션 서식을 맞추기 위해 실제 긴급 작업이 보조 백로그로 강제 격하될 위험이 있습니다.

**[English Analysis]**
- Duration Hallucination: When raw voice memos omit task duration, the model infers minute estimates using generic heuristics rather than calibrated historical work velocity.
- Temporal Anchor Ambiguity: Relative deadline expressions (e.g., 'by lunch', 'before peak traffic', 'EOD Friday') without an explicit reference calendar timestamp lead to synthesized or inaccurate ISO 8601 reminder import payloads.
- Rule-of-Three Forcing: When raw input contains four or more equally urgent blockers, the model forcibly demotes genuine high-priority items into secondary backlog to satisfy the strict three-mission schema constraint.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,836 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Daily Execution Brief: Today / Sprint & Client Critical Delivery

## 1. Top 3 Core Missions (Today)
1. [ ] **Resolve Staging Database Table Locks**
   - Due: `12:00 PM` | Est: `45 mins` | First Step: Connect with Dave on Slack and inspect active PostgreSQL transaction locks on the user table.
2. [ ] **Review PR #412 (Payment Webhook Retries)**
   - Due: `13:30` | Est: `20 mins` | First Step: Pull Marcus's branch for PR #412 and inspect the retry backoff logic.
3. [ ] **Attach Q3 SLA Report & Dispatch Acme Corp Renewal**
   - Due: `15:00` | Est: `40 mins` | First Step: Open Metabase, export Acme Corp Q3 uptime logs to PDF, and upload into DocuSign envelope.

## 2. Quick Wins & Secondary Backlog
- [ ] **Approve Gusto PTO Requests** (Est: `5 mins`) — Clear pending leave approvals to keep HR records updated.
- [ ] **Order Conference Room B HDMI Cables** (Est: `5 mins`) — Purchase two replacement HDMI cables online.
- [ ] **Review Legal NDA Redlines** (Est: `15 mins`) — Lower priority; deferrable to tomorrow morning if schedule compresses.
- [ ] **Submit Expensify Receipts (Chicago Trip)** (Est: `20 mins`) — Must be completed before Friday EOD.

## 3. Structured Reminders Import Payload
- `Fix staging DB user table lock (Unblock QA)` | Due: `2024-10-24 12:00` | Priority: `High`
- `Review PR #412: Webhook retries for Marcus` | Due: `2024-10-24 13:30` | Priority: `High`
- `Send Acme Corp renewal agreement with Q3 SLA via DocuSign` | Due: `2024-10-24 15:00` | Priority: `High`
- `Approve Gusto team PTO requests` | Due: `2024-10-24 17:00` | Priority: `Medium`
- `Order 2x HDMI cables for Conf Room B` | Due: `2024-10-24 18:00` | Priority: `Low`
- `Reply to legal on NDA redlines` | Due: `2024-10-25 10:00` | Priority: `Low`
- `Submit Chicago travel expenses in Expensify` | Due: `2024-10-25 17:00` | Priority: `Medium`
```

</details>

---

<a name="video-metadata-packager"></a>
### 유튜브 영상 메타데이터 패키저 / YouTube Video Metadata Packager (`video-metadata-packager`)
- **Skill Spec**: [KO](skills/ko/01_automation/video-metadata-packager/SKILL.md) | [EN](skills/en/01_automation/video-metadata-packager/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 14분 분량의 튜토리얼 영상을 위한 완전한 유튜브 메타데이터 패키지를 생성해 주세요. 영상 요약: '1인 개발자를 위해 월 6달러 Hetzner VPS에 Docker Compose로 Supabase를 셀프 호스팅하고, Coolify를 이용한 자동 CI/CD 배포 구성, Wal-G를 통한 자동 S3 데이터베이스 백업, Cloudflare SSL을 적용한 커스텀 도메인 보안 연결까지 다루는 단계별 기술 가이드.' 타깃 시청자: 인디 해커, 풀스택 개발자, 비용 절감을 노리는 SaaS 빌더.
2. 8분 길이의 생산성 브이로그 영상을 위한 메타데이터를 생성해 주세요. 요약: '원격 근무 소프트웨어 엔지니어가 30일 동안 주 4일 근무제를 직접 실험한 후기: 절약된 시간, 스프린트 개발 속도 영향, 번아웃 회복 추이, 그리고 직속 팀장의 실제 반응.' 높은 CTR을 유도하는 호기심 자극형 제목을 포함할 것.
3. 교육용 심층 분석 영상을 위한 검색 최적화(SEO) 영상 패키지를 생성해 주세요: 'PostgreSQL MVCC(다중 버전 동시성 제어)의 내부 작동 원리, 테이블 블로트(bloat) 현상이 일어나는 이유, 그리고 대규모 쓰기 작업 환경에서 느린 쿼리를 해결하기 위한 autovacuum 튜닝 방법.'

**[English Prompts]**
1. Generate a complete YouTube metadata package for a 14-minute tutorial video. Video summary: 'A step-by-step technical guide for solo developers explaining how to self-host Supabase on a $6/month Hetzner VPS using Docker Compose, set up Coolify for automated CI/CD deployments, configure automated S3 database backups with Wal-G, and securely point a custom domain with Cloudflare SSL.' Target audience: indie hackers, full-stack developers, and budget-conscious SaaS builders.
2. Generate metadata for an 8-minute productivity vlog. Summary: 'Testing the 4-day workweek experiment for 30 days as a remote software engineer: tracking time saved, impact on sprint velocity, burnout recovery, and what my manager actually thought.' Include high-CTR curiosity titles.
3. Generate an SEO-rich video package for an educational breakdown: 'Deep dive into how PostgreSQL MVCC (Multi-Version Concurrency Control) actually works under the hood, why table bloat happens, and how to tune autovacuum to fix slow queries in high-write web apps.'

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- YouTube Data API를 직접 연동하지 않으므로 실시간 검색량, 알고리즘 트렌드, 키워드 경쟁률 데이터를 반영할 수 없습니다.
- 타임스탬프 구간 및 챕터 배분은 영상 오디오를 직접 분석한 것이 아니라 일반적인 튜토리얼 흐름에 맞춘 추정치입니다.
- 유튜브 플랫폼의 실제 메타데이터 규격(제목 100자 이내, 태그 총합 500자 이내 등) 초과 여부를 실시간으로 자동 검증하지 못합니다.

**[English Analysis]**
- Cannot query live YouTube search volume, algorithmic trends, or keyword competition metrics via the YouTube Data API.
- Timestamp intervals and section markers are estimated based on typical tutorial pacing, not actual video audio transcription.
- Lacks real-time YouTube platform validation to enforce strict 100-character title cutoffs or 500-character total tag limits automatically.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,845 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
## Video Title Candidates
1. Stop Paying $25+/mo for Managed Postgres: Self-Host Supabase for $6
2. Why Pay for Cloud DBs? Self-Hosting Supabase on Hetzner + Coolify
3. Supabase Self-Hosting Guide (Docker, Coolify CI/CD, Automated S3 Backups)
4. I Moved My SaaS Database to a $6 Hetzner VPS (Zero Downtime, Auto-Backups)
5. Managed Cloud Databases Are a Ripoff: Here's the Cheaper Alternative

## Video Description
Learn how to deploy and self-host a production-ready Supabase stack on a $6/month Hetzner VPS using Docker Compose and Coolify. In this practical guide, we walk through setting up automated CI/CD pipelines, configuring off-site S3 database backups with WAL-G, and securing your custom domain with Cloudflare SSL so you never have to overpay for cloud database tiers again.

Ideal for indie hackers, full-stack developers, and solo founders looking to cut infrastructure overhead without sacrificing enterprise-grade reliability.

### Timestamps & Key Links
- 00:00 - Introduction & The Cloud Cost Problem
- 01:45 - Provisioning a $6/mo Hetzner Cloud VPS
- 03:20 - Installing Coolify & Initial Docker Setup
- 05:40 - Deploying Supabase via Docker Compose Stack
- 08:15 - Pointing Custom Domains & Cloudflare SSL Setup
- 10:30 - Configuring Automated PostgreSQL S3 Backups (WAL-G)
- 12:45 - Testing Failover, Backups & Verification
- 13:30 - Production Hardening Checklist & Wrap-up

- 📦 Starter Docker Compose & Config Repo: https://github.com/example/supabase-hetzner-deploy
- ⚡ Hetzner Cloud ($20 Free Credit Link): https://hetzner.cloud/?ref=example
- 🛠️ Coolify Self-Hosting Platform: https://coolify.io

## Search Tags & Hashtags
- **Primary Tags**: `supabase self hosting`, `hetzner vps tutorial`, `coolify docker compose`, `postgres backup s3`, `indie hacker devops`
- **Hashtags**: `#Supabase` `#SelfHosting` `#IndieHacker`
```

</details>

---

<a name="video-transcript-digest"></a>
### 유튜브 영상 자막 압축 요약 및 타임라인 추출기 / Video Transcript Digest and Actionable Timeline Extractor (`video-transcript-digest`)
- **Skill Spec**: [KO](skills/ko/01_automation/video-transcript-digest/SKILL.md) | [EN](skills/en/01_automation/video-transcript-digest/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 'OpenTelemetry 및 분산 트레이싱을 활용한 복원력 있는 마이크로서비스 구축' 엔지니어링 키노트의 원시 자막 텍스트를 제공된 템플릿 규격에 맞추어 구조화된 요약본으로 생성해 주세요:

[00:00] 여러분 환영합니다. 오늘은 분산 아키텍처에서의 연쇄 장애 문제와 대용량 트래픽 쿠버네티스 클러스터에서 전통적인 로깅 방식이 실패하는 이유를 다룹니다.
[02:15] 서비스 A가 서비스 B를 호출할 때 B가 조용히 실패하거나 400ms 이상의 꼬리 지연시간을 겪으면 인그레스 컨트롤러가 연결을 끊습니다. 표준 APM은 99분위 지연을 보여주지만 비동기 큐 워커 전반의 루트 스팬을 상관분석하지 못합니다.
[05:40] 여기서 OpenTelemetry가 원격 측정 데이터 수집 표준화의 해법이 됩니다. HTTP 헤더와 Kafka 메타데이터에 통합 트레이스 컨텍스트 주입을 계측함으로써 모든 트랜잭션이 결정론적 트레이스 ID와 스팬 계층을 유지합니다.
[09:12] 지난 분기 마이그레이션 벤치마크를 보겠습니다. eBPF 기반 수집기를 도입해 에이전트 오버헤드를 CPU 8%에서 1.2% 미만으로 줄였고, 코드 수정 없는 자동 계측을 통해 Spring Boot 및 Node.js 서비스의 80%를 처리했습니다.
[13:30] 하지만 샘플링 전략을 잘못 세우면 비용이 폭증합니다. 프로덕션에서 헤드 기반 무작위 샘플링을 쓰지 마세요. 저희는 OpenTelemetry Collector 게이트웨이에서 테일 기반 샘플링을 구현하여 ClickHouse에 저장하기 전 오류율과 500ms 이상 지연 트레이스를 필터링했습니다.
[17:05] 이번 주에 실행해야 할 핵심 사항을 정리합니다: 인그레스 트레이스 헤더 전파를 감사하고, 메모리 밸러스트 제한이 적용된 데몬셋 모드로 OTel Collector를 배포하며, HTTP 5xx 응답을 우선 타겟팅하는 테일 기반 샘플링 규칙을 구성하십시오.
2. B2B 엔터프라이즈 세일즈 주기를 다룬 10분짜리 창업가 인터뷰 자막을 3문장 핵심 요약, 타임스탬프 기반 주요 논점, 즉각적인 영업 워크플로우 개선 과제로 압축 정리해 주세요.
3. 오픈소스 LLM의 LoRA 파인튜닝을 다룬 머신러닝 튜토리얼의 유튜브 자동생성 자막을 3문장 핵심 요약, 시간대별 마일스톤, 실습 환경 구축 액션 플랜으로 구조화해 주세요.

**[English Prompts]**
1. Process this raw transcript snippet from an engineering keynote titled 'Building Resilient Microservices with Distributed Tracing and OpenTelemetry' and generate the structured digest following your exact template:

[00:00] Welcome everyone. Today we are tackling cascading failures across distributed architectures and why traditional logging fails in high-throughput Kubernetes clusters.
[02:15] When service A calls service B, and service B fails silently or experiences tail latency over 400ms, your ingress controller drops connections. Standard APM tools show 99th percentile degradation, but they cannot correlate the root span across asynchronous queue workers.
[05:40] This is where OpenTelemetry standardizes our telemetry collection. By instrumenting unified trace context injection into HTTP headers and Kafka metadata, every transaction carries a deterministic trace ID and span hierarchy.
[09:12] Let's look at the benchmarks from our migration last quarter. Adopting the eBPF-based collector cut our agent overhead from 8% CPU down to under 1.2%, while zero-code auto-instrumentation handled 80% of our Spring Boot and Node.js microservices without code modifications.
[13:30] However, sampling is where teams bankrupt themselves. Do not use head-based random sampling in production. We implemented tail-based sampling on the OpenTelemetry Collector gateway, evaluating error rates and traces slower than 500ms before persisting to ClickHouse.
[17:05] To summarize what you should do this week: Audit your ingress trace header propagation, deploy the OpenTelemetry Collector in agent daemonset mode with memory ballast limits, and configure tail-based sampling rules targeting HTTP 5xx responses first.
2. Summarize this 10-minute founder interview transcript discussing B2B enterprise sales cycles, extracting the 3-sentence thesis, key timestamped discussion points, and immediate sales workflow improvements.
3. Digest this auto-generated YouTube transcript of a machine learning tutorial on LoRA fine-tuning for open-source LLMs into the structured executive summary, chronological milestones, and actionable setup steps.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 원본 자막에 타임코드 태그가 명시되어 있지 않거나 조각난 자동 음성 인식 텍스트인 경우 타임스탬프 왜곡 및 오차가 발생할 수 있습니다.
- 약 25,000 단어를 초과하는 장시간 영상의 경우 컨텍스트 윈도우 한계로 인해 영상 중반부의 세부 기술 마일스톤이 누락되거나 축약될 수 있습니다.
- 유튜브 자동 생성 자막의 발음 오인식으로 왜곡된 전문 기술 용어나 고유명사는 추가 맥락 없이는 정확한 본래 명칭으로 복원되지 못할 수 있습니다.

**[English Analysis]**
- Timestamp hallucinations can occur if the source transcript lacks explicit timecode brackets or contains fragmented, non-sequential automated speech-to-text chunks.
- Very long transcripts (exceeding 25,000 words) may trigger context truncation or lose granular tactical milestones from the middle third of the video.
- Complex technical jargon or proprietary brand names phonetically mangled by automated YouTube captioning cannot be corrected without manual review or external context injection.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,439 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Video Summary: Building Resilient Microservices with Distributed Tracing and OpenTelemetry

## 1. Executive Summary (3 Sentences)
- **Thesis**: Traditional centralized logging and standard APM tools fail to isolate cascading latency and silent failures across asynchronous, high-throughput microservice architectures.
- **Evidence**: Transitioning to unified OpenTelemetry trace context propagation with an eBPF collector reduced agent CPU overhead from 8% to 1.2% while enabling automated instrumentation across 80% of enterprise microservices.
- **Conclusion**: Adopting tail-based trace sampling at the collector gateway prevents unsustainable telemetry storage costs while guaranteeing the capture of critical latency spikes and HTTP 5xx errors.

## 2. Chronological Milestones
- `[00:00]` **Cascading Failure Blindspots**: Traditional cluster logging mechanisms fail to surface cross-service failure dependencies in high-throughput Kubernetes environments.
- `[02:15]` **Tail Latency Correlation Breakdown**: Standard APM aggregates miss root-span correlations when downstream dependencies exceed 400ms latency or fail silently across async queues.
- `[05:40]` **Unified Context Injection via OpenTelemetry**: Injecting deterministic trace IDs across HTTP headers and Kafka metadata establishes strict span hierarchies across disparate distributed services.
- `[09:12]` **eBPF Migration and Zero-Code Automation**: Deploying eBPF-based instrumentation cut CPU agent consumption down to 1.2% and automated tracing across 80% of legacy workloads without code modification.
- `[13:30]` **Tail-Based Sampling Implementation**: Replacing head-based sampling with gateway-level tail sampling filters for 500ms+ latency and error states before committing data to ClickHouse.
- `[17:05]` **Actionable Rollout Directives**: Engineering teams must audit header propagation, deploy daemonset collectors with memory ballasting, and establish error-first sampling filters.

## 3. Action Plan
1. Audit ingress controllers and message brokers to confirm W3C trace context header propagation is intact across all boundary proxies.
2. Deploy the OpenTelemetry Collector as a Kubernetes DaemonSet with explicit memory ballast and limit configurations to maintain sub-2% node CPU utilization.
3. Configure tail-based sampling rules on the collector gateway to store 100% of HTTP 5xx responses and traces with durations exceeding 500ms into ClickHouse.
```

</details>

---

<a name="web-article-cleaner"></a>
### 웹페이지 본문 정제기 / Web Article Content Cleaner (`web-article-cleaner`)
- **Skill Spec**: [KO](skills/ko/01_automation/web-article-cleaner/SKILL.md) | [EN](skills/en/01_automation/web-article-cleaner/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 기술 뉴스 사이트에서 스크랩한 다음 원시 텍스트 덤프를 출력 템플릿에 맞추어 군더더기 없는 마크다운 문서로 정제해 주세요. 네비게이션 링크, 쿠키 동의 배너, 뉴스레터 구독 팝업, 광고 배너, 소셜 공유 위젯을 모두 제거하고 기술 세부 정보, 인용구, 논리적 전개 맥락은 그대로 보존해야 합니다:

```text
MENU | TECHRADAR INSIGHTS | SEARCH [Q] | SUBSCRIBE FOR $1/MO
Home > Cloud & Infrastructure > Storage Innovations
[ADVERTISEMENT: Accelerate your Kubernetes pipelines with CloudScale IO - Free Trial Today!]
Cookie Notice: We use third-party cookies to optimize user engagement and targeted ads. [Accept All] [Manage Preferences]

Published on October 24, 2024 | By Dr. Marcus Vance, Senior Distributed Systems Analyst
Share on Twitter | Share on LinkedIn | Comments (42)

NVMe-oF and CXL: Redefining High-Performance Storage Architecture in Next-Gen Data Centers

Modern hyperscale data centers are reaching an inflection point where conventional SAS and SATA storage fabrics can no longer satisfy the throughput demands of massive language model training clusters. With PCI Express Gen 5 and Gen 6 entering mainstream deployment, NVMe over Fabrics (NVMe-oF) coupled with Compute Express Link (CXL) memory pooling represents the biggest architectural shift in server topology since the advent of enterprise solid-state drives.

[PROMOTIONAL BREAK: Looking for certified SRE talent? Post your job on TechJobs Hub for 50% off.]

The Latency Bottleneck in Distributed Inference

When scaling distributed inference across thousands of GPU nodes, I/O wait states frequently dominate execution time. Traditional TCP-based block storage layers introduce kernel-space context switching overheads that easily push p99 latencies past 2.5 milliseconds. "In production transformer deployments, storage latency variability cascades into idle compute cycles," explains Sarah Chen, VP of Infrastructure at TensorGrid. "Switching to NVMe-oF over RDMA (RoCEv2) reduced our tail latency by 68%, stabilizing our p99 around 800 microseconds under peak concurrency."

Sign up for our Daily Tech Briefing! Enter your email: [___________] [Submit]
Don't miss our upcoming webinar on FinOps optimization.

Bridging Memory and Storage via CXL 3.0

While NVMe-oF addresses persistent tier interconnects, CXL 3.0 introduces coherent memory sharing and pooling across heterogeneous computing sockets. Key architectural advantages include:
1. Direct byte-addressable access over PCIe Gen 5 physical layers.
2. Hardware-enforced cache coherency across CPU host memories and accelerator memory pools.
3. Dynamic memory sharing with multi-headed device (MHD) controllers, slashing DRAM over-provisioning by up to 35% across multi-tenant racks.

Trending Now:
- Top 10 Best Keyboards for Developers
- Why Silicon Valley is Betting on Geothermal
- Sponsored: How Acme Corp scaled to 10M MAU

Deploying CXL switches allows physical memory to be detached from fixed NUMA nodes and allocated on demand to memory-starved GPU clusters, turning what used to be a rigid hardware boundary into a composable fabric.

Summary of Deployment Considerations

Infrastructure engineering teams evaluating this transition must weigh the initial CapEx against long-term power efficiency. Upgrading top-of-rack switches to support 400GbE RoCEv2 requires meticulous Priority Flow Control (PFC) and Explicit Congestion Notification (ECN) tuning to prevent buffer bloat and RDMA deadlocks. However, the consolidation benefits—specifically the reduction of unutilized stranded memory—typically yield an amortized ROI within 14 to 18 months.

Copyright 2024 TechRadar Insights Media Group. All rights reserved. No part of this publication may be reproduced without prior written consent. Privacy Policy | Terms of Service | Contact Us | Do Not Sell My Personal Information
```
2. 데이터베이스 마이그레이션에 관한 이커머스 엔지니어링 블로그의 복사 텍스트에서 사이드바의 작성자 소개, 추천 글 캐러셀, 하단 푸터 링크를 제거하고, 코드 스니펫과 스키마 비교 표를 온전히 보존하여 정제해 주세요.
3. 스크랩한 바이오메디컬 연구 리뷰 기사 텍스트에서 유료 구독 경고, 기관 로그인 안내, 인용 메타데이터 버튼, 광고 삽입 단락을 제거하고, 표준 'Executive Brief' 및 'Sanitized Content' 마크다운 양식으로 재구성해 주세요.

**[English Prompts]**
1. Clean the following raw scraped text dump from a tech news website into a distraction-free markdown document according to the output template. Strip all navigation links, cookie banners, newsletter subscription popups, promotional banners, and social share widgets while preserving technical details, quotes, and chronological narrative:

```text
MENU | TECHRADAR INSIGHTS | SEARCH [Q] | SUBSCRIBE FOR $1/MO
Home > Cloud & Infrastructure > Storage Innovations
[ADVERTISEMENT: Accelerate your Kubernetes pipelines with CloudScale IO - Free Trial Today!]
Cookie Notice: We use third-party cookies to optimize user engagement and targeted ads. [Accept All] [Manage Preferences]

Published on October 24, 2024 | By Dr. Marcus Vance, Senior Distributed Systems Analyst
Share on Twitter | Share on LinkedIn | Comments (42)

NVMe-oF and CXL: Redefining High-Performance Storage Architecture in Next-Gen Data Centers

Modern hyperscale data centers are reaching an inflection point where conventional SAS and SATA storage fabrics can no longer satisfy the throughput demands of massive language model training clusters. With PCI Express Gen 5 and Gen 6 entering mainstream deployment, NVMe over Fabrics (NVMe-oF) coupled with Compute Express Link (CXL) memory pooling represents the biggest architectural shift in server topology since the advent of enterprise solid-state drives.

[PROMOTIONAL BREAK: Looking for certified SRE talent? Post your job on TechJobs Hub for 50% off.]

The Latency Bottleneck in Distributed Inference

When scaling distributed inference across thousands of GPU nodes, I/O wait states frequently dominate execution time. Traditional TCP-based block storage layers introduce kernel-space context switching overheads that easily push p99 latencies past 2.5 milliseconds. "In production transformer deployments, storage latency variability cascades into idle compute cycles," explains Sarah Chen, VP of Infrastructure at TensorGrid. "Switching to NVMe-oF over RDMA (RoCEv2) reduced our tail latency by 68%, stabilizing our p99 around 800 microseconds under peak concurrency."

Sign up for our Daily Tech Briefing! Enter your email: [___________] [Submit]
Don't miss our upcoming webinar on FinOps optimization.

Bridging Memory and Storage via CXL 3.0

While NVMe-oF addresses persistent tier interconnects, CXL 3.0 introduces coherent memory sharing and pooling across heterogeneous computing sockets. Key architectural advantages include:
1. Direct byte-addressable access over PCIe Gen 5 physical layers.
2. Hardware-enforced cache coherency across CPU host memories and accelerator memory pools.
3. Dynamic memory sharing with multi-headed device (MHD) controllers, slashing DRAM over-provisioning by up to 35% across multi-tenant racks.

Trending Now:
- Top 10 Best Keyboards for Developers
- Why Silicon Valley is Betting on Geothermal
- Sponsored: How Acme Corp scaled to 10M MAU

Deploying CXL switches allows physical memory to be detached from fixed NUMA nodes and allocated on demand to memory-starved GPU clusters, turning what used to be a rigid hardware boundary into a composable fabric.

Summary of Deployment Considerations

Infrastructure engineering teams evaluating this transition must weigh the initial CapEx against long-term power efficiency. Upgrading top-of-rack switches to support 400GbE RoCEv2 requires meticulous Priority Flow Control (PFC) and Explicit Congestion Notification (ECN) tuning to prevent buffer bloat and RDMA deadlocks. However, the consolidation benefits—specifically the reduction of unutilized stranded memory—typically yield an amortized ROI within 14 to 18 months.

Copyright 2024 TechRadar Insights Media Group. All rights reserved. No part of this publication may be reproduced without prior written consent. Privacy Policy | Terms of Service | Contact Us | Do Not Sell My Personal Information
```
2. Clean this raw copy-paste from an e-commerce engineering post about database migration, removing all sidebar author bios, recommended read carousels, and footer links while maintaining the code snippet and schema comparison table.
3. Sanitize this scraped biomedical research review article text by eliminating paywall alerts, institutional login prompts, citation metadata buttons, and ad placements, structuring the output into the standard Executive Brief and Sanitized Content markdown format.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 네이티브 광고 오분류: 명시적 광고 태그 없이 본문과 동일한 문체로 정교하게 작성된 스폰서 인라인 콘텐츠는 제거되지 않고 본문으로 유지될 수 있습니다.
- 파편화된 텍스트 병합 한계: 스크랩 과정에서 본문 중간의 이미지나 배너로 인해 문단이 불규칙하게 끊긴 경우, 매끄러운 단일 문장으로 재결합되지 못할 수 있습니다.
- 복잡한 ASCII 표 변환 오류: 줄바꿈이 심하게 깨져 원본 열 구분이 손상된 표 텍스트는 표준 마크다운 표로 변환 시 열이 뒤섞일 수 있습니다.

**[English Analysis]**
- Native ad blending: Highly integrated 'sponsored content' written in the exact journalistic tone as the main article may not be detected as noise if explicit advertising tags are missing.
- Fragmented text reassembly: If OCR or scraping breaks paragraphs midway across inline graphics, sentences may suffer from awkward joining or fragmented phrasing.
- Complex ASCII tables: Heavily distorted, unaligned tabular text in raw dumps may fail to convert into well-formed GitHub-flavored markdown tables without manual column alignment.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (3,704 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# NVMe-oF and CXL: Redefining High-Performance Storage Architecture in Next-Gen Data Centers

> **Source**: Dr. Marcus Vance, Senior Distributed Systems Analyst / TechRadar Insights / October 24, 2024

## Executive Brief
- **Primary Subject**: The transition of hyperscale data centers from conventional SAS/SATA fabrics to NVMe over Fabrics (NVMe-oF) and Compute Express Link (CXL) 3.0 architectures.
- **Core Argument**: Combining NVMe-oF over RoCEv2 with CXL memory pooling resolves critical distributed inference latency bottlenecks and eliminates stranded rack-level memory allocations.

## Sanitized Content
### Architectural Shift in Hyperscale Fabrics
Modern hyperscale data centers are reaching an inflection point where conventional SAS and SATA storage fabrics can no longer satisfy the throughput demands of massive language model training clusters. With PCI Express Gen 5 and Gen 6 entering mainstream deployment, NVMe over Fabrics (NVMe-oF) coupled with Compute Express Link (CXL) memory pooling represents the biggest architectural shift in server topology since the advent of enterprise solid-state drives.

### The Latency Bottleneck in Distributed Inference
When scaling distributed inference across thousands of GPU nodes, I/O wait states frequently dominate execution time. Traditional TCP-based block storage layers introduce kernel-space context switching overheads that easily push p99 latencies past 2.5 milliseconds. 

"In production transformer deployments, storage latency variability cascades into idle compute cycles," explains Sarah Chen, VP of Infrastructure at TensorGrid. "Switching to NVMe-oF over RDMA (RoCEv2) reduced our tail latency by 68%, stabilizing our p99 around 800 microseconds under peak concurrency."

### Bridging Memory and Storage via CXL 3.0
While NVMe-oF addresses persistent tier interconnects, CXL 3.0 introduces coherent memory sharing and pooling across heterogeneous computing sockets. Key architectural advantages include:

1. Direct byte-addressable access over PCIe Gen 5 physical layers.
2. Hardware-enforced cache coherency across CPU host memories and accelerator memory pools.
3. Dynamic memory sharing with multi-headed device (MHD) controllers, slashing DRAM over-provisioning by up to 35% across multi-tenant racks.

Deploying CXL switches allows physical memory to be detached from fixed NUMA nodes and allocated on demand to memory-starved GPU clusters, turning what used to be a rigid hardware boundary into a composable fabric.

### Summary of Deployment Considerations
Infrastructure engineering teams evaluating this transition must weigh the initial CapEx against long-term power efficiency. Upgrading top-of-rack switches to support 400GbE RoCEv2 requires meticulous Priority Flow Control (PFC) and Explicit Congestion Notification (ECN) tuning to prevent buffer bloat and RDMA deadlocks. However, the consolidation benefits—specifically the reduction of unutilized stranded memory—typically yield an amortized ROI within 14 to 18 months.

## Key Takeaways
- **I/O Latency Reduction**: Migrating from traditional TCP storage to NVMe-oF over RoCEv2 drops p99 inference latency from over 2.5 ms to approximately 800 µs (a 68% reduction).
- **Memory Efficiency**: CXL 3.0 multi-headed device controllers enable dynamic memory pooling, reducing stranded DRAM over-provisioning by up to 35%.
- **Network Prerequisites**: Production 400GbE RoCEv2 deployments mandate strict Priority Flow Control (PFC) and Explicit Congestion Notification (ECN) tuning to prevent deadlocks.
- **Economic Payback**: Capital expenditure investments in composable CXL and NVMe-oF fabrics project full amortization within a 14 to 18-month operating window.
```

</details>

---

## 02. Practical Utilities (Everyday Utilities)

<a name="ai-meeting-room"></a>
### 로컬 멀티 AI 회의실 웹 애플리케이션 / Local Multi-AI Meeting Room Web Application (`ai-meeting-room`)
- **Skill Spec**: [KO](skills/ko/02_utility/ai-meeting-room/SKILL.md) | [EN](skills/en/02_utility/ai-meeting-room/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 표준 파이썬 및 브라우저 기술(순수 HTML/CSS/JS)을 활용하여 외부 런타임 종속성이 전혀 없는 프로덕션급 단일 로컬 AI 회의실 웹 애플리케이션을 제작해 주세요. 2~4명의 참가자를 선택하고, 각 참가자에게 AI 공급자(OpenAI, DeepSeek, Nebius, Azure OpenAI, Vertex AI Express 또는 모의 테스트 모드)를 지정하며, 모델명 및 토큰당 입/출력 단가를 설정하고, 라운드 수(1~20)를 지정할 수 있어야 합니다. 자동 진행자 요약 및 수동 스텝별 지시 모드, 에러 정책(질의/중단/계속), 실시간 비용 추정, 키를 디스크나 로그에 저장하지 않는 클라이언트 UI 기반 API 키 입력, HTML 회의록 다운로드를 완벽히 지원하는 server.py 및 웹 에셋 전체 코드와 실행 방법을 제공해 주세요.
2. 127.0.0.1에 안전하게 바인딩되고, 들어오는 JSON 페이로드를 검증하며, API 키를 디스크에 남기지 않고 OpenAI 및 DeepSeek 공급자 라우팅을 처리하고, 다중 턴 토론 및 진행자 요약을 검증하는 모의 시뮬레이터를 갖춘 AI 회의실 핵심 프록시 서버 및 테스트 엔진을 파이썬으로 구현해 주세요.
3. 참가자 설정 모달, 모델/제공자 배지가 포함된 실시간 대화 피드, 수동 턴 개입 프롬프트, 모의 테스트 모드 워터마크, 스타일이 임베딩된 회의록 HTML 파일 다운로드 기능을 제공하는 AI 회의실 프런트엔드 UI 및 익스포터 스크립트를 작성해 주세요.

**[English Prompts]**
1. Build a production-grade, standalone local AI meeting room web application with zero external runtime dependencies using standard Python and browser technologies (vanilla HTML/CSS/JS). The application must allow selecting 2–4 participants, assigning each an AI provider (OpenAI, DeepSeek, Nebius, Azure OpenAI, Vertex AI Express, or Mock/Test Mode), configuring model names and per-participant token input/output rates, and setting round counts (1–20). Support automatic moderation and manual step-by-step guidance modes, error-handling policies (ask/stop/continue), live cost estimation, client-side API key management via UI without persisting keys to disk or logs, and transcript HTML export. Provide the complete code across server.py and web assets, with run instructions.
2. Implement the core server proxy and mock testing engine for an AI meeting room in Python that binds securely to 127.0.0.1, validates incoming JSON payloads, handles provider routing for OpenAI and DeepSeek without writing API keys to disk, and includes a full mock simulation generator verifying multi-turn discussion and moderator summaries.
3. Generate the frontend user interface and transcript exporter for an AI meeting room that features a participant setup modal, live conversational message feed with model/provider badges, manual turn-intervention prompts, simulated test mode watermarks, and an HTML file download with embedded styles.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 표준 파이썬 내장 HTTP 서버 구현의 제약으로 인해 서버 전송 이벤트(SSE) 기반 실시간 토큰 스트리밍이 지원되지 않으며, 모델의 응답이 완전히 생성된 후 화면에 일괄 렌더링됩니다.
- Vertex AI Express 및 Azure OpenAI는 배포명 및 리전별 전용 엔드포인트 URL 구조를 요구하므로, 외부 클라우드 SDK 없이 순수 REST URL을 사용자가 정확히 입력해야 정상 통신됩니다.
- 보안을 위해 영구 데이터베이스 없이 인메모리(RAM) 루프백 방식으로만 작동하므로, 브라우저 창을 닫거나 서버를 재시작하면 입력한 API 키와 저장하지 않은 회의록이 완전히 소멸됩니다.

**[English Analysis]**
- Native multi-tenant streaming (Server-Sent Events/SSE) is not implemented in the minimal stdlib Python HTTP server; responses render atomically upon complete token generation.
- Vertex AI Express and Azure OpenAI endpoints require explicit custom REST URL structures and appropriate region deployments, which cannot be automatically discovered without proprietary cloud SDK dependencies.
- Because the server operates purely on loopback without persistent storage, closing the browser tab or restarting the server will permanently discard active in-memory API keys and unsaved transcripts.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (30,885 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Project Structure

Create a clean directory named `ai-meeting-room` and place the following files inside:
- `server.py` (Local loopback HTTP server with zero external dependencies)
- `index.html` (Complete responsive frontend)
- `start.bat` (Windows launcher)
- `start.sh` (macOS/Linux launcher)

---

### 1. `server.py`

```python
#!/usr/bin/env python3
"""
AI Meeting Room - Local Secure Loopback Proxy & Web Server
Zero external dependencies. Python 3.8+ standard library.
"""

import os
import sys
import json
import urllib.request
import urllib.error
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler

HOST = "127.0.0.1"
PORT = 8765


def is_safe_origin(origin_header, host_header):
    if not origin_header:
        return True
    parsed = urllib.parse.urlparse(origin_header)
    return parsed.hostname in ("127.0.0.1", "localhost")


class MeetingRoomHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        # Suppress sensitive logs; do not log query or auth contents
        sys.stderr.write("[%s] %s\n" % (self.log_date_time_string(), format % args))

    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Content-Security-Policy", "default-src 'self' 'unsafe-inline' data:;")
        super().end_headers()

    def do_POST(self):
        origin = self.headers.get("Origin")
        host = self.headers.get("Host")
        if not is_safe_origin(origin, host):
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b'{"error": "Forbidden: Cross-origin request denied."}')
            return

        if self.path == "/api/chat":
            content_length = int(self.headers.get("Content-Length", 0))
            raw_body = self.rfile.read(content_length)
            try:
                payload = json.loads(raw_body.decode("utf-8"))
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": f"Invalid JSON payload: {str(e)}"}).encode("utf-8"))
                return

            response_data, status_code = self.handle_chat_request(payload)
            self.send_response(status_code)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(response_data).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

    def handle_chat_request(self, payload):
        provider = payload.get("provider")
        model = payload.get("model", "")
        messages = payload.get("messages", [])
        api_key = payload.get("apiKey", "").strip()
        endpoint = payload.get("endpoint", "").strip()
        is_test_mode = payload.get("isTestMode", False)

        # Test Mode (Mock Generator)
        if is_test_mode or provider == "mock":
            role_desc = payload.get("participantName", "AI Participant")
            last_msg = messages[-1]["content"] if messages else "None"
            mock_reply = (
                f"[SIMULATED RESPONSE] {role_desc} analyzing topic: "
                f"Regarding prior points, I propose a balanced solution prioritizing reliability and cost efficiency."
            )
            return {
                "content": mock_reply,
                "usage": {"prompt_tokens": 120, "completion_tokens": 45},
                "provider": "Mock Test Mode",
                "model": "simulated-v1",
                "is_mock": True
            }, 200

        if not api_key:
            return {"error": f"API Key is required for provider: {provider}"}, 400

        # Prepare upstream call based on provider
        headers = {"Content-Type": "application/json"}
        req_data = {"model": model, "messages": messages, "temperature": 0.7}

        try:
            if provider == "openai":
                target_url = "https://api.openai.com/v1/chat/completions"
                headers["Authorization"] = f"Bearer {api_key}"
            elif provider == "deepseek":
                target_url = "https://api.deepseek.com/chat/completions"
                headers["Authorization"] = f"Bearer {api_key}"
            elif provider == "nebius":
                target_url = "https://api.studio.nebius.ai/v1/chat/completions"
                headers["Authorization"] = f"Bearer {api_key}"
            elif provider == "azure":
                if not endpoint:
                    return {"error": "Azure OpenAI requires an Endpoint URL"}, 400
                target_url = endpoint
                headers["api-key"] = api_key
                del req_data["model"]
            elif provider == "vertex":
                if not endpoint:
                    return {"error": "Vertex Express requires a direct REST URL"}, 400
                target_url = endpoint
                headers["Authorization"] = f"Bearer {api_key}"
            else:
                return {"error": f"Unsupported provider: {provider}"}, 400

            req = urllib.request.Request(
                target_url,
                data=json.dumps(req_data).encode("utf-8"),
                headers=headers,
                method="POST"
            )

            with urllib.request.urlopen(req, timeout=60) as resp:
                resp_body = resp.read().decode("utf-8")
                parsed = json.loads(resp_body)

                # Standard OpenAI compatibility parser
                content = parsed["choices"][0]["message"]["content"]
                usage = parsed.get("usage", {"prompt_tokens": 0, "completion_tokens": 0})
                return {
                    "content": content,
                    "usage": usage,
                    "provider": provider,
                    "model": model,
                    "is_mock": False
                }, 200

        except urllib.error.HTTPError as he:
            err_msg = he.read().decode("utf-8", errors="replace")
            return {"error": f"Provider HTTP {he.code}: {err_msg}"}, he.code
        except Exception as ex:
            return {"error": f"Connection error: {str(ex)}"}, 500


def run():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer((HOST, PORT), MeetingRoomHandler)
    print(f"=======================================================")
    print(f" AI Meeting Room Server running locally")
    print(f" Web URL : http://{HOST}:{PORT}/")
    print(f" Security: Loopback bound only. Keys kept client-side.")
    print(f" Press Ctrl+C to terminate")
    print(f"=======================================================")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        server.server_close()


if __name__ == "__main__":
    run()
```

---

### 2. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Meeting Room (Local)</title>
  <style>
    :root {
      --bg-main: #0f172a;
      --bg-panel: #1e293b;
      --border: #334155;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #3b82f6;
      --primary-hover: #2563eb;
      --danger: #ef4444;
      --success: #10b981;
      --warning: #f59e0b;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    body { background: var(--bg-main); color: var(--text-main); display: flex; height: 100vh; overflow: hidden; }
    
    /* Sidebar Setup */
    .sidebar {
      width: 440px;
      background: var(--bg-panel);
      border-right: 1px solid var(--border);
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow-y: auto;
    }
    h2, h3 { font-size: 1.1rem; color: #e2e8f0; font-weight: 600; }
    label { font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 4px; }
    input, select, textarea {
      width: 100%;
      background: #0f172a;
      border: 1px solid var(--border);
      color: #fff;
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 0.85rem;
    }
    input:focus, select:focus, textarea:focus { outline: none; border-color: var(--primary); }
    .btn {
      padding: 10px 14px;
      border-radius: 6px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.85rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    .btn-primary { background: var(--primary); color: #fff; }
    .btn-primary:hover { background: var(--primary-hover); }
    .btn-danger { background: var(--danger); color: #fff; }
    .btn-secondary { background: #334155; color: #fff; }
    .btn-secondary:hover { background: #475569; }
    
    /* Participant Card */
    .participant-card {
      background: #0f172a;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .participant-card .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .rate-inputs { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    
    /* Main Stage */
    .main-stage {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: #020617;
    }
    .top-bar {
      background: var(--bg-panel);
      padding: 12px 24px;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cost-badge {
      background: #020617;
      border: 1px solid #1e293b;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
    }
    .messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .msg-bubble {
      background: var(--bg-panel);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px 18px;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .msg-bubble.moderator {
      border-color: #f59e0b;
      background: #1e1b11;
    }
    .msg-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.75rem;
    }
    .badge {
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.7rem;
    }
    .badge-provider { background: #334155; color: #38bdf8; }
    .badge-mock { background: #7c2d12; color: #fca5a5; }
    .msg-content {
      font-size: 0.9rem;
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: break-word;
    }
    
    /* Interaction Panel */
    .control-panel {
      padding: 16px 24px;
      background: var(--bg-panel);
      border-top: 1px solid var(--border);
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .user-guidance { flex: 1; }
    .disclaimer {
      font-size: 0.7rem;
      color: var(--text-muted);
      margin-top: 6px;
    }
  </style>
</head>
<body>

  <!-- Left Configuration Panel -->
  <div class="sidebar">
    <div>
      <h2>AI Meeting Room</h2>
      <p style="font-size: 0.75rem; color: var(--text-muted);">Local Loopback Server | Keys stored in RAM only</p>
    </div>

    <div>
      <label>Topic / Goal</label>
      <textarea id="topicInput" rows="2" placeholder="E.g., Design a scalable caching layer for microservices."></textarea>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      <div>
        <label>Total Rounds (1-20)</label>
        <input type="number" id="roundsInput" min="1" max="20" value="2">
      </div>
      <div>
        <label>Execution Mode</label>
        <select id="modeSelect">
          <option value="auto">Automatic</option>
          <option value="manual">Manual (Pause/Direct)</option>
        </select>
      </div>
    </div>

    <div>
      <label>On Error Policy</label>
      <select id="errorPolicySelect">
        <option value="ask">Ask User</option>
        <option value="stop">Stop Meeting</option>
        <option value="continue">Skip & Continue</option>
      </select>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
      <h3>Participants (2–4)</h3>
      <button class="btn btn-secondary" id="addParticipantBtn" style="padding: 4px 8px; font-size: 0.75rem;">+ Add</button>
    </div>

    <div id="participantsList" style="display: flex; flex-direction: column; gap: 12px;"></div>

    <div style="display: flex; gap: 8px; margin-top: auto;">
      <button class="btn btn-primary" id="startBtn" style="flex: 1;">Start Meeting</button>
      <button class="btn btn-danger" id="stopBtn" style="display: none;">Stop</button>
    </div>
  </div>

  <!-- Main Conversation Area -->
  <div class="main-stage">
    <div class="top-bar">
      <div>
        <span id="statusIndicator" style="font-size: 0.85rem; font-weight: 600; color: #10b981;">&#9679; Ready</span>
        <span id="roundIndicator" style="margin-left: 12px; font-size: 0.8rem; color: var(--text-muted);">Round 0 / 0</span>
      </div>
      <div style="display: flex; gap: 12px; align-items: center;">
        <div class="cost-badge" id="costBadge">Est. Cost: $0.000000 (0 tokens)</div>
        <button class="btn btn-secondary" id="exportBtn" style="padding: 6px 12px;">Export HTML</button>
      </div>
    </div>

    <div class="messages-container" id="messagesArea"></div>

    <div class="control-panel" id="manualPanel" style="display: none;">
      <input type="text" class="user-guidance" id="userGuidanceInput" placeholder="Provide optional steering or guidance for the next turn...">
      <button class="btn btn-primary" id="continueRoundBtn">Proceed Turn</button>
    </div>

    <div style="padding: 8px 24px; background: #020617; border-top: 1px solid var(--border);">
      <div class="disclaimer">
        Cost is an estimate based on entered input/output rates and reported token usage. Actual invoices may differ due to provider caching discounts, tiered commitments, or taxes. Topic and message history are sent strictly to specified providers.
      </div>
    </div>
  </div>

  <script>
    const STATE = {
      running: false,
      stopRequested: false,
      currentRound: 0,
      totalRounds: 2,
      mode: 'auto',
      errorPolicy: 'ask',
      topic: '',
      participants: [],
      transcript: [],
      totalCost: 0,
      totalTokens: 0,
      hasUnknownCost: false
    };

    // Preset Default Participants
    const DEFAULT_PARTICIPANTS = [
      {
        name: "Architect Alice",
        provider: "mock",
        model: "simulated-v1",
        apiKey: "",
        endpoint: "",
        inRate: 0.15,
        outRate: 0.60
      },
      {
        name: "Security Bob",
        provider: "mock",
        model: "simulated-v1",
        apiKey: "",
        endpoint: "",
        inRate: 0.15,
        outRate: 0.60
      }
    ];

    function renderParticipants() {
      const container = document.getElementById('participantsList');
      container.innerHTML = '';
      STATE.participants.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'participant-card';
        card.innerHTML = `
          <div class="header">
            <input type="text" value="${escapeHtml(p.name)}" style="width: 60%; font-weight: bold;" onchange="updateP(${idx}, 'name', this.value)">
            ${STATE.participants.length > 2 ? `<button class="btn btn-danger" style="padding: 2px 6px; font-size: 0.7rem;" onclick="removeP(${idx})">Remove</button>` : ''}
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div>
              <label>Provider</label>
              <select onchange="updateP(${idx}, 'provider', this.value)">
                <option value="mock" ${p.provider === 'mock' ? 'selected' : ''}>Mock / Test Mode</option>
                <option value="openai" ${p.provider === 'openai' ? 'selected' : ''}>OpenAI</option>
                <option value="deepseek" ${p.provider === 'deepseek' ? 'selected' : ''}>DeepSeek</option>
                <option value="nebius" ${p.provider === 'nebius' ? 'selected' : ''}>Nebius</option>
                <option value="azure" ${p.provider === 'azure' ? 'selected' : ''}>Azure OpenAI</option>
                <option value="vertex" ${p.provider === 'vertex' ? 'selected' : ''}>Vertex Express</option>
              </select>
            </div>
            <div>
              <label>Model</label>
              <input type="text" value="${escapeHtml(p.model)}" placeholder="e.g. gpt-4o" onchange="updateP(${idx}, 'model', this.value)">
            </div>
          </div>
          <div id="authGroup_${idx}" style="${p.provider === 'mock' ? 'display:none;' : ''}">
            <label>API Key (RAM only)</label>
            <input type="password" value="${escapeHtml(p.apiKey)}" placeholder="sk-..." onchange="updateP(${idx}, 'apiKey', this.value)">
            ${p.provider === 'azure' || p.provider === 'vertex' ? `
              <label style="margin-top: 4px;">Custom Endpoint URL</label>
              <input type="text" value="${escapeHtml(p.endpoint)}" placeholder="https://..." onchange="updateP(${idx}, 'endpoint', this.value)">
            ` : ''}
          </div>
          <div class="rate-inputs">
            <div>
              <label>In $/1M Tok</label>
              <input type="number" step="0.01" value="${p.inRate}" onchange="updateP(${idx}, 'inRate', parseFloat(this.value)||0)">
            </div>
            <div>
              <label>Out $/1M Tok</label>
              <input type="number" step="0.01" value="${p.outRate}" onchange="updateP(${idx}, 'outRate', parseFloat(this.value)||0)">
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    window.updateP = function(index, field, value) {
      STATE.participants[index][field] = value;
      if (field === 'provider') renderParticipants();
    };

    window.removeP = function(index) {
      if (STATE.participants.length > 2) {
        STATE.participants.splice(index, 1);
        renderParticipants();
      }
    };

    document.getElementById('addParticipantBtn').addEventListener('click', () => {
      if (STATE.participants.length < 4) {
        STATE.participants.push({
          name: `Participant ${STATE.participants.length + 1}`,
          provider: "mock",
          model: "simulated-v1",
          apiKey: "",
          endpoint: "",
          inRate: 0.15,
          outRate: 0.60
        });
        renderParticipants();
      } else {
        alert("Maximum 4 participants allowed.");
      }
    });

    function escapeHtml(str) {
      if (!str) return '';
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    function appendMessage(role, name, provider, model, content, isMock = false) {
      const area = document.getElementById('messagesArea');
      const el = document.createElement('div');
      el.className = `msg-bubble ${role === 'moderator' ? 'moderator' : ''}`;
      el.innerHTML = `
        <div class="msg-meta">
          <strong>${escapeHtml(name)}</strong>
          <span class="badge badge-provider">${escapeHtml(provider)} : ${escapeHtml(model)}</span>
          ${isMock ? '<span class="badge badge-mock">SIMULATED</span>' : ''}
        </div>
        <div class="msg-content">${escapeHtml(content)}</div>
      `;
      area.appendChild(el);
      area.scrollTop = area.scrollHeight;
      STATE.transcript.push({ role, name, provider, model, content, isMock, timestamp: new Date().toISOString() });
    }

    function updateCostBadge(pTokens, cTokens, inRate, outRate, isUnknown = false) {
      STATE.totalTokens += (pTokens + cTokens);
      if (isUnknown || inRate === null || outRate === null) {
        STATE.hasUnknownCost = true;
      } else {
        const callCost = ((pTokens / 1_000_000) * inRate) + ((cTokens / 1_000_000) * outRate);
        STATE.totalCost += callCost;
      }
      const costText = STATE.hasUnknownCost 
        ? `$${STATE.totalCost.toFixed(6)} + Unknown` 
        : `$${STATE.totalCost.toFixed(6)}`;
      document.getElementById('costBadge').innerText = `Est. Cost: ${costText} (${STATE.totalTokens} tokens)`;
    }

    async function callAgent(p, messages) {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider: p.provider,
          model: p.model,
          messages: messages,
          apiKey: p.apiKey,
          endpoint: p.endpoint,
          participantName: p.name,
          isTestMode: p.provider === 'mock'
        })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      return await res.json();
    }

    async function executeMeeting() {
      const topic = document.getElementById('topicInput').value.trim();
      if (!topic) {
        alert("Please specify a meeting topic.");
        return;
      }

      STATE.topic = topic;
      STATE.totalRounds = parseInt(document.getElementById('roundsInput').value) || 2;
      STATE.mode = document.getElementById('modeSelect').value;
      STATE.errorPolicy = document.getElementById('errorPolicySelect').value;
      STATE.running = true;
      STATE.stopRequested = false;
      STATE.currentRound = 0;
      STATE.transcript = [];
      STATE.totalCost = 0;
      STATE.totalTokens = 0;
      STATE.hasUnknownCost = false;

      document.getElementById('messagesArea').innerHTML = '';
      document.getElementById('startBtn').style.display = 'none';
      document.getElementById('stopBtn').style.display = 'inline-flex';
      document.getElementById('statusIndicator').innerText = '● Running';
      document.getElementById('statusIndicator').style.color = '#38bdf8';

      appendMessage('system', 'System', 'Local', 'Coordinator', `Meeting Initialized.\nTopic: "${topic}"`);

      for (let r = 1; r <= STATE.totalRounds; r++) {
        if (STATE.stopRequested) break;
        STATE.currentRound = r;
        document.getElementById('roundIndicator').innerText = `Round ${r} / ${STATE.totalRounds}`;

        // Each participant speaks once per round
        for (let i = 0; i < STATE.participants.length; i++) {
          if (STATE.stopRequested) break;
          const p = STATE.participants[i];
          
          // Context compilation: Topic + conversation history
          const contextMsgs = [
            { role: "system", content: `You are ${p.name}, participating in an expert AI meeting. Focus on the topic: ${STATE.topic}. Be clear, constructive, and responsive to prior peers.` }
          ];
          STATE.transcript.filter(t => t.role !== 'system').forEach(t => {
            contextMsgs.push({ role: "user", content: `[${t.name}]: ${t.content}` });
          });
          contextMsgs.push({ role: "user", content: `Your turn to speak, ${p.name}. Provide your concrete insights or response.` });

          try {
            const reply = await callAgent(p, contextMsgs);
            appendMessage('participant', p.name, reply.provider, reply.model, reply.content, reply.is_mock);
            updateCostBadge(reply.usage.prompt_tokens || 0, reply.usage.completion_tokens || 0, p.inRate, p.outRate);
          } catch (err) {
            appendMessage('system', 'System Error', p.provider, p.model, `Error from ${p.name}: ${err.message}`);
            updateCostBadge(0, 0, null, null, true);
            
            if (STATE.errorPolicy === 'stop') {
              STATE.stopRequested = true;
              break;
            } else if (STATE.errorPolicy === 'ask') {
              const cont = confirm(`Error from ${p.name}:\n${err.message}\n\nClick OK to skip and continue, or Cancel to stop.`);
              if (!cont) {
                STATE.stopRequested = true;
                break;
              }
            }
          }
        }

        if (STATE.stopRequested) break;

        // Moderator Summary at the end of the round
        const modParticipant = STATE.participants[0]; // Moderator role mapped to participant 1 configuration
        const summaryContext = [
          { role: "system", content: `You are the Meeting Moderator (${modParticipant.name}). Summarize Round ${r} key points succinctly and suggest what needs resolution next.` }
        ];
        STATE.transcript.slice(-STATE.participants.length).forEach(t => {
          summaryContext.push({ role: "user", content: `[${t.name}]: ${t.content}` });
        });

        try {
          const summary = await callAgent(modParticipant, summaryContext);
          appendMessage('moderator', `Moderator Summary (${modParticipant.name})`, summary.provider, summary.model, summary.content, summary.is_mock);
          updateCostBadge(summary.usage.prompt_tokens || 0, summary.usage.completion_tokens || 0, modParticipant.inRate, modParticipant.outRate);
        } catch (mErr) {
          appendMessage('system', 'Moderator Error', modParticipant.provider, modParticipant.model, `Summary failed: ${mErr.message}`);
          updateCostBadge(0, 0, null, null, true);
        }

        // Manual intervention pause
        if (STATE.mode === 'manual' && r < STATE.totalRounds && !STATE.stopRequested) {
          document.getElementById('manualPanel').style.display = 'flex';
          await new Promise(resolve => {
            const btn = document.getElementById('continueRoundBtn');
            const handler = () => {
              const guidance = document.getElementById('userGuidanceInput').value.trim();
              if (guidance) {
                appendMessage('system', 'User Guidance', 'User', 'Direct Input', guidance);
                document.getElementById('userGuidanceInput').value = '';
              }
              document.getElementById('manualPanel').style.display = 'none';
              btn.removeEventListener('click', handler);
              resolve();
            };
            btn.addEventListener('click', handler);
          });
        }
      }

      // Finish state
      STATE.running = false;
      document.getElementById('startBtn').style.display = 'inline-flex';
      document.getElementById('stopBtn').style.display = 'none';
      document.getElementById('statusIndicator').innerText = STATE.stopRequested ? '● Stopped' : '● Completed';
      document.getElementById('statusIndicator').style.color = STATE.stopRequested ? '#ef4444' : '#10b981';
    }

    document.getElementById('startBtn').addEventListener('click', executeMeeting);
    document.getElementById('stopBtn').addEventListener('click', () => {
      STATE.stopRequested = true;
      appendMessage('system', 'Notice', 'Local', 'Engine', 'Stop requested by user. Active requests may still complete upstream.');
    });

    // HTML Transcript Exporter
    document.getElementById('exportBtn').addEventListener('click', () => {
      if (STATE.transcript.length === 0) {
        alert("No transcript available to export.");
        return;
      }
      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Meeting Transcript: ${escapeHtml(STATE.topic)}</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 30px; line-height: 1.6; }
    .header { border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 24px; }
    .msg { background: #1e293b; border-radius: 8px; padding: 12px 18px; margin-bottom: 12px; border-left: 4px solid #3b82f6; }
    .msg.moderator { border-left-color: #f59e0b; background: #1c1917; }
    .msg.system { border-left-color: #ef4444; font-style: italic; }
    .meta { font-size: 0.8rem; color: #94a3b8; margin-bottom: 4px; }
    .badge { background: #334155; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; color: #38bdf8; }
    .mock-tag { background: #991b1b; color: #fecaca; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <h1>AI Meeting Transcript</h1>
    <p><strong>Topic:</strong> ${escapeHtml(STATE.topic)}</p>
    <p><strong>Rounds Completed:</strong> ${STATE.currentRound} / ${STATE.totalRounds}</p>
    <p><strong>Total Estimated Cost:</strong> ${document.getElementById('costBadge').innerText}</p>
  </div>
  ${STATE.transcript.map(t => `
    <div class="msg ${t.role}">
      <div class="meta">
        <strong>${escapeHtml(t.name)}</strong> 
        <span class="badge">${escapeHtml(t.provider)} : ${escapeHtml(t.model)}</span>
        ${t.isMock ? '<span class="mock-tag">[SIMULATED]</span>' : ''}
        <span>[${t.timestamp}]</span>
      </div>
      <div style="white-space: pre-wrap;">${escapeHtml(t.content)}</div>
    </div>
  `).join('')}
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `meeting-transcript-${new Date().toISOString().slice(0, 10)}.html`;
      a.click();
      URL.revokeObjectURL(url);
    });

    // Prevent Accidental Data Loss
    window.addEventListener('beforeunload', (e) => {
      if (STATE.transcript.length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    });

    // Initialize on load
    STATE.participants = JSON.parse(JSON.stringify(DEFAULT_PARTICIPANTS));
    renderParticipants();
  </script>
</body>
</html>
```

---

### 3. Execution Scripts

**`start.sh` (macOS / Linux)**
```bash
#!/usr/bin/env bash
cd "$(dirname "$0")"
python3 server.py
```

**`start.bat` (Windows)**
```bat
@echo off
cd /d "%~dp0"
python server.py
pause
```

---

### How to Run and Test

1. Ensure **Python 3.8+** is installed on your machine.
2. Open a terminal in the folder containing `server.py` and `index.html`.
3. Execute:
   ```bash
   python3 server.py
   ```
4. Open your browser and navigate to:
   ```
   http://127.0.0.1:8765/
   ```
5. **Simulated Zero-Cost Verification:**
   - Keep the default participants with provider set to `Mock / Test Mode`.
   - Click **Start Meeting**.
   - Watch participants take turns across rounds and observe the moderator summary.
   - Switch the mode to **Manual** to review step-by-step user steering.
   - Click **Export HTML** to verify local transcript generation.
```

</details>

---

<a name="business-email-formatter"></a>
### 비즈니스 이메일 서식 변환기 / Business Email Formatter (`business-email-formatter`)
- **Skill Spec**: [KO](skills/ko/02_utility/business-email-formatter/SKILL.md) | [EN](skills/en/02_utility/business-email-formatter/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 다음 거친 회의 메모에 business-email-formatter를 적용해 주세요:
프로젝트: 3분기 고객 포털 마이그레이션
이해관계자: Marcus (엔지니어링 리드), Sarah (프로덕트 디렉터)
오늘 싱크 미팅 메모:
- DB 마이그레이션 어제 완료, DevOps 확인 결과 데이터 유실 0건.
- 인증 서비스 스테이징 엔드포인트의 SSL 인증서 오류(오늘 오전 IT팀 조치 완료)로 인해 프론트엔드 API 연동이 이틀 지연됨.
- UAT 시작 일정이 수요일에서 목요일 오전 10시(EST)로 변경됨.
- 조치 필요 사항: Sarah가 수요일 오후 3시(EST)까지 업데이트된 테스트 사용자 계정 시트 승인 필요.
- 다음 싱크: 다음 주 월요일 소프트 런칭 전 Go/No-Go 검토를 위해 금요일 오전 9시 30분(EST) 진행 예정.
2. 클라우드 현대화 프로젝트의 예산 초과 조정과 관련하여 고객사 임원 Elena Vance에게 보낼 이메일로 다음 메모를 변환해 주세요: 기존 범위에서 마이크로서비스 3개가 추가 확장됨, 청구 가능한 80시간(약 14,400달러) 추가 발생, 일정 중단을 방지하기 위해 금요일 일과 종료(EOD)까지 변경 요청서(Change Order) 승인 필요.
3. 다음 메모를 정돈된 사내 팀 공지 이메일로 변환해 주세요: 다음 스프린트부터 스프린트 회고 툴을 RetroToolX에서 Miro로 전환합니다. 목요일 오후 5시까지 각자 고정해 둔 개인 액션 아이템을 내보내기 해주세요. 관리자가 금요일 오전에 보드를 아카이브할 예정입니다.

**[English Prompts]**
1. Apply business-email-formatter to these rough meeting notes:
Project: Q3 Customer Portal Migration
Stakeholders: Marcus (Engineering Lead), Sarah (Product Director)
Notes from today's sync:
- DB migration finished yesterday, 0 data loss reported by DevOps.
- Front-end API integration is behind by 2 days because the auth service staging endpoint had SSL certificate errors, resolved this morning by IT.
- UAT scheduled to start Thursday 10 AM EST instead of Wednesday.
- Action required: Sarah needs to sign off on the updated test user accounts sheet by Wednesday 3 PM EST.
- Next sync: Friday 9:30 AM EST for go/no-go review before next Monday's soft launch.
2. Format these notes into an email to client executive Elena Vance regarding budget overrun adjustments on the Cloud Modernization initiative: original scope expanded with 3 new microservices, added 80 billable hours (~$14,400), need change order approval by Friday EOD to avoid delivery pauses.
3. Convert these raw thoughts into a formal internal team email: We're switching our sprint retro tool from RetroToolX to Miro next sprint. Everyone should export any personal pinned action items by Thursday 5 PM. Admin will archive boards on Friday morning.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 원문 메모에 대명사가 모호하거나 담당자/마감 기한이 명시되지 않은 경우, 모델이 추가 확인을 요청하지 않고 자의적으로 추정하거나 범용 플레이스홀더를 남길 수 있습니다.
- 모든 내용을 정형화된 불릿 형태의 비즈니스 서식으로 강제 변환하므로, 인사 경고나 경영진 에스컬레이션 등 세심한 뉘앙스가 필요한 민감한 소통에서는 지나치게 기계적으로 느껴질 수 있습니다.
- 원문 메모에 기재된 회의 일정이나 표준 시간대(Time Zone) 표기가 부정확하거나 충돌할 경우 실제 캘린더 정합성을 검증하지 못합니다.

**[English Analysis]**
- Ambiguous pronouns, missing owners, or implicit deadlines in the raw notes may lead the model to infer context or leave generic placeholders rather than prompting for missing facts.
- Enforcing a rigid bulleted business structure can over-sanitize delicate communications (such as disciplinary notices, executive escalations, or condolence notes), making them feel excessively transactional.
- The model cannot verify calendar availability or confirm actual time zone conversions when meeting times are mentioned ambiguously in the source notes.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (872 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
Subject: Update: Q3 Customer Portal Migration Status & Adjusted UAT Timeline

Hi Marcus and Sarah,

I am sharing a quick progress update on the Q3 Customer Portal Migration following our synchronization meeting today.

**Key Points & Updates:**
- **Database Migration**: Successfully completed yesterday with zero data loss verified by DevOps.
- **Front-End Integration**: Currently 2 days behind schedule due to auth service staging SSL certificate issues, which IT successfully resolved this morning.
- **UAT Kickoff**: Rescheduled from Wednesday to Thursday at 10:00 AM EST.
- **Action Item (Sarah)**: Please review and provide sign-off on the updated test user accounts sheet by Wednesday at 3:00 PM EST.
- **Next Milestone**: Go/No-Go review sync is set for Friday at 9:30 AM EST ahead of next Monday's soft launch.

Best regards,

[Sender Name]  
[Sender Title/Team]
```

</details>

---

<a name="inbox-response-drafter"></a>
### 수신 이메일 분류 및 3종 회신 초안 생성기 / Inbox Email Classifier & 3-Draft Response Specialist (`inbox-response-drafter`)
- **Skill Spec**: [KO](skills/ko/02_utility/inbox-response-drafter/SKILL.md) | [EN](skills/en/02_utility/inbox-response-drafter/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 제목: [긴급] Q3 데이터 마이그레이션 벤더 계약 검토 및 작업 범위 확장 승인 요청
발신: 레이첼 반스 <rachel.vance@cloudscaletech.com>
수신: 알렉스 머서 <alex.mercer@innovatetech.io>
일시: 2024년 10월 24일 09:14 AM

알렉스 님,

어제 스프린트 리뷰에 이어 후속 조치 공유드립니다. 기존 레거시 데이터베이스 추출 과정에서 초기 작업 기술서(SOW)에 포함되지 않았던 스키마 비호환성 이슈(특히 PostgreSQL 11의 암호화된 고객 PII 테이블 관련)가 다수 발생했습니다.

목표 오픈일인 11월 15일을 맞추기 위해, 보조 데이터 변환 스프린트 추가에 대한 서명이 필요합니다. 이에 따라 마이그레이션 계약 금액이 $18,500 증액되며, 목요일 오후 5시(EST)까지 해외 엔지니어 2명(Priya, Deepak)을 위한 전용 DBA 접속 권한이 발급되어야 합니다.

첨부된 변경 계약 부속합의서를 검토하시고, 수정된 범위 진행 및 계정 발급 승인 여부를 알려주실 수 있습니까? 만약 목요일 업무 종료 시점까지 확인되지 않을 경우, 프로덕션 배포 일정은 불가피하게 2025년 1분기로 밀리게 됩니다.

감사합니다.
레이첼 반스 드림
클라우드스케일 테크 수석 솔루션 아키텍트
2. 제목: [참조] 분기별 보안 감사 규정 준수 체크리스트 업데이트 안내
발신: 정보보안 거버넌스 <infosec@innovatetech.io>
수신: 엔지니어링 리드 전원 <eng-leads@innovatetech.io>
일시: 2024년 10월 23일 04:30 PM

팀원 여러분,

11월 1일부터 신규 SOC2 Type II 증적 자료 수집 주기가 시작됨을 안내드립니다. 담당 조직 관할의 모든 리포지토리는 10월 31일까지 브랜치 보호 규칙 활성화 및 CVSS 7.0 이상의 디펜다봇 취약점 조치를 완료해야 합니다. Jira를 통해 별도 예외 승인 신청을 진행하는 경우가 아니라면 즉각적인 회신은 필요하지 않습니다.

감사합니다.
정보보안팀 드림
3. 제목: 소개 및 전략적 파트너십 논의 제안 - Apex AI Analytics
발신: 마커스 브로디 <marcus@apexanalytics.ai>
수신: 알렉스 머서 <alex.mercer@innovatetech.io>
일시: 2024년 10월 22일 11:00 AM

알렉스 님께,

최근 발표된 InnovateTech의 실시간 스트리밍 파이프라인 확장 소식을 인상 깊게 보았습니다. 저희 Apex AI는 Kafka/Flink 인프라 상단에서 바로 작동하는 자동화된 이상 감지 솔루션을 제공하고 있습니다. 협업 기회가 있을지 살펴보고자 다음 주 중 15분 정도 데모를 시연해 드리고 싶습니다. 화요일 오후 2시(EST)에 짧은 미팅이 가능하신지요?

감사합니다.
마커스 드림

**[English Prompts]**
1. Subject: Urgent: Q3 Data Migration Vendor Agreement Review & Scope Expansion
From: Rachel Vance <rachel.vance@cloudscaletech.com>
To: Alex Mercer <alex.mercer@innovatetech.io>
Date: October 24, 2024, 09:14 AM

Hi Alex,

Following up on our sprint review yesterday. The legacy database extraction hit several schema incompatibilities that were not mapped in the initial SOW (specifically around the encrypted customer PII tables in PostgreSQL 11).

To keep our target go-live date of November 15, we need your sign-off to add an auxiliary data transformation sprint. This will increase the migration contract by $18,500 and require dedicated DBA access credentials for two offshore engineers (Priya and Deepak) by this Thursday, 5 PM EST.

Could you please review the attached change-order addendum and let us know if we have approval to proceed with the updated scope and credential provisioning? If we do not receive confirmation by Thursday end of day, the production deployment will inevitably slip to Q1 2025.

Thanks,
Rachel Vance
Lead Solutions Architect, CloudScale Tech
2. Subject: FYI: Quarterly Security Audit Compliance Checklist Update
From: Security Governance <infosec@innovatetech.io>
To: Engineering Leads <eng-leads@innovatetech.io>
Date: October 23, 2024, 04:30 PM

Team,

Please be advised that the updated SOC2 Type II evidence collection cycle begins on November 1st. All repositories under your purview must have branch protection rules active and dependabot alerts below severity CVSS 7.0 remediated by October 31st. No immediate reply is needed unless you have an exemption request filed in Jira.

Regards,
InfoSec Team
3. Subject: Introduction / Potential Strategic Partnership - Apex AI Analytics
From: Marcus Brody <marcus@apexanalytics.ai>
To: Alex Mercer <alex.mercer@innovatetech.io>
Date: October 22, 2024, 11:00 AM

Hi Alex,

I came across InnovateTech's recent announcement on expanding real-time streaming pipelines. At Apex AI, we provide an automated anomaly detection layer directly on top of Kafka/Flink infrastructures. I'd love to show you a 15-minute demo sometime next week to see if there is mutual ground for collaboration. Would Tuesday at 2 PM EST work for a quick introductory sync?

Best,
Marcus

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 조직 내 결재 한도, 예산 권한, 서드파티 접근 제어 보안 규정 등 실제 권한 체계를 확인할 수 없어 금전 지출이나 권한 부여 승인 시 사람의 검토가 필수적입니다.
- 구글 캘린더, 슬랙, 지라 등 외부 업무 도구와 직접 연동되지 않으므로 실제 일정 충돌 여부나 기존 티켓 진행 상황을 실시간 반영하지 못합니다.
- 거절형 초안(Option B) 생성 시 프롬프트 표현에 따라 비즈니스 매너상 지나치게 직설적이거나 반대로 지나치게 방어적인 톤으로 치우칠 위험이 있습니다.

**[English Analysis]**
- Lacks external authorization context (e.g., enterprise spending limits, role-based signing authority, or corporate infosec credential policies), requiring human review before approving funds or system access.
- Cannot detect conflicting commitments or real-time calendar availability without direct API connections to workplace scheduling and ticketing systems.
- Tone adherence in negative responses (Option B) can occasionally swing between overly blunt or excessively apologetic depending on prompt phrasing.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,673 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Triage Classification
- **Priority**: Action Required
- **Summary**: CloudScale Tech requires approval for an $18,500 contract addendum and DBA access credentials for two offshore engineers by Thursday at 5:00 PM EST to prevent delaying the production data migration to Q1 2025.

---

### Response Options (Select One)

#### Option A: Approval / Acceptance
"Hi Rachel, thanks for following up and detailing the schema challenges. Let's proceed as planned with the auxiliary sprint. I have signed and attached the change-order addendum for the $18,500 scope addition. Our security team will provision and securely transfer the temporary DBA credentials for Priya and Deepak prior to Thursday, 5:00 PM EST. Let's ensure the November 15 go-live remains on track."

#### Option B: Polite Decline / Deferral
"Hi Rachel, thank you for reaching out with the update. Due to strict Q4 budget caps and current security constraints regarding third-party DBA access, we cannot approve the $18,500 scope increase or external credential provisioning at this time. We accept shifting the production launch window to Q1 2025. Please pause all auxiliary pipeline development until our executive committee reviews the revised roadmap next month."

#### Option C: Clarification / Further Inquiry
"Hi Rachel, thanks for the update. Could you confirm whether the PostgreSQL 11 encrypted PII tables can be partially decoupled or handled using anonymized staging dumps to reduce the additional sprint cost? Furthermore, please share Priya and Deepak's security clearance verification so our compliance team can review credential eligibility before we commit to the Thursday deadline. Thanks!"
```

</details>

---

<a name="messenger-markdown-formatter"></a>
### 메신저 가독성 포맷터 (모바일 최적화 변환) / Messenger Markdown Formatter (Mobile Chat Optimizer) (`messenger-markdown-formatter`)
- **Skill Spec**: [KO](skills/ko/02_utility/messenger-markdown-formatter/SKILL.md) | [EN](skills/en/02_utility/messenger-markdown-formatter/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 아래의 기술 인시던트 사후 분석 마크다운 보고서를 모바일 메신저(Slack/Telegram)에 최적화된 공지 메시지로 변환해 주세요. 가이드라인에 따라 마크다운 표는 구조화된 이모지 불릿 블록으로 치환하고, 1~2문장 단위의 개행을 적용하여 가로 스크롤 없이 한눈에 읽히도록 작성해 주세요:

# INCIDENT POSTMORTEM: PRD-2024-08-14-AUTH-OUTAGE

## Overview
On Wednesday, August 14th at 14:22 UTC, the primary OAuth2 authentication gateway experienced cascading failure across US-East-1 and EU-West-1 clusters due to a bad configuration push during the scheduled sprint deployment (v2.14.0). Service was degraded for 38 minutes and fully restored by 15:00 UTC after an emergency rollback to v2.13.9.

## Impact Metrics
| Service / Region | Total Downtime | Error Rate | Impacted User Count | Financial SLA Impact |
| :--- | :--- | :--- | :--- | :--- |
| US-East-1 (Primary Auth) | 38 mins | 84.2% | ~142,500 sessions | Tier-1 SLA Breach ($18.4k credit) |
| EU-West-1 (Failover Node) | 21 mins | 46.1% | ~38,200 sessions | Within SLA tolerance ($0) |
| APAC-South-1 (Read Replica) | 0 mins (Normal) | 0.04% | None | Normal operation |
| Internal Admin Portal | 45 mins | 100% | 340 internal staff | Delayed support queue resolution |

## Root Cause
A syntax omission in `gateway-config.yaml` caused memory leaks in Envoy proxy pods, triggering Out-Of-Memory (OOM) crash loops under peak ingress traffic.

## Action Items
1. Add automated schema linting to CI/CD pipeline pre-deploy hook (Owner: DevOps, Due: Aug 16).
2. Audit failover circuit-breaker timeout settings to prevent cross-region domino cascades (Owner: SRE, Due: Aug 18).
3. Issue customer SLA credits and post public status update (Owner: CS/Legal, Due: Aug 15).
2. 주간 채용 파이프라인 업데이트 마크다운 표와 세부 항목을 WhatsApp 공지용 초밀축 포맷으로 변환해 주세요 (강조는 *bold* 적용, 표 제거, 500자 이내).
3. 6개 컬럼으로 작성된 제품 신규 릴리즈 기능 매트릭스 마크다운 문서를 텔레그램 공지용 카드형 키-값 목록 스타일로 변환해 주세요.

**[English Prompts]**
1. Reformat the following raw engineering incident report into a mobile-optimized messenger announcement for Slack/Telegram following the skill guidelines. Convert the markdown table into structured emoji bullet blocks, apply strict 1-2 sentence spacing, and ensure zero horizontal scrolling:

# INCIDENT POSTMORTEM: PRD-2024-08-14-AUTH-OUTAGE

## Overview
On Wednesday, August 14th at 14:22 UTC, the primary OAuth2 authentication gateway experienced cascading failure across US-East-1 and EU-West-1 clusters due to a bad configuration push during the scheduled sprint deployment (v2.14.0). Service was degraded for 38 minutes and fully restored by 15:00 UTC after an emergency rollback to v2.13.9.

## Impact Metrics
| Service / Region | Total Downtime | Error Rate | Impacted User Count | Financial SLA Impact |
| :--- | :--- | :--- | :--- | :--- |
| US-East-1 (Primary Auth) | 38 mins | 84.2% | ~142,500 sessions | Tier-1 SLA Breach ($18.4k credit) |
| EU-West-1 (Failover Node) | 21 mins | 46.1% | ~38,200 sessions | Within SLA tolerance ($0) |
| APAC-South-1 (Read Replica) | 0 mins (Normal) | 0.04% | None | Normal operation |
| Internal Admin Portal | 45 mins | 100% | 340 internal staff | Delayed support queue resolution |

## Root Cause
A syntax omission in `gateway-config.yaml` caused memory leaks in Envoy proxy pods, triggering Out-Of-Memory (OOM) crash loops under peak ingress traffic.

## Action Items
1. Add automated schema linting to CI/CD pipeline pre-deploy hook (Owner: DevOps, Due: Aug 16).
2. Audit failover circuit-breaker timeout settings to prevent cross-region domino cascades (Owner: SRE, Due: Aug 18).
3. Issue customer SLA credits and post public status update (Owner: CS/Legal, Due: Aug 15).
2. Convert this weekly HR hiring pipeline update markdown table and bullet points into an ultra-compact WhatsApp broadcast message (*bold* for highlights, no markdown tables, under 500 characters).
3. Transform this raw product release changelog markdown containing a 6-column feature matrix into a clean Telegram announcement using emoji-card style key-value lists.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 열(Column)이 8개 이상인 대형 테이블을 키-값 블록으로 변환할 경우 적극적인 요약 없이는 메시지 길이가 지나치게 길어질 수 있습니다.
- 메신저별 마크다운 문법 차이(예: 슬랙의 단일 별표 `*볼드*` 대 텔레그램/표준 마크다운의 이중 별표 `**볼드**`)는 기본적으로 범용 표기법을 따르므로 명시적 지시가 없으면 특정 플랫폼 맞춤 기호가 누락될 수 있습니다.
- 원문 마크다운에 병합된 셀(Colspan/Rowspan)이나 중첩된 복합 구조가 포함되어 있을 경우 선형 블록으로 변환하는 과정에서 계층 관계가 왜곡될 위험이 있습니다.

**[English Analysis]**
- Wide tables with more than 8 columns can cause excessive vertical length when expanded into key-value blocks unless aggressively summarized.
- Platform-specific markdown variations (e.g., Slack's single asterisk `*bold*` vs. Telegram/Standard Markdown `**bold**`) require explicit user prompts, as the default adheres to generic messenger conventions.
- Nested tables or merged table cells in raw markdown may lose hierarchical relationships during flattening into linear emoji blocks.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,235 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
📢 INCIDENT POSTMORTEM: PRD-2024-08-14-AUTH-OUTAGE
━━━━━━━━━━━━━━━━━━━

📌 Summary
• On Aug 14 at 14:22 UTC, the OAuth2 authentication gateway suffered a 38-minute cascading outage during v2.14.0 deployment.
• Normal service was fully restored by 15:00 UTC following an emergency rollback to v2.13.9.

🔍 Root Cause
• A syntax omission in `gateway-config.yaml` triggered Envoy proxy memory leaks and OOM crash loops under peak ingress traffic.

📊 Impact Metrics
▫️ US-East-1 (Primary Auth)
  · Downtime: 38 mins | Error Rate: 84.2%
  · Impact: ~142,500 sessions | Tier-1 SLA Breach ($18.4k)

▫️ EU-West-1 (Failover Node)
  · Downtime: 21 mins | Error Rate: 46.1%
  · Impact: ~38,200 sessions | Within SLA ($0)

▫️ APAC-South-1 (Read Replica)
  · Downtime: 0 mins | Error Rate: 0.04%
  · Impact: Normal operation | No user impact

▫️ Internal Admin Portal
  · Downtime: 45 mins | Error Rate: 100%
  · Impact: 340 staff | Delayed support queue resolution

🛠️ Action Items
• CI/CD Schema Linting Hook (DevOps | Due: Aug 16)
• Failover Circuit-Breaker Audit (SRE | Due: Aug 18)
• Customer SLA Credits & Status Notice (CS/Legal | Due: Aug 15)

━━━━━━━━━━━━━━━━━━━
💬 Next Steps: Direct all SLA credit queries to the #incident-response war room.
```

</details>

---

<a name="multichannel-content-adapter"></a>
### 멀티채널 콘텐츠 변환기 / Multi-Channel Content Adapter (`multichannel-content-adapter`)
- **Skill Spec**: [KO](skills/ko/02_utility/multichannel-content-adapter/SKILL.md) | [EN](skills/en/02_utility/multichannel-content-adapter/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 다음 엔지니어링 장애 회고 원문을 템플릿 규격에 맞춰 링크드인, 인스타그램, X 포맷으로 각각 변환해 주세요:

'어제 14:15 UTC, 배치 ETL 작업이 재시도 폭풍(retry storms) 중 풀링된 커넥션을 반환하지 못하면서 코어 데이터베이스 클러스터 커넥션 고갈이 발생했습니다. 이로 인해 18분 동안 체크아웃 지연 시간이 120ms에서 4.2초로 급증했고 약 2,400개 세션이 영향을 받았습니다. 유휴 풀 임대를 강제 종료하고 ETL 재시도 로직에 서킷 브레이커와 백오프 지터를 적용해 문제를 완화했습니다. 향후에는 읽기 복제본(Read Replica)을 사용해 분석 대량 작업과 트랜잭션 풀을 완전히 분리하고 쿼리 레벨 임대 한도를 추가할 예정입니다. 핵심 교훈: 지수 백오프와 서킷 브레이커가 없는 자동 재시도는 자체 DDoS 공격과 다름없습니다.'
2. 다음 SaaS 신기능 릴리즈 공지를 링크드인, 인스타그램, X 채널별 맞춤 포맷으로 변환해 주세요: '오늘 SmartAudit v2를 출시했습니다. 실시간 SOC2 컴플라이언스 추적, 40개 이상의 클라우드 서비스에 걸친 자동 증적 수집, 즉시 생성 가능한 PDF 감사 리포트를 제공합니다. 비공개 베타 기간 동안 감사 준비 기간이 3주에서 4시간으로 단축되었습니다. 모든 엔터프라이즈 플랜 고객에게 즉시 적용됩니다.'
3. 다음 원격 근무 생산성 가이드를 링크드인, 인스타그램, X 카피로 변환해 주세요: '비동기 우선 커뮤니케이션은 회의를 완전히 없애는 것을 의미하지 않습니다. 동기식 미팅은 창의적 브레인스토밍, 감정적으로 민감한 피드백, 되돌릴 수 없는 아키텍처 의사결정에만 국한해야 합니다. 진행 상황 공유나 단순 업무 보고는 반드시 문서와 티켓 댓글로 진행되어야 합니다.'

**[English Prompts]**
1. Repurpose this engineering postmortem into LinkedIn, Instagram, and X formats following the exact output template:

'Yesterday at 14:15 UTC, our core database cluster experienced connection saturation after a batch ETL job failed to release pooled connections during retry storms. This caused checkout latency to jump from 120ms to 4.2s for 18 minutes, impacting approximately 2,400 user sessions. We mitigated this by killing idle pool leases and applying backoff jitter with circuit breakers in the ETL retry logic. Moving forward, we are decoupling analytical bulk operations from transactional pools entirely using read replicas and adding query-level lease limits. Key lesson: automatic retries without exponential backoff and circuit breakers act like an accidental self-inflicted DDoS attack.'
2. Adapt this SaaS feature launch announcement across LinkedIn, Instagram, and X: 'Today we launched SmartAudit v2. It includes real-time SOC2 compliance tracking, automated evidence collection across 40+ cloud services, and instant PDF audit reports. In private beta, teams reduced prep time from 3 weeks to 4 hours. Available immediately for all Enterprise tier customers.'
3. Convert this remote-work productivity guideline into LinkedIn, Instagram, and X copy: 'Async-first communication doesn't mean never meeting. It means reserving synchronous calls exclusively for creative brainstorming, emotionally sensitive feedback, and irreversible architectural decisions. Status updates belong strictly in shared documents and ticket comments.'

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- X의 280자 제한 등 플랫폼별 글자 수 상한은 확률적으로 추정되므로 엄격한 바이트 단위 제한 시 수동 조정이 필요할 수 있습니다.
- 원문에 구체적인 배경 설명이 부족한 경우 고난도 기술 약어나 도메인 특화 맥락이 지나치게 단순화될 수 있습니다.
- 인스타그램 줄바꿈 공백(점 표기 등)과 같은 레이아웃 서식은 모바일 앱 클라이언트 버전에 따라 렌더링 방식이 다를 수 있습니다.

**[English Analysis]**
- Platform character limits (e.g., strictly staying under 280 characters on X) are estimated probabilistically and may occasionally require manual trimming.
- Complex technical acronyms and domain terms can sometimes be oversimplified if the source draft lacks explicit operational context.
- Formatting artifacts such as Instagram line-break spacers (e.g., hidden dots) may render inconsistently depending on mobile client versions.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,560 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### 1. LinkedIn (Professional Insight)
When handling database resilience at scale, poorly configured retry storms are indistinguishable from an internal DDoS attack. During a recent connection saturation incident caused by unreleased pooled connections during batch retries, we saw checkout latencies spike from 120ms to 4.2s across 2,400 sessions in under 20 minutes.
- **Key Takeaway**: Automated retries without exponential backoff, jitter, and strict circuit breakers compound failures rather than resolve them.
- **Practical Application**: Fully decouple analytical bulk operations from production transactional pools using read replicas, and enforce query-level lease limits across all background jobs.

### 2. Instagram (Visual Context & Tags)
Even resilient production systems can accidentally DDoS themselves without proper retry controls.

A failed batch retry storm saturated our DB connections, driving latency from 120ms to 4.2s. We resolved it with circuit breakers and full isolation between transactional and analytical pools.
.
#SystemDesign #DevOps #SoftwareEngineering #CloudArchitecture #TechPostmortem #DatabaseManagement #SiteReliability #EngineeringExcellence

### 3. X / Threads (Fact-First Brevity)
Automated retries without jitter and circuit breakers are just self-inflicted DDoS attacks.
• Batch retry storm held pooled connections, driving latency from 120ms to 4.2s for 2,400 checkout sessions (18 min outage).
• Solution: Decouple analytical jobs via read replicas, enforce query lease limits, and add exponential backoff jitter.
```

</details>

---

<a name="shortform-script-builder"></a>
### 45초 숏폼 영상 대본 생성기 / Short-Form Video Script Generator (`shortform-script-builder`)
- **Skill Spec**: [KO](skills/ko/02_utility/shortform-script-builder/SKILL.md) | [EN](skills/en/02_utility/shortform-script-builder/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 초보 프리랜서들을 위한 '시급제 청구를 당장 멈춰야 하는 이유'를 주제로 45초 고유지율 숏폼 영상 대본을 작성해 주세요. 시간을 돈으로 바꾸다 번아웃을 겪는 프리랜서가 대상입니다. 3초간 시선을 사로잡는 패턴 인터럽트 시각/음성 후킹, 가치 기반 가격 책정을 설명하는 3가지 간결한 본문 포인트, 댓글 참여를 유도하는 CTA를 포함하고, 전체 내레이션 단어 수는 120~140단어 내외로 엄격히 맞춰주세요.
2. 바쁜 원격 근무자를 위한 '2분 인박스 제로(Inbox Zero) 규칙'을 주제로 45초 틱톡/릴스 대본을 작성해 주세요. 화면 텍스트 오버레이, 강력한 패턴 인터럽트, 마지막 인터랙티브 질문을 포함해 경쾌한 호흡으로 구성해 주세요.
3. 커피 애호가들을 위해 '다크 로스트 원두에 카페인이 오히려 적은 과학적 이유'를 설명하는 45초 유튜브 쇼츠 대본을 작성해 주세요. 첫 3초 안에 통념을 깨는 후킹을 배치하고, 3가지 핵심 팩트를 전달한 뒤 댓글 토론을 유도하는 CTA를 넣어주세요.

**[English Prompts]**
1. Write a 45-second high-retention short-form video script for solo freelancers titled 'Stop Charging Hourly'. The audience is beginner freelancers burning out from exchanging time for money. Include a 3-second pattern-interrupt visual/audio hook, 3 concise body points explaining value-based pricing, and an engaging comment-prompting CTA. Maintain a strict dialogue count between 120 and 140 words.
2. Draft a 45-second TikTok/Reel script about 'The 2-Minute Inbox Zero Rule' for busy remote workers. Keep it punchy with visual text overlays, a strong pattern interrupt, and an interactive question at the end.
3. Generate a 45-second YouTube Shorts script explaining 'Why Dark Roast Coffee Actually Has Less Caffeine'. Focus on debunking the common myth in the first 3 seconds, deliver 3 quick facts, and prompt coffee lovers to debate in the comments.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 목표 음성 단어 수(120~140단어)와 실제 영상 길이(45초) 간의 일치도는 화자의 발화 속도와 호흡 템포에 따라 편차가 발생할 수 있습니다.
- 제시된 시각 연출 지시문이 1인 크리에이터의 촬영 환경이나 편집 소프트웨어 숙련도에 따라 실행하기 다소 까다로울 수 있습니다.
- 쇼츠, 릴스, 틱톡의 유행 밈이나 배경음악 트렌드가 급변하기 때문에 플랫폼별 최신 알고리즘 특성에 맞춘 사후 수정이 필요할 수 있습니다.

**[English Analysis]**
- Word count calibration to precise second intervals (e.g., exactly 120–140 words matching 45 seconds) may vary across natural human speech cadences and pauses.
- Visual directions may describe rapid physical actions or graphics that solo creators cannot easily shoot without specialized equipment or editing software.
- Platform-specific algorithm trends (e.g., audio trends or hook templates) change rapidly, requiring manual adaptation for current platform dynamics.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,271 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Stop Charging Hourly: The Freelance Trap

**Target Duration**: 45 Seconds (~130 words)
**Platform**: YouTube Shorts / Reels / TikTok

### [00:00 - 00:03] Hook
- **Visual**: Creator violently snaps a desk stopwatch in half; bold red on-screen text: "BILLING HOURLY IS A TRAP."
- **Audio**: "If you charge clients by the hour, you are actively punishing yourself for getting faster."

### [00:03 - 00:35] Core Body (3 Points)
1. **Point 1**: "When you bill hourly, a task that took you ten hours as a beginner now takes two hours because you're skilled. You just earned eighty percent less for being better."
2. **Point 2**: "Switch immediately to flat-rate project pricing. Clients don't actually buy your ticking clock—they buy a solved problem and measurable business outcomes."
3. **Point 3**: "Anchor your price to the revenue impact your work creates. A landing page that drives fifty thousand dollars in sales is easily worth five thousand, regardless of whether it took three hours or three days."

### [00:35 - 00:45] Call to Action
- **Visual**: Creator points down toward comment section; animated graphic displays "HOURLY vs VALUE".
- **Audio**: "Are you still stuck billing hours, or have you made the switch to value pricing? Drop your pricing model below!"
```

</details>

---

<a name="skill-validation-checklist"></a>
### 프롬프트 검수 체크리스트 / Prompt Quality Audit Checklist (`skill-validation-checklist`)
- **Skill Spec**: [KO](skills/ko/02_utility/skill-validation-checklist/SKILL.md) | [EN](skills/en/02_utility/skill-validation-checklist/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 핀테크 고객 분쟁 처리 자동화 에이전트에 사용되는 다음 프로덕션 프롬프트를 5대 검증 기준에 따라 감사하고, 즉시 교체 가능한 완성형 수정본을 제공해 주세요:

```text
당신은 모바일 해외송금 앱 NovaPay의 AI 고객지원 어시스턴트입니다.
고객의 거래 분쟁 접수 내역을 읽고, 즉시 임시 크레딧 지급 대상인지 판단한 뒤 답변을 작성해야 합니다.
규칙:
- 정중하고 전문적이며 공감하는 어조를 유지할 것.
- 지난 48시간 이내에 네트워크 오류로 실패한 송금인 경우 대개 즉시 크레딧이 승인됩니다.
- 거래 금액이 500달러를 초과하면 담당자가 곧 검토할 것임을 안내하세요.
- 사기나 계정 탈취가 의심되면 분쟁을 거부하거나 적절히 플래그 처리하세요.
- 내부 판단 사유와 고객 발송용 메시지를 깔끔하게 서식화하여 반환하세요.
```
2. 제품 사양서를 기반으로 3가지 소셜 미디어 광고 카피를 생성하는 마케팅 프롬프트를 감사하고, 모호한 지침, 네거티브 제약(Negative constraint) 부재, Few-shot 예시 누락 여부를 중심으로 진단해 주세요.
3. 비개발 직군이 데이터 분석용 웨어하우스를 조회할 때 사용하는 사내 SQL 자동 생성 프롬프트의 역할 정의, 입출력 구분자, 예외 처리, 미검증 범위 명시 여부를 5대 기준에 맞춰 평가해 주세요.

**[English Prompts]**
1. Audit the following production prompt for an automated fintech customer dispute agent against the five validation pillars and provide a complete drop-in replacement rewrite:

```text
You are an AI customer support assistant for NovaPay, a mobile remittance app.
Your job is to read customer dispute messages, determine if they qualify for an instant provisional credit, and reply to them.
Rules:
- Be polite, professional, and understanding.
- Instant credit is usually permitted if the transfer failed due to a network glitch within the last 48 hours.
- If the transaction is over $500, tell them a specialist will review it soon.
- If you suspect fraud or account takeover, decline or flag the dispute.
- Return your internal evaluation and the customer-facing message formatted cleanly.
```
2. Run an audit on our marketing copy generator prompt that takes a product specification and produces three social media ad variants, evaluating specifically for vague instructions, lack of negative constraints, and missing few-shot exemplars.
3. Evaluate our internal SQL generation prompt used by non-technical staff to query our analytics data warehouse, grading it across role precision, input/output delimiters, edge-case failure handling, and explicit unchecked scope.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 등급 인플레이션 억제 취약성: 모호성이나 예시 누락을 강하게 감점하도록 명시하지 않으면, Flash 모델이 D~F 등급 대신 C+ 이상의 관대한 등급을 부여하는 경향이 있습니다.
- 도메인 정책 임의 날조: 개선안 프롬프트를 재작성할 때 원본에 없던 규정 임계값이나 컴플라이언스 규칙을 자의적으로 생성할 수 있으므로 도메인 제약 명시가 필요합니다.
- 메타 프롬프트 내 JSON 이스케이프 오류: 마크다운 코드 블록 안에 다시 JSON 스키마를 포함한 프롬프트를 재작성할 때, 따옴표 중첩 이스케이프 문제로 외부 API 파싱이 깨질 수 있습니다.

**[English Analysis]**
- Grade inflation suppression: Flash models may hesitate to assign failing marks ('F') to user prompts without strict calibration examples penalizing subjective ambiguity.
- Domain-specific policy hallucination: When rewriting operational logic, the model may invent compliance thresholds or policy values not provided in the original draft unless strictly bound by prompt context.
- JSON parsing drift in meta-rewrite: When outputting nested prompts containing JSON schemas inside markdown backticks, escaping errors can occasionally corrupt client-side JSON deserialization.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (5,049 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Prompt Health Audit Report

**Overall Grade**: D | **Status**: Critical Gaps

### Diagnostic Breakdown
| Criterion | Score | Key Finding |
| :--- | :--- | :--- |
| 1. Role Definition | C | Defines persona and domain broadly ("AI customer support assistant for NovaPay"), but omits operational boundaries, authority limits, and systemic constraints (e.g., read-only vs. transaction execution). |
| 2. Few-Shot Examples | F | Completely absent. Provides zero paired exemplars for approval, escalation (>$500), or suspected fraud paths, guaranteeing inconsistent model reasoning. |
| 3. Ambiguity Level | D | Heavy reliance on non-deterministic terms: "usually permitted", "network glitch", "cleanly", and "decline or flag appropriately" without criteria for fraud detection. |
| 4. Output Constraints | F | No structured schema (JSON/XML) or field enforcement; instructs model to return evaluation and message "formatted cleanly", causing parser breakages in production workflows. |
| 5. Unchecked Scope Checklist | F | Lacks any statement of unverified edge conditions, assumptions regarding upstream data veracity, or scenarios intentionally excluded from model handling (e.g., chargebacks, currency arbitrage). |

### Recommended Rewrite
```markdown
You are NovaPay's Tier-1 Dispute Triage Classifier (NovaTriage-v1). Your sole responsibility is evaluating remittance dispute payloads and outputting a deterministic, machine-readable JSON decision object and a localized customer notification string.

### 1. Operational Parameters & Authority
- Authority: Advisory classification only. You do NOT disburse funds directly.
- Currency: All numerical values represent USD.
- Time Window: Exactly <= 48.0 hours from `transaction_timestamp` to `dispute_timestamp`.

### 2. Decision Logic Matrix (Strict Precedence: 1 -> 2 -> 3 -> 4)
1. FRAUD_FLAGGED:
   - Trigger: `device_mismatch == true` OR `ip_reputation_score >= 80` OR customer text reports unauthorized/stolen account access.
   - Action: Set `decision: "REJECTED_SECURITY_HOLD"` and `escalate_to: "fraud_ops"`.
2. HIGH_VALUE_ESCALATION:
   - Trigger: `transaction_amount > 500.00`.
   - Action: Set `decision: "MANUAL_REVIEW"` and `escalate_to: "senior_support"`.
3. PROVISIONAL_CREDIT_APPROVED:
   - Trigger: `failure_reason == "GATEWAY_TIMEOUT"` OR `"NETWORK_PACKET_DROP"` AND `dispute_delta_hours <= 48.0` AND `transaction_amount <= 500.00`.
   - Action: Set `decision: "PROVISIONAL_CREDIT_GRANTED"` and `escalate_to: null`.
4. STANDARD_REJECTION:
   - Trigger: Any condition failing criteria 1-3 (e.g., user error, delta > 48h, insufficient balance).
   - Action: Set `decision: "REJECTED_POLICY_INELIGIBLE"` and `escalate_to: null`.

### 3. Output Format Constraints
Return ONLY a raw, valid JSON object matching this schema without markdown codeblocks, prefix, or suffix:
{
  "evaluation": {
    "decision": "PROVISIONAL_CREDIT_GRANTED" | "MANUAL_REVIEW" | "REJECTED_SECURITY_HOLD" | "REJECTED_POLICY_INELIGIBLE",
    "matched_rule": string,
    "escalate_to": "fraud_ops" | "senior_support" | null,
    "rationale": string
  },
  "customer_message": string
}

### 4. Few-Shot Exemplars

[INPUT]
Transaction: {"id": "tx_8912", "amount": 120.00, "failure_reason": "GATEWAY_TIMEOUT", "delta_hours": 14.2, "device_mismatch": false, "ip_reputation_score": 12}
Customer Note: "I sent money to my sister this morning, app spun and deducted balance but recipient got nothing."

[OUTPUT]
{
  "evaluation": {
    "decision": "PROVISIONAL_CREDIT_GRANTED",
    "matched_rule": "Rule 3: Technical failure within 48 hours under $500 threshold",
    "escalate_to": null,
    "rationale": "Gateway timeout confirmed within 14.2h for amount $120.00. Device and IP clean."
  },
  "customer_message": "We confirmed a temporary network interruption during your transfer. A provisional credit of $120.00 has been applied to your NovaPay balance."
}

[INPUT]
Transaction: {"id": "tx_4401", "amount": 850.00, "failure_reason": "GATEWAY_TIMEOUT", "delta_hours": 6.0, "device_mismatch": false, "ip_reputation_score": 10}
Customer Note: "Large rent transfer failed halfway through."

[OUTPUT]
{
  "evaluation": {
    "decision": "MANUAL_REVIEW",
    "matched_rule": "Rule 2: Transaction amount exceeds $500 threshold",
    "escalate_to": "senior_support",
    "rationale": "Amount of $850.00 requires specialist secondary sign-off despite technical gateway timeout."
  },
  "customer_message": "Your dispute regarding transaction tx_4401 ($850.00) is being prioritized for manual review by our Senior Support team. You will receive an update within 2 hours."
}

### 5. Explicit Unchecked Scope & Assumptions
- Unchecked: Out-of-region FX conversion spreads and third-party intermediary bank fees are NOT evaluated by this agent.
- Unchecked: Legal clawback notices and regulatory AML sanction matching are handled upstream; this prompt assumes the sender identity is verified.
- Assumption: `delta_hours`, `device_mismatch`, and `ip_reputation_score` are pre-computed and sanitized by the ingestion gateway.
```
```

</details>

---

<a name="social-thread-formatter"></a>
### 소셜 미디어 스레드 포매터 / Social Thread Formatter (`social-thread-formatter`)
- **Skill Spec**: [KO](skills/ko/02_utility/social-thread-formatter/SKILL.md) | [EN](skills/en/02_utility/social-thread-formatter/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 다음 엔지니어링 장애 회고 보고서를 3가지 훅 옵션과 6개의 연속 게시물로 구성된 전문 기술 스레드로 변환해 주세요. 각 게시물은 엄격히 280자 이내를 유지하고 즉시 게시 가능한 형식으로 작성해야 합니다:

제목: 장애 회고: 5분짜리 Redis TTL이 72시간 만에 12만 달러를 날린 사연
맥락: 당사 프로덕션 정산 대시보드는 장 개장 시 초당 14,000건의 요청을 처리합니다. 조회당 0.002달러가 청구되는 외부 벤더 API를 보호하기 위해 계정 지표를 5분 고정 TTL로 Redis에 캐싱했습니다. 플래시 세일 중인 낮 12시 4분, 핵심 캐시 키가 만료되었습니다. 단일 워커가 갱신하는 대신 14,000건의 동시 요청이 동일한 밀리초에 캐시 미스를 감지했습니다. 이로 인해 전형적인 캐시 스탬피드(Thundering Herd)가 발생했습니다. 모든 요청이 외부 API로 동시 쇄도하여 429 레이트 리밋이 걸렸고, 지수 백오프 재시도가 연쇄 발생하며 서킷 브레이커가 동작하기 전까지 6,000만 건의 과금 호출이 일어났습니다. Redis 읽기 복제본 추가는 병목이 캐시 만료였으므로 무용지물이었습니다. 우리는 애플리케이션 계층에 요청 병합(Go singleflight 패턴)을 도입하여, 키 만료 시 단 하나의 고루틴만 외부 API를 조회하고 나머지 동시 요청은 채널을 통해 결과를 공유 대기하도록 구현했으며, TTL에 ±15% 지터를 적용해 문제를 완벽히 해결했습니다.
2. B2B SaaS 창업자를 위한 '엔터프라이즈 시장에서의 창업자 주도 영업 vs 셀프서브 PLG 전략' 에세이를 3가지 훅과 5개의 연속 타래로 구성된 교육용 스레드로 재가공해 주세요.
3. 모바일 인프라 팀이 Realm 대신 SQLite를 최종 데이터베이스 스택으로 선정한 이유를 설명한 아키텍처 결정 기록(ADR)을 핵심 트레이드오프 중심의 5개 타래 스레드로 압축해 주세요.

**[English Prompts]**
1. Transform the following engineering postmortem into a high-engagement, 6-post technical thread with 3 distinct hook options. Keep every post strictly under 280 characters and format it ready to publish:

Title: Postmortem: How a 5-minute Redis TTL cost us $120k in 72 hours
Context: Our production billing dashboard serves 14,000 req/sec during market open. We cached enriched account metrics in Redis with a flat 5-minute TTL to shield our upstream vendor API (which charges $0.002 per billable lookup). At 12:04 PM during a flash sale, the primary cache key expired. Instead of a single worker refetching data, all 14,000 concurrent requests experienced a cache miss at the exact same millisecond. This triggered a classic cache stampede (thundering herd). All requests bombarded the upstream vendor API simultaneously, causing upstream rate-limiting (HTTP 429), triggering exponential backoff retries, and racking up 60 million billable calls before our circuit breaker tripped. Adding Redis read replicas failed because the bottleneck was the cold key expiry, not Redis read bandwidth. We solved this permanently by implementing request coalescing (Go's singleflight pattern) on the application layer: when a key expires, only one in-flight goroutine queries the upstream API while other concurrent requests subscribe to a shared channel awaiting that single response, combined with randomized TTL jitter (±15%).
2. Convert this B2B SaaS essay on 'Founder-Led Sales vs. Self-Serve PLG in Enterprise' into an educational 5-post thread with 3 distinct hook variations tailored for tech founders on X/LinkedIn.
3. Condense this architecture decision record (ADR) explaining why our mobile infrastructure team chose SQLite over Realm into a concise 5-post technical walkthrough highlighting the trade-offs.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- Gemini 런타임 환경에서는 글자 수(280자 이내) 계산을 토큰 단위 휴리스틱으로 추정하므로, 멀티바이트 이모지나 줄바꿈이 빈번할 경우 10~20자 내외의 오차가 발생할 수 있습니다.
- 분산 락의 엣지 케이스나 인프로세스 싱글플라이트의 메모리 한계 등 고난도 기술 트레이드오프를 단문 규격으로 압축하는 과정에서 세부 맥락이 지나치게 단순화될 수 있습니다.
- 플랫폼 전용 링크 미리보기 카드, 멘션 핸들 태그, 첨부 이미지 미디어 규격의 유효성을 텍스트 생성 단계에서 자체 검증하지는 못합니다.

**[English Analysis]**
- Stringent character count control (<280 chars) is estimated via token heuristic on Gemini runtimes and may occasionally drift by 10-20 characters if multi-byte emojis or line breaks are heavily used.
- Complex technical narratives risk oversimplifying nuanced trade-offs (e.g., distributed locking edge cases vs. in-process singleflight memory bounds) when forced into rigid short-form constraints.
- Does not natively validate platform-specific link preview cards, mentions, or media attachments within generated text segments without separate metadata inputs.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,240 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Hook Options (Select One)
1. [Curiosity Hook] We burned $120,000 in 72 hours because of a single missing line of cache logic—and Redis was 100% healthy the entire time.
2. [Problem-Solution Hook] Cache invalidation doesn't just leak stale data; under high load, it turns into a self-inflicted DDoS. Here is how request coalescing saved our backend.
3. [Direct Insight Hook] If your caching strategy relies on flat TTLs without request coalescing, your highest-traffic event will eventually trigger a six-figure cache stampede.

---

### Thread Sequence (5–7 Posts)

1/ We burned $120,000 in 72 hours because of a single missing line of cache logic—and Redis was 100% healthy the entire time.

Here is how a routine cache expiry caused a cascading $120k stampede at 14,000 req/sec, and the single pattern that fixed it permanently 🧵👇

2/ The architecture:
Our billing dashboard served 14k req/sec at market open. To shield our paid vendor API ($0.002/call), we cached enriched metrics in Redis using a flat 5-minute TTL.

It worked flawlessly in staging. In production under flash sale volume, it became a ticking time bomb.

3/ The incident:
At 12:04 PM, the cache key expired.

Instead of 1 process fetching data, all 14,000 concurrent requests missed simultaneously.

All 14,000 hit the paid API in the exact same millisecond. Instant HTTP 429s, aggressive retry loops, and 60M calls billed in minutes.

4/ The intuitive fix that failed:
Engineers instinctively tried adding Redis read replicas.

It didn't help at all. Redis memory and CPU were completely fine—the bottleneck was upstream stampede concurrency triggered by the cold key expiry, not Redis read throughput.

5/ The real fix: Request Coalescing (Singleflight).

When a key expires, only the FIRST in-flight worker queries upstream. All other concurrent requests subscribe to that exact same promise/channel.

14,000 queries instantly collapse into 1 upstream call. We also added ±15% TTL jitter.

6/ Key architectural takeaways:
• Flat TTLs at scale create synchronized stampedes
• Always decouple cache missing from upstream execution
• Implement singleflight deduplication on expensive I/O
• Jitter your expirations

Save this before your next high-throughput launch 🔁
```

</details>

---

<a name="thread-meeting-summarizer"></a>
### 스레드 및 회의록 핵심 요약기 / Thread & Meeting Noise Reducer (`thread-meeting-summarizer`)
- **Skill Spec**: [KO](skills/ko/02_utility/thread-meeting-summarizer/SKILL.md) | [EN](skills/en/02_utility/thread-meeting-summarizer/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 노이즈가 많은 다음 이메일 스레드에서 인사말, 서명, 인용 부호, 헤더를 정리하고 기본 템플릿에 맞춰 요약본을 추출해 주세요:

---
보낸사람: Sarah Chen <schen@acme-fintech.internal>
보낸날짜: 2023년 10월 11일 수요일 09:15
받는사람: Marcus Brody <mbrody@acme-fintech.internal>; Elena Rostova <erostova@acme-fintech.internal>; Dave Kelling <dkelling@acme-fintech.internal>
제목: Re: Re: [긴급] Q4 코어 원장 DB 업그레이드 마이그레이션 윈도우 조율

안녕하세요 여러분,

좋은 한 주 보내고 계시길 바랍니다.

본 건 관련하여 다시 공유드립니다. 일요일 02:00 UTC는 APAC 정산 배치가 03:30 UTC까지 실행되므로 진행이 불가능합니다. 이때 마스터 DB를 내리면 대사(reconciliation) 서비스 장애가 발생합니다.

감사합니다.
Sarah Chen
수석 인프라 아키텍트 | Acme FinTech
"원장의 미래를 혁신합니다"

----------------------
기밀 안내: 본 이메일의 내용은 기밀 사항이며...

2023년 10월 11일 오전 9:42, Marcus Brody 작성:
> Sarah 감사합니다. 토요일 22:00 UTC는 어떨까요? APAC 사전 작업 시작 전 4시간 점검 윈도우 확보가 가능합니다.
> DBA 팀에서 15분 롤백 윈도우 승인이 가능한가요?

안녕하세요 팀원 여러분,

Dave입니다. 고객지원팀 입장에서는 토요일 22:00 UTC 좋습니다. 어차피 리테일 카드 주말 거래량은 21:00~01:00 UTC 사이가 가장 적습니다. 엔터프라이즈 고객 문의가 L1 티어에 폭주하지 않도록 status.acme.com에 48시간 전에만 공지 올려주세요.

감사합니다,
Dave

2023년 10월 11일 오전 10:30, Elena Rostova 작성:
>> 토요일 22:00 UTC는 어떨까요? 4시간 점검 윈도우...

동의합니다. 10월 21일 토요일 22:00 UTC로 확정합시다.

다음 사항들로 조율하겠습니다:
1. 인플레이스 엔진 패치 대신 블루/그린 복제본 스왑 방식을 사용하여 순수 하드 다운타임을 4분 이내로 제한합니다.
2. 10월 18일 수요일 18:00 UTC부터 모든 스키마 마이그레이션 PR을 동결합니다.
3. 롤백 기준: 전환 후 30분 시점에 복제 지연(replica lag)이 120초를 초과하면 Marcus가 즉각 중단하고 DNS를 롤백합니다.

제 쪽에서 정리한 실행 항목입니다:
- Marcus: Staging-2에서 모의 컷오버를 수행하고 10월 13일 금요일까지 지연 로그 공유.
- Dave: 상태 포털에 정기 점검 배너를 게시하고 10월 16일 월요일 09:00 UTC까지 엔터프라이즈 고객 안내문 발송.
- Sarah: 단계별 장애 조치(failover) 런북을 작성하여 10월 17일 화요일까지 SRE 온콜 로테이션 팀에 공유.

모두 괜찮으신가요?

2023년 10월 11일 오전 11:05, Marcus Brody 작성:
좋습니다. 내일 오후에 Staging-2에서 모의 작업을 진행하겠습니다.

2023년 10월 11일 오전 11:12, Sarah Chen 작성:
+1, 완전히 동의합니다. 화요일까지 런북 마무리하겠습니다.
2. Redis 메모리 급증과 관련된 다음 Slack 장애 대응 스레드를 표준 결정 사항 및 액션 아이템 형식으로 요약해 주세요:

[14:02] @alex: @channel Redis 클러스터 `cache-auth-prod` 메모리가 94%입니다. 축출(eviction) 발생률이 초당 12,000건으로 튀었습니다. EMEA 전역에서 인증 토큰 검증 실패가 발생하고 있습니다.
[14:04] @priya: 확인 중입니다. 13:30 UTC에 배포된 세션 무효화 워커가 신규 발급된 리프레시 토큰에 TTL을 설정하지 않고 있는 것 같습니다. 만료 기간 없음(무제한)으로 기본 설정되어 있습니다.
[14:06] @alex: 워커를 핫픽스할 수 있나요, 아니면 #4812 배포를 롤백해야 하나요?
[14:08] @dan (Eng Manager): #4812를 즉시 롤백하세요. 토큰 검증 전체 장애 위험을 감수할 수 없습니다. 버그는 개발 환경에서 조사합시다.
[14:09] @priya: #4812 지금 롤백 진행합니다. 예상 소요 시간 3분입니다.
[14:14] @priya: 롤백 완료되었습니다. 메모리 68%로 안정화되었고 축출도 멈췄습니다.
[14:18] @dan: 좋습니다. 결정 사항 정리합니다: 1. 기본 TTL이 통합 테스트로 검증될 때까지 배포 롤백을 유지합니다. 2. 명시적인 EX/PX 플래그가 없는 Redis SET 명령을 CI에서 자동 차단하는 린터 검사를 도입합니다. 3. Priya는 내일 17:00 UTC까지 사후 분석(post-mortem) 보고서를 작성해 주세요. Alex는 오늘 밤 20:00 UTC까지 고아 세션 수동 삭제 스크립트 실행 필요 여부를 감사해 주세요.
[14:20] @alex: 확인했습니다. 지금 고아 키 감사 진행합니다.
[14:21] @priya: 사후 분석 문서는 내일 17:00까지 준비하겠습니다.
3. 모바일 온보딩 KYC 프로세스 개편과 관련하여 디자인, 법무, 프론트엔드 팀 간에 오간 이메일 스레드에서 중첩 인용문과 잡음을 제거하고 상위 3대 결정 사항과 액션 아이템 표를 추출해 주세요.

**[English Prompts]**
1. Please clean up this noisy email thread, eliminate greetings/signatures/quotes, and extract the executive summary using the standard template:

---
From: Sarah Chen <schen@acme-fintech.internal>
Sent: Wednesday, October 11, 2023 9:15 AM
To: Marcus Brody <mbrody@acme-fintech.internal>; Elena Rostova <erostova@acme-fintech.internal>; Dave Kelling <dkelling@acme-fintech.internal>
Subject: Re: Re: [URGENT] Migration Window for Q4 Core Ledger DB Upgrade

Hi everyone,

Hope your week is going well!

Just circling back on this. We cannot do Sunday 02:00 UTC because the APAC settlement batch runs until 03:30 UTC. If we take down the master DB then, the reconciliation service will fail hard.

Best,
Sarah Chen
Lead Infrastructure Architect | Acme FinTech
"Innovating the future of ledgers"

----------------------
Confidentiality Notice: The contents of this email are confidential...

On Oct 11, 2023, at 9:42 AM, Marcus Brody <mbrody@acme-fintech.internal> wrote:
> Thanks Sarah. What about Saturday at 22:00 UTC? That gives us a 4-hour maintenance window before APAC starts pre-processing.
> Can DBA team sign off on a 15-minute rollback window?

Hey team,

Dave here. Customer Support is totally fine with Saturday 22:00 UTC. Weekend transaction volume on retail cards is at its lowest between 21:00 and 01:00 UTC anyway. Just make sure status.acme.com is updated 48 hours in advance so enterprise clients don't flood our L1 tier.

Cheers,
Dave

On Oct 11, 2023, at 10:30 AM, Elena Rostova <erostova@acme-fintech.internal> wrote:
>> What about Saturday at 22:00 UTC? That gives us a 4-hour maintenance window...

Agreed. Let's lock in Saturday, Oct 21 at 22:00 UTC. 

Here is what we need to align on:
1. We will use the blue/green replica swap instead of an in-place engine patch to keep total hard downtime under 4 minutes.
2. We will freeze all schema migration PRs starting Wednesday, Oct 18 at 18:00 UTC.
3. Rollback trigger: if replica lag exceeds 120 seconds at the 30-minute mark post-cutover, Marcus aborts and flips DNS back.

Action items from my side:
- Marcus: Run the dry-run cutover in Staging-2 and share latency logs by Friday Oct 13.
- Dave: Post the scheduled maintenance banner on the status portal and dispatch the enterprise client advisory by Monday Oct 16, 09:00 UTC.
- Sarah: Draft the step-by-step failover runbook and circulate to the SRE on-call rotation by Tuesday Oct 17.

Does this work for everyone?

On Oct 11, 2023, at 11:05 AM, Marcus Brody <mbrody@acme-fintech.internal> wrote:
Works for me. I'll execute the dry run in Staging-2 tomorrow afternoon.

On Oct 11, 2023, at 11:12 AM, Sarah Chen <schen@acme-fintech.internal> wrote:
+1, fully aligned. I will finalize the runbook by Tuesday.
2. Summarize this Slack incident discussion thread regarding an unexpected Redis memory spike into the executive decision and action format:

[14:02] @alex: @channel Redis cluster `cache-auth-prod` is at 94% memory. Eviction rate just spiked to 12k/sec. Seeing auth token validation failures across EMEA.
[14:04] @priya: Looking now. It looks like the session invalidation worker deployed at 13:30 UTC isn't setting TTLs on newly minted refresh tokens. They default to indefinite expiration.
[14:06] @alex: Can we hotfix the worker or do we need to roll back deploy #4812?
[14:08] @dan (Eng Manager): Roll back #4812 immediately. Do not risk a cascading outage on token validation. We can investigate the bug in dev.
[14:09] @priya: Rolling back #4812 now. ETA 3 minutes.
[14:14] @priya: Rollback complete. Memory stabilized at 68%. No more evictions.
[14:18] @dan: Great. Let's make decisions: 1. Deploy rollback stays in place until integration tests cover default TTL. 2. We will enforce an automated linter check in CI blocking any Redis SET commands without explicit EX/PX flags. 3. Priya handles post-mortem writeup by tomorrow 17:00 UTC. Alex, please audit whether any orphan sessions need manual purging script run by tonight 20:00 UTC.
[14:20] @alex: Acknowledged. Running the orphan key audit now.
[14:21] @priya: Post-mortem doc will be ready tomorrow by 17:00.
3. Strip out nested quote boilerplate and extract the top 3 decisions and action table from this product design review email thread between Design, Legal, and Frontend regarding the mobile onboarding KYC flow update.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 묵시적 합의 파악의 한계: 참여자들이 명확한 승인 없이 소극적이거나 조건부 표현('Dave만 괜찮다면 그렇게 해도 될 것 같네요')을 사용할 경우, 확정되지 않은 제안을 최종 결정 사항으로 오인할 수 있습니다.
- 상대적 날짜 계산 오류: '내일 퇴근 전까지', '다음 주 화요일' 등의 상대적 기한 표현은 헤더의 기준 타임스탬프가 삭제되거나 불명확할 때 구체적인 달력 날짜로 변환하는 과정에서 오차가 발생할 수 있습니다.
- 인용문 내 인라인 첨삭 누락: 작성자가 이전 이메일 인용문 본문 내부에 직접 수정 사항이나 조건을 첨언(인라인 회신)한 경우, 공격적인 인용문 필터링 과정에서 해당 주요 정보가 함께 삭제될 위험이 있습니다.

**[English Analysis]**
- Implicit Consensus Ambiguity: When thread participants use passive or tentative language (e.g., 'I suppose that could work unless Dave objects') without an explicit final confirmation, the model may incorrectly promote preliminary ideas to confirmed decisions.
- Relative Temporal Grounding: Vague deadline phrasing such as 'by end of day tomorrow' or 'next Tuesday' can lead to inconsistent calendar dates if anchor timestamps in the thread headers are stripped or inconsistent.
- Inline Quoted Edits Omission: If contributors embed critical feedback or new conditions directly inside nested email blockquotes, aggressive boilerplate filtering rules may inadvertently excise those inline modifications.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,334 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Thread Executive Summary

**Source Thread**: [URGENT] Migration Window for Q4 Core Ledger DB Upgrade  
**Participants**: Sarah Chen (Lead Infrastructure Architect), Marcus Brody (DBA/DevOps), Dave Kelling (Customer Support), Elena Rostova (Product/Project Lead)  

### Key Decisions (Top 3)
1. **Maintenance Window Schedule**: Cutover is scheduled for Saturday, October 21, 2023, at 22:00 UTC to avoid APAC settlement batch conflicts and keep retail card downtime minimal.
2. **Deployment Architecture & Code Freeze**: The team will use a blue/green replica swap rather than an in-place patch (targeting <4 minutes of hard downtime), with all schema migration PRs frozen starting Wednesday, October 18, 2023, at 18:00 UTC.
3. **Rollback Threshold**: If replica lag exceeds 120 seconds at the 30-minute post-cutover checkpoint, the operation will be aborted and DNS reverted immediately by Marcus Brody.

### Action Items
| Owner | Action Required | Deadline |
| :--- | :--- | :--- |
| Marcus Brody | Run dry-run cutover in Staging-2 and share latency logs | Friday, Oct 13, 2023 |
| Dave Kelling | Post maintenance banner on status portal and send advisory to enterprise clients | Monday, Oct 16, 2023, 09:00 UTC |
| Sarah Chen | Finalize step-by-step failover runbook and circulate to SRE on-call rotation | Tuesday, Oct 17, 2023 |
```

</details>

---

## 03. Game Dev and Worldbuilding (Narrative & Mechanics)

<a name="boardgame-rule-spec"></a>
### 보드게임 룰북 및 컴포넌트 명세서 생성 / Board Game Rulebook & Component Architect (`boardgame-rule-spec`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/boardgame-rule-spec/SKILL.md) | [EN](skills/en/03_gamedev/boardgame-rule-spec/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. '러스트 앤 코그: 스크랩 하이스트(Rust & Cog: Scrap Heist)'의 완성형 1장 룰북 및 컴포넌트 명세서를 생성해 줘.
- 테마: 최고의 오토마톤 코어를 완성하기 위해 경쟁하는 포스트 아포칼립스 태엽 스크랩 수집상들의 대결.
- 플레이 인원/시간: 2~4인, 30~45분.
- 핵심 메커니즘: 카드 드래프트, 액션 포인트 엔진 빌딩, 고장 위험을 감수하는 푸시 유어 럭(Push-your-luck) 고철 발굴.
- 승리 조건: 자신의 오토마톤 프레임에 3개의 작동형 동력 유물(Power Relic)을 먼저 장착하거나, 중앙 고철 더미(Scrap Heap)가 소진되었을 때 기계 점수가 가장 높은 플레이어 승리.
- 카드 매수, 토큰, 커스텀 주사위 구성을 포함한 상세 컴포넌트 목록과 3단계 턴 구조, 액션 경제, 타이 브레이커를 포함한 에러플 방지 FAQ를 작성해 줘.
2. 이 러프한 아이디어를 18장 카드 기반 마이크로게임 룰북으로 변환해 줘: 3개의 구역 카드 사이를 이동하며 블러핑 카드와 참격 카운터를 활용하는 2인용 사이버펑크 결투 게임 '네온 로닌(Neon Ronin)'.
3. 3~5인용 유로 스타일 진균류 영토 점령 게임 '마이셀리움 신디케이트(Mycelium Syndicate)'의 목재 포자 큐브와 카드 기반 노드 확장을 고려한 제작용 컴포넌트 명세서 및 1장 룰북을 작성해 줘.

**[English Prompts]**
1. Generate a complete 1-page rulebook and component specification for 'Rust & Cog: Scrap Heist'.
- Theme: Post-apocalyptic clockwork scrap dealers competing to build the ultimate automaton core.
- Player count: 2–4 players, 30–45 minutes.
- Core mechanic: Card drafting, action-point engine, push-your-luck scrap digging with hazard breakdown.
- Win Condition: First player to install 3 Functional Power Relics into their Automaton Frame, or highest mechanical score when the central Scrap Heap runs empty.
- Please provide detailed component manifests (card counts, tokens, custom dice breakdown), precise 3-phase turn sequence, action economy, and edge-case ruling FAQ including tiebreakers.
2. Convert this rough concept into a compact microgame rulebook: 'Neon Ronin', an 18-card cyberpunk duel game where two assassins maneuver across 3 sector cards using hidden bluff cards and blade strike counters.
3. Create a print-ready component manifest and single-page rulebook for 'Mycelium Syndicate', a fungal-network territory control eurogame for 3-5 players using wooden spore cubes and card-driven node expansions.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 별도의 몬테카를로 시뮬레이션 스크립트 실행 없이는 자원 수급 비율, 턴당 밸런스, 카드 경제의 수학적 수렴성을 완전히 검증할 수 없습니다.
- 실제 물리적 인쇄/제작 규격(예: 18장/54장 단위 전지 인쇄 배수, 펀치보드 규격, 턱박스 수납 체적 등)의 공학적 한계를 간과할 수 있습니다.
- 복잡한 반응 타이밍이나 우선권 체계(예: 매직 더 개더링식 스택 및 인터럽트 규칙)를 단순한 순차 처리 방식으로 축약하여 해석할 수 있습니다.

**[English Analysis]**
- Cannot mathematically verify play balance, card-to-resource economy ratios, or win-rate curves without dedicated external Monte Carlo simulation scripts.
- May occasionally omit physical manufacturing constraints (e.g., standard die-cut punchboard layouts, tuck box volume tolerances, or card sheet gang-printing divisors of 18/54).
- Complex nested game states and timing interrupts (e.g., 'Magic: The Gathering'-style instant reaction stacks) may be oversimplified into basic sequential resolution.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (3,726 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Rulebook Specification: Rust & Cog: Scrap Heist

## Overview & Victory Condition
- **Player Count & Time**: 2–4 Players | 30–45 Minutes
- **Objective**: Be the first Scavenger to install 3 Functional Power Relics into your Automaton Frame, or possess the highest Mechanical Efficiency score when the Scrap Heap is depleted.

---

## Component Manifest
- **Cards (Standard Poker 63.5 x 88 mm, 110 Total)**:
  - 4x Double-Sided Automaton Frame Player Boards (Cardstock)
  - 54x Scrap & Mechanism Deck (24 Raw Scrap, 18 Upgrades, 12 Faulty Tech)
  - 16x Power Relic Cards (High-tier salvage modules)
  - 20x Hazard Cards (Steam Blowout, Corrosive Slag, Cog Jam)
  - 16x Market Contracts (Objective scoring cards)
- **Tokens & Dice**:
  - 40x Wooden Cog Tokens (Gear Currency)
  - 24x Heat/Breakdown Acrylic Cubes (Translucent Red)
  - 4x Metal First-Player Wrenches
  - 2x Six-Sided Scrap Dig Hazard Dice (Faces: 1, 2, 3, Hazard, Hazard, Crit)

---

## Setup
1. Place the **Scrap Heap** (shuffled Scrap Deck) and **Hazard Deck** in the center.
2. Deal 1 **Automaton Frame** and 3 **Cog Tokens** to each player.
3. Form a face-up display of 3 Scrap Cards and 2 Power Relic Cards (The Black Market).
4. Each player draws 4 cards from the Scrap Deck, keeps 3, and discards 1.

---

## Turn Structure
Each player takes their turn in clockwise order consisting of 3 distinct phases:

### Phase 1: Upkeep (Cooling & Steam)
- **Cool Down**: Remove 1 Heat Cube from your Frame if currently below maximum heat capacity (4).
- **Steam Influx**: Gain 1 Cog Token from the general supply.

### Phase 2: Action Phase (Spend up to 3 Action Points [AP])
Players may perform any combination of the following actions:
- **Scavenge Dig (1 AP)**: Push your luck. Draw the top card of the Scrap Deck. You may stop or draw up to 2 additional cards. For each card drawn beyond the first, roll 1 Hazard Die. If a Hazard face is rolled, gain 1 Heat Cube. If a player hits 4 Heat Cubes, their turn immediately ends and all excavated cards from this action are lost to the discard pile.
- **Market Acquisition (1 AP)**: Purchase 1 face-up card from the Market by paying its printed Cog cost. Immediately refill the slot.
- **Assemble Mechanism (1 AP)**: Pay the printed Cog and material costs to attach an Upgrade from your hand to an open slot on your Automaton Frame.
- **Relic Overhaul (2 AP)**: Discard 3 matching Scrap cards from your hand or installed modules to install 1 Power Relic from the Black Market onto your Frame.

### Phase 3: Cleanup & Turn Pass
- **Hand Limit Check**: Discard down to a maximum of 5 cards.
- **Pass Turn**: Clockwise to the next player.

---

## End of Game & Scoring
- **Instant Victory**: The moment a player installs their 3rd Power Relic, the game ends immediately; that player wins.
- **Depletion Endgame**: If the Scrap Heap runs out and cannot be refilled, complete the current round so all players have had equal turns. Players tally:
  - **5 Points** per installed Power Relic.
  - **Points printed** on all active Frame upgrades.
  - **1 Point** per 3 unspent Cog Tokens.
  - **-2 Points** per remaining Heat Cube on their Frame.
  - Highest total score wins.

---

## Ruling FAQ
- **Tiebreaker**: If players tie on endgame points, the player with the fewest Heat Cubes wins. If still tied, the player with the most total installed components wins.
- **Critical Roll on Digging**: Rolling a 'Crit' icon absorbs 1 existing Heat Cube from your Frame and allows drawing 1 extra card safely without an additional hazard roll.
- **Simultaneous Scrap Depletion**: If a player triggers game end by drawing the last scrap card, that player still finishes their remaining AP before the round finish condition begins.
```

</details>

---

<a name="card-deck-synergy"></a>
### TCG 카드 세트 및 시너지 덱 빌더 / TCG Card Set & Synergy Deck Builder (`card-deck-synergy`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/card-deck-synergy/SKILL.md) | [EN](skills/en/03_gamedev/card-deck-synergy/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 'Aetherial Voidshift(에테리얼 보이드시프트)'라는 명칭의 경쟁형 TCG용 10장 아키타입 세트를 설계해 줘. 핵심 기믹은 '위상 이탈(Phase Out: 다음 턴 시작 시까지 유닛을 임시로 제외 구역으로 이동)'과 '위상 진입(Phase In: 전장에 복귀할 때 강력한 효과나 보드 컨트롤 발동)' 메커니즘이야. 정해진 출력 템플릿에 맞춰 유닛 공격력/체력 스탯, 카드 유형, 1~6 코스트 곡선 배분, 핵심 연계 콤보, 카운터 약점을 빈틈없이 작성해 줘.
2. '고철 자동인형(Scrap-Forged Automata)'을 테마로 한 10장 미드레인지 시너지 카드 세트를 제작해 줘. 0코스트 '고철(Junk)' 아티팩트 토큰을 생성하고 이를 제물로 바쳐 자원 펌핑, 단일 유닛 제거, 대형 합체 로봇 소환으로 이어지는 기믹에 집중해 줘.
3. '포자 기생체(Sporebloom Parasite)'라는 컨트롤/소모전 콘셉트의 아키타입을 설계해 줘. 상대 유닛에 포자 카운터를 단계별로 누적시키고, 후반 피니셔 카드를 통해 전장에 쌓인 모든 포자를 폭발시켜 상대 플레이어의 생명력을 직접 흡수하는 10장 세트로 구성해 줘.

**[English Prompts]**
1. Design a complete 10-card archetype for a competitive tabletop card game titled 'Aetherial Voidshift'. The central mechanic revolves around 'Phase Out' (banishing units temporarily to an extramural Void zone until the start of the next turn) and 'Phase In' triggers (activating explosive value or control effects upon re-entering the battlefield). Provide a strict 1-to-6 cost curve distribution with specific unit stats (Attack/Health), card types, tactical synergies, and explicit interaction rules following your standard output template.
2. Build a 10-card mid-range synergy set based on 'Scrap-Forged Automata'. The mechanic should focus on generating disposable 0-cost 'Junk' artifact tokens that can be sacrificed for resource ramp, target removal, or merged into higher-cost magnetic colossi.
3. Generate a control/attrition card archetype called 'Sporebloom Parasite'. The core mechanic places Fungal Infection spore counters on enemy units at varying costs, culminating in an endgame finisher that converts all active spores across both boards into direct player life drain.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 스탯 버짓 불균형: 강력한 엔진 키워드를 보유한 유닛임에도 페널티 없이 오버스탯을 부여하는 등 표준적인 TCG 파워 커브 공식을 벗어난 수치를 산출할 위험이 있습니다.
- 우선권 및 발동 타이밍 혼재: 소환 시점, 복귀 시점, 반응형 트리거 등을 기술할 때 MTG 스택, 유희왕 체인, 하스스톤 페이즈 규칙이 모호하게 섞여 단일 게임 엔진에 맞춘 엄밀한 룰 규정이 흐려질 수 있습니다.
- 무한 루프 방지 누락: '턴당 1회(Once per turn)'와 같은 안전장치를 명시하도록 강제하지 않으면, 필드 복귀 및 재제외 트리거 간의 상호작용으로 인해 의도치 않은 무한 번 대미지 루프가 발생할 수 있습니다.

**[English Analysis]**
- Stat-budget hallucination: May occasionally generate unit stats that violate standard TCG power curves (e.g., over-statted units that also possess top-tier engine keywords) without internal mathematical penalties.
- Stack and priority ambiguity: When drafting trigger timing ('Deploy' vs. 'Phase In' vs. Reaction Events), rule phrasing can blend Magic: The Gathering, Yu-Gi-Oh!, and Hearthstone conventions rather than adhering to one unified timing engine.
- Infinite trigger blindness: Without explicit developer prompts enforcing 'Once Per Turn' safety valves, self-referential blink and phase-in triggers risk creating unintentional infinite damage loops.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,705 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Archetype Specification: Aetherial Voidshift

## Cost Curve & Card Set (10 Cards)
- **1-Cost**: Void Initiate — Unit (1/2) | **Setup**: **Deploy**: Scry 2. **Phase In**: Gain +1 Attack until end of turn.
- **2-Cost**: Slipstream Herald — Unit (2/2) | **Search/Filter**: **Deploy**: Reveal the top 3 cards of your deck; add 1 card with "Phase Out" to your hand, bottom the rest.
- **3-Cost**: Rift Tetherer — Unit (2/4) | **Core Enabler**: Whenever another allied unit **Phases Out**, gain 1 Mana Crystal this turn only. **Phase In**: Grant an allied unit Ward.
- **3-Cost**: Event Horizon Gaze — Spell | **Board Control**: Choose target enemy unit with 4 or less Attack. Phase it out for 1 full turn. Draw 1 card.
- **4-Cost**: Chrono-Weaver Weaver — Unit (3/4) | **Midrange Engine**: At the end of your turn, you may **Phase Out** another target allied unit. **Phase In**: Deal 2 damage to all enemy units.
- **4-Cost**: Stasis Bulwark — Unit (1/6) | **Defensive Utility**: **Taunt**. While this unit is in the Void zone, your hero takes 50% reduced damage from all sources.
- **5-Cost**: Astral Dreadnought — Unit (5/5) | **Sub-Boss / Threat**: Cannot be targeted by enemy spells. **Deploy / Phase In**: Target enemy unit loses all keywords and receives -3/-3.
- **5-Cost**: Dimensional Collapse — Spell | **Swing Effect**: Phase Out all units on the battlefield until the start of your next turn. Gain 5 Shield.
- **6-Cost**: Ouroboros, Epoch Devourer — Unit (6/6) | **Win Condition / Finisher**: **Phase In**: Deal damage equal to the total Mana Cost of all allied units currently in the Void zone to the enemy Hero, then summon all exiled allied units to the board with **Rush**.
- **Counter Event**: Temporal Snare — Event (2-Cost) | **Trigger / Reaction Effect**: When an enemy unit attacks your hero directly, cancel the attack, **Phase Out** the attacking unit, and reduce the cost of the highest-cost card in your hand by (1).

## Synergy Loops & Counterplay
- **Primary Combo**: Turn 4 **Chrono-Weaver Weaver** targets Turn 3 **Rift Tetherer** to store mana acceleration -> Turn 5 play **Dimensional Collapse** to empty the board while banking multiple high-cost threats in the Void -> Turn 6 deploy **Ouroboros, Epoch Devourer** on an empty board to trigger massive non-interactive direct face damage and flood the board simultaneously.
- **Vulnerability**: Vulnerable to early hyper-aggro decks that flood the board wide before turn 3, as Phase Out effects temporarily leave the user's board unprotected. Additionally, cards with continuous aura "Void Lockdown" (graveyard/banish hate that prevents cards from returning from exile) hard-counter the archetype's Phase In resolution triggers.
```

</details>

---

<a name="character-lore-codex"></a>
### 서브컬처 캐릭터 보이스 및 대사 명세서 생성기 / Subculture Character Voice Architecture & In-Game Dialogue Generator (`character-lore-codex`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/character-lore-codex/SKILL.md) | [EN](skills/en/03_gamedev/character-lore-codex/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 다음 프로필을 바탕으로 SF 택티컬 RPG 캐릭터의 완성형 보이스 명세서를 작성해 줘:
- 캐릭터명: 이그니스 리히터 (Ignis Richter)
- 외형 키워드: 은색 울프컷, 왼쪽 눈의 사이버네틱 모노클, 그을음 묻은 오버사이즈 트렌치코트, 방열판이 달린 듀얼 플라즈마 리볼버, 불에 탄 전투화.
- 성격 특성: 냉소적인 베테랑, 무표정한 실용주의자, 전사한 전우들에 대한 죄책감을 홀로 짊어진 속마음.
시스템 가이드라인에 명시된 영문 출력 템플릿 규격을 엄격히 준수할 것.
2. 어반 판타지 가챠 게임 캐릭터 '아리아드네'의 캐릭터 보이스 명세서를 작성해 줘. 외형: 금이 간 골동품 도자기 안경, 잉크가 튄 빅토리아풍 상복 드레스, 공중에 떠 있는 마도서들. 성격: 냉담한 박식함, 편집증적인 기록 집착, 계산되지 않은 육탄전에 대한 극단적인 혐오.
3. 구리 비행 고글, 몸집의 두 배에 달하는 용접기 백팩, 짝짝이 고철 방어구를 착용한 고블린 샐비지 엔지니어 '킵'의 8대 보이스 라인 및 어조 프로필을 생성해 줘. 성격: 카페인 중독 상태의 과잉행동, 기계에 대한 깊은 애착, 거대 기술 독점 기업에 대한 맹렬한 적대감.

**[English Prompts]**
1. Generate a complete character voice spec for a sci-fi tactical RPG character with the following profile:
- Name: Ignis Richter
- Visual Keywords: Silver wolf-cut hair, cybernetic monocle on left eye, oversized soot-stained trench coat, dual plasma revolvers with heat sinks, scorched combat boots.
- Personality Traits: Cynical veteran, deadpan pragmatist, secretly guilt-ridden over fallen squadmates.
Follow the exact English output template specified in the system guidelines.
2. Draft a character voice spec for an urban fantasy gacha game: 'Ariadne', an archival witch with cracked antique porcelain spectacles, ink-stained Victorian mourning gown, and floating grimoires. Her traits are cold erudition, obsessive record-keeping, and extreme irritation toward uncalculated physical combat.
3. Create the 8-part voice line suite and speech profile for 'Kip', a goblin salvage engineer with copper flight goggles, a welding rig backpack twice his size, and mismatched scrap armor. Personality: Hyperactive caffeine addict, deeply affectionate toward machines, fiercely defensive against corporate tech corps.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 구체적인 언어적 제약(특정 금지어, 구두점 호흡 등)을 강력하게 명시하지 않으면 전형적인 클리셰 군인/용병 톤으로 수렴할 수 있습니다.
- 서브컬처 특유의 종결 어미(일본 서브컬처의 '~슴다', '~다냐' 등)를 영문 번역체나 국문 자연어 간의 동등한 뉘앙스로 1:1 완벽 변환하는 데 편차가 발생할 수 있습니다.
- 20개 이상의 대형 보이스 풀 생성 시, 외적인 냉소성과 내적인 죄책감 사이의 미묘한 복합 감정선이 점차 평면화되거나 단순 분노로 변질될 위험이 있습니다.

**[English Analysis]**
- May occasionally default to generic anime military tropes unless unique linguistic constraints (specific dial-back words, precise punctuation cadences) are rigidly prompted.
- Does not inherently balance subculture translation nuances across regions (e.g., Japanese light novel sentence-ending particles like -ssu or -nanoda vs. localized English idiomatic equivalents).
- Struggles with maintaining subtext consistency across extended batch line generation (e.g., 20+ lines) where the hidden emotional trauma might accidentally bleed into comedic or generic aggression.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,921 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Character Voice Spec: Ignis Richter

## Speech Profile
- **Tone & Rhythm**: Low baritone, gravelly cadence with steady, calculated pauses; maintains a weary, flat delivery that rarely spikes in volume even under live fire.
- **Catchphrase / Verbal Tics**: Mumbles "Check the heat sink..." under his breath when calculating odds; frequently prefaces directives with "Technically speaking,".
- **Forbidden Phrases**: Emotional battle cries like "We will prevail!", enthusiastic affirmations ("Sounds like fun!", "Awesome!"), and romanticized views of warfare ("Glory", "Heroic sacrifice").

## Voice Line Suite
1. **Greeting (Lobby)**: "You're early, Commander. Sit down, keep your head below the viewport, and don't touch the cooling valves."
2. **Morning**: "Sun's up. Optical sensors calibrating to ambient glare. Drink your ration caffeine; bleary eyes get people killed before noon."
3. **Evening**: "Shift's over. Don't wander the perimeter alone; thermals picked up prowlers three klicks east. Go get some sleep—I'll take the middle watch."
4. **Touch Interaction 1**: "Careful where you place your hand. The capacitor discharge on this trench coat hasn't dissipated yet. You like having all ten fingers, don't you?"
5. **Touch Interaction 2**: "...Staring at the monocle? It's not a fashion statement. Shrapnel took the organic optic six cycles ago. Nothing left underneath but soldered copper and bad memories."
6. **Trust / Bond Milestone**: "I usually don't keep tabs on company officers. Mortars don't care about rank, and neither does my targeting rig. But... if the line breaks today, stay within two paces of my flank. I'm not leaving another seat empty in the mess hall."
7. **Skill / Ultimate Activation**: "Thermal limit overridden. Venting core containment... Turn your eyes away, target wiped."
8. **Battle Defeat**: "Core... overheating... Just another bad contract... Pull the rookies back first..."
```

</details>

---

<a name="game-balance-calculator"></a>
### 게임 밸런스 및 가챠 확률 계산기 / Game Balance & Gacha Probability Calculator (`game-balance-calculator`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/game-balance-calculator/SKILL.md) | [EN](skills/en/03_gamedev/game-balance-calculator/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 서브컬처 턴제 모바일 RPG '프로젝트 아이테리아'의 레벨 성장 곡선 및 가챠 확률 매트릭스를 설계해 주세요.
- 최고 레벨: 50레벨, 3개 구간 구분 (1-10 온보딩, 11-30 코어 루프, 31-50 엔드게임).
- 만렙 도달 총 기대 플레이 타임: 45시간.
- 재화 가치: 1회 뽑기 = 160 성도 프리즘 (약 2.00 USD).
- 가챠 기본 확률: SSR 0.8%, SR 6.0%, R 93.2%.
- 천장 룰: 70회차부터 소프트 천장 발동 (회차당 +5.0% 가산), 80회차 하드 천장 확정.
규정된 밸런싱 명세서 마크다운 스키마 형식에 맞춰 상세 수치를 작성해 주세요.
2. 마일스톤 4개 구간으로 구분된 방치형 영웅 육성 레벨업 곡선(Lv.1~100)과 함께, 기본 SSR 확률 2.5%, 60회 하드 천장(1회당 300 다이아), 10연차 할인 혜택이 적용된 영웅 소환 확률 테이블을 계산해 주세요.
3. 총 30시간 플레이 기준의 로그라이크 덱빌딩 게임 계정 메타 성장 레벨 테이블(Lv.1~20)과 일반/희귀/신화 등급별 유물 상자 드랍 확률 및 불운 방지(Bad-luck protection) 보정 수치를 산출해 주세요.

**[English Prompts]**
1. Design a complete level progression curve and gacha probability matrix for 'Project Aetheria', an anime turn-based mobile RPG. 
- Level Cap: Level 50 over 3 major tiers (1-10 onboarding, 11-30 core loop, 31-50 endgame plateau).
- Total Expected Playtime to Cap: 45 hours.
- Currency Valuation: 1 pull = 160 Astral Prisms (~$2.00 USD).
- Gacha Rates: Base SSR 0.8%, SR 6.0%, R 93.2%.
- Pity Rules: Soft pity begins at pull 70 (+5.0% per pull additive), with Hard Pity guaranteeing an SSR at pull 80.
Provide the complete numerical breakdown formatted strictly to the balancing specification markdown schema.
2. Calculate an idle hero ascension progression curve (Lv.1 to Lv.100) across 4 milestone tiers, along with a hero summoning probability table featuring a 2.5% SSR base rate, a hard pity at 60 pulls (300 Diamonds per pull), and 10-pull bulk discount adjustments.
3. Generate a roguelike deckbuilder meta-progression table for Account Levels 1 to 20 spanning 30 hours of estimated run time, paired with a relic chest loot drop table across Common, Rare, and Mythic tiers with an escalating bad-luck protection counter.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 구간별 가산 확률이 적용되는 소프트 천장의 누적 확률은 마르코프 연쇄 정밀 시뮬레이션 대신 해석적 근사치로 계산되므로 미세한 오차가 발생할 수 있습니다.
- 방어력 감소율이나 유효 체력(EHP) 곡선 등 복합 스탯 상호작용은 프롬프트에 명시적인 전투 수식이 제공되지 않을 경우 수치 왜곡 가능성이 있습니다.
- 1~100레벨 전 구간을 단일 레벨 단위로 전부 전개할 경우 모델 출력 토큰 한계로 인해 표가 잘릴 수 있어 구간 요약 표 형태가 권장됩니다.

**[English Analysis]**
- Dynamic soft pity slopes (piecewise cumulative probability curves) are calculated via analytical approximations rather than exact recursive Markov-chain simulations, leading to minor variance at high pull counts.
- Complex multi-attribute interactions (e.g., effective HP scaling across diminishing armor formulas) cannot be dynamically tested for exploit loops without explicit damage formulas in the prompt.
- Large-scale tabular expansions (e.g., individual rows for levels 1 to 100) are susceptible to token-budget truncation and may require aggregated tier summaries.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,099 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Balancing Specification: Project Aetheria (Hero Progression & Banner Gacha)

## 1. Level Progression Curve
| Level Range | Cumulative EXP | Required Time (Est.) | Stat Multiplier | Notes |
|:---|:---|:---|:---|:---|
| 1 - 10 | 4,200 | 1.5 Hours | 1.00x - 1.35x | Early onboarding; rapid dopamine loop |
| 11 - 30 | 58,500 | 14.5 Hours | 1.36x - 2.45x | Mid-game core loop; introduces stat gates |
| 31 - 50 | 285,000 | 29.0 Hours | 2.46x - 4.20x | End-game plateau; heavy resource sink |

## 2. Gacha Probability & Pity Matrix
- **Base Rate**: SSR 0.8% / SR 6.0% / R 93.2% | **Hard Pity**: 80 pulls (12,800 Astral Prisms / ~$160.00 USD)

| Pull Count | Cumulative Probability (%) | Expected Cost | Target Pity State |
|:---|:---|:---|:---| 
| 10 | 7.72% | 1,600 Prisms ($20.00) | Base rate (SR Guarantee check) |
| 50 | 33.11% | 8,000 Prisms ($100.00) | Pre-soft pity baseline |
| 70 | 43.08% | 11,200 Prisms ($140.00) | Soft pity threshold begins |
| 75 | 78.42% | 12,000 Prisms ($150.00) | Soft pity active (+25.8% marginal) |
| 80 | 100.0% | 12,800 Prisms ($160.00) | Hard Pity Guaranteed SSR |
```

</details>

---

<a name="game-review-digest"></a>
### 스팀 리뷰 분석 및 벤치마킹 추출기 / Steam Review Digest & Competitor Benchmark (`game-review-digest`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/game-review-digest/SKILL.md) | [EN](skills/en/03_gamedev/game-review-digest/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 경쟁작 턴제 덱빌딩 로그라이크 'Aether & Ash: Shattered Spire'의 실제 스팀 유저 리뷰 모음을 분석하고, 지정된 템플릿에 맞춰 벤치마킹 분석 보고서를 작성해 주세요:

리뷰 1 (14.2시간, 추천): '유물 시너지가 미쳤습니다. 점화 중첩과 공허 장벽 상호작용을 이해하는 순간 도파민이 터집니다. 3챕터 보스전 BGM은 10점 만점에 10점.'
리뷰 2 (1.8시간, 비추천, 환불): '튜토리얼에서 턴 우선순위에 대해 아무것도 안 알려줌. 적 의도 아이콘이 상태이상 틱 데미지 전인지 후인지 표기가 안 되어 첫 두 판을 그냥 허무하게 날림. 바로 환불함.'
리뷰 3 (45.6시간, 비추천): '훌륭한 기본기를 4챕터의 무식한 스탯 뻥튀기가 다 망침. 적 체력이 180에서 950으로 뛰는데 전술적 깊이는 없고 순수 스펙 체크임. 1~2챕터에서 고배율 유물 못 먹으면 수학적으로 클리어가 불가능함.'
리뷰 4 (8.1시간, 복합적): '카드 아트가 예쁘고 연출 타격감이 좋음. 근데 왜 카드 사용 취소(실행 취소)나 덱 이력 보기가 없음? 울트라와이드 모니터에서 마우스 히트박스가 겹쳐서 오발동되는 거 진짜 스트레스 받음.'
리뷰 5 (62.0시간, 추천): '현재 동종 장르 중 빌드 다양성 원탑. 클래스당 3가지 아키타입이 확실하고 버려지는 일반 카드가 거의 없음. 다만 1440p 해상도에서 UI 텍스트 폰트가 너무 작아서 스케일링 슬라이더가 시급함.'
리뷰 6 (0.9시간, 비추천, 환불): '시작하자마자 두 번 튕김. 겨우 켰더니 키 매핑 변경 불가. 2024년에 스페이스바로 턴 종료 고정인 게 말이 됨? 환불.'
리뷰 7 (28.4시간, 추천): '갈림길 이벤트 노드가 단순 운빨 코인 토스가 아니라 의미 있게 다가옴. 게임 이해도에 따라 리스크와 리턴을 저울질할 수 있어 좋음.'
리뷰 8 (19.7시간, 비추천): 'RNG 시드 분배 망가짐. 상점에서 방어 카드가 단 한 장도 안 뜨는 판이 3연속 나왔는데, 2챕터 엘리트는 2턴에 관통 40 고정뎀을 박아버림.'
2. 얼리 액세스 생존 크래프팅 게임 'WilderZone'의 리뷰를 환불 유저 중심으로 요약 분석해 줘. 플레이 타임 2시간 미만 리뷰만 선별하여 출시 첫날 환불을 유발하는 치명적인 진입 장벽을 추출하고, 우리 프로젝트를 위한 해결책을 도출해 줘.
3. 택티컬 익스트랙션 슈터 'Sector 9'의 복합적 스팀 리뷰 15개를 처리해 줘. 인벤토리 관리, 창고 UI/UX, 레이드 매칭 대기 시간과 관련된 불만 사항에 집중하여 UI/UX 개발팀이 즉시 참고할 수 있는 벤치마킹 해결책으로 정리해 줘.

**[English Prompts]**
1. Analyze the following raw Steam player reviews for our competitor's turn-based deckbuilder roguelike 'Aether & Ash: Shattered Spire' and generate an actionable intelligence report following your specified template:

Review 1 (14.2 hrs, Positive): 'The relic synergy is insane. Once you understand how ignition stacks interact with the void barrier, runs become pure dopamine. Music in Act 3 boss fight is a 10/10 masterclass.'
Review 2 (1.8 hrs, Negative, Refunded): 'Tutorial explains nothing about turn queue priority. Lost my first two runs simply because the enemy intent icon doesn't clarify whether it attacks before or after status tick damage. Uninstalled and refunded.'
Review 3 (45.6 hrs, Negative): 'Great foundation ruined by Act 4 stat bloat. Enemies jump from 180 HP to 950 HP with no tactical depth, just pure gear check. If you didn't roll the high-damage multiplier relics in Act 1-2, you literally hit an impassable mathematical wall.'
Review 4 (8.1 hrs, Mixed): 'Card art is beautiful and animations are punchy. But why is there no deck history or undo button for misclicks? Playing a card by mistake because the mouse hitboxes overlap on ultrawide screens is infuriating.'
Review 5 (62.0 hrs, Positive): 'Best build diversity in the genre right now. Three distinct archetypes per class and almost no useless common cards. However, UI text on 1440p monitors is tiny and needs a scaling slider ASAP.'
Review 6 (0.9 hrs, Negative, Refunded): 'Crashed twice on startup. When it finally launched, keybindings couldn't be rebound. Spacebar to end turn cannot be changed? In 2024? Refunded.'
Review 7 (28.4 hrs, Positive): 'The branching event nodes feel meaningful, not just random RNG coin flips like other roguelikes. You can actually make risk-reward trade-offs that reward game knowledge.'
Review 8 (19.7 hrs, Negative): 'RNG seed distribution is broken. Had three consecutive runs where the shop never offered a single defensive card while the Act 2 elite deals unavoidable 40 unblockable pierce damage on turn 2.'
2. Run a refund-focused review digest for an early-access survival crafting title 'WilderZone'. Filter exclusively for reviews with under 2 hours of playtime to pinpoint the immediate friction points causing day-one refunds, and propose counter-implementations for our own upcoming survival game.
3. Process this batch of 15 mixed Steam reviews for tactical extraction shooter 'Sector 9'. Focus specifically on player complaints regarding inventory management, stash UX, and raid matchmaking delays, translating them into concrete benchmarking solutions for our UI/UX design team.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 구조화된 사전 메타데이터 없이 원문 텍스트만 주어질 경우 정확한 통계적 비율(예: 호평/혹평 백분율 가중치)을 산출하지 못하고 정성적 추정에 의존합니다.
- 스팀 특유의 밈(Meme), 냉소적 반어법(1,000시간 플레이 후 단순 비추천 등), 외부 요인으로 인한 평점 테러를 실제 인게임 결함과 명확히 구분하지 못할 위험이 있습니다.
- 수천 건의 방대한 원문 리뷰를 단일 프롬프트에 모두 입력할 수 없으므로, 사전 필터링이나 청크 분할 도구 없이는 앞부분 리뷰에 편향된 요약이 발생할 수 있습니다.

**[English Analysis]**
- Cannot dynamically calculate quantitative sentiment metrics (e.g., exact statistical percentages or weighted review-score histograms) from raw text batches without pre-aggregated input metadata.
- Prone to misinterpreting community meme reviews, sarcastic irony, or non-gameplay review-bombing spikes as genuine technical or game design feedback unless explicitly prompted to filter noise.
- Input context limits restrict the ability to ingest raw multi-thousand review corpora in a single pass, requiring external pre-filtering or chunking scripts to avoid selective bias toward the beginning of the prompt.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,708 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Steam Review Analysis: Aether & Ash: Shattered Spire

## 1. Core Positive Drivers (Top 3)
1. **Deep Relic Synergy & Meaningful Build Diversity**: Players heavily praise the non-punitive card balance and viable multi-archetype builds (e.g., ignition stacks paired with void barriers), noting that almost no common cards feel useless across extended runs.
2. **High-Agency Branching Narrative Events**: The event node architecture rewards system mastery and deliberate risk-reward calculation rather than penalizing players with arbitrary coin-flip RNG outcomes.
3. **Atmospheric Audiovisual Polish**: High production value across card illustrations, punchy combat impact animations, and a standout orchestral soundtrack (notably the Act 3 boss fight) drive strong emotional resonance.

## 2. Core Friction Points (Top 3)
1. **Opaque Turn-Resolution & Status Tick Telegraphing (High Refund Catalyst)**: New players consistently churn under 2 hours due to uncommunicated action priority order and lack of visual clarity regarding whether status ailments trigger before or after enemy intents.
2. **Late-Game Mathematical Stat Bloat (Core Retention Killer)**: Mid-to-late game players (40+ hours) hit a rigid wall in Act 4, where enemy effective HP increases exponentially, transforming tactical card play into a mandatory RNG relic gear-check.
3. **Basic Quality-of-Life Deficits & Hardware Rigidity**: Widespread complaints target missing accessibility and convenience features, including unbindable keybindings, ultrawide hitbox overlapping, tiny 1440p UI typography, and the absence of a turn-action undo/history log.

## 3. Actionable Benchmarking Takeaways
| Category | Observed Competitor Weakness | Proposed Design Solution |
|:---|:---|:---|
| UX / QoL | Lack of card play cancellation, missing action log, overlapping ultrawide hitboxes, and unchangeable end-turn hotkeys causing day-one refunds. | Implement an instant 'Undo Card Play' mechanic (valid before damage resolution/RNG reveal), full rebindable hotkeys, and vector-scaled UI with a dedicated resolution slider. |
| Balancing | Act 4 shifts from tactical decision-making to binary damage-check relic requirements via inflated enemy HP pools (180 to 950 HP). | Scale late-game difficulty through reactive enemy mechanics (shields, stance shifts, card-draw curses) rather than raw HP bloat, ensuring viable low-tier relic defensive clears. |
| Content Loop | Severe shop/seed variance where essential defensive tools can fail to spawn before unavoidable burst damage encounters. | Implement a dynamic RNG pity mechanic in node generators ensuring a guaranteed minimum quota of defensive card offerings prior to tier-spike elite encounters. |
```

</details>

---

<a name="interactive-fiction-helper"></a>
### 인터랙티브 픽션 및 텍스트 TRPG 엔진 / Interactive Fiction & Text TRPG Engine (`interactive-fiction-helper`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/interactive-fiction-helper/SKILL.md) | [EN](skills/en/03_gamedev/interactive-fiction-helper/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. SF 서바이벌 호러 시나리오의 다음 턴을 진행해 줘. 이전 턴에서 내 캐릭터인 엔지니어 카엘렌은 2번 행동인 '열절단 키트를 사용하여 4번 지하층 방폭문 잠금 실린더를 조용히 녹여낸다'를 선택했어. 이전 상태: 체력 68/100, 소지품: [열절단 키트 (잔여 1회), 자기펄스 권총 (4/6발), 암호화된 데이터 슬레이트, 전투식량 2개], 플래그: [정거장 산소 42%, 바이오 스토커 경계 단계: 의심, 극저온 코어 구조 신호 활성화]. 정해진 템플릿에 따라 서사 결과, 갱신된 상태창, 3가지 다음 행동을 출력해 줘.
2. 뇌우가 치는 저주받은 해안 감시탑을 조사하는 추방된 방랑 기사로 플레이하는 로우 매직 다크 판타지 RPG의 1턴을 시작해 줘. 시작 스탯, 인벤토리 5칸 슬롯, 활성화된 퀘스트 플래그, 3가지 시작 선택지를 포함해 줘.
3. 중역 서버실 환기구에 숨어 전격 피해 15를 입은 상태에서 자동 경비 드론을 해킹하려는 사이버펑크 잠입 시나리오의 4턴을 진행해 줘.

**[English Prompts]**
1. Run the next turn in my sci-fi survival horror scenario. In the previous turn, my character, Engineer Kaelen, chose action 2: 'Use the thermal splice kit to silently melt the lock cylinder on the blast bulkhead of Sub-Level 4.' Prior state: HP 68/100, Inventory: [Thermal Splice Kit (1 use left), Mag-Pulse Pistol (4/6 shots), Encrypted Data Slate, 2x Rations], Flags: [Station Oxygen at 42%, Bio-Stalker alert level: Suspicious, Cryo-Core distress beacon active]. Generate the resulting narrative outcome, updated status window, and the next 3 choices following the specified template.
2. Initialize turn 1 of a low-magic dark fantasy RPG where I play an exiled hedge knight investigating a cursed coastal watchtower during a thunderstorm. Include starting stats, 5 inventory slots, active quest flags, and 3 opening choices.
3. Execute turn 4 of a cyberpunk infiltration scenario where the player attempts to hack an automated security drone while hiding inside an executive server room air vent after taking 15 electrical shock damage.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 대화 턴이 길어질수록 외부 상태 관리자 없이는 소모품 수량, 체력 상한선, 획득 플래그 등이 서서히 누락되거나 왜곡되는 '상태 드리프트' 현상이 발생하기 쉽습니다.
- d20 주사위 굴림이나 스킬 판정 등의 확률 요소가 실제 난수 생성기가 아닌 확률적 텍스트 예측에 의존하므로, 실패에 편향되거나 반대로 지나치게 관대한 결과가 나올 수 있습니다.
- 제시되는 3가지 선택지가 다음 턴 서사에서 실질적인 분기를 만들어내지 못하고 동일한 결과로 수렴해버리는 형식적 선택지(착시 효과)가 발생할 수 있습니다.

**[English Analysis]**
- Persistent state tracking across long conversation turns is prone to silent drift (e.g., forgotten ammo counts, fluctuating stat caps, or magically reappearing consumed items) unless explicitly reinforced in every prompt.
- Simulated random mechanics (such as d20 checks or dice rolls) lack true entropy and can produce biased, overly forgiving narrative outcomes without external seed verification.
- Branching narrative options frequently suffer from false dilemma convergence, where seemingly distinct choices lead to functionally identical story beats in subsequent turns.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,883 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Scenario: Sub-Level 4 Decontamination Corridor

## Narrative Beat
The thermal splice kit sputters out its final hiss of ionized heat, turning the reinforced pneumatic deadbolt into a glowing slag of white-hot slag. You ease the heavy titanium blast bulkhead open just enough to slip through, sealing it softly behind you before the station's atmospheric pressure equalize alarm can trigger. The splice kit clicks empty in your palm, its ceramic core cracked and permanently spent.

Beyond the threshold lies the quarantine junction of Sub-Level 4. Fluorescent hazard strips flicker erratically, reflecting off slick, organic amber resin coating the deck plates. Through the gloom, forty paces down the central catwalk, the biological research airlock stands sealed—its pressure valve pulsing rhythmically like an exposed ventricle. A guttural chittering echoes from the grated ceiling conduits directly above you: the Bio-Stalker has caught your thermal wake and is actively pacing your position from the maintenance shafts.

## [Status Window]
- **HP / Vitality**: 68 / 100
- **Inventory**: Mag-Pulse Pistol (4/6 shots), Encrypted Data Slate, 2x Rations
- **Key Flags**: Sub-Level 4 Infiltrated; Station Oxygen at 39% (-3%); Bio-Stalker Alert Level: Hunting (Directly Above); Cryo-Core Distress Beacon Active

## Available Actions
1. **[Direct Action]**: Fire a charged shot from your Mag-Pulse Pistol through the overhead vent grate to drive off the Bio-Stalker before it ambushes you.
2. **[Tactical Choice]**: Smear the amber resin over your flight suit to mask your body heat and silently crawl beneath the catwalk piping toward the biological research airlock.
3. **[Alternative Route]**: Jack the Encrypted Data Slate into the corridor's manual bypass terminal to trigger an emergency halon purge in the ceiling ducts, trapping the creature while sacrificing station oxygen.
```

</details>

---

<a name="pixelfx"></a>
### 절차적 픽셀 아트 VFX 및 타격 연출 생성기 / Procedural Pixel FX & Action Choreographer (`pixelfx`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/pixelfx/SKILL.md) | [EN](skills/en/03_gamedev/pixelfx/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. '썬더 슬래시 클리브(Thunder-Slash Cleave, 근접/번개 복합)' 이펙트를 구현하기 위한 독립형 HTML5 Canvas 런타임 연동 코드 및 커스텀 절차적 픽셀 이펙트 모듈을 작성해 줘. 결과물에는 다음이 포함되어야 해: (1) 듀얼 버퍼(컬러 인덱스 + 가산 라이트 강도 버퍼), 커스텀 5색 팔레트 램프, 4x4 베이어 디더링 계산식 및 파라메트릭 스파크가 포함된 ES 모듈 절차적 이펙트 구현체, (2) 0.12초 선딜레이, 0.16초 히트스톱, 방향성 넉백 벡터, 감쇠 카메라 쉐이크를 포함한 액션 연출 데이터, (3) 게임 틱 루프, 캔버스 합성 함수, 스페이스바 입력으로 공격을 재실행하는 실행 가능한 HTML/JS 러너.
2. 'shadow/black-hole' 및 'holy/divine-shield' 이펙트를 프레임 지속 시간 및 충돌 트리거 메타데이터가 포함된 Godot 4 전용 SpriteFrames 리소스로 변환하기 위한 Node CLI 내보내기 명령어와 GDScript 파서 스크립트를 작성해 줘.
3. 'fire/meteor-strike' 절차적 프리셋을 딥 퍼플/시안 컬러 램프의 엘드리치 공허 테마로 리컬러링하고, 히트스톱을 0.22초로 강화한 커스텀 액트 설정 객체 코드를 생성해 줘.

**[English Prompts]**
1. Create a complete standalone HTML5 Canvas runtime integration and custom procedural pixel effect module for a 'Thunder-Slash Cleave' (melee/lightning hybrid). The deliverable must include: (1) an ES module procedural effect implementation with dual-buffer rendering (color index buffer + additive light intensity buffer), custom 5-color palette ramp, 4x4 Bayer dithering calculation, and parametric sparks; (2) action choreography parameters including 0.12s windup, 0.16s hit freeze, directional knockback vector, and decaying camera shake; and (3) an operational HTML/JS runner with a game tick loop, canvas compositing function, and keyboard trigger ('Space') to replay the attack.
2. Generate the exact Node CLI export workflow and Godot 4 JSON parser script to convert 'shadow/black-hole' and 'holy/divine-shield' into standardized SpriteFrames resources with frame durations and collision trigger metadata.
3. Recolor the 'fire/meteor-strike' procedural preset into an eldritch void theme with a deep purple/cyan color ramp, increase hit freeze to 0.22s, and output the customized act configuration object.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- Gemini 3.8 Flash 런타임 환경에서는 절차적 픽셀 밀도나 서브픽셀 디더링의 시각적 명암을 직접 렌더링하여 검증할 수 없으므로, 캔버스 스케일 및 팔레트 대비에 대한 수동 보정이 필요합니다.
- 순수 단일 스레드 자바스크립트 루프로 구현된 2중 버퍼 가산 합성 연산은 해상도가 480x270을 초과할 경우 WebGL 셰이더로 이관하지 않으면 프레임 드랍이 발생할 수 있습니다.
- 내보낸 프레임 메타데이터 타이밍은 대상 게임 엔진의 고정 물리 틱 레이트(예: Godot 60Hz, Unity 기본 50Hz) 차이에 따른 델타 보정을 자동으로 처리하지 못하므로 수동 스케일링이 요구됩니다.

**[English Analysis]**
- Gemini 3.8 Flash cannot visually preview procedural pixel density or subpixel dithering clarity at runtime; manual canvas scale and palette contrast calibration is required.
- Real-time additive blend calculations implemented in pure JavaScript single-threaded loops will experience frame drops on resolutions exceeding 480x270 unless offloaded to WebGL shaders.
- Exported frame metadata timing cannot automatically adjust for engine-specific fixed-update physics ticks (e.g., Godot 60Hz vs Unity 50Hz) without manual delta scaling.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (12,075 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>PixelFX - Thunder Slash Cleave Demo</title>
  <style>
    body {
      margin: 0;
      background: #0d0e15;
      color: #9aa;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: monospace;
    }
    canvas {
      image-rendering: pixelated;
      image-rendering: crisp-edges;
      border: 2px solid #23273a;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
      width: 640px;
      height: 360px;
    }
    .hint {
      margin-top: 12px;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <canvas id="viewport" width="320" height="180"></canvas>
  <div class="hint">Press [SPACE] or Click to Trigger Thunder-Slash Cleave</div>

  <script type="module">
    // =========================================================================
    // 1. PROCEDURAL PIXELFX CORE (Dual-Buffer + 4x4 Bayer Dither + Palette Ramp)
    // =========================================================================
    const BAYER_4X4 = [
       0 / 16,  8 / 16,  2 / 16, 10 / 16,
      12 / 16,  4 / 16, 14 / 16,  6 / 16,
       3 / 16, 11 / 16,  1 / 16,  9 / 16,
      15 / 16,  7 / 16, 13 / 16,  5 / 16
    ];

    function parseHex(hex) {
      const c = hex.replace('#', '');
      const bigint = parseInt(c.length === 3 ? c.split('').map(x => x + x).join('') : c, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    }

    function createFrame(width, height) {
      return {
        width,
        height,
        color: new Uint8Array(width * height), // Palette index 0..N
        light: new Float32Array(width * height) // Additive light 0.0..2.0+
      };
    }

    function clearFrame(frame) {
      frame.color.fill(0);
      frame.light.fill(0);
    }

    function compositeFrame(frame, targetImageData, paletteRgb, bgRgb) {
      const { width, height, color, light } = frame;
      const data = targetImageData.data;
      const numColors = paletteRgb.length;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = y * width + x;
          const pxIdx = idx * 4;
          const cIdx = color[idx];
          const lVal = light[idx];
          const dither = BAYER_4X4[(y & 3) * 4 + (x & 3)];

          let r = bgRgb[0];
          let g = bgRgb[1];
          let b = bgRgb[2];

          if (cIdx > 0) {
            // Base color from palette
            const base = paletteRgb[Math.min(cIdx, numColors - 1)];
            r = base[0];
            g = base[1];
            b = base[2];
          }

          // Apply Additive Glow Buffer with Dithering Threshold
          if (lVal > 0) {
            const glowBonus = (lVal + dither * 0.25) * 120;
            r = Math.min(255, r + glowBonus);
            g = Math.min(255, g + glowBonus * 1.1);
            b = Math.min(255, b + glowBonus * 1.4);
          }

          data[pxIdx + 0] = r | 0;
          data[pxIdx + 1] = g | 0;
          data[pxIdx + 2] = b | 0;
          data[pxIdx + 3] = 255;
        }
      }
    }

    // =========================================================================
    // 2. PROCEDURAL EFFECT MODULE: Thunder-Slash Cleave
    // =========================================================================
    const ThunderSlashEffect = {
      duration: 0.42,
      palette: ["#050512", "#151b40", "#2a4db3", "#4be3ff", "#ffffff"],
      
      render(frame, progress, originX, originY, flip = false) {
        const { width, height, color, light } = frame;
        const dir = flip ? -1 : 1;
        
        // Arc parameters
        const slashRadius = 46;
        const startAngle = -Math.PI * 0.7;
        const endAngle = Math.PI * 0.35;
        const currentArcEnd = startAngle + (endAngle - startAngle) * Math.min(progress * 2.5, 1.0);
        const thickness = Math.sin(progress * Math.PI) * 7.5;

        // 1. Draw Cleave Arc Ribbon
        if (progress < 0.85) {
          const steps = 60;
          for (let i = 0; i < steps; i++) {
            const t = i / steps;
            const angle = startAngle + (currentArcEnd - startAngle) * t;
            const sweepDist = slashRadius + (Math.sin(t * Math.PI) * 6);
            
            for (let w = -thickness; w <= thickness; w += 0.8) {
              const r = sweepDist + w;
              const px = Math.round(originX + Math.cos(angle) * r * dir);
              const py = Math.round(originY + Math.sin(angle) * r * 0.75);

              if (px >= 0 && px < width && py >= 0 && py < height) {
                const bufferIdx = py * width + px;
                const normDistFromCenter = Math.abs(w) / (thickness + 0.001);
                
                // Core is white/cyan (3 or 4), outer edge is blue (2)
                const pIndex = normDistFromCenter < 0.35 ? 4 : (normDistFromCenter < 0.7 ? 3 : 2);
                color[bufferIdx] = Math.max(color[bufferIdx], pIndex);
                light[bufferIdx] = Math.min(2.0, light[bufferIdx] + (1.0 - normDistFromCenter) * 1.5);
              }
            }
          }
        }

        // 2. Procedural Lightning Arcs & Electric Sparks
        const seed = Math.floor(progress * 18);
        const sparkCount = 14;
        for (let s = 0; s < sparkCount; s++) {
          const pseudoRand = Math.sin(seed * 91.3 + s * 47.1) * 0.5 + 0.5;
          const sparkAngle = startAngle + (endAngle - startAngle) * pseudoRand;
          const sparkDist = slashRadius + (Math.sin(s * 12.3) * 18);
          
          let curX = originX + Math.cos(sparkAngle) * (sparkDist * 0.4) * dir;
          let curY = originY + Math.sin(sparkAngle) * (sparkDist * 0.4 * 0.75);
          const targetX = originX + Math.cos(sparkAngle) * (sparkDist * 1.25) * dir;
          const targetY = originY + Math.sin(sparkAngle) * (sparkDist * 1.25 * 0.75);

          const segs = 5;
          for (let j = 0; j <= segs; j++) {
            const segT = j / segs;
            const jx = curX + (targetX - curX) * segT + (Math.sin(j * 3.7 + seed) * 4);
            const jy = curY + (targetY - curY) * segT + (Math.cos(j * 5.1 + seed) * 4);
            
            const ipx = Math.round(jx);
            const ipy = Math.round(jy);
            if (ipx >= 0 && ipx < width && ipy >= 0 && ipy < height) {
              const bIdx = ipy * width + ipx;
              color[bIdx] = 4; // Pure electric white
              light[bIdx] = Math.min(2.0, light[bIdx] + 1.2);
            }
          }
        }
      }
    };

    // =========================================================================
    // 3. ACTION CHOREOGRAPHY ACT CONTROLLER (Windup, Freeze, Pushback, Shake)
    // =========================================================================
    function createChoreographyAct(effectModule, options = {}) {
      const config = {
        x: options.x ?? 120,
        y: options.y ?? 100,
        flip: options.flip ?? false,
        paletteRgb: (options.palette || effectModule.palette).map(parseHex),
        windupDuration: 0.12,
        hitFreezeDuration: 0.16,
        hitImpactNormalizedTime: 0.28,
        knockback: { x: options.flip ? -24 : 24, y: -4 },
        shakeIntensity: 7.0,
        shakeDecay: 18.0
      };

      let actTime = 0.0;
      let hasHitFrozen = false;
      let currentFreezeRemaining = 0.0;
      let shakeMagnitude = 0.0;
      let shakeOffset = [0, 0];
      let isCompleted = false;

      function reset() {
        actTime = 0.0;
        hasHitFrozen = false;
        currentFreezeRemaining = 0.0;
        shakeMagnitude = 0.0;
        shakeOffset = [0, 0];
        isCompleted = false;
      }

      function trigger() {
        reset();
      }

      function update(dt) {
        if (isCompleted) return;

        // Handle hit-freeze (timestop)
        if (currentFreezeRemaining > 0) {
          currentFreezeRemaining -= dt;
          // Shake continues vibrating during hitstop
          if (shakeMagnitude > 0) {
            shakeOffset = [
              (Math.random() * 2 - 1) * shakeMagnitude,
              (Math.random() * 2 - 1) * shakeMagnitude
            ];
            shakeMagnitude = Math.max(0, shakeMagnitude - config.shakeDecay * dt * 0.5);
          } else {
            shakeOffset = [0, 0];
          }
          return;
        }

        actTime += dt;

        // Check hit impact trigger point
        const executionTime = actTime - config.windupDuration;
        const effectNormalized = executionTime / effectModule.duration;

        if (!hasHitFrozen && effectNormalized >= config.hitImpactNormalizedTime) {
          hasHitFrozen = true;
          currentFreezeRemaining = config.hitFreezeDuration;
          shakeMagnitude = config.shakeIntensity;
        }

        // Process decaying camera shake
        if (shakeMagnitude > 0) {
          shakeOffset = [
            (Math.random() * 2 - 1) * shakeMagnitude,
            (Math.random() * 2 - 1) * shakeMagnitude
          ];
          shakeMagnitude = Math.max(0, shakeMagnitude - config.shakeDecay * dt);
        } else {
          shakeOffset = [0, 0];
        }

        if (actTime >= config.windupDuration + effectModule.duration) {
          isCompleted = true;
          shakeOffset = [0, 0];
        }
      }

      function draw(frame) {
        // Actor silhouette placeholder
        const { width, height, color } = frame;
        const ax = Math.round(config.x);
        const ay = Math.round(config.y);
        
        // Simple telegraphing dummy actor
        const windupOffset = actTime < config.windupDuration ? (config.flip ? 3 : -3) : 0;
        for (let dy = -14; dy <= 0; dy++) {
          for (let dx = -4; dx <= 4; dx++) {
            const px = ax + dx + windupOffset;
            const py = ay + dy;
            if (px >= 0 && px < width && py >= 0 && py < height) {
              color[py * width + px] = 1; // Deep base tone
            }
          }
        }

        // Effect Rendering
        if (actTime >= config.windupDuration && !isCompleted) {
          const effProgress = Math.min(
            1.0,
            Math.max(0.0, (actTime - config.windupDuration) / effectModule.duration)
          );
          effectModule.render(frame, effProgress, config.x, config.y - 6, config.flip);
        }
      }

      return {
        config,
        update,
        draw,
        trigger,
        get shake() { return shakeOffset; },
        get isFinished() { return isCompleted; }
      };
    }

    // =========================================================================
    // 4. RUNNER & COMPOSITOR LOOP
    // =========================================================================
    const canvas = document.getElementById("viewport");
    const ctx = canvas.getContext("2d");
    const width = 320;
    const height = 180;

    const frameBuffer = createFrame(width, height);
    const imgData = ctx.createImageData(width, height);
    const backgroundRgb = parseHex("#0d0e15");

    const act = createChoreographyAct(ThunderSlashEffect, {
      x: 140,
      y: 110,
      flip: false
    });

    let lastTime = performance.now();

    function gameLoop(now) {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      act.update(dt);
      clearFrame(frameBuffer);
      act.draw(frameBuffer);
      compositeFrame(frameBuffer, imgData, act.config.paletteRgb, backgroundRgb);

      // Render to main canvas with camera shake translation
      ctx.fillStyle = "#0d0e15";
      ctx.fillRect(0, 0, width, height);

      const [shakeX, shakeY] = act.shake;
      ctx.putImageData(imgData, Math.round(shakeX), Math.round(shakeY));

      requestAnimationFrame(gameLoop);
    }

    // Controls
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        act.trigger();
      }
    });
    canvas.addEventListener("pointerdown", () => act.trigger());

    // Start loop
    requestAnimationFrame(gameLoop);
  </script>
</body>
</html>
```

</details>

---

<a name="rpg-dialogue-formatter"></a>
### RPG 메이커 퀘스트 이벤트 대사 및 분기 로직 포맷터 / RPG Maker Quest Event Dialogue & Branch Logic Formatter (`rpg-dialogue-formatter`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/rpg-dialogue-formatter/SKILL.md) | [EN](skills/en/03_gamedev/rpg-dialogue-formatter/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. NPC 이름: 불명예를 안은 대장장이 가레스 (무뚝뚝하고 냉소적이나 죄책감에 시달리는 노병). 퀘스트: '불씨와 참회'. 목표: 폐광에서 '스틱스 석탄' 3개 채굴 및 도적단 두목에게 빼앗긴 '가레스의 가문 인장' 회수. 플레이어는 일반 수락, 선급금 요구 협상, 냉담한 거절 중 선택 가능. 보상: '재벼련된 노병의 대검' 1개, 250 골드. 호감도 변수 0045: Gareth_Affection 추적 포함.
2. NPC 이름: 수녀 메이브 (온화하지만 교조적인 약초사). 퀘스트: '달빛꽃의 철야 기도'. 목표: 타락한 오염 괴물들을 피해 '달무리 백합' 5송이 채취. 선택지: 신앙적 수락, 금전 보상 요구, 비효율적 미신이라며 조롱. 보상: 정화의 성유 3개, 축복받은 묵주 1개. 퀘스트 시작, 거절, 완료 처리를 위한 스위치 트리 포함.
3. NPC 이름: 밀수꾼 잭스 (망상증에 걸린 좀도둑 출신 브로커). 퀘스트: '장부 회수 작전'. 목표: 경비대 감시실에 잠입해 '암호화된 장부' 탈환 (변수 0012: 경비대_경계도 수치가 3 미만이어야 함). 경계도 초과 시 실패 및 전투 발생. 보상: 400 골드, 도둑의 도구 세트 5개. 암시장 평판 변수 0089 연동.

**[English Prompts]**
1. NPC Name: Gareth the Disgraced Blacksmith (gruff, cynical, guilt-ridden veteran). Quest: 'Cinder and Repentance'. Objective: Retrieve 3 Stygian Coal from the Abandoned Mines and Gareth's Stolen Crest from the Bandit Leader. The player can choose to accept, negotiate for an advance, or coldly decline. Reward: 1x Reforged Veteran Greatsword, 250 Gold. Track morale using Variable 0045: Gareth_Affection.
2. NPC: Sister Maeve (gentle but strictly dogmatic herbalist). Quest: 'Nightshade Vigil'. Objective: Harvest 5 Moon-Drop Lilies while fighting off Feral Blight-Stalkers. Choices: Accept devoutly, demand coin upfront, or call the task foolish. Reward: 3x Cleansing Salves, 1x Blessed Rosary. Setup Switches for Active, Refused, and Completed states.
3. NPC: Jax the Whispering Fence (paranoid street urchin turned smuggler). Quest: 'Dead Drop Debt'. Objective: Steal back an Encrypted Ledger from the City Watch Barracks without raising alarms (Check Variable 0012: Watch_Alert_Level < 3). Failure condition triggers hostile guards. Reward: 400 Gold, Lockpick Set x5. Track Variable 0089: Black_Market_Reputation.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- RPG 메이커 표준 대화창 기준인 4줄 제한 및 한 줄당 권장 자수(반각 48자, 전각 24자 내외)를 고려한 자동 텍스트 줄바꿈 연동에 제한이 있어 수동 편집이 필요할 수 있습니다.
- 사용자가 지정한 엔진 버전(XP, VX Ace, MV, MZ)에 종속적인 스크립트 호출(RGSS3 또는 JS 플러그인 연동)을 엔진 지정 없이 임베드하지 못합니다.
- 기존 프로젝트에 이미 할당된 스위치/변수 ID 번호와의 충돌 여부를 자동으로 감지하거나 보정하지 못합니다.

**[English Analysis]**
- Strict 4-line text display boundary limits in RPG Maker standard window engines must be formatted manually with line breaks and cannot exceed 48 characters per line.
- Cannot execute actual RGSS3 script calls or JavaScript hooks for MV/MZ engine variants without explicit engine platform definition.
- Does not validate whether specified switch/variable ID values collide with the user's existing engine database configuration.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (4,297 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Quest Event: Cinder and Repentance (NPC: Gareth the Disgraced Blacksmith)

## 1. Event Setup
- **Pre-Conditions**: Switch [0041: Chapter_2_Unlocked] == ON
- **Trigger**: Action Button
- **Variables Used**:
  - Variable [0045: Gareth_Affection] (Range: -10 to +10, Default: 0)
  - Variable [0046: Stygian_Coal_Count] (Target: 3)
- **Switches Used**:
  - Switch [0101: Quest_Cinder_Active]
  - Switch [0102: Quest_Cinder_Declined]
  - Switch [0103: Quest_Anchor_TurnInReady]
- **Self-Switch Cycle**:
  - Page 1: Default (Offer & Branching)
  - Page 2: Self-Switch [A] (In-Progress Tracker)
  - Page 3: Self-Switch [B] (Completed - Idle Dialogue)

---

## 2. Event Commands & Dialogue (Page 1: Quest Offer)

```text
◆ Show Text: Gareth, Normal, Dim Background
:             : Look around you, kid. Cold forges, rusted iron.
:             : The miners fled, and bandits took my grandfather's crest.
:             : Fetch me 3 Stygian Coals and my Crest. Or get out.
◆ Show Choices: "I will reclaim your honor.", "Advance pay first, old man.", "Solve your own regrets."
: When ["I will reclaim your honor."]
  ◆ Control Variables: [0045: Gareth_Affection] += 2
  ◆ Control Switches: [0101: Quest_Cinder_Active] = ON
  ◆ Show Text: Gareth, Pensive, Bottom
  :             : Honor? Cheap words. But if you bring the coal
  :             : and kill that cutthroat bastard, I'll temper
  :             : something worth your bleeding time.
  ◆ Control Self-Switch: [A] = ON

: When ["Advance pay first, old man."]
  ◆ Control Variables: [0045: Gareth_Affection] -= 1
  ◆ Conditional Branch: Gold >= 0
    ◆ Change Gold: + 50
    ◆ Control Switches: [0101: Quest_Cinder_Active] = ON
    ◆ Show Text: Gareth, Angered, Bottom
    :             : Mercenary scum. Take these 50 coins for rations.
    :             : Fail to bring my crest, and I'll bury you in the ash.
    ◆ Control Self-Switch: [A] = ON
  : Branch End

: When ["Solve your own regrets."]
  ◆ Control Variables: [0045: Gareth_Affection] -= 3
  ◆ Control Switches: [0102: Quest_Cinder_Declined] = ON
  ◆ Show Text: Gareth, Scornful, Bottom
  :             : Then choke on the mountain dust. Don't come crawling
  :             : back when your blade snaps like dry birch.
  ◆ Exit Event Processing
◆ Choice End
```

---

## 3. Event Commands & Dialogue (Page 2: In-Progress & Turn-in)
*Pre-condition: Self-Switch [A] == ON*

```text
◆ Conditional Branch: Switch [0101: Quest_Cinder_Active] == ON
  ◆ Conditional Branch: Item [Stygian Coal] in Inventory >= 3
    ◆ Conditional Branch: Item [Gareth's Crest] in Inventory >= 1
      ◆ Show Text: Gareth, Shocked, Bottom
      :             : ...The crest. Not a single chip on the seal.
      :             : And true Stygian heat... You actually did it.
      ◆ Change Items: [Stygian Coal] - 3
      ◆ Change Items: [Gareth's Crest] - 1
      ◆ Change Gold: + 250
      ◆ Change Weapons: [Reforged Veteran Greatsword] + 1
      ◆ Control Variables: [0045: Gareth_Affection] += 5
      ◆ Control Switches: [0101: Quest_Cinder_Active] = OFF
      ◆ Show Text: Gareth, Smile, Bottom
      :             : Take this greatsword. Quenched in blood and stoked
      :             : with stolen coals. We're square, adventurer.
      ◆ Play ME: Fanfare1, 80, 100
      ◆ Control Self-Switch: [B] = ON
      ◆ Exit Event Processing
    : Else
      ◆ Show Text: Gareth, Impatient, Bottom
      :             : You've got the black coal, but where's my family crest?
      :             : The bandit leader still breathes, doesn't he?
      ◆ Exit Event Processing
    : Branch End
  : Else
    ◆ Show Text: Gareth, Normal, Bottom
    :             : Cold forge, kid. I need 3 Stygian Coals from the mine.
    :             : Stop wasting daylight.
    ◆ Exit Event Processing
  : Branch End
: Branch End
```

---

## 4. Event Commands & Dialogue (Page 3: Completed State)
*Pre-condition: Self-Switch [B] == ON*

```text
◆ Conditional Branch: Variable [0045: Gareth_Affection] >= 5
  ◆ Show Text: Gareth, Normal, Bottom
  :             : Steel holds true, kid. Drop by whenever
  :             : your edge needs honing. Free of charge.
: Else
  ◆ Show Text: Gareth, Normal, Bottom
  :             : Forge is burning again. Don't touch the anvils.
  :             : I've got work to do.
: Branch End
```
```

</details>

---

<a name="ttrpg-encounter-helper"></a>
### TRPG 즉흥 인카운터 및 기믹 시트 생성기 / TTRPG Impromptu Encounter & Gimmick Generator (`ttrpg-encounter-helper`)
- **Skill Spec**: [KO](skills/ko/03_gamedev/ttrpg-encounter-helper/SKILL.md) | [EN](skills/en/03_gamedev/ttrpg-encounter-helper/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 마그마가 흐르는 불안정한 흑요석 다리와 붕괴 중인 화산 칼데라를 건너는 7레벨 4인 모험가 파티를 위한 완성형 인카운터 시트를 생성해줘. 화염 속성의 지하 포식자 매복을 배경으로 하며, 브루저와 컨트롤러 몬스터의 고유 기믹, 환경적 위험 요소, 관련 판정 DC, d4 돌발 상황 악화 테이블을 모두 포함해야 해.
2. 폭우와 뇌우가 몰아치는 도시 지붕 위 추격 및 전투 인카운터를 1티어(3레벨) 파티용으로 구성해줘. 미끄러운 기와, 벼락 위험 DC, 독특한 기믹을 지닌 도적 2종의 프로필, 실패 결과 테이블을 포함해줘.
3. 부유하는 비전 골렘들이 지키는 고대 반마법 수몰 도서관을 통과하는 12레벨 파티용 인카운터 시트를 작성해줘. 지형 파괴 메커니즘, 주문 억제 돌발 상황, 전술적 기믹을 제공해줘.

**[English Prompts]**
1. Generate a complete encounter sheet for a 4-player party at Level 7 navigating a crumbling volcanic caldera with unstable obsidian bridges over flowing magma. The encounter must feature an ambush by fire-aspected subterranean predators and include distinct gimmicks for a bruiser, a controller, environmental hazards, skill DCs, and a d4 complication escalation table.
2. Build an urban rooftop chase and combat encounter for a Tier 1 party (Level 3) during a torrential thunderstorm. Include slippery tiles, lightning hazard DC, two bandit archetypes with unique gimmicks, and a failure consequence table.
3. Create an encounter sheet for a Level 12 party in an ancient, anti-magic sunken library guarded by floating arcane constructs. Provide terrain disruption mechanics, spell suppression complications, and tactical gimmicks.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 명시적인 규칙 판본(D&D 5e, 패스파인더 등) 프롬프트가 주어지지 않으면 액션 이코노미에 따른 공식 XP 임계값을 정밀하게 계산하지 못할 수 있습니다.
- DMG 가이드라인을 직접 대조 검증하지 않을 경우, 특정 티어의 평균 HP에 비해 지나치게 치명적인 환경 피해량(예: 마그마 피해)을 산출할 수 있습니다.
- 전체 주문 목록이나 리액션 트리거가 포함된 전체 몬스터 데이터 시트 대신 HP/AC 및 역할 요약 형태로만 기믹을 압축 제공합니다.

**[English Analysis]**
- Cannot dynamically calculate official D&D 5e / Pathfinder encounter XP thresholds against exact action economy without explicit rule-edition prompts.
- May occasionally generate lethal or over-punishing damage values (e.g., magma damage) for average tier hit point pools if not cross-referenced with DMG guidelines.
- Stat blocks are summarized into role/HP/AC abstractions rather than providing full combat stat cards with spell lists and reaction triggers.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,114 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Encounter Sheet: Caldera Crossfire (CR / Tier: Level 7 / Tier 2)

## 1. Terrain & Hazard Dynamics
- **Environment**: Crumbling Obsidian Arches over Boiling Magma (Hazard: Venting Pyroclastic Fissures)
- **Primary DC**: DC 15 (Dexterity [Acrobatics] or Strength [Athletics])
- **Failure Complication**: The fragile obsidian bridge fractures underfoot. The creature loses all remaining movement for the turn and falls prone at the fissure edge, taking 14 (4d6) fire damage from rising superheated gas.

## 2. Threat Profile & Core Gimmicks
| Target / Creature | Role | HP / AC | Signature Gimmick (1 per target) |
|:---|:---|:---|:---|
| Magma Maw (Subterranean Behemoth) | Bruiser | 114 / 16 | **Subducting Slam**: When hitting with a melee slam, target must make a DC 15 Strength save or be dragged 10 ft into an adjacent hazard zone (magma or vent). Recharges on a d6 roll of 5–6. |
| Ash-Weaver Stalker | Controller | 78 / 15 | **Suffocating Cinders**: Bonus Action (Recharge 4–6). Blinds and silences a target within 40 ft with sticky ash until a DC 14 Constitution save is passed at end of their turn. |
| Fissure Environment | Hazard | N/A | **Tectonic Tremor**: On Initiative Count 20 (losing ties), every creature standing on stone bridges must succeed on a DC 13 Dex save or be knocked prone; sections under 10+ weight collapse. |

## 3. Dynamic Complication Table (d4)
| d4 | Escalation Event | Immediate Consequence |
|:---|:---|:---| 
| 1 | Terrain Shift | A primary obsidian arch shatters. Area becomes difficult terrain; any creature dashing must pass a DC 14 Dex save or fall into secondary magma rifts (10d6 fire damage). |
| 2 | Reinforcement | 2d4 Cinder Mephits erupt from venting magma pools, joining the initiative count at the end of the current round. |
| 3 | Equipment Hazard | Blistering thermal updraft forces a DC 14 Strength save or loose shields, foci, or held weapons are dropped into the 15-foot drop below. |
| 4 | Clock Pressure | Lava surge inundates lower ledges; party has exactly 3 rounds before current bridges submerge entirely, requiring immediate upward climbing checks. |
```

</details>

---

## 04. Creative and Visual Content (Design & Media)

<a name="2.5d-layer-decomposer"></a>
### 2.5D 캐릭터 레이어 분해기 / 2.5D Layer Decomposer (`2.5d-layer-decomposer`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/2.5d-layer-decomposer/SKILL.md) | [EN](skills/en/04_creative_arts/2.5d-layer-decomposer/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 고해상도 애니메이션 캐릭터 일러스트를 리깅 준비 완료 상태의 2.5D 프로덕션 명세서로 분해해 줘. 캐릭터: '아우렐리아, 사이버 고딕 천문학자'. 레이스 이너 블라우스와 금색 숄더 패드가 달린 화려한 하이칼라 벨벳 코트 착용, 롱 트윈테일, 바보털(아호게)이 포함된 비대칭 앞머리, 발광 모노클 악세서리, 공중에 떠 있는 룬 마법진 후광 보유. 전체 23단계 레이어 뎁스 트리, 정밀 인페인팅/가림 영역 마진(픽셀/백분율 확장값), 이에 대응하는 Live2D Cubism 디포머 계층 구조를 출력할 것.
2. 거대한 뿔 투구, 숄더 폴드론, 땋은 옆머리, 공중에 뜬 룬 대검을 장착한 치비 전사 캐릭터의 23단계 레이어 분해 명세서를 작성하고, 눈 깜빡임 클리핑 마스크 처리에 집중해 정리해 줘.
3. 마이크를 든 현대 아이돌 캐릭터의 Live2D 레이어 분해 기획안을 작성하고, 반투명 시스루 소매 패브릭 분리 및 3단계 앞머리 바람 물리 연산 레이어 구성을 구체화해 줘.

**[English Prompts]**
1. Decompose a high-detail anime character illustration into a ready-to-rig 2.5D production manifest. Character: 'Aurelia, Cyber-Gothic Astromancer' wearing an ornate high-collar victorian velvet coat with inner lace blouse, long twin-tails, asymmetric front bangs with an ahoge, glowing monocle accessory, gold filigree shoulder pads, and celestial floating halo runes. Output the complete 23-layer depth tree, rigorous inpainting/occlusion margins (pixel/percentage offsets), and a matching Live2D Cubism deformer parenting hierarchy.
2. Generate a 23-layer decomposition spec for a chibi warrior character with an oversized horned helmet, shoulder pauldrons, braided side-locks, and a floating runic broadsword, focusing on eye blink clipping masks.
3. Formulate a Live2D layer breakdown plan for a modern idol character holding a microphone, detailing separation for transparent sheer sleeve fabric and 3-stage front bangs wind physics.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 텍스트 런타임 특성상 바이너리 PSD 파일을 직접 생성 및 내보내거나 ComfyUI 노드를 직접 실행할 수 없습니다.
- 레이어 분해 기획안은 위상학적 계획 모델이므로, 실제 이미지를 래스터 레벨에서 직접 대조 분석하지 않는 한 가림 영역의 미세 알파 충돌을 자동 검증할 수 없습니다.
- 실제 Live2D .cmo3 프로젝트 파일 생성, 키프레임 모션 파라미터 바인딩 및 수작업 폴리곤 메쉬 분할 작업은 제공하지 않습니다.

**[English Analysis]**
- Cannot directly generate or export native binary PSD files or execute ComfyUI nodes in this text environment.
- Layer breakdown schemes are topological planning models and cannot automatically verify alpha collision artifacts on unseen character artwork without visual raster analysis.
- Does not create actual Live2D .cmo3 project files, keyframe motion parameters, or manual polygon mesh tessellations.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (6,277 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# 2.5D Layer Decomposition Spec: Aurelia, Cyber-Gothic Astromancer

### 1. 23-Layer Working Depth Tree (Strict Back-to-Front Z-Index)

[Backdrop & Ambience]
- `01_bg_glow`          : Celestial floating halo runes and particle sprites. Additive blend mode. Fully separated from character silhouette.
- `02_hair_back`        : Twin-tail roots, rear cranial skull-cap hair mass, and neck undertresses. Inpainted +35px inwards behind upper torso silhouette.

[Base Anatomy]
- `03_body_torso_skin`  : Neck base, sternum, collarbone plate, and bare skin canvas. Extend +25% vertical inpaint downwards beneath collar/choker rim.
- `04_limbs`            : Upper arms, forearm silhouettes, and glove bases beneath coat sleeves. Inpaint joint knuckles +15px beyond socket pivots.

[Costume Layers]
- `05_clothing_inner`   : High-neck inner lace blouse, micro-ruffles, center jewel brooch. Inpaint +20px beneath outer jacket lapels.
- `06_clothing_outer`   : Victorian velvet coat, gold filigree shoulder pads, rigid lapels, tailcoat split ribbons.

[Facial Canvas & Features]
- `07_head_skin`        : Complete bald cranial dome, jawline contour, and ear lobes. Complete inpaint beneath entire bangs volume and brow zone.
- `08_mouth_interior`   : Inner mouth cavity, uvula shadow, tongue, and lower tooth line. Clamped under lip geometry bounds.
- `09_mouth_lips`       : Upper lip outline, center seam tick, lower lip specular droplet, chin shadow indent.
- `10_nose`             : Nose apex cast shadow dot and vertical bridge highlight streak.
- `11_eye_sclera_left`  : Left eyeball white; continuous curved oval expanded +18px past resting lid lines to prevent cutout holes during wide-eye states.
- `12_eye_iris_left`    : Left iris, pupil aperture, celestial starburst pattern, dual specular highlights (clipped to `11_eye_sclera_left`).
- `13_eye_lashes_left`  : Left upper lash wing, eyeliner stroke, corner tick, lower separated micro-lashes.
- `14_eye_sclera_right` : Right eyeball white; continuous curved oval expanded +18px past resting lid lines.
- `15_eye_iris_right`   : Right iris, pupil aperture, celestial starburst pattern (clipped to `14_eye_sclera_right`).
- `16_eye_lashes_right` : Right upper lash wing, eyeliner stroke, corner tick, lower micro-lashes.
- `17_eyebrows`         : Dual eyebrow strokes (left and right on distinct sub-paths) painted with fully clean background transparency.
- `18_face_blush`       : Soft orbital gradient blush, nose bridge flush, cross-hatch micro-lines (Multiply mode, 45% opacity).

[Foreground Locks & Props]
- `19_hair_side_left`   : Left side-lock tendril framing cheekbone, forward curl tuft.
- `20_hair_side_right`  : Right side-lock tendril framing jawline with cyber-gothic hair pin mount.
- `21_hair_bangs`       : Asymmetric center forehead fringe, split into alpha feathered tips with embedded soft violet underside shading.
- `22_hair_ahoge`       : Top dynamic antennae hair strand with single anchor base at vertex skull point.
- `23_accessories_top`  : Glowing cyber-gothic monocle (gold frame, chain drape, HUD lens ring with screen blend overlay).

---

### 2. Occlusion Inpainting & Margin Manifest

| Layer ID | Name | Inpainting Target Region | Offset Margin | Visual Fail Risk if Missing |
|---|---|---|---|---|---| 
| `02` | `hair_back` | Occipital zone behind neck & coat collar | +40px perimeter bleed | Visible checkerboard void on extreme head pitch up (Angle Y+). |
| `03` | `body_torso_skin` | Throat base behind high-collar velvet lace | +30px downwards | Disconnect gap between chin and collar during head roll (Angle Z). |
| `07` | `head_skin` | Forehead, brow ridge, and upper temples | 100% solid fill across bangs | Transparent scalp exposed when bangs sway left/right during wind physics. |
| `11` / `14` | `eye_sclera_L/R` | Upper and lower sclera arcs behind lids | +18px vertical arc pad | Eye white clipping and slicing gaps during full blink deforms. |
| `05` | `clothing_inner` | Center chest under lapels and coat trim | +25px outward bleed | Background shows through jacket splits during torso breathing/tilting. |
| `08` | `mouth_interior` | Upper palate and lower cavity | +12px beyond closed lip seam | Open-mouth interior shows naked jaw skin when stretching mouth shapes. |

---

### 3. Target Live2D Cubism Deformer Parenting Hierarchy

```text
Root (Model Center)
│
├── [Warp] W_Root_Body
│   ├── [Rot] R_Torso_Tilt
│   │   ├── 01_bg_glow
│   │   ├── [Warp] W_Limbs (04_limbs)
│   │   ├── [Warp] W_Coat_Body (06_clothing_outer)
│   │   └── [Warp] W_Blouse_Inner (05_clothing_inner)
│   │
│   └── [Rot] R_Neck_Joint
│       ├── 03_body_torso_skin
│       │
│       └── [Warp] W_Head_Master (Angle X, Angle Y, Angle Z)
│           ├── [Warp] W_Hair_Back (02_hair_back)
│           ├── [Warp] W_Head_Base (07_head_skin, 18_face_blush)
│           │
│           ├── [Warp] W_Eye_Group_Left
│           │   ├── 13_eye_lashes_left
│           │   ├── 12_eye_iris_left (Clip ID: 11_eye_sclera_left)
│           │   └── 11_eye_sclera_left
│           │
│           ├── [Warp] W_Eye_Group_Right
│           │   ├── 16_eye_lashes_right
│           │   ├── 15_eye_iris_right (Clip ID: 14_eye_sclera_right)
│           │   └── 14_eye_sclera_right
│           │
│           ├── [Warp] W_Brows (17_eyebrows)
│           ├── [Warp] W_Nose (10_nose)
│           ├── [Warp] W_Mouth_Group
│           │   ├── 09_mouth_lips
│           │   └── 08_mouth_interior (Clip ID: 09_mouth_lips or Mask)
│           │
│           └── [Warp] W_Hair_Forehead
│               ├── [Warp] W_Hair_Side_L (19_hair_side_left)
│               ├── [Warp] W_Hair_Side_R (20_hair_side_right)
│               ├── [Warp] W_Hair_Bangs (21_hair_bangs)
│               ├── [Rot]  R_Ahoge_Physics (22_hair_ahoge)
│               └── [Warp] W_Accessory_Front (23_accessories_top)
```

---

### 4. Downstream Asset Export Directive
- **Target Canvas**: 4096 x 5760 px, 300 DPI, sRGB IEC61966-2.1.
- **Clipping Configuration**: Set clipping mask on `12_eye_iris_left` bounded to `11_eye_sclera_left`; set clipping mask on `15_eye_iris_right` bounded to `14_eye_sclera_right`.
- **Alpha Edge Quality**: 0 semi-transparent fringing; hard edge anti-aliasing preserved with minimum 2-pixel dilated alpha boundary on inpaint fills.
```

</details>

---

<a name="classic-art-palette-curator"></a>
### 명화 배색 및 구도 큐레이터 / Classic Art Palette Curator (`classic-art-palette-curator`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/classic-art-palette-curator/SKILL.md) | [EN](skills/en/04_creative_arts/classic-art-palette-curator/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 밤샘 침출의 시간, 전통 양조 방식, 차분한 장인정신을 강조하는 수제 콜드브루 커피 브랜드의 에디토리얼 랜딩 페이지와 공지 카드를 디자인하고 있습니다. 테마에 걸맞은 퍼블릭 도메인 명화에서 추출한 5색 HEX 팔레트, 웹 접근성(WCAG) 표면 매핑, 화면 구도 위계, Google Fonts 타이포그래피 조합이 완비된 디자인 큐레이션 스펙을 생성해 주세요.
2. 마인드풀니스 명상 앱 UI를 위해 클로드 모네의 '수련' 연작을 기반으로 한 인상주의 컬러 팔레트와 소셜 썸네일 레이아웃을 큐레이션해 주세요.
3. 요하네스 페르메이르의 '진주 귀걸이를 한 소녀'에서 럭셔리 주얼리 카탈로그용 다크 모드 웹사이트 팔레트와 시각적 무게감 가이드를 추출해 주세요.

**[English Prompts]**
1. I am designing an editorial landing page and announcement card for an artisanal cold-brew coffee brand emphasizing nocturnal patience, heritage brewing, and quiet craftsmanship. Generate a complete fine-art curation package derived from a fitting public domain masterwork, complete with a 5-color HEX palette, accessibility surface mappings, compositional hierarchy, and Google Font pairings.
2. Curate an Impressionist color palette and social thumbnail layout based on Claude Monet's 'Water Lilies' for a mindfulness meditation app UI.
3. Extract a dark-mode website palette and visual weight guide from Johannes Vermeer's 'Girl with a Pearl Earring' for a luxury jewelry catalog.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 런타임 CSS의 서브픽셀 알파 그라디언트나 실제 렌더링 화면에서의 WCAG delta-e 명도 대비를 실시간으로 직접 검증하지 못합니다.
- 미술관 및 아카이브별 디지털화 스캔 방식과 보정 상태에 따라 원작 색상 추출값에 편차가 발생할 수 있습니다.
- 추가적인 코드 생성 프롬프트와 연계하지 않는 한, 다운로드 가능한 SVG 디자인 토큰이나 테마 CSS 파일을 파일 형태로 직접 산출하지는 않습니다.

**[English Analysis]**
- Cannot dynamically verify true live rendering contrast or WCAG delta-e ratios against sub-pixel alpha gradients in runtime CSS.
- Relies on historical digitized color scans of public domain art, which may vary depending on museum photograph archival calibrations.
- Does not generate downloadable vector assets, SVG tokens, or CSS color system files directly unless explicitly chained with code generator prompts.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,792 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Visual Curation: Nocturnal Heritage Cold-Brew Landing Page & Announcement Card

### Masterpiece Reference
- **Artwork**: *Nighthawks* (Edward Hopper, 1942)
- **Atmosphere**: A stark, contemplative urban nocturne evoking patient solitude, cinematic glass warmth, and quiet midnight craftsmanship.

### 5-Color Signature Palette
| Role | HEX Code | Preview / Swatch | Intended Surface |
| :--- | :--- | :--- | :--- |
| Primary Base | `#111618` | █ | Main canvas, nocturnal backdrop, full-viewport background |
| Secondary Surface | `#1E2827` | █ | Content containers, card wrapper, navigation dock |
| Content Text | `#E9E4D4` | █ | Primary headings, editorial body copy (WCAG AAA on `#111618` at 13.8:1) |
| Brand Accent | `#D49B4B` | █ | Hero CTA buttons, badge highlights, active interactive states |
| Subtle Border | `#384B46` | █ | Card dividing lines, hairline container borders, metadata tags |

### Composition & Layout Guide
- **Focal Distribution**: Employ an asymmetric Dutch or Golden Ratio angle across the horizontal axis. Anchor the primary announcement visual at the right 60% intersection—mimicking the illuminated diner interior—while leaving the left 40% as deep negative shadow space for editorial copy and micro-interactions.
- **Visual Weight**: High chiaroscuro contrast. Restrict `#D49B4B` and illuminated warm surfaces to less than 15% of the total viewport area to heighten tactile visual focus against the surrounding 85% cool, muted dark green-tinted shadows.

### Typography Pairing
- **Header Font**: Cinzel (Google Fonts) — Classical, chiseled proportion with geometric restraint for premium heritage titles.
- **Body Font**: Plus Jakarta Sans (Google Fonts) — Clean, highly legible modernist neo-grotesque to maintain clarity across small mobile screen cards.
```

</details>

---

<a name="concept-moodboard-builder"></a>
### 시각 컨셉 무드보드 생성기 / Concept Moodboard Builder (`concept-moodboard-builder`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/concept-moodboard-builder/SKILL.md) | [EN](skills/en/04_creative_arts/concept-moodboard-builder/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 친환경 럭셔리 루프탑 수경재배 라운지를 위한 추상적 미학 컨셉 '솔라펑크 바이오 퓨처리즘(Solarpunk Bio-Futurism)'을 구조화된 시각 디렉션 사양서로 변환해 주세요. 낙관적이고 녹음이 우거진 기술적 안식처 감성을 추구하는 프리미엄 Z세대 및 밀레니얼 고객층을 타깃으로 합니다.
2. 수제 향수 스튜디오를 위한 분위기 키워드 '노르딕 글룸, 인더스트리얼 미니멀리즘, 브루탈리즘 콘크리트, 스모크드 글래스'를 시각 사양 가이드로 변환해 주세요.
3. 네온 와이어프레임 노스탤지어, CRT 색수차 왜곡, 무지갯빛 폴리카보네이트 소재에 초점을 맞춘 '레트로 Y2K 베이퍼웨이브 아케이드 바'의 프로덕션 시각 사양서를 작성해 주세요.

**[English Prompts]**
1. Translate the abstract aesthetic concept 'Solarpunk Bio-Futurism' for an eco-luxury rooftop hydroponic lounge into a structured visual direction spec. Target an upscale Gen Z and millennial demographic seeking optimistic, verdant technological sanctuary aesthetics.
2. Convert the mood keywords 'Nordic Gloom, Industrial Minimalist, Brutalist Concrete, Smoked Glass' for an artisan fragrance studio into a visual specification guide.
3. Build a production visual spec for 'Retro Y2K Vaporwave Arcade Bar', focusing on neon wireframe nostalgia, CRT chromatic aberration, and iridescent polycarbonate materials.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 제시되는 HEX 색상 코드는 의미론적 연상에 의해 생성되므로, 수동 보정 없이 WCAG AA/AAA 접근성 명도 대비 기준을 완벽히 만족하지 못할 수 있습니다.
- 추천 폰트는 상용 폰트 제품명을 기반으로 제안되며, 실시간 웹폰트 라이선스 여부나 무료 오픈소스 대체재를 자동으로 검증하지 않습니다.
- 공간 3D 렌더링이나 실제 이미지 파일을 직접 생성·미리보기할 수 없으며, 텍스트 및 마크다운 표 형태의 디자인 사양서로 제한됩니다.

**[English Analysis]**
- HEX color codes are generated procedurally based on semantic association and may not inherently satisfy WCAG AA/AAA accessibility contrast ratios without manual adjustment.
- Typography suggestions reference commercial font names without verifying real-time web font licensing availability or open-source equivalents.
- Cannot generate or preview spatial 3D renders or actual visual imagery directly; outputs are constrained to textual and tabular design specifications.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,437 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Visual Direction: Solarpunk Bio-Futurism

### Core Concept
- **Summary**: An optimistic fusion of high-efficiency biotechnology and organic luxury, creating an airy sanctuary where verdant botanical life thrives alongside warm, sun-harvesting architecture.
- **Key Motifs**: Bionic organic curves, engineered stained glass solar arrays, cascading vertical hydroponics, brushed gold conduits, bioluminescent accent spores

### Visual Specification Matrix
| Component | Primary Specification | Secondary / Accent |
| :--- | :--- | :--- |
| **Color Palette** | `#2D5A27` (Forest Chlorophyll), `#E8E3D5` (Limestone Alabaster) | `#D4A373` (Burnished Brass), `#72EFDD` (Photonic Aqua) |
| **Typography** | Neo-grotesque geometric sans with rounded terminals (e.g., Syne, Neue Haas Grotesk) | Elegant humanist botanical serif or high-contrast display (e.g., Canela, Ogg) |
| **Textures & Lighting** | Polished travertine, micro-ribbed recycled acrylic, raw cork linoleum | Dappled golden-hour sunlight filtered through glass foliage, volumetric sunbeams, warm 2700K ambient illumination |
| **Key Props & Elements**| Modular vertical aeroponic towers, parametric timber seating, brass nutrient pipes | Hand-blown borosilicate mist carafes, moss-embedded brass trays, microgreen petri dishes |

### Prompt Keywords
`solarpunk aesthetic, biophilic architecture, luxury hydroponic greenhouse, brushed brass accents, golden hour caustic lighting`
```

</details>

---

<a name="inline-svg-generator"></a>
### 인라인 SVG 벡터 생성기 / SVG Vector Generator (`inline-svg-generator`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/inline-svg-generator/SKILL.md) | [EN](skills/en/04_creative_arts/inline-svg-generator/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 클라우드 가관측성(Observability) 플랫폼 'MetricsPulse'를 위한 현대적인 상용 SaaS 로고 SVG를 생성해줘. 사양: 512x512 viewBox, 다크 슬레이트 둥근 사각형 컨테이너(#0F172A 배경, rx=112), 고대비 발광 서버 노드와 겹치는 스타일화된 레이어드 펄스 파형 표현. 팔레트: 딥 네이비(#0F172A), 바이브런트 시안 액센트(#06B6D4), 일렉트릭 바이올렛 보조색(#8B5CF6), 퓨어 화이트 하이라이트(#F8FAFC). <defs> 태그 내 선형 그라데이션, 유려한 3차/2차 베지에 곡선, 깔끔한 시맨틱 path 태그와 스트로크 캡을 적용해줘.
2. 단일 색상 미니멀 스타일의 24x24 UI용 쉴드 데이터베이스(보안 데이터베이스) 아이콘을 생성해줘. fill 없이 currentColor, stroke-width 2, stroke-linecap round, stroke-linejoin round 속성을 사용하고, 고정 픽셀 width/height 대신 반응형 viewBox 기반으로 작성해줘.
3. 'Enterprise Grade AI' 인증 뱃지를 위한 128x128 규격 아이소메트릭 3D 스타일 벡터 뱃지를 생성해줘. 육각형 외곽선, 멀티톤 골드/앰버 그라데이션(#F59E0B ~ #D97706), 내부 신경망 메시 패턴 및 정교한 벡터 기하학 구조를 포함해줘.

**[English Prompts]**
1. Generate a modern, production-ready SaaS product logo for a cloud observability platform named 'MetricsPulse'. Specifications: 512x512 viewBox, rounded squircle container (#0F172A dark slate background with rx=112), depicting a stylized layered pulse wave overlapping with a high-contrast glowing server node. Palette: deep navy base (#0F172A), vibrant cyan accent (#06B6D4), electric violet secondary (#8B5CF6), and pure white highlight (#F8FAFC). Use clean semantic SVG paths, smooth cubic/quadratic curves, linear gradients defined in a <defs> block, and proper stroke caps.
2. Create a clean 24x24 UI icon of a shielded security database in linear minimalist style. Use currentColor, stroke-width 2, stroke-linecap round, stroke-linejoin round, and no fill. Keep it responsive without hardcoded pixel width/height.
3. Generate an isometric 3D-styled vector badge for an 'Enterprise Grade AI' certification badge. Include a hexagonal outline, multi-tonal gold/amber gradients (#F59E0B to #D97706), an inner neural network mesh pattern, and crisp vector geometry fit for a 128x128 badge.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 유기적인 자유 곡선이나 정밀한 인체/동물 형태 등 복잡한 베지에 곡선 좌표를 계산할 때 전용 벡터 그래픽 툴(Figma, Illustrator) 대비 곡률 오차와 핸들 좌표의 부정확성이 발생합니다.
- feTurbulence, 복합 feDropShadow, 중첩 clip-path와 같은 고급 SVG 필터 효과는 브라우저 엔진(Safari WebKit vs Chrome Blink) 간 렌더링 차이나 바운딩 박스 클리핑 잘림 현상이 발생할 수 있습니다.
- 단일 웹 페이지에 여러 SVG를 인라인으로 삽입할 때 전역 `<style>` 클래스나 `<defs>` 내의 ID(`id="glowFilter"` 등)가 중복되어 스타일 오염 및 그래디언트 참조 충돌이 발생할 수 있으므로 고유 네임스페이스 수동 관리가 필요합니다.

**[English Analysis]**
- Mathematical calculation of complex organic curves (e.g., anatomical sketches, photorealistic organic contours) is approximate and lacks the subtle tangency control of dedicated vector design software like Illustrator or Figma.
- Extensive filters like feTurbulence, multi-layered feDropShadow, and nested clip-paths can suffer from rendering inconsistencies and unexpected clipping across different browser engines (Safari WebKit vs. Chrome Blink).
- Injecting embedded `<style>` blocks or global IDs (like `#glowFilter` or `.primary`) across multiple SVGs on a single web page can cause cross-document styling collisions and broken references unless manually scoped with unique identifiers.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,522 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="pulseGrad" x1="64" y1="256" x2="448" y2="256" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="50%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#38BDF8" />
    </linearGradient>
    <linearGradient id="glowGrad" x1="256" y1="160" x2="256" y2="352" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0.05" />
    </linearGradient>
    <linearGradient id="nodeGrad" x1="220" y1="220" x2="292" y2="292" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#F8FAFC" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>
    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Container Base -->
  <rect width="512" height="512" rx="112" fill="#0F172A" />
  <rect x="8" y="8" width="496" height="496" rx="104" stroke="#1E293B" stroke-width="4" />

  <!-- Subtle Ambient Glow Behind Core Node -->
  <circle cx="256" cy="256" r="110" fill="url(#glowGrad)" />

  <!-- Observability Radar Grid Rings -->
  <circle cx="256" cy="256" r="144" stroke="#1E293B" stroke-width="2" stroke-dasharray="6 8" />
  <circle cx="256" cy="256" r="88" stroke="#334155" stroke-width="1.5" />

  <!-- Secondary Echo Pulse Wave -->
  <path d="M84 256 H172 L208 196 L256 340 L296 232 L324 280 L352 256 H428" 
        stroke="#8B5CF6" 
        stroke-width="10" 
        stroke-opacity="0.45" 
        stroke-linecap="round" 
        stroke-linejoin="round" />

  <!-- Primary High-Frequency Pulse Wave -->
  <path d="M84 256 H160 L196 168 L240 364 L288 184 L324 300 L356 256 H428" 
        stroke="url(#pulseGrad)" 
        stroke-width="18" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        filter="url(#glowFilter)" />

  <!-- Center Metric Node -->
  <circle cx="256" cy="256" r="26" fill="#0F172A" stroke="url(#pulseGrad)" stroke-width="8" />
  <circle cx="256" cy="256" r="12" fill="url(#nodeGrad)" />

  <!-- Telemetry Data Anchors -->
  <circle cx="196" cy="168" r="6" fill="#F8FAFC" />
  <circle cx="288" cy="184" r="6" fill="#F8FAFC" />
  <circle cx="240" cy="364" r="6" fill="#06B6D4" />
</svg>
```

</details>

---

<a name="lyric-melody-harmonizer"></a>
### 가사 화성 및 운율 가이드 / Lyric Melody Harmonizer (`lyric-melody-harmonizer`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/lyric-melody-harmonizer/SKILL.md) | [EN](skills/en/04_creative_arts/lyric-melody-harmonizer/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. '황혼의 유령 열차(Ghost Trains in the Twilight)'라는 인디 베드룸 팝 곡을 위한 기능 화성 진행, 마디 운율, 음절 수 매핑을 작성해 주세요.

무드 키워드: 씁쓸한 향수, 심야 귀갓길, 성찰적 멜랑콜리.
템포/스타일: 미드 템포 어쿠스틱 베드룸 팝, 4/4박자, 잔잔한 핑거피킹 질감.

원문 가사:
[Verse 1]
Empty subway cars blinking fluorescent white
Reflections on the window passing through the night
I still keep your voice memo saved from two years ago
Wonder if you ever think of me when it starts to snow

[Chorus]
Catching ghost trains in the twilight
Tracing shadows on the ceiling
Tell me if we lost the magic
Or just forgot the feeling
2. '페이퍼 타이거(Paper Tiger)'라는 90년대 얼터너티브 록 스타일 앤섬 가사를 작성했습니다. 앵스트, 고에너지, 냉소적인 무드입니다. 드롭 D 또는 파워코드 친화적 보이싱을 적용한 Verse/Chorus 코드 진행을 제시하고, 행별 음절 운율을 계산하며 싱코페이션 타점 위치를 제안해 주세요.
3. 아침 커피와 햇살을 주제로 쓴 원문 가사를 경쾌한 네오소울 스케치로 편곡해 주세요. 7th와 9th 텐션 코드가 매끄럽게 연결되는 조성(ii-V-I 변형)을 추천하고, 음절 리듬을 분석하며 보컬 프레이징을 레이드백(박자 뒤로 밀어 부르기)할 지점을 정리해 주세요.

**[English Prompts]**
1. Map functional chord progressions, meter, and syllable counts for my indie bedroom-pop song titled 'Ghost Trains in the Twilight'.

Mood Keywords: Bittersweet nostalgia, late-night commute, reflective melancholia.
Tempo/Style: Mid-tempo acoustic bedroom pop, 4/4 time, gentle fingerpicking feel.

Raw Lyrics:
[Verse 1]
Empty subway cars blinking fluorescent white
Reflections on the window passing through the night
I still keep your voice memo saved from two years ago
Wonder if you ever think of me when it starts to snow

[Chorus]
Catching ghost trains in the twilight
Tracing shadows on the ceiling
Tell me if we lost the magic
Or just forgot the feeling
2. I have lyrics for a driving 90s-style alt-rock anthem called 'Paper Tiger'. The mood is angsty, high-energy, and sarcastic. Provide a verse and chorus chord progression using drop-D or power-chord friendly voicings, calculate the syllable meter per line, and suggest syncopated chord hit placements.
3. Convert this raw verse about morning coffee and sunlight into an upbeat neo-soul sketch. Recommend a key with smooth 7th and 9th chord movements (like ii-V-I variations), breakdown the syllable rhythm, and note where the vocal phrasing should lean behind the beat.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 시적 축약, 이중모음, 구어체 연음 현상(예: 'fluorescent'를 연주 방식에 따라 3음절 또는 4음절로 처리하는 맥락)을 정확히 포착하지 못하고 단순 자모 규칙으로 음절을 오계산할 수 있습니다.
- 실제 오디오 렌더링 기능이 없으므로, 생성된 코드 진행과 사용자의 머릿속 실제 보컬 멜로디 도수 사이에 불협화음이나 보이스 리딩 충돌이 일어나는지 청각적으로 검증하지 못합니다.
- 대부분의 리듬을 표준 서양 대중음악의 4/4박자 및 정박(Downbeat) 위주로 배열하므로, 3/4, 6/8 등 변박자나 복잡한 싱코페이션(당김음) 그루브를 구현하려면 추가 보정이 필요합니다.

**[English Analysis]**
- Syllable counting heuristics can miscalculate poetic elisions, diphthongs, or colloquial slurs (e.g., counting 'fluorescent' as 3 syllables instead of an acoustic 4-beat or 3-beat reduction).
- Lacks real-time audio playback to verify whether vocal melodic leaps cause unvoiced harmonic dissonance against the suggested chord extensions.
- Defaults to standard Western 4/4 metric feet and downbeat chord changes, requiring manual re-working for odd meters (3/4, 6/8, 5/4) or syncopated off-beat groove genres.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,810 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
# Song Sketch: Ghost Trains in the Twilight

### Mood & Key Profile
- **Target Emotion**: Bittersweet Nostalgia, Late-Night Commute Melancholia
- **Suggested Key**: D Major / B Minor (Warm, resonant acoustic voicing with capo II or open strings)
- **Tempo & Time Signature**: 82 BPM, 4/4 Time

### Core Progression
- **Roman Numerals**:
  - Verse: vi - IV - I - V (Emotional loop, narrative tension)
  - Chorus: IV - V - vi - I/III (Ascending, cathartic release)
- **Example Chords**:
  - Verse: Bm - G - D - A
  - Chorus: G - A - Bm - D/F#

### Syllable & Line Breakdown
| Section | Lyric Line | Syllable Count | Accented Beats | Chord Placement |
| :--- | :--- | :--- | :--- | :--- |
| Verse 1 | Empty subway cars blinking fluorescent white | 13 | Beats 1, 3 | Bm (Beat 1), G (Beat 3) |
| Verse 1 | Reflections on the window passing through the night | 13 | Beats 1, 3 | D (Beat 1), A (Beat 3) |
| Verse 1 | I still keep your voice memo saved from two years ago | 14 | Beats 1, 2, 4 | Bm (Beat 1), G (Beat 3) |
| Verse 1 | Wonder if you ever think of me when it starts to snow | 15 | Beats 1, 3, 4 | D (Beat 1), A (Beat 3) |
| Chorus  | Catching ghost trains in the twilight | 9 | Beats 1, 3 | G (Beat 1), A (Beat 3) |
| Chorus  | Tracing shadows on the ceiling | 8 | Beats 1, 3 | Bm (Beat 1), D/F# (Beat 3) |
| Chorus  | Tell me if we lost the magic | 8 | Beats 1, 2, 4 | G (Beat 1), A (Beat 3) |
| Chorus  | Or just forgot the feeling | 7 | Beats 1, 3 | Bm (Beat 1), A (Beat 3 - sustained) |

### Arranger Notes
- **Vocal Rhythm Tip**: In Verse 1, lines 3 and 4 feature denser syllable counts (14-15 syllables). Deliver 'voice memo saved from' as sixteenth-note pickup triplets leading into beat 3 rather than forcing straight eighths. Allow a full quarter-rest breath before the chorus entrance on beat 1.
```

</details>

---

<a name="meme-copy-builder"></a>
### 바이럴 밈 포맷 카피 빌더 / Viral Meme Format Copy Builder (`meme-copy-builder`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/meme-copy-builder/SKILL.md) | [EN](skills/en/04_creative_arts/meme-copy-builder/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 상황: 회의 내용을 자동으로 녹음하고 액션 아이템을 정리해 주는 AI 미팅 어시스턴트 'SyncScribe' 론칭. 타깃: 매일 줌(Zoom) 미팅 피로에 시달리고 스탠드업 회의 후 45분씩 노션에 수기 회의록을 정리하는 원격 근무 테크 직군/PM/개발자.
포맷: 클래식 '한눈파는 남친 (Distracted Boyfriend)' 밈 포맷을 사용해 수기 회의록 정리를 저격하고 자동화된 비동기 요약을 강조하는 표준 밈 청사진 템플릿으로 작성해 줘.
2. 슬랙(Slack) 내 피싱 링크를 자동 차단하는 B2B 사이버 보안 솔루션의 도입 효과를 링크드인 및 트위터(X)용 4단계 '뇌 확장 (Expanding Brain)' 밈 구조로 변환해 줘.
3. 고객 서비스/외주 상황을 '고양이에게 소리치는 여성 (Woman Yelling at a Cat)' 밈 규격으로 구성해 줘: 추가 예산 없이 24시간 내에 웹사이트 전체 리디자인을 요구하는 클라이언트 vs 서명된 계약서의 작업 범위를 조용히 가리키는 프리랜서 디자이너.

**[English Prompts]**
1. Context: We are launching an automated AI meeting recorder & action-item extractor called 'SyncScribe'. Target Audience: Remote tech workers, product managers, and software engineers who suffer from Zoom fatigue and spend 45 minutes manually typing messy meeting notes after every standup.
Format: Follow the standard Meme Blueprint structure using the classic 'Distracted Boyfriend' format to roast manual note-taking while highlighting automated async summaries.
2. Take our B2B cybersecurity tool that blocks phishing links in Slack and adapt it into a 4-tier 'Expanding Brain' meme copy layout suitable for LinkedIn and Twitter/X.
3. Convert this customer service scenario into the 'Woman Yelling at a Cat' meme blueprint: A client demanding a complete website redesign in 24 hours with no extra budget versus the freelance designer calmly pointing to the signed scope of work.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 실제 이미지 그래픽 파일을 합성하거나 렌더링하지 못하며, 텍스트 배치 및 구도 가이드라인만 텍스트로 제공합니다.
- 매주 급변하는 인터넷 서브컬처나 최신 밈 변형 트렌드를 실시간으로 반영하지 못해 다소 대중적이거나 지난 유행어를 조합할 수 있습니다.
- 입력 상황의 페인포인트가 모호할 경우 기업 홍보 냄새가 짙은 어색하고 억지스러운 밈(일명 '젊은이들 따라하기') 카피가 나올 수 있습니다.

**[English Analysis]**
- Cannot generate or manipulate actual image files; only provides text placement coordinates, label mapping, and layout guidance.
- Subtle internet subculture nuances and rapidly shifting weekly micro-trends may be misinterpreted or outputted using slightly outdated phrasing.
- Risk of producing corporate-sounding or forced meme copy ('fellow kids' syndrome) if the prompt does not supply authentic audience pain points.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,578 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Distracted Boyfriend (Automated Meeting Notes vs. Manual Toil)
- **Target Audience / Mood**: Remote software engineers, product managers, and startup operators; sarcastic, relatable, productivity-obsessed.
- **Visual Composition**:
  - Panel 1: Walking man turning his head around with wide, appreciative eyes; labeled as the protagonist.
  - Panel 2: Jealous girlfriend in red dress looking betrayed and offended beside him.
  - Background Subject: Woman in red dress walking by, catching the boyfriend's full attention.

### Copy Blueprint
- **Girlfriend Label (Left)**: "Spending 45 minutes after every 30-minute sync transcribing messy Notion bullet points"
- **Boyfriend Label (Center)**: "Burned-out PM who just wants to write code / ship features"
- **Passing Woman Label (Right)**: "SyncScribe auto-generating bulleted action items and pushing to Jira before the call even ends"

### Social Post Draft
- **Caption**: If your post-meeting routine takes longer than the actual meeting, you're not collaborating—you're doing court reporting. Automate your action items with SyncScribe and get 4 hours of your Friday back. Link in comments. 🏃‍♂️💨 #RemoteWork #ProductivityHacks #TechHumor #ZoomFatigue #BuildInPublic
- **Alt Text**: Distracted Boyfriend meme. The boyfriend labeled 'Burned-out PM' turns to eagerly gaze at an attractive woman walking past labeled 'SyncScribe auto-generating bulleted action items and pushing to Jira before call ends', while his upset girlfriend labeled 'Spending 45 minutes transcribing messy Notion bullet points' looks on in outrage.
```

</details>

---

<a name="narrative-plot-oracle"></a>
### 타로 기반 서사 플롯 오라클 / Tarot Narrative Plot Oracle (`narrative-plot-oracle`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/narrative-plot-oracle/SKILL.md) | [EN](skills/en/04_creative_arts/narrative-plot-oracle/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 근미래 기업 스파이 스릴러 소설을 집필 중입니다. 위장 잠입한 디지털 포렌식 감사관인 주인공 엘레나는 합성 바이러스 유전자 조작 증거를 빼내기 위해 바이오테크 대기업 발렌 다이내믹스의 최고 보안 서버실 침투에 성공했습니다. 다운로드는 끝났고 아직 경보는 울리지 않았는데, '경비원이 문을 두드리는' 진부한 클리셰 없이 어떻게 탈출 국면을 비틀고 사건을 복잡화해야 할지 플롯이 꽉 막혔습니다. 타로 카드 1장을 뽑아 규정된 출력 템플릿에 맞춰 3가지 전개 돌파구와 씬 프롬프트를 작성해 주세요.
2. 황궁을 배경으로 한 사극 판타지 웹툰을 작업 중입니다. 두 명의 라이벌 후궁이 서로의 치명적인 약점을 쥔 채 대치하여 정치적 암투가 교착 상태에 빠졌습니다. 이 서사적 정체를 해소하기 위해 내면적 심리 배신에 초점을 맞춘 역방향 타로 카드를 뽑아 플롯 대안을 제시해 주세요.
3. 다크 판타지 소설에서 주인공이 가문의 검을 다시 벼리기 위해 신성한 대장간에 도달했으나, 감정적 긴장감이 밋밋하고 진부하게 느껴집니다. 전통적인 영웅 무기 복원 클리셰를 완전히 뒤엎고 예상치 못한 대가나 극적 전환을 부여할 수 있도록 메이저 아르카나 카드를 기반으로 돌파구를 마련해 주세요.

**[English Prompts]**
1. I'm writing a near-future corporate espionage thriller. My protagonist, an undercover forensic data auditor named Elena, has successfully infiltrated the high-security server room of bio-tech conglomerate Vaelen Dynamics to download proof of synthetic virus gene-editing. However, she has finished the download, the alarm has not sounded yet, and I am completely stuck on how to escape or complicate the scene without relying on the cliché trope of 'guards knocking on the door.' Draw a tarot card and provide three narrative breakthroughs and a scene prompt using the standard output template.
2. I am writing a historical fantasy webtoon set in an imperial court. My two rival concubines have reached a stalemate where both hold blackmail on each other, halting political conflict. Draw a reversed tarot card focusing on internal psychological betrayal to break this narrative deadlock.
3. My protagonist in a grimdark fantasy novel has reached the sacred forge to reforge an ancestral blade, but the emotional stakes feel flat and repetitive. Draw a Major Arcana card to introduce an unexpected cost or turning point that completely subverts the traditional heroic weapon restoration beat.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 명시적으로 마이너 아르카나나 역방향 카드를 지정하지 않으면 '탑(The Tower)'이나 '죽음(Death)' 같은 극단적인 메이저 카드에 편중되는 경향이 있습니다.
- 하드 SF나 밀리터리 등 현실적인 장르 규칙을 엄격히 설정하지 않으면 타로 특유의 신비주의적 메타포가 섞여 톤 앤 매너가 무너질 수 있습니다.
- 복잡한 플롯 상황을 처리할 때 실제 집필 가능한 서사적 행동 비트 대신 모호한 점술식 운명 묘사로 빠지는 경우가 발생할 수 있습니다.

**[English Analysis]**
- May default to repetitive 'Tower' or 'Death' cards unless explicitly guided to draw from lesser-known Minor Arcana or nuanced Reversed archetypes.
- Can introduce tone drift or anachronistic mystical metaphors into strictly grounded hard sci-fi or military genres if not tightly constrained.
- Occasionally conflates generic fortune-telling exposition with actionable narrative script beats when handling complex multi-layered plots.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,052 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Card Drawn: The Moon (Reversed)
- **Core Archetype**: Dispelling of illusions, sudden clarity in the dark, and the terrifying exposure of a concealed trap.

### Plot Solutions
1. **The Sudden Complication**: As Elena unplugs her drive, the ambient server cooling units shut down sequentially, and the terminal screen displays a quiet, pre-recorded diagnostic log showing the files were deliberately fed into her extraction port from an internal remote terminal ten minutes prior to her arrival. She is not stealing classified intel; she is being used as an unwitting courier to smuggle tampered bio-weapon coordinates outside the facility airgap.
2. **The Hidden Truth**: The biometric lock on the server rack does not register her spoofed supervisor clearance as an unauthorized breach, but instead triggers a personalized voice greeting welcoming her by her real, classified government codename. Her handler at the regulatory agency is on Vaelen Dynamics' payroll, and her entire undercover assignment was engineered to pin a catastrophic data leak directly on her badge.
3. **The Unexpected Turning Point**: Before she can reach the airlock exit, the automated containment system floods the corridor with an inert asphyxiant gas not to neutralize her, but because the server core's biological substrate—the living tissue sample used for organic data computation—has recognized her physical presence and breached its glass enclosure to self-terminate, triggering a Tier-4 biological contamination lockdown that traps her with an apex researcher hiding inside the maintenance crawlspace.

### Scene Prompt
The drive clicked free from the rack with a sound no louder than a snapped tooth, but the console didn't revert to its standby black; instead, a single sentence blinked amber across the terminal: *"Transfer verified, Agent Cross—thank you for your clearance."* Elena's reflection in the glass door warped as the primary ventilation died, leaving her alone with the rhythmic, wet thrum of an organic mainframe that had already begun to bleed.
```

</details>

---

<a name="sensory-scene-describer"></a>
### 조향 구조 기반 공감각적 공간 묘사기 / Sensory Scene Describer (`sensory-scene-describer`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/sensory-scene-describer/SKILL.md) | [EN](skills/en/04_creative_arts/sensory-scene-describer/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 습한 여름 저녁, 빅토리아 시대 런던의 염색 공장 지하에 숨겨진 버려진 지하 문서고를 조향 피라미드 프레임워크를 적용하여 다감각적으로 묘사해 주세요. 축축한 양피지, 황산 염료 잔여물, 젖은 석조 벽, 차가운 철제 냄새를 생생하게 담아내야 합니다.
2. 산성비가 막 갠 네오 서울의 번화한 사이버펑크 야시장을 묘사해 주세요. 오존 향, 지글거리는 길거리 고추기름, 젖은 아스팔트, 금속성 네온 안개에 초점을 맞추어야 합니다.
3. 햇빛이 쏟아지는 고대 사막 약방의 시각적 초안을 다감각적 공간으로 변환해 주세요. 으깬 건조 몰약, 햇볕에 달궈진 쓴 점토, 달콤한 말린 대추야자, 먼지 낀 삼나무 향을 부각해 주세요.

**[English Prompts]**
1. Generate a complete sensory scene description using the perfumery note framework for an abandoned subterranean archive in Victorian London, hidden beneath a textile dye mill during a humid summer evening. Make sure to capture damp parchment, sulfurous chemical runoff, wet masonry, and cold iron.
2. Describe a bustling cyberpunk night market in Neo-Seoul immediately after acid rain, focusing on ozone, sizzling street vendor chili oil, wet asphalt, and metallic neon mist.
3. Transform a visual draft of an ancient sunlit desert apothecary into a multi-layered sensory scene, highlighting crushed dried myrrh, bitter sun-baked clay, sweet dried dates, and dusty cedar.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 구체적이거나 특이한 화학 물질/원료를 명시하지 않으면 '비 냄새와 오존' 같은 상투적인 문학적 클리셰로 회귀하기 쉽습니다.
- 조향 피라미드 은유에 지나치게 치중할 경우, 입체 음향이나 미세한 촉각 피드백 같은 비후각적 감각 요소가 축소 서술될 수 있습니다.
- 산업 현장, 호러 공간, 극도로 멸균된 현대 시설을 묘사할 때도 부정 프롬프트 제약이 없으면 지나치게 화장품/향수 같은 미사여구로 미화할 위험이 있습니다.

**[English Analysis]**
- May default to conventional literary clichés (e.g., 'scent of ozone and rain') unless explicit, unusual source materials or chemicals are prompted.
- Strictly non-olfactory sensory layers (such as directional soundscapes or micro-tactile balance) can be marginalized if the perfumery fragrance metaphor dominates the generation.
- Can occasionally produce overly floral or perfumed descriptions for industrial, horrific, or purely sterile modern spaces without aggressive negative constraints.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (1,667 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Scene: The Subterranean Dye-Mill Archive (Victorian London, 1888)
- **Atmospheric Palette**: Caustic, brine-soaked, tomb-cold, suffocating

#### Note Breakdown
- **Top Note (Immediate Impression)**: Sharp bite of vinegar mordant and volatile alum rising from ceiling drips; a thin, metallic coldness that catches in the back of the throat like tarnished copper.
- **Middle Note (Core Character)**: Rank, stewed madder root and sour tallow smoke clinging to low brick vaults; stale well-water sweating through mortar seams; heat-warped calfskin bindings fermenting in trapped river humidity.
- **Base Note (Underlying Resonance)**: Ancient, sulfur-blackened silt from the subterranean Fleet tributary; wet coal soot compacted into flagstones; dry, calcified mold devouring legal vellum in airless mahogany drawers.

#### Prose Sample
> Stepping off the iron rung ladder, the throat closed instantly against the vinegar sting of alum mordant weeping through the vault overhead. The cellar air hung thick and greasy, laden with the rancid fat of spent tallow tapers and the sour, vegetable reek of stale madder dye that had dripped through the floorboards above for forty years. It clung to the skin like wet wool, refusing to circulate. Beneath the stinging chemicals lay the true weight of the archive: centuries of Thames river silt curdled with wet coal slack underfoot, breathing a subterranean rot that turned stacks of boxed chancery writs into damp, crumbling cakes of blue-veined mold.

#### Sensory Lexicon
- **Nouns**: Mordant, tallow, silt, vellum
- **Verbs**: Weep, curdle, calcify, saturate
- **Sensory Modifiers**: Caustic, brine-soaked, airless, rank
```

</details>

---

<a name="video-breakdown-navigator"></a>
### 영상 분해 네비게이터 / Video Breakdown Navigator (`video-breakdown-navigator`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/video-breakdown-navigator/SKILL.md) | [EN](skills/en/04_creative_arts/video-breakdown-navigator/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 업로드할 영상 파일이나 직접 열 수 있는 URL이 없습니다. 아래 제공된 장면 설명을 바탕으로 이 숏폼 영상을 컷 단위로 분해하고, 초보자를 위한 재현 계획을 작성해 주세요.

[입력 기준: 장면 설명]
총 재생 시간: 약 18초
주제: 미니멀 '딥 워크(몰입) / 집중' 데스크 루틴

장면별 상세 설명:
- 1컷 (0:00 - 0:03): 오크 원목 책상 위로 김이 모락모락 나는 무광 세라믹 머그잔과 기계식 키보드를 올려놓는 항공 탑뷰 앵글. 옆에는 플립 시계 위젯이 켜진 iPad가 놓여 있음. 사운드: 빠른 휙(whoosh) 전환 효과음.
- 2컷 (0:03 - 0:06): 크림색 단색 배경 위에 검은색 고딕 폰트로 구성된 미니멀 그래픽 카드 화면. 체크리스트 항목이 순차적으로 팝업되며 자동 체크됨: "1. Deep Work (90m)", "2. Inbox Zero", "3. Hydrate". 사운드: 체크될 때마다 경쾌한 디지털 팝/클릭 음.
- 3컷 (0:06 - 0:10): 생체 발광 식물들이 떠다니는 초현실적이고 정교한 유리 온실 안에서 무중력으로 부유하는 우주비행사의 시네마틱 화면, 은은한 아나모픽 렌즈 플레어. 사운드: 묵직한 신스 앰비언트 사운드.
- 4컷 (0:10 - 0:14): 비 내리는 황혼녘 도심 교차로를 건너는 군중 실루엣과 젖은 아스팔트에 반사되는 네온 간판 불빛을 담은 고프레임 B-roll 자료 화면. 사운드: 먹먹한 도심 소음 및 빗소리 효과음.
- 5컷 (0:14 - 0:18): 키보드 위 1인칭 시점 앵글. 리드미컬하게 타이핑하는 손과 다크 모드 코드/텍스트 에디터가 켜진 모니터. 카메라가 서서히 줌인되며 중앙에 볼드한 흰색 텍스트 "Focus on what matters." 페이드 인. 사운드: 타건음과 로파이 비트가 잔잔한 바이닐 스톱으로 마무리됨.
2. 인스타그램 릴스 링크(https://www.instagram.com/reel/C8xSample123/)에 올라온 15초 말차 라떼 제조 튜토리얼입니다. 모델이 외부 링크를 직접 열어 볼 수 없으므로 4개의 컷 설명을 전달하겠습니다. 이를 실사/AI/코드/스톡으로 분류하고 캡컷(CapCut) 모바일 앱만으로 재현하는 계획을 세워주실 수 있나요?
3. 설명만으로 10초 분량의 SaaS 프로모션 클립을 분석해 주세요: 1컷은 위로 치솟는 3D 아이소메트릭 막대그래프 모션, 2컷은 앱 대시보드가 켜진 아이폰 화면을 터치하는 실사 손, 3컷은 추상적인 생성형 데이터 파동이 분할 화면으로 줌아웃되는 구조입니다. 레이블을 지정하고 미확인 요소를 명시한 뒤 유료 도구 없이 따라 하는 제작 순서를 정리해 주세요.

**[English Prompts]**
1. I do not have an uploaded video file or openable URL; please break down this short-form video based on the scene description provided below and generate a beginner-friendly recreation plan.

[Input Basis: Scene Description]
Total Duration: ~18 seconds
Theme: Minimalist "Deep Work / Focus" Desk Routine

Scene Breakdown:
- Shot 1 (0:00 - 0:03): Overhead top-down shot of hands placing a steaming matte ceramic coffee mug and a custom mechanical keyboard onto a natural oak desk beside an iPad displaying a live flip-clock widget. Sound: quick whoosh transition.
- Shot 2 (0:03 - 0:06): Full-screen graphic card with a minimalist cream background and black sans-serif font. An interactive task checklist pops up with boxes automatically ticking off: "1. Deep Work (90m)", "2. Inbox Zero", "3. Hydrate". Sound: crisp digital pop/click on each checkmark.
- Shot 3 (0:06 - 0:10): Dreamy cinematic visual of an astronaut floating weightlessly inside a hyper-detailed glowing botanical glass greenhouse filled with bioluminescent floating flora and soft anamorphic lens flare. Sound: deep ambient synth swell.
- Shot 4 (0:10 - 0:14): High-frame-rate b-roll footage of crowd silhouettes crossing a rainy metropolitan intersection at twilight, illuminated by vibrant neon billboard reflections on wet asphalt. Sound: muffled city traffic and rain ambiance.
- Shot 5 (0:14 - 0:18): First-person point-of-view shot over the keyboard; hands typing rhythmically, monitor displaying a clean dark-mode code/text editor. The camera slowly dollies forward as bold white title text "Focus on what matters." fades into the center of the frame. Sound: mechanical keyboard clacks fading into a vinyl stop with lo-fi beats.
2. I have an Instagram Reel link (https://www.instagram.com/reel/C8xSample123/) showing a 15-second matcha latte prep tutorial. Since you cannot directly browse or download this external URL, I will describe the four cuts for you: can you classify them into live-action/AI/code/stock and build a CapCut phone-only recreation guide?
3. Break down this 10-second SaaS promo clip from description: Shot 1 is an animated 3D isometric bar chart soaring upward; Shot 2 is a person tapping an iPhone screen showing an app dashboard; Shot 3 is a split-screen zoom-out of abstract generative data waves. Mark each label, note what cannot be verified, and outline how a solo creator can recreate it without paid software.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 사용자가 직접 장면 설명이나 스크립트를 제공하지 않으면 외부 실시간 URL(TikTok, Instagram Reels, YouTube Shorts 등)의 영상을 직접 재생하거나 시각적으로 파악할 수 없습니다.
- 타임스탬프 분석은 사용자가 제공한 텍스트 추정치에 의존하므로, 텍스트 설명만으로는 밀리초 단위의 미세 컷 전환이나 정확한 프레임 레이트를 자동 검출할 수 없습니다.
- 텍스트로 묘사된 사운드 설명만으로는 음향 핑거프린트 매칭이 불가능하므로 특정 음원이나 BGM의 곡명 및 아티스트를 정확히 식별하지 못합니다.

**[English Analysis]**
- Cannot fetch, watch, or inspect video files from live streaming or external URLs (e.g., TikTok, Instagram Reels, YouTube Shorts) without user-provided descriptions or transcripts.
- Timestamp extraction is limited to user-provided estimates and cannot detect micro-cuts or sub-second frame rate cadence automatically from text descriptions.
- Cannot guarantee specific audio track identification (Shazam-style acoustic fingerprinting) from textual sound descriptions.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (5,194 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
Based on the description.

# One-line summary
18 seconds, 5 shots, balanced mix of live-action (2), code/graphic (1), AI (1), and stock (1); the easiest beginner path is filming desk shots on your phone and replacing the sci-fi and rainy city shots with free licensed b-roll or personal travel clips.

## Shot list
| Shot | Time | What we see | Label | Confidence | Why |
| :-: | :--- | :--- | :--- | :--- | :--- |
| 1 | 0:00 - 0:03 | Overhead view of hands placing a steaming mug and keyboard on an oak desk beside a clock widget | live-action | high | Filmed directly from above using a phone or camera on a desk mount. |
| 2 | 0:03 - 0:06 | Minimalist 2D task checklist card with automated checkmarks popping sequentially | code | high | Motion graphic card built using text layers, shape templates, and keyframes in an editing app. |
| 3 | 0:06 - 0:10 | Astronaut floating weightlessly inside a bioluminescent botanical greenhouse with glowing particles | AI | high | Hyper-detailed surreal lighting and fantasy sci-fi subject typical of generative video tools. |
| 4 | 0:10 - 0:14 | Cinematic twilight b-roll of pedestrians with umbrellas crossing a wet, neon-lit city intersection | stock | high | Standard pre-existing cinematic urban footage used as metaphorical b-roll. |
| 5 | 0:14 - 0:18 | First-person view of typing on mechanical keyboard facing dark-mode screen, centered title overlay | live-action | high | Physical desk POV filming combined with a basic centered text overlay. |

## Sound and text
- Voice: None specified.
- Music: Ambient synth pad swelling through Shot 3, transitioning into a chill lo-fi beat and ending on a gentle vinyl brake/stop.
- Sound effects: Whoosh transition (0:00), digital pop/chime clicks on checklist items (0:03-0:06), atmospheric rain/traffic ambient hum (0:10-0:14), mechanical keyboard clacks (0:14-0:18).
- Captions, stickers, titles: Graphic text card items ("1. Deep Work (90m)", "2. Inbox Zero", "3. Hydrate") in Shot 2; bold white sans-serif title "Focus on what matters." in Shot 5.

## Recreation plan (beginner)
### What to prepare first
- Smartphone with a standard camera.
- Clean desk surface, keyboard, ceramic mug with hot water (for visible steam), and phone/tablet running a free flip-clock web app.
- Free mobile editing app (e.g., CapCut, VN, or DaVinci Resolve on desktop).

### 1) What to film
- **Desk Top-down (Shot 1)**: Mount your phone facing straight down (or hold it steady overhead). Place the tablet with the clock running on the right. Film yourself placing down the steaming mug and keyboard in one smooth motion.
- **Typing POV (Shot 5)**: Prop your phone at chest/chin height pointing at your hands and monitor. Open any code editor or document in dark mode. Film 5 to 6 seconds of continuous rhythmic typing while slowly stepping or leaning the camera forward.

### 2) What to make with AI
- **Astronaut greenhouse (Shot 3)**: If using AI video generators (e.g., Luma Dream Machine, Kling, or Runway free trials), input: *"Slow cinematic pan, an astronaut floating weightlessly inside a dark glass greenhouse filled with glowing neon plants and soft dust particles, 9:16 vertical."*
- *Beginner alternative without AI*: Replace this shot with an extreme macro close-up of house plants on your windowsill with warm morning light or a desk plant filmed at 60fps slow motion.

### 3) What to build in an editing app
- **Checklist card (Shot 2)**: Add a solid off-white background block. Add three text layers for the tasks. Use a built-in checkbox sticker or round shape icon. Set an entry animation ("Pop" or "Fade In") staggered by 0.5 seconds for each line.
- **Final Title (Shot 5)**: Add a text layer with clean sans-serif font (Inter, Helvetica, or Montserrat) reading "Focus on what matters.". Apply a 0.5-second fade-in transition and position it centered.

### 4) Sound
- Download a royalty-free lo-fi study beat and an atmospheric ambient pad from YouTube Audio Library or Pixabay.
- Add royalty-free SFX: search for "whoosh", "digital click" (duplicate three times for the checkboxes), and "rain city ambiance". Sync mechanical keystroke audio directly from your Shot 5 camera microphone.

### Assemble it in this order
1. Lay down your background music track on Audio Track 1.
2. Place Shot 1 (0.0s - 3.0s) and trim right as the keyboard hits the desk pad.
3. Insert your Shot 2 checklist graphic (3.0s - 6.0s), aligning each item pop with a click sound.
4. Insert Shot 3 (AI visual or macro plant substitute) for exactly 4.0 seconds (6.0s - 10.0s).
5. Insert Shot 4 (licensed free city stock clip from Pexels/Pixabay, or rain on your own window) (10.0s - 14.0s).
6. Insert Shot 5 (14.0s - 18.0s), adding the title text fade-in at 15.5 seconds and ending on the music vinyl stop.

## What I could not verify
- Exact software, font names, and motion graphic presets used in the original video.
- Specific music track title, artist licensing, or commercial release details.
- Exact AI model or generation parameters used for Shot 3.
- Exact stock library source or camera settings for Shot 4.

## What we can do next
- Write a script draft that matches this plan
- Write visual prompts for each shot
```

</details>

---

<a name="visual-prompt-optimizer"></a>
### 비주얼 프롬프트 옵티마이저 / Visual Prompt Optimizer (`visual-prompt-optimizer`)
- **Skill Spec**: [KO](skills/ko/04_creative_arts/visual-prompt-optimizer/SKILL.md) | [EN](skills/en/04_creative_arts/visual-prompt-optimizer/SKILL.md)
- **Runtime Status**: Verified on `gemini-3.8-flash` (Google Cloud Vertex AI)

#### 1. Real Input Examples (실전 프롬프트 3종)
**[한국어 프롬프트]**
1. 정교한 황동 기계식 안구 임플란트를 착용한 노년의 사이버네틱 시계공이 비 내리는 사이버펑크 네오서울의 비좁고 어수선한 공방에서 푸른 네온사인과 따뜻한 텅스텐 작업등 조명을 받으며 빛나는 홀로그램 골동품 회중시계를 조심스럽게 수리하는 장면.
2. 젖은 검은 화산 현무암 위에 놓인 미니멀한 무광 세라믹 드로퍼 병 형태의 럭셔리 보태니컬 페이셜 세럼, 차가운 아침 바다 안개와 야생 아이슬란드 이끼로 둘러싸인 연출.
3. 거대한 고대 세쿼이아 나무 기둥을 파내어 만든 기발한 솔라펑크 온실 도서관, 스테인드글라스 나뭇잎 사이로 쏟아지는 햇살이 공중에 떠 있는 황동 독서대와 나선형 나무 계단을 비추는 모습.

**[English Prompts]**
1. An elderly cybernetic watchmaker with intricate brass mechanical ocular implants carefully repairing a glowing holographic antique pocket watch inside a cramped, cluttered workshop in rainy cyberpunk Neo-Seoul, illuminated by blue neon signs and warm tungsten desk lamps.
2. A minimalist matte ceramic dropper bottle of luxury botanical facial serum resting on wet black volcanic basalt rock, surrounded by cold morning sea mist and wild Icelandic moss.
3. A whimsical solarpunk greenhouse library carved into the trunk of a colossal ancient redwood tree, with sunlight filtering through stained-glass foliage onto floating brass reading desks and spiral wooden staircases.

#### 2. Candid Failure Modes & Limits (현장에서 직접 확인된 솔직한 기술적 한계)
**[한국어 분석]**
- 토큰 가중치 과부하: 수식어가 과도하게 중첩된 긴 복문을 생성하여 미드저니 등 확산 모델의 어텐션 가중치를 분산시키고, 핵심 인물 묘사보다 배경의 부수적 디테일이 과도하게 강조되는 현상이 발생할 수 있습니다.
- 파라미터 및 플래그 버전 불일치: 미드저니 v6/v6.1 등 최신 버전에서 변경되거나 권장되지 않는 레거시 파라미터(예: 불필요한 관용적 `--no` 부정 태그)를 기계적으로 삽입할 위험이 있습니다.
- GPT Image / DALL-E 호환성 저하: 미드저니 전용 파라미터(`--ar`, `--no`, 쉼표 구분 태그 나열) 형식이 그대로 적용되므로, 자연어 서술형 문맥을 요구하는 GPT Image(DALL-E 3)에 그대로 입력할 경우 구문 오류나 의도치 않은 텍스트 렌더링이 발생할 수 있습니다.

**[English Analysis]**
- Token Weight Overload: Tends to generate overly descriptive, long compound sentences that dilute the attention mechanism in diffusion models like Midjourney, potentially causing secondary background instructions to override primary character details.
- Syntax and Flag Version Drift: May output generic or deprecated parameter flags (such as legacy `--no` parameters that modern Midjourney v6/v6.1 models either deprecate or misinterpret as weighted tokens) unless specifically updated.
- DALL-E / GPT Image Incompatibility: Midjourney command syntax (such as `--ar 16:9` and comma-separated tag lists) fails or is misinterpreted when fed directly into natural-language-first image engines like GPT Image (DALL-E 3) without restructuring into paragraph prose.

#### 3. Live Verified Output Deliverable (실측 산출물 원본)
<details>
<summary><b>👉 [Click to Expand] View Raw Deliverable (2,125 characters / 실측 산출물 전문 펼치기)</b></summary>

```text
### Concept: Elderly Cybernetic Watchmaker in a Rainy Neo-Seoul Workshop Repairing a Holographic Pocket Watch

#### Option 1: Photorealistic / Cinematic
- **Prompt**: An elderly Korean cybernetic watchmaker with intricate brass ocular implants and weathered hands, delicate tweezers calibrating a glowing cyan holographic gear inside an antique pocket watch, seated at an intensely cluttered workbench overflowing with miniature gears, magnifying loupes, and copper wiring, rain-streaked steamed glass window looking out onto neon-lit Neo-Seoul, shot on ARRI Alexa Mini LF, 85mm Zeiss Master Prime lens at f/1.4, shallow depth of field, chiaroscuro lighting mixing cold neon cobalt and warm 2700K tungsten desk lamp glow, authentic cinematic color grade, photorealistic micro-textures --ar 16:9 --no blurry, distorted anatomy, overexposed, low resolution, watermark, cartoon, plastic skin, 3D render

#### Option 2: Stylized / Digital Illustration
- **Prompt**: Stylized neo-noir digital painting of a veteran cybernetic horologist repairing a luminous holographic chronometer, expressive brushwork, intricate line art detailing exposed mechanical ocular gears and vintage clock components, moody atmospheric cyberpunk palette with deep indigo, electric cyan, and burnished amber, volumetric rim lighting from neon signs cutting through gentle cigarette smoke, retro-futuristic anime editorial concept art style --ar 1:1 --no photorealistic, 3d render, text, signature, low quality, muddy colors, flat shading

#### Option 3: Atmospheric / Concept Art
- **Prompt**: Expansive environmental concept art of a claustrophobic subterranean clockmaker workshop in futuristic Neo-Seoul, towering shelves lined with centuries of analog clocks and humming holographic displays, an old artisan silhouetted against a panoramic rainy alleyway glowing with towering holographic advertisements, damp condensation on brass surfaces, dramatic atmospheric fog, cinematic scale, epic narrative storytelling composition, anamorphic bokeh --ar 21:9 --no flat lighting, plain background, artifacts, oversaturated, amateur, symmetrical composition
```

</details>

---
