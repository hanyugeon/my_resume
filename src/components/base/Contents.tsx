export type ContentsProps = {
  name: string;
  description: string[];
};

const Contents = ({ name, description }: ContentsProps) => {
  return (
    <ul className="text-md">
      <li className="font-bold">{name}</li>
      {description.map((item, idx) => (
        <li
          key={`${name}-${idx}`}
          className="list-disc list-outside ml-[0.8rem]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Contents;
