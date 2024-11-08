export const cryptoArticle = {
  title: "크립토 키캡(Crypto-Keycap)",
  outline: "세계최초 온체인 키캡놀이 NFT 프로젝트",
  tags: [
    "TypeScript",
    "React",
    "Next.js(12)",
    "Chakra-UI",
    "web3.js",
    "use-wallet",
  ],
  contents: {
    contributionsFront: [
      {
        title: "메인 페이지, 관리자 페이지 작성",
        description:
          "사용자가 NFT 프리뷰 감상과 Draw를 할 수 있는 메인 페이지를 작성하고 NFT 민팅과 수량 관리, Draw 상태와 가격 책정을 할 수 있는 관리자 페이지를 작성했습니다.",
        link: null,
      },
      {
        title: "반응형 UI 적용",
        description:
          "모바일 사용자를 고려하여 최소 너비 320px까지 이용할 수 있도록 했습니다.",
        link: null,
      },

      {
        title: "전자지갑 상태 관리",
        description:
          "use-wallet 라이브러리를 활용하여 사용자 전자지갑 상태를 관리했습니다.",
        link: null,
      },
    ],
    contributionsContract: [
      {
        title: "기존의 NFT에 새로운 기능 추가",
        description:
          "홀더가 소유한 PFP NFT에 닉네임을 각인할 수 있는 기능을 추가했습니다.",
        link: null,
      },
      {
        title: "플랫폼 마이그레이션",
        description:
          "기존 Klaytn 플랫폼이었던 서비스를 Polygon 플랫폼으로 마이그레이션 및 테스트넷 배포를 진행했습니다.",
        link: "https://testnets.opensea.io/collection/crypto-keycap-v2",
      },
    ],
    learned: [
      "서비스 하나가 만들어지는 사이클을 경험할 수 있었습니다.",
      "반응형 UI 적용을 통해 UX의 중요성을 배웠습니다.",
      "PM, 디자이너와의 소통을 통해 일관된 프로젝트 방향성 유지의 중요성을 배웠습니다.",
    ],
  },
};

export const cryptoAside = {
  data: {
    period: "2022.03 - 2022.10",
    month: "(7개월)",
    projectType: "팀 프로젝트",
    projectMember: ["개발자 2명", "디자이너 1명", "마케터 1명"],
  },
  links: [
    {
      label: "링크트리",
      icon: "web",
      url: "https://linktr.ee/cryptokeycap",
    },
  ],
};
