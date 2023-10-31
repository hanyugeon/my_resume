import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/legacy/Experience";
import { List, ListItem } from "@/components/legacy/List";

const WonKwang = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <text>2017.03 - 2023.02</text>
          <text>(6년)</text>
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <text className="text-black text-[2.4rem] font-bold">
              원광대학교
              <text className="text-azure">.</text>
            </text>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            컴퓨터소프트웨어공학과
          </text>
          <List>
            <ListItem>{`전과 및 졸업 (20.03 - 23.02)`}</ListItem>
          </List>
          <text className="text-black text-[1.6rem] font-semibold">
            수학교육과
          </text>
          <List>
            <ListItem>{`이전학과 (17.03 - 18.02)`}</ListItem>
          </List>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default WonKwang;
