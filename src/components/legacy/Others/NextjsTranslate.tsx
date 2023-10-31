import { LinkButton } from "@/components/legacy/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/legacy/Experience";
import { List, ListItem } from "@/components/legacy/List";

const NextjsTranslate = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <text>2022.06 - </text>
          <text>(진행중)</text>
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
            <text className="text-black text-[2.4rem] font-bold">
              Next.js 공식문서 한글 번역 기여
              <text className="text-azure">.</text>
            </text>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            활동 내용
          </text>
          <List>
            <ListItem>app → page.js 문서 번역</ListItem>
            <ListItem>기여자들과의 코드리뷰 진행</ListItem>
          </List>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default NextjsTranslate;
