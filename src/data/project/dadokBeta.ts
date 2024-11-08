export const dadokBetaArticle = {
  title: "다독다독 v0",
  outline: "책에 대한 인사이트를 공유하고 소통하는 독서 소셜 플랫폼",
  tags: [
    "TypeScript",
    "React",
    "Next.js(13 page)",
    "Chakra-UI",
    "React-Query",
    "Recoil",
  ],
  contents: {
    contributions: [
      {
        title: "3D 컴포넌트 제작",
        description:
          "사용자의 시각적 흥미를 끌기 위한 3D 책 컴포넌트를 제작했습니다. 구현 중 CORS 에러가 발생하여 api routes를 활용해 CORS 정책을 우회했습니다.",
        link: null,
      },

      {
        title: "무한 스크롤 구현",
        description:
          "웹앱의 특성을 고려하여 더 나은 사용자 경험을 제공하기 위해 무한 스크롤을 구현했습니다. React-Query의 useInfinityQuery를 활용했습니다.",
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/232",
      },

      {
        title: "낙관적 UI 업데이트 적용",
        description:
          "요청 직후 빠른 UI 피드백을 제공할 수 있도록 좋아요 기능에 낙관적 업데이트를 적용했습니다. 요청 실패를 고려한 쿼리 롤백 로직을 작성했습니다.",
        link: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/pull/458",
      },

      {
        title: "프로젝트 초기 세팅",
        description: "폴더 구조 세팅, GlobalStyle, CustomTheme을 작성했습니다.",
        link: null,
      },
    ],
    learned: [
      "Canvas 활용으로 인한 CORS 에러를 경험하며 CORS 정책에 대해 이해했습니다.",
      "무한 스크롤, 낙관적 UI 업데이트 적용 작업을 통해 여러 방법으로 긍정적인 사용자 경험을 끌어낼 수 있다는 것을 배웠습니다.",
      "코어 타임, 피어 코드 리뷰, 실내 스포츠 타임 등 건전한 개발 문화를 조성하며 짧은 개발 기간 동안 협업에 필요한 소프트스킬을 갖췄습니다",
    ],
  },
};

export const dadokBetaAside = {
  data: {
    period: "2023.02 - 2023.06",
    month: "4개월",
    projectType: "팀 프로젝트",
    projectMember: ["프론트엔드 4명", "백엔드 3명"],
  },
  links: [
    {
      label: "발표영상",
      icon: "web",
      url: "https://www.youtube.com/watch?v=wzx3kuox3ZI",
    },
    {
      label: "깃허브",
      icon: "github",
      url: "https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE/tree/beta",
    },
  ],
};
