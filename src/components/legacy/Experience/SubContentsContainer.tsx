type ChildrenType = {
  children: React.ReactNode;
};

const SubContentsContainer = ({ children }: ChildrenType) => {
  return (
    <div className="flex flex-col gap-[1.6rem] min-w-[15rem] py-[0.8rem]">
      {children}
    </div>
  );
};

export default SubContentsContainer;
