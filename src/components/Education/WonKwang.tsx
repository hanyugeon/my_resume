import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const WonKwang = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2017.03 - 2023.02</span>
          <span>(6년)</span>
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <span className="text-black text-[2.4rem] font-bold">
              원광대학교
              <span className="text-azure">.</span>
            </span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            컴퓨터소프트웨어공학과
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - 전과 및 졸업 (20.03 - 23.02)</span>
          </div>
          <span className="text-black text-[1.6rem] font-semibold">
            수학교육과
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - 이전학과 (17.03 - 18.02)</span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default WonKwang;
