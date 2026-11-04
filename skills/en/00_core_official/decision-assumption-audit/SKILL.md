---
name: decision-assumption-audit
license: MIT
description: >
  Decision & Assumption Audit for AI Agents. Forces agents to introspect,
  disclose, and verify implicit defaults, omitted error handling, and arbitrary
  assumptions made during user requests. Enforces Execution Hold, strict evidence
  grounding (file:line, execution logs), 5-tier provenance, and blocks post-hoc rationalization.
  Triggers: 'why did you do this?', 'how did you do this?', 'why is it like this?',
  'audit decisions', 'list assumptions', 'what did you assume?', 'audit choices',
  'check decisions', 'decision audit'.
---

# Decision & Assumption Audit (Agent Decision & Assumption Introspection)

## 1. Overview & Purpose

When processing concise and intuitive developer instructions, AI coding agents implicitly make numerous micro-decisions (choosing fallback defaults, paths, libraries, omitting edge cases, etc.). Over time, this leads to **Cognitive Surrender** and severe **Comprehension Debt**, leaving developers unaware of the system's true internal mechanics.

This skill is not a mere "subjective self-report" or confession.
It enforces a **rigorous evidence-based audit against actual developer prompts, operational guidelines, modified artifacts, CLI commands, console logs, and verification outputs**, putting 100% architectural control and decision sovereignty back in the human developer's hands.

---

## 2. Core Audit Rules

1. **Immediate Execution Hold on Audit Invocation**:
   - When the user calls an audit (e.g., "audit decisions", "what did you assume?"), the agent **MUST immediately suspend (Hold) all subsequent state changes (writing files, modifying code, deploying, external transmissions) for the audited task** and focus solely on the audit report.
   - **The Hold is NOT automatically lifted upon report completion.** Subsequent execution can only resume upon explicit user instruction (e.g., "continue", "proceed") within the user-specified scope.
   - For already running or scheduled background processes, report their presence, status, and abortability. Do not arbitrarily kill, delete, or rollback without approval.
   - If suspension or termination of an already running operation has not been verified, do not report "Hold completed" or "operation stopped" as a confirmed fact.
   - Read/query tools with side-effects (file writing, network calls, token refresh) require separate authorization; the audit request itself does NOT constitute approval for side-effects.
   - **An audit request is an inspection/reporting request, NOT authorization to modify, delete, or rollback.**

2. **Strict 5-Tier Provenance & Independent Authority Assessment**:
   - Do not misclassify user silence as agent discretion, nor blame agent bias on guidelines.
     1. `[User Explicit Instruction]`: Directly requested by the user.
     2. `[Guidelines Compliance]`: Mandated by workspace/project `AGENTS.md` or governance docs.
     3. `[Inherited from Code/Config]`: Preserved from existing codebase or configuration.
     4. `[Tool/Library Default]`: Native behavior of CLI tools, frameworks, or dependencies.
     5. `[Agent Pure Discretion]`: Autonomous micro-decisions made by the agent.
   - If origin cannot be established, mark as **`[Unverified Provenance]`**; do not force-fit into one of the tiers.
   - For compound decisions, split the decision into separate entries or record multiple provenance categories with evidence for each.
   - **Provenance and execution authority are assessed independently.** Inheriting code or relying on tool defaults does NOT imply pre-approval, nor does agent discretion automatically require special sign-off.
   - Rules or guidelines discovered post-facto cannot be claimed as historical reasoning during the work.

3. **Strict Prohibition of Post-hoc Rationalization**:
   - Never sugarcoat forgotten error handling as an "intentional tradeoff for simplicity and speed".
   - Strictly separate evidence-backed historical reasoning from post-hoc analysis. If reasons are unrecorded, state: *"Historical rationale is unrecorded in logs."*
   - Never reverse-engineer agent intent solely from code outcomes.

4. **Mandatory Concrete Evidence & Strict Claim Boundary**:
   - Every audit entry MUST attach concrete evidence (`file:line`, CLI command string, console logs). Claims without evidence are marked as `[Unverified Claim]`.
   - **Distinguish what evidence proves from what it does NOT prove.** Command strings, invocation calls, exit codes, file presence, static analysis, and runtime verification are NOT equivalent.
   - Current file state is not assumed to represent past session state without commit/log cross-referencing.
   - Unproven suspected risks must be reported as `[Suspected Risk]`, stating required evidence to verify.

5. **Abolition of Risk Caps (Zero Omission)**:
   - Critical risks, unauthorized actions, and required sign-offs must be **reported in full without arbitrary limits (e.g., no "top 1-2 summary" filter)**. Never bury critical risks under dozens of trivial default values.

6. **No Strikethrough Formatting**:
   - Do not use strikethrough markdown formatting or strikethrough tags in reports, code comments, or any other output.

---

## 3. Audit Taxonomy (4 Primary Domains + 7 Cross-Inspection Axes)

For each of the seven cross-inspection axes, explicitly report one of: **`Verified / Not Applicable / Unable to Verify / Not Inspected`**. Do not copy example verification states without supporting evidence.

### 4 Primary Domains
1. **Path & Storage**: Chosen directories, created files, arbitrary file names.
2. **Defaults & Flags**: CLI flags, model options, timeouts, format specifications.
3. **Omissions & Skipped Cases**: Missing error branches, network retry gaps, unhandled edge cases.
4. **Implicit Assumptions**: Assumed environment/library versions, assumed user intent.

