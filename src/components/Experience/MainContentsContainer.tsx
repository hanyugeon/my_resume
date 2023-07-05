type ChildrenType = {
  children: React.ReactNode;
};

const MainContentsContainer = ({ children }: ChildrenType) => {
  return <div className="grid gap-[0.8rem] w-full">{children}</div>;
};

export default MainContentsContainer;
