import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const DadokDadok = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2023.02 - 2023.03</span>
          <span>(1개월)</span>
          <span>(리팩터링 진행중)</span>
          <span>팀 프로젝트</span>
          <span> - 프론트엔드 4명</span>
          <span> - 백엔드 3명</span>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="배포 주소"
            icon="link"
            url="https://dev.dadok.site"
          />
          <LinkButton
            label="깃허브"
            icon="github"
            url="https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <span className="text-black text-[2.4rem] font-bold">
              다독다독
              <span className="text-azure text-[2.8rem] font-bold">.</span>
            </span>
          </div>
          <span className="text-black text-[1.8rem] font-semibold">
            책에 대한 인사이트를 공유하고 소통하는 독서 소셜 플랫폼
          </span>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            기여한 내용
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - 3D 책, 책장 컴포넌트 구현 (MVP 기능)</span>
            <span className="pl-[0.8rem]">
              → 3D 책 컴포넌트의 옆면 색상 추출을 위한 color-thief 라이브러리
              사용
            </span>
            <span className="pl-[0.8rem]">
              → 라이브러리 내부의 {`<canvas>`} element 활용으로 인한 CORS 에러
              발생
            </span>
            <span className="pl-[0.8rem]">
              → Next.js의 API routes 활용, API proxy를 통한 CORS정책 우회
            </span>
            <span>
              - 프로젝트 초기세팅, 공용 상단Nav, GlobalStyle, CustomTheme 작성
            </span>
            <span> - 메인, 유저 책장 페이지 CRUD</span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            리팩터링 및 추가 기능 구현
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - 책장 좋아요 기능 구현</span>
            <span className="pl-[0.8rem]">
              {" "}
              → React-Query의 chaching 메서드 활용
            </span>
            <span className="pl-[0.8rem]">
              {" "}
              → 낙관적 업데이트 적용, UX 품질 향상
            </span>
            <span> - 1차 릴리즈를 위한 디자인 시스템 제작 중</span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span>TypeScript, Next.js, Chakra-UI, React-Query</span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default DadokDadok;
