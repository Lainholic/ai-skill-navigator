---
name: pixelfx
description: 244종의 절차적 픽셀 아트 이펙트 및 타격 연출(선딜, 피격 정지, 쉐이크) 코드를 생성하고 게임 엔진용 스프라이트 시트로 내보냅니다.
license: MIT
compatibility: Node 18+, Canvas/WebGL (Phaser, PixiJS, Three.js), Game Engines (Godot, Unity, GameMaker)
---

# 픽셀 아트 VFX & 타격감 생성기 — Procedural Pixel FX & Action Choreographer

이미지 에셋 없이 순수 자바스크립트 연산으로 구현되는 244종의 절차적 픽셀 아트 이펙트(화염, 폭발, 번개, 마법, 베기, 상태이상, UI 등)를 게임에 즉시 적용하거나, 타격감(Acting: 선딜레이, 히트스톱, 카메라 쉐이크)이 결합된 스프라이트 시트로 내보냅니다.

- **원작 저장소**: [patch-gg/pixelfx (MIT)](https://github.com/patch-gg/pixelfx) | [실시간 갤러리](https://patch-gg.github.io/pixelfx/)
- **핵심 기법**: Hugo Duprez(Sprite Fusion)의 절차적 픽셀 렌더링 (Color 버퍼 + Light 버퍼 2중 구조)

---

### 1. 작동 규칙
- **사설 없는 초안 우선 출력**: 불필요한 설명 없이 즉시 복사 가능한 게임 코드(JS) 또는 이펙트 정의 스크립트 출력.
- **2중 버퍼 및 절차적 렌더링**: 무거운 PNG 텍스처 대신 수학적 파티클 및 4x4 베이어 디더링, 발광 레이어 연산 활용.
- **타격감(Acting) 데이터 결합**: 공격 모션과 이펙트 싱크를 위한 선딜(windup), 타격 멈춤(hit freeze), 넉백(push), 화면 진동(shake) 타이밍 명시.

---

### 2. 출력 포맷

```javascript
// [카테고리/이펙트명]: 예) melee/sword-slash 또는 arcane/frost-nova
import { createFrame, clearFrame, createAct, composite } from "pixelfx";
import * as effect from "pixelfx/fx/[category]/[effect-name]";

// 1. 타격감 액트(Act) 초기화 (캐릭터 선딜 + 피격 정지 + 카메라 쉐이크 포함)
const act = createAct(effect, {
  x: targetX,
  y: targetY,
  flip: isFacingLeft,
  palette: ["#102", "#215", "#43a", "#8cf", "#fff"], // 커스텀 컬러 램프
  light: 1.0 // 발광 강도 (0.0 ~ 2.0)
});

// 2. 게임 루프 틱 (Canvas / Phaser / PixiJS / Three.js 공통)
function updateGame(dt) {
  act.update(dt);
  clearFrame(frame);
  act.draw(frame); // 피격자 및 공격자 레이어 렌더링
  composite(frame, imgData.data, backgroundColor);
  
  // 카메라 쉐이크 적용
  const [shakeX, shakeY] = act.shake;
  ctx.putImageData(imgData, screenX + shakeX, screenY + shakeY);
}
```

```bash
# Godot, Unity, GameMaker용 스프라이트 시트(Aseprite JSON 호환) 내보내기 CLI
node tools/render.mjs [category]/[effect-name] --sheet
```

---

### 3. 주요 이펙트 카테고리 (244종)
- **전투/스킬**: `melee`(검기, 베기), `projectiles`(화살, 마탄), `impacts`(치명타, 둔기 피격), `status`(빙결, 출혈, 중독)
- **원소/마법**: `fire`(화염구, 캠프파이어), `ice`(프로스트 노바), `lightning`(체인 라이트닝), `holy`(신성 방벽), `shadow`(블랙홀)
- **시스템/연출**: `ui`(콤보 카운터, 크리티컬 수치), `pickups`(코인 스핀, 보물상자), `transitions`(화면 와이프, CRT 오프)

---

### 4. 안내
- 웹 브라우저 게임(HTML5 Canvas)에서는 외부 에셋 다운로드 없이 순수 JS로 0.1초 만에 로딩됩니다.
- 유니티나 고도 엔진에서는 `tools/render.mjs`를 통해 투명 배경 PNG 스프라이트 시트 및 JSON 메타데이터로 즉시 변환 가능합니다.

---

### 🛠️ 나만의 스타일로 개조하는 법
- **[팔레트 교체]**: "화염 토네이도 이펙트의 불꽃 색상을 아이스 블루 톤(빙결 폭풍)으로 바꿔줘."
- **[타격감 강화]**: "피격 순간 0.18초 정지(Freeze)와 강한 화면 쉐이크를 추가해서 묵직한 대검 느낌으로 튜닝해 줘."
- **[스프라이트 시트 추출]**: "Godot 4용 AnimatedSprite2D에 임포트할 수 있게 프레임 규격(JSON)과 함께 뽑아줘."
