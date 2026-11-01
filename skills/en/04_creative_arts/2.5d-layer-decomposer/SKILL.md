---
name: 2.5d-layer-decomposer
description: Organizes 2D character illustrations into a 23-layer breakdown plan and occlusion filling guidelines for Live2D and 2.5D animation.
license: MIT
compatibility: Universal AI Agent, ComfyUI, Photoshop PSD, Live2D Cubism, Spine, PNGAL
---

# 2.5D Layer Decomposer — Anime Character Layer Decomposition & Inpainting Spec

Generates structured layer decomposition plans and occlusion inpainting guidelines (e.g., face skin behind bangs, torso under collar) to prepare 2D character illustrations for Live2D and 2.5D animation workflows.

- **Scientific Foundation**: ACM SIGGRAPH 2026 paper [shitagaki-lab/see-through](https://github.com/shitagaki-lab/see-through) (Apache-2.0)
- **Rigging Conventions**: Live2D Cubism, Spine, [PNGAL](https://github.com/1mm-module/PNGAL), Anime2.5DRig

---

### 1. Operating Rules
- **Draft First**: Outputs clean, actionable 23-layer planning manifests and inpainting boundary directives immediately without conversational filler.
- **Back-to-Front Depth Ordering**: Adheres strictly to visual Z-index layers from background aura and back hair through facial features and frontal bangs.
- **Occlusion Extension Inpainting**: Specifies mandatory extension regions (neck under collar, full sclera ellipse behind lids) so movement never exposes hollow voids.

---

### 2. Output Template

```markdown
# 2.5D Layer Decomposition Spec: [Character/Asset Name]

### 1. 23-Layer Working Depth Tree (Own Planning Scheme, Back to Front)
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

**How to actually extract the layers (upstream See-through)**
- The 23-layer list above is a planning scheme of our own. Upstream output uses English layer names such as `front hair`, `back hair`, `face`, `eyewhite`, `irides`, `eyelash`, `eyebrow`, `ears`, `nose`, `mouth`, `topwear`, `bottomwear` and `handwear`.
- **No install (recommended for beginners)**: upload a picture to the official online demo [see-through-demo](https://huggingface.co/spaces/24yearsold/see-through-demo) to extract PSD layers. (Requires a free Hugging Face account with ZeroGPU quota. Check the service terms before uploading private or copyrighted assets.)
- **Local install (NVIDIA GPU, or if the demo is down)**: follow the setup in the [upstream README](https://github.com/shitagaki-lab/see-through), then run:

```bash
python inference/scripts/inference_psd.py --srcp my_character.png --save_to_psd
```

---

### 3. User Notes
- Formulates practical layer planning guidelines to speed up Live2D character preparation.
- Extracted PSD layers can be opened in Photoshop, Clip Studio, or imported into Live2D Cubism Modeler for rigging. (Complete model production still requires manual mesh creation and deformer setup.)

---

### 🛠️ Quick Customization Tips
- **Facial Rigging**: "Branch out smiling, closed, and winking eye layers for expression toggles."
- **Physics Split**: "Split front bangs into 3 separate sub-strands (left, center, right) for independent wind physics."
- **Live2D Deformer Tree**: "Generate the corresponding Warp Deformer and Rotation Deformer hierarchy tree for Cubism."