### 7 Mandatory Cross-Inspection Axes
- **[Requirements / Definition of Done]**: Did the agent arbitrarily narrow/re-interpret scope or redefine completion?
- **[Authority / Delegation / Network]**: Were external APIs, subagents, or network calls initiated arbitrarily?
- **[Data / Security]**: Secret exposure, unmasked tokens, disabled SSL/verification, cached credentials?
- **[Environment / Dependencies]**: Global package installations, version conflicts, platform assumptions?
- **[Verification / Green Check Blindspots]**: Which areas remain unverified despite passing tests?
- **[Operations / Recovery]**: Missing backups before overwriting/deleting, irreversible changes?
- **[Residue / Cost]**: Dangling background processes, temporary files, wasted paid tokens/credits?

---

## 4. Standard Audit Report Format

```markdown
### [Decision & Assumption Audit] Agent Introspection & Assumption Report

#### 1. Critical & Action Items
*All critical risks, unauthorized actions, and pending user decisions reported in full.*
- **[D-01] [Impact: High]** Unauthorized flag applied / Risk description / User action required
- *(If none: State explicitly with verified scope: "None identified within verified scope")*

#### 2. Audit Scope & Evidence Base
- **Target Task / Conversation Range**: Task name and session bounds.
- **Examined Artifacts / Logs**: Inspected file paths, CLI command list, console logs.
- **7-Axis Inspection State**: 
  - Requirements (Verified), Delegation (Verified), Security (Not Applicable), Environment (Verified), Verification (Verified), Recovery (Verified), Residue (Verified).
- **Unverified Scope / Evidence Gaps**: Areas that could not be cross-checked due to missing logs or access constraints.

#### 3. Decisions & Assumptions Matrix
| ID | Domain | Content | Provenance (5-Tier) | Execution State | Verified Claim Boundary | Concrete Evidence (File/Log) | Impact | Sign-off Required |
|---|---|---|---|---|---|---|---|---|
| D-01 | Path | Saved to `_work\...\tmp` | Guidelines Compliance | Execution & Artifact Verified | Verified directory and file creation on disk | Command log #12 & Directory listing | Low | No |
| D-02 | Default | Applied `--depth 1` flag | Agent Discretion | Invocation Call Verified (Artifact unverified) | Proves `--depth 1` was passed in invocation; does not prove clone integrity | `git clone` command log #15 | Medium | Yes (Scope check) |
| D-03 | Omission | Fallback branch missing in inspected function | Unverified Provenance | Static Inspection Verified | Proves absence of branch in inspected range (L40-L60) only; callers/upper layers unverified | `script.py#L40-L60` inspection record | High | Yes |

> **Evidence Grounding Notes**:
> - As in D-02, invocation logs only prove the call occurred; they do not prove exit codes or artifact integrity.
> - As in D-03, absence claims are strictly limited to inspected ranges and do not assert absence in parent callers.
> - When historical intent is unrecorded, do not guess intentionality; classify as `[Unverified Provenance]`.

#### 4. Reasoning & Alternatives by ID
*Template note: State record location for historical rationale and alternatives. If unrecorded, state 'Unrecorded in session logs'. Distinguish 'no alternatives' from 'no alternatives recorded'.*
- **[D-01] Historical Rationale**: Historical reference to rule is unrecorded in session logs.
  - **Audit-Time Rule Match**: Conforms to workspace folder isolation policy (`GUIDELINES.md#L45`; not historical proof of intent).
  - **Historical Alternatives**: None recorded in session logs (Unrecorded, does not mean alternatives didn't exist).
- **[D-02] Historical Rationale**: Whether intent was download optimization is unrecorded in logs.
  - **Historical Alternatives**: None recorded in session logs.
  - **Audit-Time Alternative**: Verify clone output integrity first, then decide whether to keep shallow clone or fetch full history.
- **[D-03] Historical Rationale**: Rationale unrecorded in logs (Strict ban on post-hoc rationalization).
  - **Historical Alternatives**: None recorded in session logs.
  - **Audit-Time Alternative**: Check caller/parent error handlers before deciding to add local try-except or leverage upper-level handlers.

#### 5. User Decisions Required
*Execution Hold remains active until explicit user instruction.*
- **[Regarding D-02]**: After verifying clone success, choose whether to keep shallow clone or fetch full history.
- **[Regarding D-03]**: After inspecting parent error handling, decide whether to inject local fallback handling.
```

---

## 5. Triggers & Lifecycle

1. **Explicit Invocation (Immediate Execution Hold & Audit Mode)**:
   - *"why did you do this?"* / *"how did you do this?"* / *"why is it like this?"*
   - *"audit decisions"* / *"list assumptions"* / *"what did you assume?"* / *"check decisions"*
   - **Behavior**: Freeze new writes/transmissions for audited task (Hold) ➔ Generate audit report ➔ Await explicit user resume instruction.

2. **Autonomous Proactive Audit (Major Milestones)**:
   - **Pre-Deployment**: MUST execute audit and hold **BEFORE** invoking deploy commands.
   - **Major Refactoring / DB Migrations / Security Config Changes**: Append audit summary to completion report.
   - If a proactive audit identifies unauthorized state changes or unclear execution authority, immediately hold related subsequent execution and report the issue.
