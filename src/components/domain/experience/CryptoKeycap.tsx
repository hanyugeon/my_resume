import { Button, Heading } from "@/components/base";
import { Content } from "@/components/domain/experience";
import { cryptoArticle, cryptoAside } from "@/data/project/cryptokeycap";

const CryptoKeycap = () => {
  return (
    <Content>
      <Content.Aside
        period={cryptoAside.data.period}
        month={cryptoAside.data.month}
        projectType={cryptoAside.data.projectType}
        projectMember={cryptoAside.data.projectMember}
      >
        {cryptoAside.links.map(({ label, icon, url }) => (
          <Button key={label} label={label} icon={icon} url={url} />
        ))}
      </Content.Aside>
      <Content.Article
        title={cryptoArticle.title}
        outline={cryptoArticle.outline}
        tags={cryptoArticle.tags}
      >
        <div className="mb-[1.2rem]">
          <Heading size="h4">{`기여한 내용 (프론트엔드)`}</Heading>
          <ul className="list-disc list-inside">
            {cryptoArticle.contents.contributionsFront.map(
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
          <Heading size="h4">{`기여한 내용 (컨트랙트)`}</Heading>
          <ul className="list-disc list-inside">
            {cryptoArticle.contents.contributionsFront.map(
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
            {cryptoArticle.contents.learned.map((value) => (
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

export default CryptoKeycap;
