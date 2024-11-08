import { Heading, Tag } from "@/components/base";
import { PropsWithChildren } from "react";

type ContentProps = {
  children: React.ReactNode;
};

type AsideProps = PropsWithChildren<{
  period: string;
  month: string;
  projectType?: string;
  projectMember?: string[];
}>;

type ArticleProps = PropsWithChildren<{
  title: string;
  outline?: string;
  tags?: string[];
}>;

const _Content = ({ children }: ContentProps) => {
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
  const isProject = projectType && projectMember;

  return (
    <aside className="flex flex-col gap-[0.8rem] min-w-[9.2rem] w-[11rem] py-[0.2rem] text-sm text-dark">
      <div>
        <p>{period}</p>
        <p>{month}</p>
      </div>
      {isProject && (
        <ul className="w-full text-sm list-inside">
          <li>{projectType}</li>
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

const Article = ({ title, outline, tags, children }: ArticleProps) => {
  return (
    <article className="flex flex-col gap-[0.4rem] w-[38.1rem]">
      <div className="mb-[0.4rem]">
        <Heading size="h3">{title}</Heading>
        <p className="text-black text-md font-bold">{outline}</p>
      </div>
      <div className="flex items-start content-start flex-wrap gap-[0.4rem] mb-[0.4rem]">
        {tags &&
          tags.map((tag, idx) => <Tag key={`${idx}-${tag}`} label={tag} />)}
      </div>
      {children}
    </article>
  );
};

const Content = Object.assign(_Content, { Aside, Article });

export default Content;
