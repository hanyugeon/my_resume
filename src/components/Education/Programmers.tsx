import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";
import { List, ListItem } from "@/components/List";

const Programmers = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <text>2022.10 - 2023.03</text>
          <text>(5개월)</text>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="관련 링크"
            icon="link"
            url="https://school.programmers.co.kr/learn/KDT"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <text className="text-black text-[2.4rem] font-bold">
              프로그래머스 프론트엔드 데브코스 3기
              <text className="text-azure">.</text>
            </text>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            활동 내용
          </text>
          <List>
            <ListItem>
              독학의 한계와 팀 프로젝트 및 협업 경험의 필요성을 느껴 해당
              교육과정에 지원
            </ListItem>
            <ListItem>
              자료구조, 바닐라JS, CSS, Vue.js, React.js, StoryBook, TypeScript
              등을 학습
            </ListItem>
            <ListItem> 2차례의 팀 프로젝트 진행</ListItem>
            <ListItem indent={true}>
              → 건전한 팀 문화(규칙) 조성, 활발한 이슈 공유 및 해결, 코드 리뷰
            </ListItem>
            <ListItem indent={true}>
              → 이를 통한 업무 스트레스 감축, 프로젝트 품질 향상을 경험
            </ListItem>
            <ListItem>
              최종 프로젝트 우수 팀으로 선정되어 고용노동부와 인터뷰 진행
            </ListItem>
          </List>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default Programmers;
