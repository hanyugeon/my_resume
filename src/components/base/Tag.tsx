type TagProps = {
  label: string;
};

const Tag = ({ label }: TagProps) => {
  return (
    <div className="rounded-[0.4rem] px-[0.4rem] border-[0.1rem] border-main">
      <p className="text-sm text-main font-bold">{label}</p>
    </div>
  );
};

export default Tag;
