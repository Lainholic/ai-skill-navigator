---
name: 2.5d-layer-decomposer
description: Decomposes 2D anime illustrations into 23 standard Live2D / 2.5D animation layers with occlusion inpainting specifications.
license: MIT
compatibility: Universal AI Agent, ComfyUI, Photoshop PSD, Live2D Cubism, Spine, PNGAL
---

# 2.5D Layer Decomposer — Anime Character Layer Decomposition & Inpainting Spec

Automates the architectural breakdown of static 2D anime illustrations into manipulatable 2.5D models across up to 23 semantically distinct layers with inferred depth and drawing orders. Formulates occlusion inpainting directives (e.g., face skin behind bangs, eyeballs behind eyelids) to prevent visual tears during Live2D rigging, VTuber avatar setup, and 2.5D sprite animation.

- **Scientific Foundation**: ACM SIGGRAPH 2026 paper [shitagaki-lab/see-through](https://github.com/shitagaki-lab/see-through) (Apache-2.0)
- **Native Engine**: Rust/C++ high-performance runtime [ling0322/libwaifu](https://github.com/ling0322/libwaifu) (MIT)
- **Rigging Conventions**: Live2D Cubism, Spine, [PNGAL](https://github.com/1mm-module/PNGAL), Anime2.5DRig

---

### 1. Operating Rules
- **Draft First**: Outputs clean, actionable 23-layer hierarchy manifests and inpainting boundary directives immediately without conversational filler.
- **Back-to-Front Depth Ordering**: Adheres strictly to visual Z-index layers from background aura and back hair through facial features and frontal bangs.
- **Occlusion Extension Inpainting**: Specifies mandatory extension regions (neck under collar, full sclera ellipse behind lids) so movement never exposes hollow voids.

---

### 2. Output Template

```markdown
# 2.5D Layer Decomposition Spec: [Character/Asset Name]

### 1. Standard 23-Layer Depth Tree (Back to Front)
[Backdrop & Ambience]
- 01_bg_glow          : Aura particles, ambient glow, back halo
- 02_hair_back        : Full rear hair volume, ponytail base

[Base Anatomy]
- 03_body_torso_skin  : Neck, collarbone, bare torso silhouette (+20% inpaint under collar)
- 04_limbs            : Arm and leg silhouettes occluded by garments

[Costume Layers]
- 05_clothing_inner   : Blouse, shirt, inner wear, socks
- 06_clothing_outer   : Jacket, coat, skirt, apron

[Facial Canvas & Features]
- 07_head_skin        : Jawline, ears, full smooth canvas (complete skin behind bangs)
- 08_mouth_interior   : Teeth, tongue, inner mouth cavity
- 09_mouth_lips       : Upper and lower lip outlines
- 10_nose             : Nose highlight and shadow tick
- 11_eye_sclera_left  : Left sclera base (full oval inpaint for blink deformers)
- 12_eye_iris_left    : Left pupil, iris texture, specular dots
- 13_eye_lashes_left  : Left upper/lower lashes, eyeliner stroke
- 14_eye_sclera_right : Right sclera base
- 15_eye_iris_right   : Right pupil, iris texture
- 16_eye_lashes_right : Right upper/lower lashes
- 17_eyebrows         : Left and right eyebrows
- 18_face_blush       : Cheek flush, soft forehead gradient

[Foreground Locks & Props]
- 19_hair_side_left   : Left side-lock tendrils
- 20_hair_side_right  : Right side-lock tendrils
- 21_hair_bangs       : Forehead fringe bangs (with soft cast shadow)
- 22_hair_ahoge       : Top antennae hair strand
- 23_accessories_top  : Glasses, ribbons, hat, floating hairpin
```

```bash
# Decompose single illustration to PSD via local GPU engine
waifu-cli img2layers --input character.png --output layers.psd --device cuda
```

---

### 3. User Notes
- Cuts down days of manual Photoshop pen-tool extraction into minutes of structured planning.
- Layers seamlessly export to Photoshop PSD, Clip Studio Paint, or directly into Live2D Cubism Modeler.

---

### 🛠️ Quick Customization Tips
- **Facial Rigging**: "Branch out smiling, closed, and winking eye layers for expression toggles."
- **Physics Split**: "Split front bangs into 3 separate sub-strands (left, center, right) for independent wind physics."
- **Live2D Deformer Tree**: "Generate the corresponding Warp Deformer and Rotation Deformer hierarchy tree for Cubism."
