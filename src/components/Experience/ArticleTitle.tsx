type ArticleTitleProps = {
  title: string;
};

const ArticleTitle = ({ title }: ArticleTitleProps) => {
  return (
    <div className="grid gap-0 w-full">
      <div className="flex text-[2.8rem] font-bold">
        <span className="text-black">{title}</span>
        <span className="text-azure">.</span>
      </div>
      <div className="bg-gradient-to-r from-lavender to-mint w-full h-[0.1rem]" />
    </div>
  );
};

export default ArticleTitle;
