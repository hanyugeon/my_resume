import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const SWithMe = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2023.01 - 2023.01</span>
          <span>(2주)</span>
          <span>팀 프로젝트</span>
          <span> - 프론트엔드 3명</span>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="배포 주소"
            icon="link"
            url="https://swithme.vercel.app/"
          />
          <LinkButton
            label="깃허브"
            icon="github"
            url="https://github.com/prgrms-fe-devcourse/FEDC3_SWithMe_Gidong"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <span className="text-black text-[2.4rem] font-bold">
              스윗미
              <span className="text-black text-[1.6rem] font-semibold">
                (study with me)
              </span>
              <span className="text-azure">.</span>
            </span>
          </div>
          <span className="text-black text-[1.8rem] font-semibold">
            TIL 공유 & 피드백 서비스
          </span>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            기여한 내용
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - 로그인/회원가입, 내정보, 검색결과 페이지 CRUD</span>
            <span> - 로그인/회원가입 입력 폼, 공용 Header 제작</span>
            <span> - 검색어와 검색필터에 따른 검색기능 구현</span>
            <span>
              - 유저 상태에 따른 Navigation 표시, 페이지 접근 권한 부여
            </span>
            <span>
              - ToastUI 에디터로 작성한 컨탠츠 프리뷰에 Markdown 문법이 그대로
              노출
            </span>
            <span className="indent-[0.8rem]">→ 정규표현식 활용</span>
            <span className="indent-[0.8rem]">
              → md문법이 보이지않도록 필터링 해주는 유틸함수 작성
            </span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span>JavaScript, React, emotion, Recoil, Vite</span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default SWithMe;
