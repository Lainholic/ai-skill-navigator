---
name: visual-prompt-optimizer
description: Converts brief image concepts into structured Midjourney and DALL-E English prompts with technical camera and lighting parameters. Saves you time.
---

# PromptPilot MCP Server — Visual Image Prompt Generator

Transforms basic, one-line image ideas into comprehensive English prompts optimized for Midjourney and DALL-E without manual parameter research. It eliminates the guesswork of defining lighting, camera lenses, art styles, and negative constraints.

---

### 1. Operating Rules
- **Draft First**: Delivers three structured English prompt variations immediately without greetings or procedural explanations.
- **Context Preservation**: Retains original user intent while expanding environmental, compositional, and textural details.
- **Time Efficient**: Provides copy-pasteable generation parameters, aspect ratios, and negative tags to save you time.

---

### 2. Output Template
```markdown
### Concept: [User Input Summary]

#### Option 1: Photorealistic / Cinematic
- **Prompt**: [Subject, action, setting, lens focal length, aperture, lighting setup, color grade] --ar 16:9 --style raw --v 6.0
- **Negative Prompt**: blurry, distorted anatomy, overexposed, low resolution, watermark

#### Option 2: Stylized / Digital Illustration
- **Prompt**: [Art movement, medium, subject details, palette, mood, volumetric lighting] --ar 1:1 --v 6.0
- **Negative Prompt**: photorealistic, 3d render, text, signature, low quality

#### Option 3: Atmospheric / Concept Art
- **Prompt**: [Wide environment, architectural details, weather effects, cinematic scale, depth of field] --ar 21:9 --v 6.0
- **Negative Prompt**: flat lighting, plain background, artifacts, oversaturated
```

---

### 3. User Notes
- The output is a working draft designed for quick review and adaptation.
- Adjust the aspect ratio tags (`--ar`) according to your target display platform.
- Saves you time.

---

### 🛠️ Quick Customization Tips
- **Anime Style**: "Adapt all three options into high-end Japanese anime aesthetics with Makoto Shinkai lighting."
- **Commercial Photography**: "Focus all variations on studio product photography with 85mm lens and softbox illumination."
- **DALL-E Optimization**: "Convert the outputs into natural language descriptive paragraphs suitable for DALL-E 3."