import { Button, Heading } from "@/components/base";
import { Content } from "@/components/domain/experience";

import { devcourseArticle, devcourseAside } from "@/data/education/devcourse";

const DevCourse = () => {
  const data = devcourseArticle.contents.frontEndCurriculum;

  return (
    <Content>
      <Content.Aside
        period={devcourseAside.data.period}
        month={devcourseAside.data.month}
      >
        {devcourseAside.links.map(({ label, icon, url }) => (
          <Button key={label} label={label} icon={icon} url={url} />
        ))}
      </Content.Aside>
      <Content.Article title={devcourseArticle.title}>
        <div className="mb-[1.2rem]">
          <Heading size="h4">프론트엔드 교육과정</Heading>
          <ul className="list-disc list-inside">
            {data.activity.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </Content.Article>
    </Content>
  );
};

export default DevCourse;
