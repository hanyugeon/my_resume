export const dadokArticle = {
  title: "다독다독",
  outline: "책에 대한 인사이트를 공유하고 소통하는 독서 소셜 플랫폼",
  tags: [
    "TypeScript",
    "React",
    "Next.js(13 app)",
    "TailwindCSS",
    "React-Query",
    "ContextAPI",
    "Storybook",
    "react-hook-form",
    "github-actions",
    "PWA",
  ],
  contents: {
    contributions: {
      "점진적 Next.js App router 마이그레이션 진행": {
        description: `서버 컴포넌트 작성을 통해 JS 번들 크기를 약 65.2% 감소시켰습니다.
      (첫 JS 로드 크기 233kB -> 77.6kB)`,
        link: null,
      },
      "Funnel 기법 도입": {
        description:
          "많은 입력 폼으로 인해 사용자의 시각적 집중력을 분산시키는 문제점을 발견하여 UX를 해치는 문제를 발견하여, useFunnel을 작성하고 퍼널 기법을 도입했습니다.",
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/582",
      },
      "검색 결과 유지 기능 구현": {
        description:
          "페이지 이동 시 검색 결과가 초기화되는 문제를 쿼리 파라미터 활용을 통해 해결했습니다. useQueryParams를 작성해 관심사 분리 및 재사용성을 높였습니다.",
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/593",
      },
      "GitHub Actions 워크플로 작성": {
        description:
          "Google Lighthouse CI 워크플로를 작성하여 성능 측정 자동화를 통해 개발자 경험을 개선했습니다.",
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/606",
      },
      "검색 엔진 최적화(SEO) 진행": {
        description:
          "검색 엔진 친화적 서비스가 될 수 있도록 메타데이터, 동적 사이트맵, 네비게이션 스키마를 작성했습니다.",
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/617",
      },
      "PWA(프로그레시브 웹 앱) 구현": {
        description:
          "사용자가 모바일에서 손쉽게 웹앱으로 사용할 수 있도록 PWA를 구현했습니다. 구현 중 여러 크로스 브라우징 이슈들을 해결했습니다.",
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/621",
      },
      "자체 이미지 최적화 구현": {
        description: `API routes, Sharp 라이브러리를 활용한 이미지 최적화 기능을 구현했습니다.
      (검색 결과 페이지 이미지 요청 리소스 약 40% 감소)`,
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/656",
      },
    },
    learned: {
      "1": "Next.js로 개발 및 App router 마이그레이션을 진행하며 RSC에 대해 알 수 있었고 SSR, SEO, middleware 등을 경험했습니다.",
      "2": "기존 UI의 문제 발견, 원인 정의를 통해 프로젝트 리디자인, Funnel 도입, 검색 결과 유지 기능 구현 등의 작업을 통해 UI/UX 개선 능력을 길렀습니다.",
      "3": "Storybook을 활용한 UI 테스트를 통해 컴포넌트 주도 개발(CDD)을 진행하며 독립적이고 안전한 컴포넌트를 작성할 수 있었습니다.",
      "4": "github-actions 워크플로 작성을 통해 자동화를 경험하며 DX(개발자 경험) 또한 중요한 요소라는 것을 알게됐습니다.",
      "5": "자체 이미지 최적화 구현을 통해, 최소 비용 최대 성능을 끌어내는 작업을 경험했습니다.",
    },
  },
};

export const dadokAside = {
  data: {
    period: "2023.07 - ",
    month: "(진행 중)",
    projectType: "팀 프로젝트",
    projectMember: ["프론트엔드 4명"],
  },
  links: [
    { label: "배포링크", icon: "link", url: "https://dev.dadok.app/" },
    {
      label: "깃허브",
      icon: "github",
      url: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE",
    },
    {
      label: "피그마",
      icon: "figma",
      url: "https://www.figma.com/file/1zmj3kcKFAnbeD12l6ZeOk/%EB%8B%A4%EB%8F%85%EB%8B%A4%EB%8F%85?type=design&node-id=4%3A2&mode=design&t=BCpIQCuT2mZWhjCm-1",
    },
  ],
};
