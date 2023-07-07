import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const NextjsTranslate = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2022.06 - </span>
          <span>(진행중)</span>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="PR 링크"
            icon="link"
            url="https://github.com/Nextjs-kr/Nextjs.kr/pull/205"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <span className="text-black text-[2.4rem] font-bold">
              Next.js 공식문서 한글 번역 기여
              <span className="text-azure">.</span>
            </span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            활동 내용
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - app → page.js 문서 번역</span>
            <span> - 기여자들과의 코드리뷰 진행</span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default NextjsTranslate;
