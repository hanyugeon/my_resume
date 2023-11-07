import { List, ListItem } from "@/components/legacy/List";

const Introduction = () => {
  return (
    <div className="flex justify-between mb-[2.6rem]">
      <div className="flex flex-col gap-[0.6rem]">
        <text className="text-black text-[2.8rem] font-bold">
          김재현<text className="text-azure">.</text>
        </text>
        <text className="text-gray text-[1.4rem] font-medium">
          프론트엔드 개발자
        </text>
      </div>
      <List>
        <ListItem indent={true}>GitHub: https://github.com/hanyugeon</ListItem>
        <ListItem indent={true}>Blog: https://hanyugeon.tistory.com</ListItem>
        <ListItem indent={true}>E-mail: hanyugeon@naver.com</ListItem>
        <ListItem indent={true}>Phone: 010-7593-6115</ListItem>
      </List>
    </div>
  );
};

export default Introduction;
