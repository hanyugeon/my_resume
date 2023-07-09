import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const CryptoKeycap = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2022.05 - 2022.08</span>
          <span>(3개월)</span>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="서비스 주소"
            icon="link"
            url="https://www.cryptokeycap.io/"
          />
          <LinkButton
            label="배포 주소"
            icon="link"
            url="https://testnets.opensea.io/collection/crypto-keycap-v2"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <span className="text-black text-[2.4rem] font-bold">
              Crypto-Keycap PFP NFT 기능 추가 및 플랫폼 이전
              <span className="text-azure">.</span>
            </span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            활동 내용
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span>
              - 기존 컨트랙트의 openZeppelin, solidity를 최신 버전으로
              마이그레이션
            </span>
            <span>
              - 홀더가 소유한 PFP NFT에 닉네임을 각인할 수 있도록 기능 추가
            </span>
            <span>
              - Klaytn기반의 NFT를 Polygon으로 플랫폼 이전 및 테스트넷 배포
            </span>
            <span> - web3 생태계 악화로 인한 프로젝트 잠정 중단</span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default CryptoKeycap;
