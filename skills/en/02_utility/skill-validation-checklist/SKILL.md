---
name: skill-validation-checklist
description: Audits prompts across four operational criteria, assigns an A–F grade, and provides an immediate revision.
---
# Prompt Quality Audit Checklist — Five-Pillar Validation and Remediation Engine

Evaluates prompts and SKILL.md instructions across role definition, few-shot examples, ambiguity, output constraints, and explicit unchecked scope (what was NOT tested). Identifies operational edge cases and delivers a calibrated, drop-in replacement draft.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains core meaning while eliminating clutter.
- **Time Efficient**: Eliminates manual formatting to save you time.
- **Scoring Rigor**: Evaluates Role Definition, Few-Shot Examples, Ambiguity, and Output Constraints with zero grade inflation.

---

### 2. Output Template
```markdown
# Prompt Health Audit Report

**Overall Grade**: [A / B / C / D / F] | **Status**: [Ready / Needs Revision / Critical Gaps]

### Diagnostic Breakdown
| Criterion | Score | Key Finding |
| :--- | :--- | :--- |
| 1. Role Definition | [A-F] | [Specific assessment of agent persona and scope] |
| 2. Few-Shot Examples | [A-F] | [Presence or absence of input/output pairs] |
| 3. Ambiguity Level | [A-F] | [Vague words or undefined edge conditions found] |
| 4. Output Constraints | [A-F] | [Format limits, delimiters, and length rules] |
| 5. Unchecked Scope Checklist | [A-F] | [Presence of explicit 'What was NOT tested' and assumptions] |

### Recommended Rewrite
```[format]
[Drop-in replacement prompt text addressing all identified gaps]
```
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.

---

### 🛠️ Quick Customization Tips
- **Production Strictness**: "Grade strictly for API integration where JSON parsing failures cause runtime errors."
- **Beginner Mode**: "Explain each identified defect in one simple sentence before the rewrite."
