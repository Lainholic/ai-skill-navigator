---
name: spec-diff-checker
description: Compares UI requirements against implementation descriptions to identify missing elements and visual defects. Saves you time.
---
# UI Spec Verifier — Requirement-to-Implementation Diff Inspector

Cross-references planning specifications with actual UI outputs to identify missing buttons, copy discrepancies, and broken layout alignments in a clean comparison table.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains core meaning while eliminating clutter.
- **Time Efficient**: Eliminates manual formatting to save you time.

---

### 2. Output Template
```markdown
## Specification Discrepancy Audit

| Component / Area | Expected Spec | Current Implementation | Status | Recommended Fix |
| :--- | :--- | :--- | :--- | :--- |
| [CTA Button] | [Primary Blue / 'Submit'] | [Gray / 'Send'] | Discrepancy | Update color token and label |
| [Header Banner] | [Dismissible alert banner] | [Missing entirely] | Missing | Add banner component per spec |
| [Copy Text] | [Refund policy update] | [Legacy refund text] | Outdated | Replace text block with approved copy |
| [Layout Grid] | [3-column desktop layout] | [2-column stretched grid] | Misaligned | Restore 3-column grid container |

## Critical Action Items
1. **Blocking Issues**: [List components that break core user flow]
2. **Text Discrepancies**: [List copy that violates spec wording]
3. **Cosmetic Adjustments**: [List non-blocking layout or spacing fixes]
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.
- Saves you time.

---

### 🛠️ Quick Customization Tips
- **[Severity Filter]**: "List only critical blockers and missing functional components."
- **[Format Conversion]**: "Format discrepancy audit as a GitHub issue checklist."

---

### 4. Practical Usage Example

**Your Prompt:**
> "Please run spec-diff-checker against my `login-page-spec.md` and the current `Login.jsx` file to find missing UI components."

**Expected Output:**
> ## Specification Discrepancy Audit
> 
> | Component / Area | Expected Spec | Current Implementation | Status | Recommended Fix |
> | :--- | :--- | :--- | :--- | :--- |
> | [SSO Button] | [Include Google SSO option] | [Only Email/Password available] | Missing | Implement Google Auth Provider button |
> | [Password Field] | [Reveal password toggle icon] | [Standard hidden input field] | Missing | Add 'eye' icon with toggle state |
> 
> ## Critical Action Items
> 1. **Blocking Issues**: Users cannot log in via SSO as required by spec.
> 2. **Cosmetic Adjustments**: Missing reveal toggle hinders UX for password entry.
