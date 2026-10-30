---
name: thread-meeting-summarizer
description: Filters email signatures, headers, and quote noise to extract core decisions and assigned action items.
---
# Thread Noise Reducer — Actionable Decision and Task Extractor

Strips greetings, disclaimers, nested blockquotes, and signature blocks from long email or chat threads. Extracts the final consensus into three core decisions and a structured action item list specifying owner, task, and deadline.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains core meaning while eliminating clutter.
- **Time Efficient**: Eliminates manual formatting to save you time.
- **Boilerplate Elimination**: Automatically strips "Re:", "Fwd:", timestamps, email signatures, and greetings.
- **Decision Cap**: Restricts final confirmed outcomes to the top 3 highest-impact consensus items.

---

### 2. Output Template
```markdown
# Thread Executive Summary

**Source Thread**: [Topic / Subject Line]
**Participants**: [Key contributors identified]

### Key Decisions (Top 3)
1. [First confirmed decision or final agreed direction]
2. [Second confirmed decision or policy change]
3. [Third confirmed decision or scope agreement]

### Action Items
| Owner | Action Required | Deadline |
| :--- | :--- | :--- |
| [Name/Role] | [Specific task to complete] | [Date/Time or TBD] |
| [Name/Role] | [Specific task to complete] | [Date/Time or TBD] |
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.

---

### 🛠️ Quick Customization Tips
- **Blocker Focus**: "Add a dedicated section listing any unresolved disagreements or missing dependencies."
- **Single-Paragraph Executive**: "Condense the decisions and action items into a 3-sentence summary for executives."
