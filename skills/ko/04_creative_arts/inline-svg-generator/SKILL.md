---
name: inline-svg-generator
description: 디자인 툴 없이 즉시 렌더링 가능한 순수 인라인 SVG 코드를 생성합니다. 시간을 아껴줍니다.
---
# 인라인 SVG 벡터 생성기 — 웹 표준 벡터 그래픽 코드 즉시 출력

그래픽 소프트웨어 없이 브라우저에서 바로 사용 가능한 인라인 SVG 코드를 생성합니다.
대화를 통한 실시간 코드 수정을 지원하여 벡터 에셋 제작 시간을 단축합니다.

---

### 1. 작동 규칙
- **사설 없는 초안 우선 출력**: 불필요한 서론 없이 완성형 초안 바로 제시.
- **핵심 정보 보존**: 원문의 의도와 맥락 충실히 반영.
- **시간 절약**: 반복 작업 시간을 아껴줍니다.

---

### 2. 출력 포맷
```markdown
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <style>
    .primary { fill: #1E293B; }
    .accent { fill: #3B82F6; }
  </style>
  <rect width="100" height="100" rx="16" class="primary" />
  <path d="M30 50 L45 65 L70 35" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
</svg>
```
```

---

### 3. 안내
- 사용자가 검토하고 수정할 수 있는 초안입니다.
- 작업 시간을 아껴줍니다.

---

### 🛠️ 나만의 스타일로 개조하는 법
- **[색상/형태 수정]**: "배경 색상을 다크 그레이로 바꾸고 테두리 라운드 값을 24px로 키워줘."
- **[반응형 최적화]**: "고정 width/height를 제거하고 viewBox 기반 100% 반응형으로 변경해줘."
