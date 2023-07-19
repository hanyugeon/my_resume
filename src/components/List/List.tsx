const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="list-disc text-gray text-[1.4rem] font-medium ml-[1.2rem]">
      {children}
    </ul>
  );
};

export default List;
