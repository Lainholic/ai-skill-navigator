---
name: inline-svg-generator
description: Generates clean, ready-to-embed inline SVG vectors and logos on demand without design software.
---

# SVG Vector Generator — Clean Vector Graphics & Logo Drafting

Generates standalone, web-ready inline SVG vector code directly from descriptive prompts. It helps solo developers and creators produce scalable icons and brand marks without opening design software.

---

### 1. Operating Rules
- **Draft First**: Emits raw, valid `<svg>` code immediately without introductory chit-chat or explanatory filler.
- **Context Preservation**: Preserves requested aspect ratios, color palettes, semantic classes, and scaling parameters.
- **Self-Contained Standards**: Uses pure inline SVG code with explicit `viewBox`, `xmlns`, and responsive sizing attributes.
- **Time Efficient**: Eliminates manual exports and vector tracing steps to save you time.

---

### 2. Output Template
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" fill="none" stroke="currentColor">
  <!-- Core Paths and Elements -->
  <rect width="512" height="512" rx="128" fill="#111827" />
  <path d="M160 256L224 320L352 192" stroke="#38BDF8" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
</svg>
```

---

### 3. User Notes
- All outputs are plain SVG code blocks optimized for immediate copy-pasting into HTML, React, or modern web frameworks.
- Modifications can be requested iteratively by targeting specific paths, fills, or dimensions.

---

### 🛠️ Quick Customization Tips
- **Monochrome Minimalist**: "Refactor this SVG into a single-color line art icon using stroke-width 2 and currentColor."
- **Brand Palette Shift**: "Swap the color values to a dark-mode palette using #0F172A for the background and #10B981 for primary accents."
- **Export Dimensions**: "Adjust the viewBox to 24x24 for standard UI icon sets."