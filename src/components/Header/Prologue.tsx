import { List, ListItem } from "@/components/List";

const Prologue = () => {
  return (
    <List>
      <ListItem indent={true}>
        구상하고 고민했던 저의 생각들을 코드로 작성했을때 곧바로 시각적인
        결과물로 보이는 웹 프론트엔드 개발에 매료되어 공부중입니다
      </ListItem>
      <ListItem indent={true}>
        새로운것에 도전하는걸 두려워하지 않아 익숙하지 않은, 새로운 것을
        배우는행위에 흥미를 느낍니다
      </ListItem>
      <ListItem indent={true}>
        제 코드에 대한 여러 의견들에 거부감을 갖지 않으며 항상 귀기울여 듣고
        보며 배우는것을 즐깁니다
      </ListItem>
      <ListItem indent={true}>
        어느 회사, 팀에 들어가도 긍정적인 시너지를 발휘할 수 있는 개발자가
        되는것이 저의 목표입니다
      </ListItem>
    </List>
  );
};

export default Prologue;
