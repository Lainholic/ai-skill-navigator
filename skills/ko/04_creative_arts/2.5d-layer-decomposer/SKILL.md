---
name: 2.5d-layer-decomposer
description: 2D 애니메이션 일러스트를 Live2D 및 2.5D 모션용 23개 표준 레이어 계층 구조와 가려진 부위 인페인팅 명세로 자동 분해합니다.
license: MIT
compatibility: Universal AI Agent, ComfyUI, Photoshop PSD, Live2D Cubism, Spine, PNGAL
---

# 2.5D 캐릭터 레이어 분해기 — Single-Image 2.5D Layer Decomposition & Inpainting Spec

단 한 장의 2D 캐릭터 일러스트를 Live2D, 버튜버 아바타, 2.5D 게임 모션에 즉시 투입할 수 있도록 최대 23개의 표준 시맨틱 레이어(Z-Index 뎁스 순서, 부모-자식 트리)로 분해하고, 머리카락 뒤 얼굴이나 옷 속 살결 등 가려진 부위(Occlusion)의 인페인팅 가이드라인을 자동 도출합니다.

- **기반 연구**: ACM SIGGRAPH 2026 논문 [shitagaki-lab/see-through](https://github.com/shitagaki-lab/see-through) (Apache-2.0)
- **로컬 가속 엔진**: Rust/C++ 네이티브 런타임 [ling0322/libwaifu](https://github.com/ling0322/libwaifu) (MIT)
- **모션 호환 규격**: Live2D Cubism, Spine, [PNGAL](https://github.com/1mm-module/PNGAL), Anime2.5DRig

---

### 1. 작동 규칙
- **사설 없는 초안 우선 출력**: 불필요한 설명 없이 즉시 복사 가능한 23개 레이어 계층 트리 및 인페인팅 명세서 출력.
- **후면 우선 뎁스 정렬(Back-to-Front)**: 배경/뒷머리부터 눈동자, 앞머리, 장신구까지 엄격한 Z-Index 순서 준수.
- **가림 영역 인페인팅(Inpainting) 필수 지정**: 레이어가 흔들리거나 눈을 깜빡일 때 빈 공간(구멍)이 생기지 않도록 가려진 안쪽 살/헤어 텍스처 확장 가이드 제공.

---

### 2. 출력 포맷

```markdown
# 2.5D 레이어 분해 명세서: [캐릭터/작업명]

### 1. 23단계 표준 레이어 계층 트리 (후면 → 전면 순서)
[배경 및 아우라]
- 01_bg_glow          : 배경 발광, 파티클, 후광
- 02_hair_back        : 뒷머리 전체, 포니테일 베이스

[신체 베이스]
- 03_body_torso_skin  : 목, 쇄골, 상체 기본 피부 (옷 안쪽 20% 확장 인페인팅)
- 04_limbs            : 팔, 다리 베이스 실루엣

[의상 레이어]
- 05_clothing_inner   : 셔츠, 블라우스, 이너웨어, 양말
- 06_clothing_outer   : 외투, 재킷, 치마, 앞치마

[얼굴 및 이목구비]
- 07_head_skin        : 턱선, 귀, 대머리 베이스 (앞머리 뒤 전체 인페인팅)
- 08_mouth_interior   : 입 안쪽 (치아, 혀, 입속 어두운 영역)
- 09_mouth_lips       : 윗입술, 아랫입술, 입술 윤곽선
- 10_nose             : 코 하이라이트 및 음영
- 11_eye_sclera_left  : 좌측 흰자위 (눈 깜빡임 시 잘리지 않게 타원형 전체 채움)
- 12_eye_iris_left    : 좌측 눈동자, 동공, 반사광 하이라이트
- 13_eye_lashes_left  : 좌측 윗/아랫 속눈썹 및 아이라인
- 14_eye_sclera_right : 우측 흰자위
- 15_eye_iris_right   : 우측 눈동자
- 16_eye_lashes_right : 우측 윗/아랫 속눈썹 및 아이라인
- 17_eyebrows         : 좌/우 눈썹
- 18_face_blush       : 볼 홍조 및 얼굴 그림자

[전면 헤어 및 장신구]
- 19_hair_side_left   : 좌측 옆머리, 옆 귀 애교머리
- 20_hair_side_right  : 우측 옆머리
- 21_hair_bangs       : 전면 앞머리 뱅 (얼굴 그림자 포함)
- 22_hair_ahoge       : 바보털, 상단 솟은 머리카락
- 23_accessories_top  : 안경, 머리핀, 리본, 모자, 떠 있는 소품
```

```bash
# 로컬 GPU에서 libwaifu CLI로 1초 만에 PSD 레이어 자동 추출
waifu-cli img2layers --input input.png --output layers.psd --device cuda
```

---

### 3. 안내
- 일러스트레이터가 수작업으로 며칠씩 분해하던 Live2D 준비 과정을 단 몇 분 만에 기획·구조화합니다.
- 추출된 레이어는 포토샵(PSD) 및 클립스튜디오에서 즉시 호환되며, Live2D Cubism 모델러로 바로 불러올 수 있습니다.

---

### 🛠️ 나만의 스타일로 개조하는 법
- **[표정 변화 분리]**: "웃는 눈, 감은 눈, 화난 눈썹 3가지 표정 레이어를 별도 폴더로 분기해 줘."
- **[헤어 피직스 세분화]**: "앞머리를 좌, 중, 우 3갈래로 더 쪼개서 좌우 흔들림 물리 연산이 가능하게 해줘."
- **[Live2D 메쉬 파라미터]**: "Cubism에서 각 레이어에 바인딩할 회전 디포머와 곡면 디포머 트리 구조를 짜줘."
