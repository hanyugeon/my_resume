import { Button, Heading } from "@/components/base";
import { Content } from "@/components/domain/experience";

import { wkuArticle, wkuAside } from "@/data/education/wku";

const Wku = () => {
  const data = wkuArticle.contents;

  return (
    <Content>
      <Content.Aside
        period={wkuAside.data.period}
        month={wkuAside.data.month}
      />
      <Content.Article title={wkuArticle.title}>
        <div>
          <Heading size="h4">컴퓨터소프트웨어공학과</Heading>
          <ul className="list-disc list-inside">
            {data.departmentOfComputerSoftwareEngineering.activity.map(
              (activity) => (
                <li key={activity}>{activity}</li>
              )
            )}
          </ul>
        </div>

        <div>
          <Heading size="h4">수학교육과</Heading>
          <ul className="list-disc list-inside">
            {data.mathematicsEducationDepartment.activity.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </Content.Article>
    </Content>
  );
};

export default Wku;
