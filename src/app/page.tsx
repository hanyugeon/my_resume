import { dadokArticle, dadokAside } from "@/data/project/dadok";
import { nextArticle, nextAside } from "@/data/project/nextjsplayground";
import { cryptoArticle, cryptoAside } from "@/data/project/cryptokeycap";

import { nextkrArticle, nextkrAside } from "@/data/activity/nextjskr";

import { devcourseArticle, devcourseAside } from "@/data/education/devcourse";
import { wkuArticle, wkuAside } from "@/data/education/wku";

import { History, Section } from "@/components/domain/experience";
import { Introduction, Summary } from "@/components/domain/about";
import { Button } from "@/components/base";

export default function Home() {
  const dadokData = dadokAside.data;
  const dadokLinks = dadokAside.links;

  const nextData = nextAside.data;
  const nextLinks = nextAside.links;

  const cryptoData = cryptoAside.data;
  const cryptoLinks = cryptoAside.links;

  const nextkrData = nextkrAside.data;
  const nextkrLinks = nextkrAside.links;

  const devcourseData = devcourseAside.data;
  const devcourseLinks = devcourseAside.links;

  const wkuData = wkuAside.data;

  return (
    <main className="flex flex-col gap-[2.4rem] justify-center">
      <Summary />
      <Introduction />

      <Section label="프로젝트">
        <History>
          <History.Aside
            period={dadokData.period}
            month={dadokData.month}
            projectType={dadokData.projectType}
            projectMember={dadokData.projectMember}
          >
            {dadokLinks.map(({ label, icon, url }, idx) => (
              <Button
                key={`${label}-${idx}`}
                label={label}
                icon={icon}
                url={url}
              />
            ))}
          </History.Aside>
          <History.Article
            title={dadokArticle.title}
            outline={dadokArticle.outline}
            tags={dadokArticle.tags}
            contents={dadokArticle.contents}
          />
        </History>

        <History>
          <History.Aside
            period={nextData.period}
            month={nextData.month}
            projectType={nextData.projectType}
          >
            {nextLinks.map(({ label, icon, url }, idx) => (
              <Button
                key={`${label}-${idx}`}
                label={label}
                icon={icon}
                url={url}
              />
            ))}
          </History.Aside>
          <History.Article
            title={nextArticle.title}
            outline={nextArticle.outline}
            tags={nextArticle.tags}
            contents={nextArticle.contents}
          />
        </History>

        <History>
          <History.Aside
            period={cryptoData.period}
            month={cryptoData.month}
            projectType={cryptoData.projectType}
            projectMember={cryptoData.projectMember}
          >
            {cryptoLinks.map(({ label, icon, url }, idx) => (
              <Button
                key={`${label}-${idx}`}
                label={label}
                icon={icon}
                url={url}
              />
            ))}
          </History.Aside>
          <History.Article
            title={cryptoArticle.title}
            outline={cryptoArticle.outline}
            tags={cryptoArticle.tags}
            contents={cryptoArticle.contents}
          />
        </History>
      </Section>

      <Section label="활동">
        <History>
          <History.Aside period={nextkrData.period} month={nextkrData.month}>
            {nextkrLinks.map(({ label, icon, url }, idx) => (
              <Button
                key={`${label}-${idx}`}
                label={label}
                icon={icon}
                url={url}
              />
            ))}
          </History.Aside>
          <History.Article
            title={nextkrArticle.title}
            contents={nextkrArticle.contents}
          />
        </History>
      </Section>

      <Section label="학력">
        <History>
          <History.Aside
            period={devcourseData.period}
            month={devcourseData.month}
          >
            {devcourseLinks.map(({ label, icon, url }, idx) => (
              <Button
                key={`${label}-${idx}`}
                label={label}
                icon={icon}
                url={url}
              />
            ))}
          </History.Aside>
          <History.Article
            title={devcourseArticle.title}
            contents={devcourseArticle.contents}
          />
        </History>

        <History>
          <History.Aside period={wkuData.period} month={wkuData.month} />
          <History.Article
            title={wkuArticle.title}
            contents={wkuArticle.contents}
          />
        </History>
      </Section>
    </main>
  );
}
