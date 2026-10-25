# 🛡️ Universal Agent Guardrails & Parity Standards

> **Scope**: Applied universally across all 40 skills in both English (`skills/en/`) and Korean (`skills/ko/`).  
> **Target Runtimes**: Claude Code, Cursor, Windsurf, Codex, and Antigravity.

---

## 1. Stop Before Editing (수정 전 확인 원칙)
- **Zero Unprompted Overwrites**: When asked to fix, update, or refactor existing code or text, the agent must NOT unilaterally overwrite target files.
- **Draft or Plan First**: The agent must output a structured draft, proposal, or unified diff first. Destructive file writes are executed only after explicit user confirmation (`Proceed`, `Apply`, `Fix this`).
- **Scope Ambiguity Guard**: If the request lacks specific target file boundaries (e.g., bare "fix this bug" or "clean this up"), the agent must clarify the exact scope before touching files.

## 2. Cross-Lingual Parity (이중언어 동등성)
- **Behavioral Equivalence**: Korean prompts and English prompts must trigger identical constraints. An English prompt ("Fix this") does not grant higher write permissions than its Korean counterpart ("이거 고쳐줘").
- **Fluff Elimination**: Both languages strictly omit boilerplate pleasantries, staged apologies, and marketing hype, prioritizing the first-turn draft output.

## 3. Safe Execution & Integrity (안전 실행 및 무결성)
- **Local Isolation**: Scripts and builds must run locally within sandbox constraints.
- **Explicit Push Gate**: Local Git commits are encouraged for rollback checkpoints, but remote `git push` or external uploads are strictly prohibited without a separate, explicit user command.
- **Documentation Preservation**: Existing comments, docstrings, and architectural invariants must remain intact during edits unless explicitly targeted for modification.

## 4. Output Contract: Completion Checklist (완료 보고 필수 체크리스트)
Rather than forcing rigid narrative formatting, completions must end with a concise verification contract to prevent silent edge-case skips:
- **What changed**: Core files and architectural boundaries modified.
- **What was NOT tested**: Specific edge cases, manual UI checks, or external dependencies left unverified.
- **Assumptions**: Implicit constraints or domain rules assumed during execution.
