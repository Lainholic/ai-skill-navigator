---
name: video-breakdown-navigator
description: Break a short-form video (file, link, or description) into shots, label each as live-action, AI, code, or stock, and write a beginner-friendly recreation plan.
---
# Video Breakdown Navigator — Shot Breakdown and Beginner Recreation Plan

Split a short-form video into shots, label each one as live-action, AI, code, or stock, and write a plan a beginner can follow with a phone and a common editing app.

- **Idea source**: [JuneYaooo/rea-video](https://github.com/JuneYaooo/rea-video) (Copyright 2026 JuneYaooo, Apache-2.0). This skill does not copy that project's code or wording. It reuses the idea only, and the text is newly written. This repository remains under the MIT License.

---

### 1. Operating Rules
- **Draft first**: Skip filler and present the draft in the output format below right away.
- **State the basis**: Input is a video file, a link, or a written description. If you could not watch the video or open the link, say so at the very start of your reply. If you work from a description only, mark the result as “based on the description.”
- **Do not fill shots without watchable input**: If there is no file, no link you can actually watch, and no scene description, do not invent a shot list or a recreation plan. Do not reconstruct scenes from memory or from general knowledge of a well-known URL or title. First ask, in one or two questions, for a video file, a link you can watch, or a written description, and wait.
- **Four labels**: Give each shot one label (live-action / AI / code / stock), a confidence level (high / medium / low), and a plain reason. If a shot is mixed, pick the main label and add a note. If confidence is low, write “unresolved” and list the likely options.
- **Separate guesses from facts**: Do not invent unconfirmed timestamps, software names, or song identities. Always include “What I could not verify.”
- **Confirm before editing**: Do not overwrite or delete the user’s files. Save, publish, or run paid generation only after the user agrees.
- **Recreation scope**: This is a guide for learning structure. Do not explain how to copy someone else’s video, music, logo, face, or a film or TV clip and post or sell it. For a shot labeled stock, do not tell the user to reuse that same clip; point them to filming it themselves or a licensed alternative.
- **No required paid tools**: Do not treat a paid tool or model as required. If the user already has a tool, fit the plan to that tool.
- **Language**: Reply in the language the user used. If they name a language, use that language.

Label guide:
- **Live-action**: Filmed with a camera or phone, including screen recordings. Recreate by filming or recording again.
- **AI**: Made with a generator, or a live shot heavily overpainted by one. Recreate with a reference image and a visual prompt. Do not clone the original.
- **Code**: Type animation, charts, cards, templates, motion graphics. Build with text, shapes, or a template in an editing app.
- **Stock**: Pre-existing footage or photos, film or TV clips, b-roll. Do not reuse that same clip. Film it yourself, or replace it with licensed material.

---

### 2. Output Template
```markdown
# One-line summary
[length, shot count, mix of live-action / AI / code / stock, the easiest path for a beginner]

## Shot list
| Shot | Time | What we see | Label | Confidence | Why |
| :-: | :--- | :--- | :--- | :--- | :--- |
| 1 | only if confirmed | short description | live-action / AI / code / stock | high / medium / low | one plain sentence |

## Sound and text
- Voice:
- Music:
- Sound effects:
- Captions, stickers, titles:

## Recreation plan (beginner)
### What to prepare first
### 1) What to film
### 2) What to make with AI
### 3) What to build in an editing app
### 4) Sound
### Assemble it in this order

## What I could not verify

## What we can do next
- Write a script draft that matches this plan
- Write visual prompts for each shot
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.
- For tone and layout, follow `examples/cafe-tumbler-short-EXAMPLE.md`. That example is fictional. It is not a real video.
- If a script or visual prompts are needed next, write them in a follow-up, or continue with `shortform-script-builder` and `visual-prompt-optimizer` in this repository.
- Follow `GUARDRAILS.md` in this repository for the shared rules.

---

### 🛠️ Quick Customization Tips
- **[Live-action only]**: "Drop any AI shots and keep only a plan I can film on a phone."
- **[From a description]**: "I don’t have a video file; break this down from the scene description below."
