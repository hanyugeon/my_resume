type ChildrenType = {
  children: React.ReactNode;
};

const ArticleContainer = ({ children }: ChildrenType) => {
  return (
    <div className="grid gap-[0.4rem] max-w-[76.8rem] w-full px-[1rem] sm:px-[4rem]">
      {children}
    </div>
  );
};

export default ArticleContainer;
