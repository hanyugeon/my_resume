import { Button, Heading } from "@/components/base";
import { Content } from "@/components/domain/experience";

import { nextkrArticle, nextkrAside } from "@/data/activity/nextjskr";

const NextjsKr = () => {
  const data = nextkrArticle.contents.nextJsDocsTranslation;

  return (
    <Content>
      <Content.Aside
        period={nextkrAside.data.period}
        month={nextkrAside.data.month}
      >
        {nextkrAside.links.map(({ label, icon, url }) => (
          <Button key={label} label={label} icon={icon} url={url} />
        ))}
      </Content.Aside>
      <Content.Article title={nextkrArticle.title}>
        <div className="mb-[1.2rem]">
          <Heading size="h4">
            {`활동 내용 `}
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="text-main"
            >{`(링크)`}</a>
          </Heading>
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

export default NextjsKr;
