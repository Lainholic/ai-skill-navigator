# 🧰 Starter Skills Pack for AI Agents

> **"Zero-install, battle-tested practical skill constraints. Simply copy a single `SKILL.md` into your agent directory."**

Works natively with Claude Code, Cursor, Antigravity, GitHub Copilot, Windsurf, and any platform adhering to agent skill standards.

[한국어 설명서](./README.ko.md)

---

## 📌 Available Skills

| Skill | Description | Best For |
| :--- | :--- | :--- |
| [**`adversarial-review`**](./adversarial-review/) | Forces the AI into an aggressive "Devil's Advocate / Red Team" persona to rigorously attack its own code. | Anyone wanting to break self-confirmation bias. |
| [**`verification-before-completion`**](./verification-before-completion/) | Prohibits the agent from claiming "done/fixed" without running commands and showing verifiable terminal output. | Anyone tired of AI hallucinating false success. |
| [**`session-journal`**](./session-journal/) | Single-file (`DEV_JOURNAL.md`) context persistence across sessions without heavy database dependencies. | Anyone tired of AI amnesia across new chat sessions. |
| [**`lite-wiki`**](./lite-wiki/) | Ultra-light flat wiki in a single `wiki/` folder with `INDEX.md` and topic files for long-term project knowledge. | Projects that outgrow a single-file journal. |

---

## 🚨 Critical Note: Beware of Self-Confirmation Bias

### The Flaw of "Self-Review"
When you ask an AI, *"Review the code you just wrote,"* it often falls into **Self-Confirmation Bias**, claiming *"The implementation is robust and flawless!"*
* The model remains trapped inside its own prior generation context, actively rationalizing edge-case omissions.
* The `adversarial-review` skill mitigates this by forcibly rewriting the agent's objective into an **attacker/auditor mindset**.

---

## 💡 [Pro Tip] Take It Further: Cross-Model Verification via Secondary API Keys

While self-adversarial mode is a huge leap forward, **true defect immunity comes from introducing an entirely different model's eyes**:

```
[Author] Claude 3.5 Sonnet (Generates implementation)
    ⬇
[Adversarial Critic] GPT-4o or DeepSeek API (Independent Red Team audit)
    ⬇
[Final Arbiter] Human Director (Selective adoption)
```

### How to apply:
* If your primary driver is **Claude**, wire a lightweight script calling **OpenAI (GPT-4o)** or **DeepSeek** as the critic step.
* Instructing a completely different model with *"You are an external hostile auditor; highlight only vulnerabilities"* catches edge-cases and structural blindspots no single model can spot alone.

---

## 🧹 [Maintenance Tip] Periodically Prune `DEV_JOURNAL.md`

The `session-journal` skill appends entries incrementally after each completed milestone.

* Over months of work, the log can become unnecessarily long, consuming extra context tokens.
* **Once a month, do a quick manual prune:**
  1. Archive or delete entries from tasks finished long ago.
  2. Clean up contradictory past decisions if project requirements pivoted.
* This light touch keeps the agent laser-focused on the freshest architectural context without confusion.
