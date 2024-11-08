import { coverLetter } from "@/data/profile/coverLetter";

const CoverLetter = () => {
  const contents = coverLetter.contents;

  return (
    <section className="flex flex-col gap-[0.8rem] w-full">
      {contents.map((value) => (
        <p key={value.title}>
          <span className="font-bold">{`${value.title} `}</span>
          {value.description}
        </p>
      ))}
    </section>
  );
};

export default CoverLetter;
