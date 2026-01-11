# 착한학점연구소 - Next.js 프로젝트

## 📋 프로젝트 소개
학점은행제 교육기관 착한학점연구소의 웹사이트를 Next.js로 구축한 프로젝트입니다.

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어서 확인하세요.

### 프로덕션 빌드
```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
chakhan-nextjs/
├── app/
│   ├── page.tsx              # 메인 페이지
│   ├── layout.tsx            # 루트 레이아웃
│   ├── globals.css           # 글로벌 스타일
│   └── curriculum/
│       ├── page.tsx          # 교육과정 리스트 페이지
│       └── detail/
│           └── page.tsx      # 교육과정 상세 페이지
├── components/
│   ├── Header.tsx            # 헤더 컴포넌트
│   ├── Hero.tsx              # 히어로 섹션
│   ├── Achievement.tsx       # 이수율 섹션
│   ├── Reviews.tsx           # 후기 섹션
│   ├── Slider.tsx            # 슬라이더 섹션
│   ├── Process.tsx           # 진행절차 섹션
│   ├── ContactForm.tsx       # 상담 폼
│   ├── Footer.tsx            # 푸터
│   └── ChatButton.tsx        # 채팅 버튼
├── public/                   # 정적 파일
├── package.json
├── tsconfig.json
└── next.config.js
```

## 🎨 주요 기능

### 메인 페이지 (/)
- 히어로 섹션 + 4가지 특징
- 이수율 98% 달성 섹션
- 후기 그리드
- 슬라이더 (과락/재수강)
- 진행절차 5단계
- 무료상담 폼

### 교육과정 페이지 (/curriculum)
- 블로그 스타일 게시판
- 4열 그리드 레이아웃
- 페이지네이션
- 검색 기능

### 상세 페이지 (/curriculum/detail)
- 게시글 본문
- 댓글 섹션
- 이전/다음 글 네비게이션

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules / Global CSS
- **UI Components**: React 18

## 📱 반응형 디자인

모든 페이지는 다음 화면 크기에 최적화되어 있습니다:
- 데스크톱 (1024px+)
- 태블릿 (768px - 1023px)
- 모바일 (~ 767px)

## 🎯 주요 컴포넌트 설명

### Client Components
- `Header`: 네비게이션 및 현재 경로 표시
- `Slider`: 자동 재생 슬라이더
- `ContactForm`: 폼 유효성 검사 및 제출
- `ChatButton`: 채팅 상담 버튼

### Server Components
- `Hero`: 히어로 섹션
- `Achievement`: 이수율 섹션
- `Reviews`: 후기 그리드
- `Process`: 진행절차
- `Footer`: 푸터

## 📝 개발 가이드

### 새 페이지 추가
1. `app/` 폴더에 새 디렉토리 생성
2. `page.tsx` 파일 생성
3. 필요한 컴포넌트 import 및 구성

### 컴포넌트 추가
1. `components/` 폴더에 새 파일 생성
2. TypeScript로 컴포넌트 작성
3. 필요한 페이지에서 import

### 스타일 수정
- 글로벌 스타일: `app/globals.css`
- 컴포넌트별 스타일: CSS 클래스 사용

## 🔧 환경 변수

필요한 경우 `.env.local` 파일을 생성하여 환경 변수를 설정하세요:

```bash
# 예시
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📄 라이선스

Copyright 2024 착한학점연구소 All rights reserved.

## 📞 문의

- 전화: 02-6959-6608
- 이메일: ssh3038@nate.com
- 카카오톡: 착한학점연구소
