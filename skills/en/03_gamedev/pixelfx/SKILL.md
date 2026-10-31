---
name: pixelfx
description: Procedural pixel art VFX and combat action choreography (244 ready-made effects, hit freeze, camera shake, and sprite sheet export for Unity, Godot, and Web).
license: MIT
compatibility: Node 18+, Canvas/WebGL (Phaser, PixiJS, Three.js), Game Engines (Godot, Unity, GameMaker)
---

# Procedural Pixel FX & Action Choreographer — 244 Code-Driven Pixel VFX & Hit Choreography

Generates and configures 244 procedural pixel art VFX (fire, ice, lightning, slash, explosions, UI, status effects) rendered entirely through mathematics without external image textures. Supports instant web runtime (Canvas/WebGL) and sprite sheet export with Aseprite-compatible JSON for Godot, Unity, and Phaser.

- **Reference Repository**: [patch-gg/pixelfx (MIT)](https://github.com/patch-gg/pixelfx) | [Live Gallery](https://patch-gg.github.io/pixelfx/)
- **Core Technique**: Hugo Duprez's procedural pixel rendering pipeline (Dual-buffer: Color + Light)

---

### 1. Operating Rules
- **Draft First**: Delivers clean, ready-to-run JavaScript implementation code or export commands immediately without introductory fluff.
- **Dual-Buffer Rendering**: Employs mathematical particles, 4x4 Bayer dithered alpha, and additive glow buffers instead of heavy bitmap textures.
- **Action Choreography**: Integrates punchy hit timing data: wind-up, hit freeze (0.14s), target pushback, and screen shake.

---

### 2. Output Template

```javascript
// [Category/Effect]: e.g., melee/sword-slash or ice/frost-nova
import { createFrame, clearFrame, createAct, composite } from "pixelfx";
import * as effect from "pixelfx/fx/[category]/[effect-name]";

// 1. Initialize choreography act (Wind-up + Hit Freeze + Shake)
const act = createAct(effect, {
  x: targetX,
  y: targetY,
  flip: isFacingLeft,
  palette: ["#102", "#215", "#43a", "#8cf", "#fff"], // Custom color ramp
  light: 1.0 // Glow intensity
});

// 2. Game loop tick (Canvas / Phaser / PixiJS / Three.js)
function tick(dt) {
  act.update(dt);
  clearFrame(frame);
  act.draw(frame); // Renders actor, effect, and target layers
  composite(frame, imgData.data, backgroundColor);
  
  // Apply screen shake
  const [shakeX, shakeY] = act.shake;
  ctx.putImageData(imgData, screenX + shakeX, screenY + shakeY);
}
```

```bash
# Export to Sprite Sheet + JSON for Unity / Godot / GameMaker
node tools/render.mjs [category]/[effect-name] --sheet
```

---

### 3. Core Effect Categories (244 Presets)
- **Combat & Attacks**: `melee` (sword slash, heavy cleave), `projectiles` (arrow, homing missile), `impacts` (blunt hit, crit flash)
- **Elements & Magic**: `fire` (fireball, campfire), `ice` (frost nova, blizzard), `lightning` (chain lightning), `holy` (divine shield), `shadow` (black hole)
- **Game Juice & Polish**: `ui` (combo counter, crit numbers), `pickups` (chest open, coin spin), `transitions` (glitch wipe, iris)

---

### 4. User Notes
- Runs natively on lightweight web games with 0ms asset download overhead.
- Easily exported into standardized sprite sheets (`contact.png` + `effect.json`) for desktop and mobile engines.

---

### 🛠️ Quick Customization Tips
- **Ramp Recolor**: "Recolor the fire tornado effect to an ice-blue cryogenic storm palette."
- **Juice Tuning**: "Add a 0.18s hit freeze and heavy screen shake to give this slash a colossal Greatsword weight."
- **Engine Export**: "Generate the CLI command and metadata format to export the entire melee category into Godot 4 AnimatedSprite2D sheets."
