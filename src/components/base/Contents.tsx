export type ContentsProps = {
  name: string;
  description: string[];
};

const Contents = ({ name, description }: ContentsProps) => {
  return (
    <ul className="text-md list-inside">
      <li className="font-bold">{name}</li>
      {description.map((item, idx) => (
        <li key={`${name}-${idx}`} className="list-disc ml-[0.4rem]">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Contents;
