type ChildrenType = {
  children: React.ReactNode;
};

const SectionContainer = ({ children }: ChildrenType) => {
  return <div className="flex gap-[0.8rem] w-full p-[0.8rem]">{children}</div>;
};

export default SectionContainer;
