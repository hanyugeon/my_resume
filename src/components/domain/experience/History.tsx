import { PropsWithChildren } from "react";

import type { ContentsProps } from "@/components/base/Contents";
import { Contents, Tag, Title } from "@/components/base";

type HistoryProps = {
  children: React.ReactNode;
};

type AsideProps = PropsWithChildren<{
  period: string;
  month: string;
  projectType?: string;
  projectMember?: string[];
}>;

type ArticleProps = {
  title: string;
  outline?: string;
  tags?: string[];
  contents: ContentsProps[];
};

const History = ({ children }: HistoryProps) => {
  return (
    <main className="flex flex-row gap-[0.8rem] p-[0.8rem]">{children}</main>
  );
};

const Aside = ({
  period,
  month,
  projectType,
  projectMember,
  children,
}: AsideProps) => {
  return (
    <aside className="flex flex-col gap-[0.8rem] min-w-[9.2rem] w-[11rem] py-[0.2rem] text-sm text-dark">
      <div>
        <p>{period}</p>
        <p>{month}</p>
      </div>
      {projectType && (
        <ul className="w-full text-sm list-inside">
          {projectType && <li>{projectType}</li>}
          {projectMember &&
            projectMember.map((member, idx) => (
              <li key={`member-${idx}`} className="list-disc ml-[0.5rem]">
                {member}
              </li>
            ))}
        </ul>
      )}
      {children}
    </aside>
  );
};

const Article = ({ title, outline, tags, contents }: ArticleProps) => {
  return (
    <article className="flex flex-col gap-[0.4rem] w-[38.1rem]">
      <div className="mb-[0.4rem]">
        <Title label={title} size="lg" />
        <p className="text-black text-md font-bold">{outline}</p>
      </div>
      <div className="flex items-start content-start flex-wrap gap-[0.4rem]">
        {tags &&
          tags.map((tag, idx) => <Tag key={`${idx}-${tag}`} label={tag} />)}
      </div>
      {contents.map(({ name, description }, idx) => (
        <Contents
          key={`${idx}-${name}`}
          name={name}
          description={description}
        />
      ))}
    </article>
  );
};

History.Aside = Aside;

History.Article = Article;

export default History;
