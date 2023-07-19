import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";
import { List, ListItem } from "@/components/List";

const SpringBootWebService = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <text>2021.07 - 2021.09</text>
          <text>(2개월)</text>
          <text>개인 프로젝트</text>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="깃허브"
            icon="github"
            url="https://github.com/hanyugeon/springboot-webservice"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <text className="text-black text-[2.4rem] font-bold">
              스프링부트와 aws로 혼자 구현하는 웹서비스
              <text className="text-azure">.</text>
            </text>
          </div>
          <text className="text-black text-[1.8rem] font-semibold">
            서적을 통해 웹서비스 구현 과정을 경험하였던 첫 개인 프로젝트
          </text>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            느낀 점
          </text>
          <List>
            <ListItem>
              서적을 통한 클론코딩으로 백엔드, 프론트엔드 구현 과정을 통해 웹
              서비스가 개발되는 사이클을 경험
            </ListItem>
            <ListItem>
              학습 이후 프론트엔드 개발에 큰 관심이 생겼고 이후 프론트엔드를
              공부하게 됨
            </ListItem>
          </List>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </text>
          <List>
            <ListItem indent={true}>
              {`Java, SpringBoot, Mustache, AWS(EC2, RDS, S3), Nginx, TravisCI`}
            </ListItem>
          </List>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default SpringBootWebService;
