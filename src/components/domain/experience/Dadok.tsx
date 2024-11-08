import { Button, Heading } from "@/components/base";
import { Content } from "@/components/domain/experience";
import { dadokArticle, dadokAside } from "@/data/project/dadok";

const Dadok = () => {
  return (
    <Content>
      <Content.Aside
        period={dadokAside.data.period}
        month={dadokAside.data.month}
        projectType={dadokAside.data.projectType}
        projectMember={dadokAside.data.projectMember}
      >
        {dadokAside.links.map(({ label, icon, url }) => (
          <Button key={label} label={label} icon={icon} url={url} />
        ))}
      </Content.Aside>
      <Content.Article
        title={dadokArticle.title}
        outline={dadokArticle.outline}
        tags={dadokArticle.tags}
      >
        <div className="mb-[1.2rem]">
          <Heading size="h4">기여한 내용</Heading>
          <ul className="list-disc list-inside">
            {dadokArticle.contents.contributions.map(
              ({ title, description, link }) => (
                <li key={title} className="mb-[1rem]">
                  <span className="font-bold">
                    {`${title} `}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-main"
                      >{`(링크)`}</a>
                    )}
                  </span>
                  <p className="ml-[1.2rem]">{description}</p>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="mb-[1.2rem]">
          <Heading size="h4">배운 내용</Heading>
          <ul className="list-disc list-inside">
            {dadokArticle.contents.learned.map((value) => (
              <li key={value} className="mb-[1rem]">
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </Content.Article>
    </Content>
  );
};

export default Dadok;
