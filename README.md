# AI Skill Navigator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Curated%20Skills-2ea44f.svg)](#)
[![Compatibility](https://img.shields.io/badge/Compatible-Claude%20Code%20%7C%20Cursor%20%7C%20Antigravity-orange.svg)](#)

[English](#english) | [한국어](#한국어)

## Navigation & Quickstart

Welcome, visitors from Reddit and Twitter! 🚀 
Explore our curated collection of 41 AI agent skills (`SKILL.md`) available in both English and Korean, designed to provide ready-to-use drafts directly and save you time.

**Quick Navigation:**
- 🛠️ [**Core Tools**](#00-inspired-by-anthropics-agent-skills-githubcomanthropicsskills)
- ⚙️ [**Daily Automation**](#01-daily-automation)
- 🧰 [**Practical Utilities**](#02-everyday-utilities)
- 🎮 [**Game Dev & Worldbuilding**](#03-game-dev-and-worldbuilding)
- 🎨 [**Creative & Visual Arts**](#04-creative-and-visual-content-design-and-media)

**How to get started in 1 minute:**
1. Pick a skill folder from the `skills/en` directory.
2. Drop it into your AI agent's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
3. Call it in your prompt! Example: `@brand-guidelines audit this markdown document`.

Compatible with Claude Code, Cursor, Antigravity, and other Agent Skills tools.

---

## Directory Structure

```
skills/
├── ko/                     # 한국어 전용 스킬
│   ├── 00_core_official/   # Anthropic Agent Skills 참고 (8종)
│   ├── 01_automation/      # 업무 자동화 (8종)
│   ├── 02_utility/         # 실무 유틸리티 (8종)
│   ├── 03_gamedev/         # 게임 및 세계관 (9종)
│   └── 04_creative_arts/   # 창작 및 비주얼 (8종)
└── en/                     # English Version
    ├── 00_core_official/   # Core Tools (8 skills)
    ├── 01_automation/      # Daily Automation (8 skills)
    ├── 02_utility/         # Practical Utilities (8 skills)
    ├── 03_gamedev/         # Game Dev and Worldbuilding (9 skills)
    └── 04_creative_arts/   # Creative and Visual (8 skills)
```

---

<a name="english"></a>
# English Catalog

## 1-Minute Quick Start (Where to Put & How to Run)

| Editor / Agent | Where to drop the folder | Invocation Example |
| :--- | :--- | :--- |
| **Antigravity / Codex** | `.agents/skills/<skill-name>/SKILL.md` | `"Use brand-guidelines to review this draft and refine the tone"` |
| **Cursor** | `.cursor/skills/<skill-name>/SKILL.md` | `"Use brand-guidelines to audit this document against our tone standards"` |
| **Windsurf** | `.devin/skills/<skill-name>/SKILL.md` | `"Use brand-guidelines to audit this document against our tone standards"` |
| **Claude Code** | `.claude/skills/<skill-name>/SKILL.md` | `"Use brand-guidelines to review this draft and strip out passive voice"` |

### Built-in Guardrail Standards (Bilingual Parity)
All 41 skills adhere to our standard safety and execution principles across both English and Korean versions:
1. **Stop Before Editing (수정 전 확인 원칙)**: The agent must present the planned modification scope or output a clean draft before overwriting files.
2. **Draft First, Zero Fluff**: Delivers ready-to-use, actionable drafts immediately without filler explanations or staged openers.
3. **Fact & Constraint Integrity**: Retains original facts, numeric limits, and architectural bounds without unauthorized creative alterations.
4. **Explicit Output Checklist (미검증 범위 명시)**: Requires completions to state what changed, what was NOT tested, and key assumptions to prevent silent edge-case skips.

See [`GUARDRAILS.md`](GUARDRAILS.md) for the universal specification.

---

### How to Use
1. Select a skill from `skills/en/<category>/<skill-name>/SKILL.md`.
2. Copy its contents into your system prompt, or place the skill directory into your AI workspace.
3. The skill provides an immediate working draft without extra installation steps.

### 00. Inspired by Anthropic's Agent Skills ([github.com/anthropics/skills](https://github.com/anthropics/skills))
> Essential document and layout creation tools streamlined for direct productivity.

| # | Skill Name | Identifier | Link |
| :-: | :--- | :--- | :--- |
| 1 | **Academy Guide** | `academy-guide` | [SKILL.md](skills/en/00_core_official/academy-guide/SKILL.md) |
| 2 | **Brand Voice Compass** | `brand-guidelines` | [SKILL.md](skills/en/00_core_official/brand-guidelines/SKILL.md) |
| 3 | **Canvas Design** | `canvas-design` | [SKILL.md](skills/en/00_core_official/canvas-design/SKILL.md) |
| 4 | **Collaborative Drafting Partner** | `doc-coauthoring` | [SKILL.md](skills/en/00_core_official/doc-coauthoring/SKILL.md) |
| 5 | **Internal Communications Formatter** | `internal-comms` | [SKILL.md](skills/en/00_core_official/internal-comms/SKILL.md) |
| 6 | **Presentation Deck Architect** | `pptx` | [SKILL.md](skills/en/00_core_official/pptx/SKILL.md) |
| 7 | **Skill Creator** | `skill-creator` | [SKILL.md](skills/en/00_core_official/skill-creator/SKILL.md) |
| 8 | **Theme Factory** | `theme-factory` | [SKILL.md](skills/en/00_core_official/theme-factory/SKILL.md) |

### 01. Daily Automation (Productivity and Cleanup)
> Automates web article cleanup, browser tab sorting, and task structuring to save you time.

| # | Skill Name | Identifier | Link |
| :-: | :--- | :--- | :--- |
| 1 | **Social Carousel Copywriter** | `landing-carousel-copy` | [SKILL.md](skills/en/01_automation/landing-carousel-copy/SKILL.md) |
| 2 | **Real Estate Concept Copywriter** | `real-estate-copywriter` | [SKILL.md](skills/en/01_automation/real-estate-copywriter/SKILL.md) |
| 3 | **UI Spec Verifier** | `spec-diff-checker` | [SKILL.md](skills/en/01_automation/spec-diff-checker/SKILL.md) |
| 4 | **Browser Tab Triage Organizer** | `tab-session-organizer` | [SKILL.md](skills/en/01_automation/tab-session-organizer/SKILL.md) |
| 5 | **Daily Task Decomposer** | `task-reminder-parser` | [SKILL.md](skills/en/01_automation/task-reminder-parser/SKILL.md) |
| 6 | **YouTube Metadata Packager** | `video-metadata-packager` | [SKILL.md](skills/en/01_automation/video-metadata-packager/SKILL.md) |
| 7 | **YouTube Transcript Summarizer** | `video-transcript-digest` | [SKILL.md](skills/en/01_automation/video-transcript-digest/SKILL.md) |
| 8 | **Web Content Sanitizer** | `web-article-cleaner` | [SKILL.md](skills/en/01_automation/web-article-cleaner/SKILL.md) |

### 02. Practical Utilities (Communication and Text)
> Handy utilities for drafting emails, distilling meeting action items, and multi-channel formatting to save you time.

| # | Skill Name | Identifier | Link |
| :-: | :--- | :--- | :--- |
| 1 | **Business Email Formatter** | `business-email-formatter` | [SKILL.md](skills/en/02_utility/business-email-formatter/SKILL.md) |
| 2 | **Inbox Triage Assistant** | `inbox-response-drafter` | [SKILL.md](skills/en/02_utility/inbox-response-drafter/SKILL.md) |
| 3 | **Messenger Layout Formatter** | `messenger-markdown-formatter` | [SKILL.md](skills/en/02_utility/messenger-markdown-formatter/SKILL.md) |
| 4 | **Content Distribution Adapter** | `multichannel-content-adapter` | [SKILL.md](skills/en/02_utility/multichannel-content-adapter/SKILL.md) |
| 5 | **Short-Form Video Script Generator** | `shortform-script-builder` | [SKILL.md](skills/en/02_utility/shortform-script-builder/SKILL.md) |
| 6 | **Prompt Quality Audit Checklist** | `skill-validation-checklist` | [SKILL.md](skills/en/02_utility/skill-validation-checklist/SKILL.md) |
| 7 | **Social Thread Splitter** | `social-thread-formatter` | [SKILL.md](skills/en/02_utility/social-thread-formatter/SKILL.md) |
| 8 | **Thread Noise Reducer** | `thread-meeting-summarizer` | [SKILL.md](skills/en/02_utility/thread-meeting-summarizer/SKILL.md) |

### 03. Game Dev and Worldbuilding (Narrative and Mechanics)
> Assists creators with game balance, encounter outlines, quest structures, and dialogue formatting to save you time.

| # | Skill Name | Identifier | Link |
| :-: | :--- | :--- | :--- |
| 1 | **Board Game Rulebook & Component Architect** | `boardgame-rule-spec` | [SKILL.md](skills/en/03_gamedev/boardgame-rule-spec/SKILL.md) |
| 2 | **Card Game Mechanic & Deck Architect** | `card-deck-synergy` | [SKILL.md](skills/en/03_gamedev/card-deck-synergy/SKILL.md) |
| 3 | **Subculture Character Voice Line Generator** | `character-lore-codex` | [SKILL.md](skills/en/03_gamedev/character-lore-codex/SKILL.md) |
| 4 | **Game Numerics** | `game-balance-calculator` | [SKILL.md](skills/en/03_gamedev/game-balance-calculator/SKILL.md) |
| 5 | **Steam Review Analyzer** | `game-review-digest` | [SKILL.md](skills/en/03_gamedev/game-review-digest/SKILL.md) |
| 6 | **Text TRPG & Interactive Fiction Engine** | `interactive-fiction-helper` | [SKILL.md](skills/en/03_gamedev/interactive-fiction-helper/SKILL.md) |
| 7 | **RPG Maker XP Event Builder** | `rpg-dialogue-formatter` | [SKILL.md](skills/en/03_gamedev/rpg-dialogue-formatter/SKILL.md) |
| 8 | **DnD Oracle** | `ttrpg-encounter-helper` | [SKILL.md](skills/en/03_gamedev/ttrpg-encounter-helper/SKILL.md) |
| 9 | **Procedural Pixel FX & Action Choreographer** | `pixelfx` | [SKILL.md](skills/en/03_gamedev/pixelfx/SKILL.md) |

### 04. Creative and Visual Content (Design and Media)
> Utilities for SVG icons, moodboard palettes, visual prompt optimization, and sensory lexicons to save you time.

| # | Skill Name | Identifier | Link |
| :-: | :--- | :--- | :--- |
| 1 | **Classic Art Palette Curator** | `classic-art-palette-curator` | [SKILL.md](skills/en/04_creative_arts/classic-art-palette-curator/SKILL.md) |
| 2 | **Aesthetics Wiki Director** | `concept-moodboard-builder` | [SKILL.md](skills/en/04_creative_arts/concept-moodboard-builder/SKILL.md) |
| 3 | **SVG Vector Generator** | `inline-svg-generator` | [SKILL.md](skills/en/04_creative_arts/inline-svg-generator/SKILL.md) |
| 4 | **Lyric Melody Arranger** | `lyric-melody-harmonizer` | [SKILL.md](skills/en/04_creative_arts/lyric-melody-harmonizer/SKILL.md) |
| 5 | **Viral Meme Generator** | `meme-copy-builder` | [SKILL.md](skills/en/04_creative_arts/meme-copy-builder/SKILL.md) |
| 6 | **Tarot Story Coach** | `narrative-plot-oracle` | [SKILL.md](skills/en/04_creative_arts/narrative-plot-oracle/SKILL.md) |
| 7 | **Sensory Scene Describer** | `sensory-scene-describer` | [SKILL.md](skills/en/04_creative_arts/sensory-scene-describer/SKILL.md) |
| 8 | **Visual Prompt Optimizer** | `visual-prompt-optimizer` | [SKILL.md](skills/en/04_creative_arts/visual-prompt-optimizer/SKILL.md) |

### Ecosystem and Related Resources

Additional catalogs and reference registries for expanding beyond these 41 skills:

- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers): Community collection of Model Context Protocol servers for databases, browser automation, and developer tools.
- [MCP reference servers](https://github.com/modelcontextprotocol/servers): Official reference implementations for filesystems, Git, database connectors, and memory.
- [PulseMCP](https://www.pulsemcp.com/) and [Glama](https://glama.ai/mcp/servers): Directory tracking MCP server rankings, updates, and specifications.
- [SkillBook](https://www.getskillbook.com/) by [@BBBang9900](https://twitter.com/BBBang9900): Curated Korean AI workflows and prompt patterns for planning and writing tasks.

---

<a name="한국어"></a>
# 한국어 카탈로그

### 사용 방법
1. 필요한 도구를 `skills/ko/<카테고리>/<스킬이름>/SKILL.md`에서 확인합니다.
2. 시스템 프롬프트 또는 에이전트 지침 폴더에 복사해 넣습니다.
3. 별도 설치 없이 즉시 작동하여 작업.

### 00. Inspired by Anthropic's Agent Skills ([github.com/anthropics/skills](https://github.com/anthropics/skills))
> 불필요한 기술 설정을 걷어내고 실무 문서 작성과 서식 설계를 돕는 핵심 스킬 모음입니다.

| 번호 | 스킬명 | 식별자 | 링크 |
| :-: | :--- | :--- | :--- |
| 1 | **소크라테스식 개념 튜터** | `academy-guide` | [SKILL.md](skills/ko/00_core_official/academy-guide/SKILL.md) |
| 2 | **브랜드 보이스 가이드** | `brand-guidelines` | [SKILL.md](skills/ko/00_core_official/brand-guidelines/SKILL.md) |
| 3 | **SNS 썸네일 & 카피 기획기** | `canvas-design` | [SKILL.md](skills/ko/00_core_official/canvas-design/SKILL.md) |
| 4 | **문서 공동 작성기** | `doc-coauthoring` | [SKILL.md](skills/ko/00_core_official/doc-coauthoring/SKILL.md) |
| 5 | **사내 커뮤니케이션 작성기** | `internal-comms` | [SKILL.md](skills/ko/00_core_official/internal-comms/SKILL.md) |
| 6 | **발표 슬라이드 기획기** | `pptx` | [SKILL.md](skills/ko/00_core_official/pptx/SKILL.md) |
| 7 | **AI 스킬 생성기** | `skill-creator` | [SKILL.md](skills/ko/00_core_official/skill-creator/SKILL.md) |
| 8 | **컬러 팔레트 & 무드보드 생성기** | `theme-factory` | [SKILL.md](skills/ko/00_core_official/theme-factory/SKILL.md) |

### 01. 업무 자동화 (Daily Automation)
> 반복되는 웹 글 정리, 탭 분류, 일정 정리를 보조하여 수작업.

| 번호 | 스킬명 | 식별자 | 링크 |
| :-: | :--- | :--- | :--- |
| 1 | **SNS 카드뉴스 카피라이터** | `landing-carousel-copy` | [SKILL.md](skills/ko/01_automation/landing-carousel-copy/SKILL.md) |
| 2 | **공간 소개 브로슈어 작성기** | `real-estate-copywriter` | [SKILL.md](skills/ko/01_automation/real-estate-copywriter/SKILL.md) |
| 3 | **웹 기획서 대조 검수기** | `spec-diff-checker` | [SKILL.md](skills/ko/01_automation/spec-diff-checker/SKILL.md) |
| 4 | **브라우저 탭 분류 정리기** | `tab-session-organizer` | [SKILL.md](skills/ko/01_automation/tab-session-organizer/SKILL.md) |
| 5 | **업무 할 일 변환기** | `task-reminder-parser` | [SKILL.md](skills/ko/01_automation/task-reminder-parser/SKILL.md) |
| 6 | **유튜브 카피 패키저** | `video-metadata-packager` | [SKILL.md](skills/ko/01_automation/video-metadata-packager/SKILL.md) |
| 7 | **유튜브 핵심 요약기** | `video-transcript-digest` | [SKILL.md](skills/ko/01_automation/video-transcript-digest/SKILL.md) |
| 8 | **웹페이지 본문 정제기** | `web-article-cleaner` | [SKILL.md](skills/ko/01_automation/web-article-cleaner/SKILL.md) |

### 02. 실무 유틸리티 (Everyday Utilities)
> 비즈니스 이메일, 회의록 정리, SNS 포맷 변환 등 일상 업무의 초안 작성.

| 번호 | 스킬명 | 식별자 | 링크 |
| :-: | :--- | :--- | :--- |
| 1 | **비즈니스 메일 변환기** | `business-email-formatter` | [SKILL.md](skills/ko/02_utility/business-email-formatter/SKILL.md) |
| 2 | **업무 메일 분류기** | `inbox-response-drafter` | [SKILL.md](skills/ko/02_utility/inbox-response-drafter/SKILL.md) |
| 3 | **메신저 가독성 포맷터** | `messenger-markdown-formatter` | [SKILL.md](skills/ko/02_utility/messenger-markdown-formatter/SKILL.md) |
| 4 | **멀티채널 콘텐츠 변환기** | `multichannel-content-adapter` | [SKILL.md](skills/ko/02_utility/multichannel-content-adapter/SKILL.md) |
| 5 | **숏폼 영상 대본 구성기** | `shortform-script-builder` | [SKILL.md](skills/ko/02_utility/shortform-script-builder/SKILL.md) |
| 6 | **프롬프트 검수 체크리스트** | `skill-validation-checklist` | [SKILL.md](skills/ko/02_utility/skill-validation-checklist/SKILL.md) |
| 7 | **소셜 스레드 분할기** | `social-thread-formatter` | [SKILL.md](skills/ko/02_utility/social-thread-formatter/SKILL.md) |
| 8 | **업무 스레드 및 회의록 정리기** | `thread-meeting-summarizer` | [SKILL.md](skills/ko/02_utility/thread-meeting-summarizer/SKILL.md) |

### 03. 게임 및 세계관 (Game Dev and Worldbuilding)
> TRPG 룰, 수치 밸런스, 퀘스트 구조화 등 창작자의 기초 설계.

| 번호 | 스킬명 | 식별자 | 링크 |
| :-: | :--- | :--- | :--- |
| 1 | **보드게임 룰북 및 명세서 정리** | `boardgame-rule-spec` | [SKILL.md](skills/ko/03_gamedev/boardgame-rule-spec/SKILL.md) |
| 2 | **카드게임 기믹 & 시너지 덱메이커** | `card-deck-synergy` | [SKILL.md](skills/ko/03_gamedev/card-deck-synergy/SKILL.md) |
| 3 | **서브컬처 캐릭터 보이스 & 대사 티키타카 생성기** | `character-lore-codex` | [SKILL.md](skills/ko/03_gamedev/character-lore-codex/SKILL.md) |
| 4 | **가챠 확률 및 성장 밸런스 설계기** | `game-balance-calculator` | [SKILL.md](skills/ko/03_gamedev/game-balance-calculator/SKILL.md) |
| 5 | **스팀 리뷰 분석 및 벤치마킹 추출기** | `game-review-digest` | [SKILL.md](skills/ko/03_gamedev/game-review-digest/SKILL.md) |
| 6 | **텍스트 TRPG 시나리오 보조** | `interactive-fiction-helper` | [SKILL.md](skills/ko/03_gamedev/interactive-fiction-helper/SKILL.md) |
| 7 | **RPG 메이커 퀘스트 이벤트 생성기** | `rpg-dialogue-formatter` | [SKILL.md](skills/ko/03_gamedev/rpg-dialogue-formatter/SKILL.md) |
| 8 | **즉흥 TRPG 인카운터 생성기** | `ttrpg-encounter-helper` | [SKILL.md](skills/ko/03_gamedev/ttrpg-encounter-helper/SKILL.md) |
| 9 | **픽셀 아트 VFX & 타격감 생성기** | `pixelfx` | [SKILL.md](skills/ko/03_gamedev/pixelfx/SKILL.md) |

### 04. 창작 및 비주얼 (Creative and Visual Content)
> SVG 아이콘, 무드보드 배색, 프롬프트 최적화 등 시각 콘텐츠 제작의 고민.

| 번호 | 스킬명 | 식별자 | 링크 |
| :-: | :--- | :--- | :--- |
| 1 | **명화 배색 및 구도 큐레이터** | `classic-art-palette-curator` | [SKILL.md](skills/ko/04_creative_arts/classic-art-palette-curator/SKILL.md) |
| 2 | **시각 컨셉 무드보드 생성기** | `concept-moodboard-builder` | [SKILL.md](skills/ko/04_creative_arts/concept-moodboard-builder/SKILL.md) |
| 3 | **인라인 SVG 벡터 생성기** | `inline-svg-generator` | [SKILL.md](skills/ko/04_creative_arts/inline-svg-generator/SKILL.md) |
| 4 | **가사 및 코드 진행 가이드** | `lyric-melody-harmonizer` | [SKILL.md](skills/ko/04_creative_arts/lyric-melody-harmonizer/SKILL.md) |
| 5 | **밈 포맷 카피 빌더** | `meme-copy-builder` | [SKILL.md](skills/ko/04_creative_arts/meme-copy-builder/SKILL.md) |
| 6 | **플롯 전개 타로 가이드** | `narrative-plot-oracle` | [SKILL.md](skills/ko/04_creative_arts/narrative-plot-oracle/SKILL.md) |
| 7 | **감각적 공간 묘사 가이드** | `sensory-scene-describer` | [SKILL.md](skills/ko/04_creative_arts/sensory-scene-describer/SKILL.md) |
| 8 | **영문 비주얼 프롬프트 빌더** | `visual-prompt-optimizer` | [SKILL.md](skills/ko/04_creative_arts/visual-prompt-optimizer/SKILL.md) |

---

### 더 많은 도구와 생태계

기본 41종 외에 추가적인 도구나 상위 생태계가 필요할 때 참고할 수 있는 저장소입니다.

- [스킬북 (SkillBook)](https://www.getskillbook.com/) (꼬마봇 [@BBBang9900](https://twitter.com/BBBang9900)): 기획, 문서 작성, 일상 업무에 맞춘 한국어 AI 도구와 프롬프트 모음입니다.
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers): 데이터베이스, 브라우저 제어 등 오픈소스 MCP 서버 모음입니다.
- [MCP 레퍼런스 서버](https://github.com/modelcontextprotocol/servers): 파일시스템, Git, 메모리 등 MCP 공식 레퍼런스 서버 구현체 모음입니다.
- [PulseMCP](https://www.pulsemcp.com/) 및 [Glama](https://glama.ai/mcp/servers): 실시간 인기 MCP 도구와 웹 스펙을 정리한 디렉터리입니다.

---

## Acknowledgements

- Agent Skills specification by Anthropic (agentskills.io)
- Korean practical AI workflows & prompt curation by [SkillBook (스킬북)](https://www.getskillbook.com/)
- Open-source inspirations from community collections:
  - punkpeye/awesome-mcp-servers
  - f/awesome-chatgpt-prompts
  - openai/openai-cookbook

---

## Trademark Disclaimer

All product names, logos, brands, and registered trademarks mentioned or referenced in this project are the property of their respective owners. Mention of any specific commercial platform, software, or brand is strictly for identification, compatibility, and educational reference purposes only, and does not imply any affiliation, sponsorship, or endorsement.

---

## License

Released under the MIT License.
