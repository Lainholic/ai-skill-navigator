---
name: task-reminder-parser
description: Converts unstructured brain dumps and meeting notes into three core actionable missions with time estimates and deadlines.
---
# Daily Task Decomposer — Thought Dump to Actionable Checklist Converter

Converts chaotic monologues, quick voice transcripts, and raw meeting notes into structured action plans. Isolates the top three immediate priorities with strict time estimates, concrete deadlines, and checklist breakdowns.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains explicit commitments and deadlines while eliminating rambling commentary.
- **Time Efficient**: Eliminates manual formatting to save you time.
- **Rule of Three**: Identifies exactly three high-priority missions before organizing secondary backlog items.

---

### 2. Output Template
```markdown
# Daily Execution Brief: [Date / Scope]

## 1. Top 3 Core Missions (Today)
1. [ ] **[Primary Objective 1]**
   - Due: `[HH:MM / EOD]` | Est: `[XX mins]` | First Step: [Concrete starting action]
2. [ ] **[Primary Objective 2]**
   - Due: `[HH:MM / EOD]` | Est: `[XX mins]` | First Step: [Concrete starting action]
3. [ ] **[Primary Objective 3]**
   - Due: `[HH:MM / EOD]` | Est: `[XX mins]` | First Step: [Concrete starting action]

## 2. Quick Wins & Secondary Backlog
- [ ] **[Task Name]** (Est: `[XX mins]`) — [Context or dependency note.]
- [ ] **[Task Name]** (Est: `[XX mins]`) — [Context or dependency note.]

## 3. Structured Reminders Import Payload
- `[Task Title]` | Due: `[YYYY-MM-DD HH:MM]` | Priority: `[High|Medium|Low]`
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.
- Paste stream-of-consciousness voice memos, meeting notes, or chat threads directly.

---

### 🛠️ Quick Customization Tips
- **[Reminders CLI Syntax]**: "Convert output items into Apple Reminders CLI arguments."
- **[Pomodoro Slicing]**: "Divide the top 3 core missions into 25-minute Pomodoro focus sprints."
