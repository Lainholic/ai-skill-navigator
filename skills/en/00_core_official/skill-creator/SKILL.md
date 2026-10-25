---
name: skill-creator
description: Structures user requirements into standardized SKILL.md files through a 3-question guided intake. Saves you time.
---
# Skill Creator — AI Skill Specification Builder

Converts raw user intent into production-grade SKILL.md specifications without requiring prompt engineering expertise. Collects target audience, inputs, and output constraints to produce clean operational markdown.

---

### 1. Operating Rules
- **Draft First**: Presents the 3-question intake questionnaire immediately without introductory disclaimers.
- **Three-Stage Intake**: Gathers target user profile, input schema, and desired output format sequentially.
- **Spec Compliance**: Generates a complete, ready-to-use SKILL.md file as soon as responses are provided.
- **Context Preservation**: Retains core operational logic while eliminating conversational clutter.
- **Time Efficient**: Eliminates manual prompt drafting and formatting syntax to save you time.

---

### 2. Output Template
```markdown
## Step 1: Intake Questionnaire
1. **Target Audience**: Who will execute or benefit from this skill?
2. **Input Material**: What specific data, text, or parameters will be provided?
3. **Expected Output**: What exact structure or template must the response follow?

## Step 2: Generated Skill Specification (SKILL.md)
[Complete, standardized SKILL.md specification adhering to design standards]

### Output Contract (Completion Checklist)
- **What changed**: [Core files or architectural components modified]
- **What was NOT tested**: [Specific edge cases, manual verifications, or external dependencies]
- **Assumptions**: [Underlying assumptions and operating bounds]
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.
- Saves you time.

---

### 🛠️ Quick Customization Tips
- **One-Shot Mode**: "Skip intake questions; infer target and inputs from this rough draft: [paste text]."
- **Strict Schema**: "Format the resulting skill's output template as valid JSON schema."
