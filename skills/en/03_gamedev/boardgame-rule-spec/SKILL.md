---
name: boardgame-rule-spec
description: Generates standardized single-page board game rulebooks and physical component manifests from game concepts.
---
# Board Game Rulebook & Component Architect — Tabletop Ruleset & Component Manifest Generator

Transforms core game concepts and win conditions into a concise one-page rulebook, turn flow, component bill of materials, and edge-case FAQ. Designed for indie board game designers preparing physical prototypes.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains core meaning while eliminating clutter.
- **Time Efficient**: Eliminates manual formatting to save you time.

---

### 2. Output Template
```markdown
# Rulebook Specification: [Game Title]

## Overview & Victory Condition
- **Player Count & Time**: [X–Y Players | Z Minutes]
- **Objective**: [Clear statement of victory condition]

## Component Manifest
- **Cards**: [Quantity, dimensions, deck distribution]
- **Tokens / Dice**: [Item types, counts, and colors]

## Turn Structure
- **Phase 1 (Upkeep)**: [Draw/resource reset steps]
- **Phase 2 (Action)**: [Available main player actions]
- **Phase 3 (End)**: [Hand limit, cleanup, turn pass]

## Ruling FAQ
- **Tiebreaker**: [Resolution procedure for draws]
- **Edge Case**: [Common rule collision resolution]
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.

---

### 🛠️ Quick Customization Tips
- **Print Spec**: "Format the component list for The Game Crafter standard poker deck and punchout sheets."
- **Solo Mode**: "Add a 3-rule automated opponent variant for 1-player mode."
