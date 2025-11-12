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

이 프로젝트는 **Spotify Web API**를 활용해 사용자의 음악 데이터를 시각화하고,플레이리스트,아티스트 정보 등을 제공하고 짧게나마 음악을 스트리밍할 수 있는 React 기반 웹 애플리케이션입니다.

## 기획 의도

공개 API를 활용한 실질적인 서비스 구축 경험을 목표로 프로젝트를 기획했습니다. 특히, 음악에 대한 개인적인 관심을 바탕으로, 스트리밍 기능을 포함한 음악 애플리케이션을 직접 구현함으로써 프론트엔드와 백엔드 기술을 유기적으로 결합해보는 데 중점을 두었습니다.이를 통해 사용자 인증, 데이터 처리, 상태 관리 등 실제 서비스에서 요구되는 다양한 기능을 경험할 수 있었고, 직관적인 UI/UX 설계와 반응형 디자인 적용을 통해 사용자가 편리하게 서비스를 이용할 수 있도록 고민했습니다..

## 핵심 기능

### Non-Member (로그인 하지 않은 유저)

- 트랙,앨범,아티스트 검색기능
- 음악 스트리밍 (플레이어 조작 가능)

### OAUTH

- OAuth2.0을 이용해 간편하고 안전한 소셜 로그인 (google 계정으로 회원가입, 로그인)

### Member (로그인 한 유저)

현재 스포티파이 API 정책상 개발자(본인)가 앱에 등록한 회원만 이 기능을 사용할 수 있습니다.
유저 기능을 사용하시려면 "sim31059999@gmail.com"로 구글 이메일을 보내주세요. 불편을 드려서 죄송합니다

- 플레이리스트 조회,생성,삭제 기능
- 플레이리스트 내 트랙 추가,삭제 기능
- 아티스트/앨범 팔로우 및 언팔로우

## 기술 스택

### Front-End

- React
- React-Router
- Tanstack-Query
- Tailwind
- Typescript
- Zustand

### Back-End

- Node.js
- Express

### Deployment

- AWS(EC2)

## 프로젝트 구조

### 클라이언트

```bash
client/
└── src/
    ├── components/            # Spotify, 사용자 등 API 요청
    ├── hooks/     # 재사용 UI 컴포넌트
    ├── pages/          # 커스텀 훅
    ├── routes/          # 페이지 컴포넌트
    ├── services/          # Zustand 전역 상태 관리
    ├── store/         # 전역 스타일 또는 Tailwind 설정
    ├── styles/
    ├── types/
    └── utils/
```

### 서버

```bash
server/
└── src/
    ├── errors/            # Spotify, 사용자 등 API 요청
    ├── routes/     # 재사용 UI 컴포넌트
    ├── tuils/          # 커스텀 훅
    └── types/        # 페이지 컴포넌트
```

## 프로젝트 설치

```bash
git clone https://github.com/username/project.git
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
