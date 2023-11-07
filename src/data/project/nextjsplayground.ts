export const nextArticle = {
  title: "Next.js13 플레이그라운드",
  outline: "Next.js(app)와 성능 개선을 실험해보는 토이 프로젝트",
  tags: [
    "TypeScript",
    "React",
    "Next.js",
    "Emotion",
    "Recoil",
    "Vercel",
    "NotionAPI",
  ],
  contents: [
    {
      name: "페이지 렌더링, UI/UX 실습",
      description: [
        "SSR, SSG 적용을 통한 페이지 렌더링 실습 진행",
        "스켈레톤UI 제작 및 Suspense를 적용한 UX 개선 실습 진행",
      ],
    },
    {
      name: "이미지, 폰트 최적화 실습",
      description: [
        "AVIF, WebP(fallback) 이미지 포맷을 적용, 요청되는 이미지 용량 축소",
        "LazyLoading을 적용하여 초기 페이지 로딩 시간 단축",
        "단일 폰트 적용, 폰트가 로딩되는 횟수와 용량 감축",
      ],
    },
  ],
};

export const nextAside = {
  data: {
    period: "2023.02 - 2023.05",
    month: "(3개월)",
    projectType: "개인 프로젝트",
  },
  links: [
    {
      label: "배포링크",
      icon: "link",
      url: "https://next-js-13-playground-eight.vercel.app/",
    },
    {
      label: "깃허브",
      icon: "github",
      url: "https://github.com/hanyugeon/NextJS13_Playground",
    },
  ],
};
