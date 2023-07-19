import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";
import { List, ListItem } from "@/components/List";

const SWithMe = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <text>2023.01 - 2023.01</text>
          <text>(2주)</text>
          <text>팀 프로젝트</text>
          <text> - 프론트엔드 3명</text>
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
            <text className="text-black text-[2.4rem] font-bold">
              스윗미
              <text className="text-black text-[1.6rem] font-semibold">
                (study with me)
              </text>
              <text className="text-azure">.</text>
            </text>
          </div>
          <text className="text-black text-[1.8rem] font-semibold">
            TIL 공유 & 피드백 서비스
          </text>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            기여한 내용
          </text>
          <List>
            <ListItem>{`로그인/회원가입, 내정보, 검색결과 페이지 CRUD`}</ListItem>
            <ListItem>{`로그인/회원가입 입력 폼, 공용 Header 제작`}</ListItem>
            <ListItem>{`검색어와 검색필터에 따른 검색기능 구현`}</ListItem>
            <ListItem>{`유저 상태에 따른 Navigation 표시, 페이지 접근 권한 부여`}</ListItem>
            <ListItem>{`ToastUI 에디터로 작성한 컨탠츠 프리뷰에 Markdown 문법이 그대로`}</ListItem>
            <ListItem indent={true}>{`→ 정규표현식 활용`}</ListItem>
            <ListItem
              indent={true}
            >{`→ md문법이 보이지않도록 필터링 해주는 유틸함수 작성`}</ListItem>
          </List>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </text>
          <List>
            <ListItem>JavaScript, React, emotion, Recoil, Vite</ListItem>
          </List>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default SWithMe;
