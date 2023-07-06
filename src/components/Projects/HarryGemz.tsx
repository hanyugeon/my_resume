import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const HarryGemz = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2022.06 - 2022.10</span>
          <span>(4개월)</span>
          <span>개인 프로젝트</span>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="배포 주소"
            icon="link"
            url="https://testnets.opensea.io/collection/harrygemztest03"
          />
          <LinkButton
            label="깃허브 (프론트)"
            icon="github"
            url="https://github.com/hanyugeon/harrygemz-react-frontend"
          />
          <LinkButton
            label="깃허브 (컨트랙트)"
            icon="github"
            url="https://github.com/hanyugeon/harrygemz-solidity-contract"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <span className="text-black text-[2.4rem] font-bold">
              해리잼즈
              <span className="text-black text-[1.6rem] font-semibold">
                (Harry-Gemz)
              </span>
              <span className="text-azure text-[2.8rem] font-bold">.</span>
            </span>
          </div>
          <span className="text-black text-[1.8rem] font-semibold">
            web3에 관심이 생겨 진행하게된 PFP NFT 토이 프로젝트
          </span>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            구현 내용
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - NFT 거래 페이지(dApp)와 스마트 컨트랙트 작성</span>
            <span> - 반응형 UI 적용</span>
            <span>
              {" "}
              - use-wallet 라이브러리를 활용한 유저 전자지갑 상태관리
            </span>
            <span> - 플랫폼 이전 및 테스트넷 배포(Klaytn → Polygon)</span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - 프론트엔드</span>
            <span>TypeScript, Next.js, Chakra-UI, web3.js, caver.js</span>
            <span> - 컨트랙트</span>
            <span>Solidity, OpenZeppelin</span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default HarryGemz;
