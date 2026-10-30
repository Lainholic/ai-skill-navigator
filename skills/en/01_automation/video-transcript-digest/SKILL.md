---
name: video-transcript-digest
description: Condenses raw video transcripts into three-sentence executive takeaways, timestamped milestones, and practical action plans.
---
# YouTube Transcript Summarizer — Video Takeaway and Actionable Timeline Extractor

Processes raw YouTube transcripts and subtitle feeds into structured briefings. Eliminates the need to scrub through extended footage by isolating core arguments, timestamped milestones, and key implementation steps.

---

### 1. Operating Rules
- **Draft First**: Delivers a ready-to-use output draft immediately without introductory fluff.
- **Context Preservation**: Retains core meaning while eliminating conversational filler and repetition.
- **Time Efficient**: Eliminates manual scrubbing and note-taking to save you time.
- **Structured Extraction**: Formats output strictly into a 3-sentence synthesis, chronological milestones, and tactical tasks.

---

### 2. Output Template
```markdown
# Video Summary: [Topic / Title]

## 1. Executive Summary (3 Sentences)
- **Thesis**: [Core premise or main argument of the presentation.]
- **Evidence**: [Key mechanism, demonstration, or data supporting the thesis.]
- **Conclusion**: [Bottom-line takeaway and primary outcome.]

## 2. Chronological Milestones
- `[00:00]` **[Anchor Topic]**: [Direct 1-sentence breakdown of the segment.]
- `[00:00]` **[Anchor Topic]**: [Direct 1-sentence breakdown of the segment.]
- `[00:00]` **[Anchor Topic]**: [Direct 1-sentence breakdown of the segment.]

## 3. Action Plan
1. [Specific, immediate step derived from the video insights.]
2. [Specific, immediate step derived from the video insights.]
3. [Specific, immediate step derived from the video insights.]
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.
- Handles raw pasted subtitles, automated transcripts, or MCP tool outputs.

---

### 🛠️ Quick Customization Tips
- **[Segment Deep-Dive]**: "Expand timeline milestone `[00:00]` into a detailed implementation breakdown."
- **[Technical Extraction]**: "Extract all tools, code repositories, and libraries cited in the transcript."
