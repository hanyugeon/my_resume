export const dadokArticle = {
  title: "다독다독",
  outline: "책에 대한 인사이트를 공유하고 소통하는 독서 소셜 플랫폼",
  tags: [
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "React-Query",
    "ContextAPI",
    "Storybook",
  ],
  contents: [
    {
      name: "3D 책, 책장 컴포넌트 구현",
      description: [
        "책 표지 이미지의 지배적인 색상코드를 추출하여 3D 책 옆면에 렌더링",
        "색상코드 추출 중 CORS 에러 발생, Next.js서버를 활용한 이미지 요청 프록시",
      ],
    },
    {
      name: "책장 좋아요 기능 구현",
      description: [
        "요청에 대한 응답기간 동안 UI 업데이트가 늦어지는 요소를 발견, 사용자에게 빠른 UI 피드백을 제공하고자 낙관적 업데이트 적용",
      ],
    },
    {
      name: "성능개선 및 리팩터링",
      description: [
        "Storybook을 활용한 CDD(컴포넌트 주도 개발) 진행",
        "디자인 시스템을 제작하여 UI/UX 개선 및 컴포넌트 재사용성 향상",
        "Next.js app router로 마이그레이션, SSR과 서버 컴포넌트를 도입",
      ],
    },
  ],
};

export const dadokAside = {
  data: {
    period: "2023.02 - ",
    month: "(진행 중)",
    projectType: "팀 프로젝트",
    projectMember: ["프론트엔드 4명", "백엔드 3명"],
  },
  links: [
    { label: "배포링크", icon: "link", url: "https://dev.dadok.site/" },
    {
      label: "깃허브",
      icon: "github",
      url: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE",
    },
  ],
};
