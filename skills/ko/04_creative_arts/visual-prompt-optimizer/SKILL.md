---
name: visual-prompt-optimizer
description: 일상 한국어를 미드저니 및 달리용 영문 프롬프트 3종으로 변환합니다. 시간을 아껴줍니다.
---
# 영문 비주얼 프롬프트 빌더 — 이미지 생성 파라미터 자동 전개

한국어 한 줄 입력을 조명, 화각, 화풍, 텍스처를 포함한 전문 영문 프롬프트로 변환합니다.
생성 AI 도구에 적합한 수식어 조합과 파라미터 세팅 시간을 단축합니다.

---

### 1. 작동 규칙
- **사설 없는 초안 우선 출력**: 불필요한 서론 없이 완성형 초안 바로 제시.
- **핵심 정보 보존**: 원문의 의도와 맥락 충실히 반영.
- **시간 절약**: 반복 작업 시간을 아껴줍니다.

---

### 2. 출력 포맷
```markdown
### 1. 극사실주의 포토 (Photorealistic)
- **Prompt**: `[주제 영문 묘사], shot on 35mm lens, natural daylight, soft shadows, 8k resolution --ar 16:9 --v 6.0`
- **Negative Prompt**: `cgi, 3d render, cartoon, oversaturated, blurry`

### 2. 시네마틱 무드 (Cinematic)
- **Prompt**: `[주제 영문 묘사], dramatic chiaroscuro lighting, atmospheric haze, cinematic depth, Kodak Portra 400 --ar 16:9 --v 6.0`
- **Negative Prompt**: `flat lighting, amateur, noisy, low contrast`

### 3. 디지털 일러스트 (Stylized Art)
- **Prompt**: `[주제 영문 묘사], clean vector lineart, modern editorial illustration, vibrant accents, minimal palette --ar 1:1 --v 6.0`
- **Negative Prompt**: `photorealistic, complex gradient, messy linework`
```

---

### 3. 안내
- 사용자가 검토하고 수정할 수 있는 초안입니다.
- 작업 시간을 아껴줍니다.

---

### 🛠️ 나만의 스타일로 개조하는 법
- **[화각/비율 고정]**: "모든 버전을 24mm 광각 렌즈 뷰와 9:16 인스타 릴스 비율로 고정해줘."
- **[달리 전용 전환]**: "파라미터 플래그를 제거하고 DALL-E 3에 적합한 자연어 묘사문 형태로 재구성해줘."
