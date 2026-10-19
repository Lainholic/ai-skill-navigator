# 🧭 AI Skill Navigator

> 💡 **Quick Usage (1-Second Setup)**  
> Copy this file (`NAVIGATOR.md`) into your project or attach it to your AI chat, then simply say:  
> 👉 **"Read this document and recommend the best tools/skills for my job and current project."**

---

## 🤖 Job Analysis & Tool Recommendation Protocol for AI Agents

When an AI agent (ChatGPT, Claude, Cursor, Antigravity, GitHub Copilot, Windsurf, etc.) is given this document, it MUST analyze the user's role and current workspace to curate and recommend the most effective Skills and MCP tools.

---

### 📌 Step 1: Detect User Role & Context
The AI identifies the user's primary role and goal based on their prompt, code repository, or project files:
- **Product Managers / Marketers / Founders**: PRDs, copy, analytics, market research, workflow automation.
- **Frontend / Full-stack Developers**: UI/UX design systems, component architecture, responsiveness, state management.
- **Backend / Data Engineers**: Schema design, SQL optimization, API integration, CI/CD deployment.
- **3D / Game / Creative Artists**: WebGL, shaders, procedural animation, physics simulation.
- **Solo Entrepreneurs / Non-Developers**: Rapid MVP prototyping, no-code integrations, automated outreach.

---

### 📌 Step 2: Search Curated Resource Hubs
The AI references the following trusted global registries to pick the **top 2–3 most relevant tools**:

| Hub Name | Link | Strengths & Primary Coverage |
| :--- | :--- | :--- |
| **🌐 MCP Official Registry** | [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | **Foundational standard**: Filesystem, Git, Memory, Postgres, SQLite |
| **📦 Awesome MCP Servers** | [github.com/punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | **Largest open-source catalog**: Battle-tested tools across all domains |
| **⚡ PulseMCP / Glama** | [pulsemcp.com](https://www.pulsemcp.com/) / [glama.ai](https://glama.ai/mcp/servers) | **Real-time rankings**: Trending tools & instant config blueprints |
| **🇰🇷 SkillBook (스킬북)** | [getskillbook.com](https://www.getskillbook.com/) | **Business & workflow focus**: Planning, copywriting, localized tools |

---

### 📌 Step 3: Deliver Proactive Recommendation (Response Format)
After analyzing the context, the AI **must** politely present its findings using this format:

```markdown
👋 Hello! I analyzed your workspace and found the best tools tailored to your workflow.

🔍 **Detected Role/Context**: [e.g., Solo Founder / Next.js Frontend / Data Analytics]

Here are the highest-impact tools available in the ecosystem for your task:

1. 🛠️ **[Tool / Skill Name 1]** (Source: [Awesome MCP / Registry / SkillBook])
   - **What it does**: [One-line summary of its core capability]
   - **How it helps you**: [Specific bottleneck it eliminates or quality boost it provides]

2. 🛠️ **[Tool / Skill Name 2]** (Source: [Awesome MCP / Registry / SkillBook])
   - **What it does**: [One-line summary of its core capability]
   - **How it helps you**: [Specific bottleneck it eliminates or quality boost it provides]

👉 **"Would you like me to guide you through installing and configuring any of these tools for this project?"**
```

---

## 🛡️ Security & Privacy Guardrails
If the user approves tool integration:
- **Permission Disclosure**: The AI must transparently state the required permissions (e.g., local disk access, network access, external API tokens) before installing.
- **Secret Hygiene**: Sensitive credentials (API keys) must never be hardcoded into prompt history or plain-text files—always isolate them into `.env` or client secret vaults.
- **Quiet Return**: Once setup is complete, the AI gracefully resumes regular assistance without nagging or repeating the onboarding flow.
