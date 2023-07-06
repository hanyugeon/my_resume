import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const Programmers = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2022.10 - 2023.03</span>
          <span>(5개월)</span>
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
            <span className="text-black text-[2.4rem] font-bold">
              프로그래머스 프론트엔드 데브코스 3기
              <span className="text-azure text-[2.8rem] font-bold">.</span>
            </span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            활동 내용
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span>
              {" "}
              - 독학의 한계와 팀 프로젝트 및 협업 경험의 필요성을 느껴 해당
              교육과정에 지원
            </span>
            <span>
              {" "}
              - 자료구조, 바닐라JS, CSS, Vue.js, React.js, StoryBook, TypeScript
              등을 학습
            </span>
            <span> - 2차례의 팀 프로젝트 진행</span>
            <span>
              {" "}
              → 건전한 팀 문화(규칙) 조성, 활발한 이슈 공유 및 해결, 코드 리뷰
            </span>
            <span>
              {" "}
              → 이를 통한 업무 스트레스 감축, 프로젝트 품질 향상을 경험
            </span>
            <span>
              {" "}
              - 최종 프로젝트 우수 팀으로 선정되어 고용노동부와 인터뷰 진행
            </span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default Programmers;
