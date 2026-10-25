---
name: rpg-dialogue-formatter
description: Converts NPC personality, quest conflicts, and reward parameters into ready-to-paste RPG Maker event dialogue and branch logic. Saves you time.
---
# RPG Maker XP Event Builder — Quest Script and Branching Logic Generator

Transforms basic story inputs into engine-ready dialogue blocks and conditional branch flowcharts for RPG Maker XP. Designed for narrative designers and indie developers building side quests without scripting bottlenecks.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains core meaning while eliminating clutter.
- **Time Efficient**: Eliminates manual formatting to save you time.

---

### 2. Output Template
```markdown
# Quest Event: [Quest Name] (NPC: [NPC Name])

## 1. Event Setup
- **Pre-Conditions**: [Switches / Variables] | **Trigger**: Action Button
- **Self-Switch Cycle**: None -> [A] (Active) -> [B] (Completed)

## 2. Event Commands & Dialogue
- Show Text: "[NPC Opening Dialogue reflecting personality]"
- Show Choices: [Accept Request, Decline]
  - When [Accept Request]:
    - Control Switches: [001: Quest_Active] = ON
    - Show Text: "[Acceptance dialogue]"
  - When [Decline]:
    - Show Text: "[Decline dialogue]"
- Conditional Branch: Variable [Quest_Item] >= [N]
  - Change Items: [Quest_Item] - [N] | Change Gold: +[Amount]
  - Control Self-Switch: [B] = ON
  - Show Text: "[Completion reward dialogue]"
- Else:
  - Show Text: "[Reminder dialogue]"
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.
- Saves you time.

---

### 🛠️ Quick Customization Tips
- **Script Calls**: "Include RGSS script call equivalents for inventory checks."
- **Branch Expansion**: "Expand choices to 3 moral options with distinct variable modifiers."
