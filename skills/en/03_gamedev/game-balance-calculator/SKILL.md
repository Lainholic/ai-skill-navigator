---
name: game-balance-calculator
description: Generates progression stat curves and gacha probability tables from target playtimes and currency values.
---
# Game Numerics — Progression Curve and Gacha Balance Designer

Calculates balanced level progression curves and cumulative gacha pull tables directly as markdown data. Designed for solo developers and system designers who need balanced baseline numbers without spreadsheet setups.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains core meaning while eliminating clutter.
- **Time Efficient**: Eliminates manual formatting to save you time.

---

### 2. Output Template
```markdown
# Balancing Specification: [System or Character Name]

## 1. Level Progression Curve
| Level Range | Cumulative EXP | Required Time (Est.) | Stat Multiplier | Notes |
|:---|:---|:---|:---|:---|
| 1 - 10 | [EXP] | [Time] | [Multiplier] | Early onboarding |
| 11 - 30 | [EXP] | [Time] | [Multiplier] | Mid-game core loop |
| 31 - 50 | [EXP] | [Time] | [Multiplier] | End-game plateau |

## 2. Gacha Probability & Pity Matrix
- **Base Rate**: [SSR %] / [SR %] / [R %] | **Hard Pity**: [X] pulls ([Currency Cost])

| Pull Count | Cumulative Probability (%) | Expected Cost | Target Pity State |
|:---|:---|:---|:---|
| 10 | [Val]% | [Cost] | Base rate |
| 50 | [Val]% | [Cost] | Pre-soft pity |
| 80 | [Val]% | [Cost] | Soft pity active |
| 90 | 100.0% | [Cost] | Guaranteed SSR |
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.

---

### 🛠️ Quick Customization Tips
- **Steeper Grind**: "Double EXP requirements after level 30 and adjust playtime estimates accordingly."
- **Alternative Pity**: "Convert gacha table to a 50/50 banner mechanic with rollover pity."
