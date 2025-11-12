# PortFolio

![로고](public/assets/ProjectTwo.jpg)

<div align="center">
  <p>배포 사이트 : <a href="https://portfolio-eight-psi-6a8jy4r1fa.vercel.app/">[PortFolio]</a></p>
  <p>자세한 프로젝트 설명 : <a href="https://portfolio-eight-psi-6a8jy4r1fa.vercel.app/project/2">[설명]</a></p>
</div>

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [기획 의도](#기획-의도)
- [핵심 기능](#핵심-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [프로젝트 설치](#프로젝트-설치)

## 프로젝트 소개

![메인 화면](public/assets/MainPage.png)

Next.js로 제작한 개인 포트폴리오 사이트입니다. 간략한 저의 정보와 작업물을 한눈에 확인할 수 있습니다. 새로운 프로젝트를 완성할 때마다 프로젝트 섹션에 업데이트하여 기록할 예정입니다.

## 기획 의도

블로그를 작성하는 등 문서화하는 것도 의미 있지만, 보다 직관적이고 접근성이 좋은 웹사이트 형태로 나만의 개발 공간을 제작해보고 싶었습니다. 또한, 이 과정에서 Next.js의 서버/클라이언트 혼합 렌더링을 활용하여 빠르고 효율적인 페이지 렌더링을 경험하고자 했습니다.

## 핵심 기능

- 반응형 디자인
- 다크모드 구현
- Framer Motion을 이용한 부드러운 애니메이션 효과
- 인터셉팅 라우트를 이용한 UI/UX 최적화

## 기술 스택

### Front-End

- Next.js
- Tailwind
- Typescript
- Framer-motion

### Deployment

- Vercel

## 프로젝트 구조

### 클라이언트

```bash
src/
└── app/
     ├── _components   # 재사용 가능한 UI 컴포넌트
     ├── @Modal        # 인터셉팅 라우트를 이용한 모달 관련 컴포넌트
     ├── db            # 정적 데이터 모음 (Vercel 서버리스로 리팩토링 예정)
     ├── styles        # 전역 스타일, Tailwind 설정
     └── types         # 타입 정의
```

## 프로젝트 설치

```bash
git clone https://github.com/simuseokyun/portfolio.git
```

### 의존성 설치

```bash
npm install
```

### 서버 실행

```bash
npm run dev
```

### 클라이언트 실행

```bash
npm start
```
