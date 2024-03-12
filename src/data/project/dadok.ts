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
    "react-hook-form",
  ],
  contents: [
    {
      name: "3D 컴포넌트 스타일링",
      description: [
        "사용자의 눈길을 끌 수 있는 3D 디자인을 기획으로 CSS transform 속성을 활용하여 3D 책 컴포넌트를 작성했습니다.",
        "책 표지 이미지의 지배적인 색상코드를 추출해 3D 책 옆면에 렌더링 했습니다.",
        "색상코드 추출 중 CORS 에러가 발생하여 Next서버를 활용한 이미지 요청 프록시를 통해 CORS 정책을 우회했습니다.",
      ],
    },
    {
      name: "프로젝트 개선 사항",
      description: [
        "useFunnel 커스텀 훅을 작성하여 다수의 페이지와 form 데이터를 하나의 페이지 내에서 관리할 수 있도록 하였습니다.",
        "좋아요 기능에 UI 업데이트가 느린 문제점을 낙관적 업데이트를 적용하여 유저에게 빠른 UI 피드백을 제공하였습니다.",
      ],
    },
    {
      name: "디자인 시스템 제작 및 CDD 방법론 도입",
      description: [
        "유저 피드백을 근거로 디자인 시스템을 제작하여 디자인에 일관성과 직관성 주입 및 개발 생산성을 향상시켰습니다.",
        "단위 UI 테스트를 진행하였으며 chromatic CI 환경을 구성하여 코드 리뷰 단계에서의 리소스를 감축시켰습니다.",
      ],
    },
    {
      name: "점진적 App 라우터 마이그레이션",
      description: [
        "Next.js App 라우터로 마이그레이션 및 RSC 작성을 통해 JS 번들 사이즈를 약 65% 축소시켰습니다. (첫 JS 로드 크기 223KB -> 78.1KB)",
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
