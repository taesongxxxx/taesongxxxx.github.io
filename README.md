# Portfolio Website

React와 TypeScript로 만든 개인 포트폴리오 웹사이트입니다.  
프로필, 이력, 기술 스택, 프로젝트 정보를 한 화면에서 볼 수 있도록 구성했습니다.

## Preview

- 인트로 헤더와 프로필 이미지
- 기본 정보, 연락처, 기술 스택 섹션
- 프로젝트 목록과 상세 모달 UI
- 반응형 레이아웃

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Project Structure

```text
src/
  assets/
    profile-img.png
  components/
    ProfileSectoin.tsx
    ProjectSection.tsx
    ResumeSection.tsx
  App.tsx
  App.css
  index.css
  main.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

브라우저에서 개발 서버 주소를 열면 포트폴리오 페이지를 확인할 수 있습니다.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Features

- 섹션 단위 컴포넌트 분리
- 기술 스택 카테고리 구성
- GitHub, Velog 외부 링크 아이콘 제공
- 프로젝트 클릭 시 상세 내용을 모달로 표시
- 모바일 환경을 고려한 단일 컬럼 레이아웃 지원

## Notes

- 일부 소개 문구와 프로젝트 상세 내용은 계속 업데이트할 예정입니다.
- 현재 프로젝트는 정적 포트폴리오 사이트 구조를 중심으로 구성되어 있습니다.
