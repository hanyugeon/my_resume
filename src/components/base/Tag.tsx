type TagProps = {
  label: string;
};

const Tag = ({ label }: TagProps) => {
  return (
    <div className="rounded-[0.4rem] p-[0.1rem] m-0 border-[0.1rem] border-blue">
      <p className="h-[1.2rem] text-sm text-blue font-bold">{label}</p>
    </div>
  );
};

export default Tag;
