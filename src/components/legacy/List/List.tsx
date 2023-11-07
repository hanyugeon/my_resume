const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="ml-[0.8rem] whitespace-pre list-disc list-inside text-gray text-[1.4rem] font-medium marker:text-gray">
      {children}
    </ul>
  );
};

export default List;
