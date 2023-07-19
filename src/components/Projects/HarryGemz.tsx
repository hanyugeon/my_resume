import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";
import { List, ListItem } from "@/components/List";

const HarryGemz = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <text>2022.06 - 2022.10</text>
          <text>(4개월)</text>
          <text>개인 프로젝트</text>
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
            <text className="text-black text-[2.4rem] font-bold">
              해리잼즈
              <text className="text-black text-[1.6rem] font-semibold">
                (Harry-Gemz)
              </text>
              <text className="text-azure">.</text>
            </text>
          </div>
          <text className="text-black text-[1.8rem] font-semibold">
            web3에 관심이 생겨 진행하게된 PFP NFT 토이 프로젝트
          </text>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            구현 내용
          </text>
          <List>
            <ListItem>{`NFT 거래 페이지(dApp)와 스마트 컨트랙트 작성`}</ListItem>
            <ListItem>{`반응형 UI 적용`}</ListItem>
            <ListItem>{`use-wallet 라이브러리를 활용한 유저 전자지갑 상태관리`}</ListItem>
            <ListItem>{`플랫폼 이전 및 테스트넷 배포(Klaytn → Polygon`}</ListItem>
          </List>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </text>
          <List>
            <ListItem>{`프론트엔드`}</ListItem>
            <ListItem
              indent={true}
            >{`TypeScript, Next.js, Chakra-UI, web3.js, caver.js`}</ListItem>
            <ListItem>{`컨트랙트`}</ListItem>
            <ListItem indent={true}>{`Solidity, OpenZeppelin`}</ListItem>
          </List>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default HarryGemz;
