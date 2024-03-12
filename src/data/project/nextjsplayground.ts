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
        "SSR, SSG 적용을 통한 페이지 렌더링 실습을 진행했습니다.",
        "스켈레톤 UI를 작성하고 Suspense를 적용했습니다.",
      ],
    },
    {
      name: "이미지, 폰트 최적화 실습",
      description: [
        "이미지에 AVIF, WebP 포맷과 LazyLoading을 적용했습니다.",
        "단일 폰트를 적용하여 폰트 호출 횟수와 용량을 축소하였습니다.",
        "LightHouse Performance 점수 100점을 기록했습니다.",
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
