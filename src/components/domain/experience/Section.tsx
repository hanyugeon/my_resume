import { PropsWithChildren } from "react";

import { Heading } from "@/components/base";

type SectionProps = PropsWithChildren<{
  label: string;
}>;

const Section = ({ label, children }: SectionProps) => {
  return (
    <section className="flex flex-col gap-[0.4rem] w-full">
      <header className="relative flex text-black text-lg font-bold w-full h-[2.6rem]">
        <Heading size="h2">{label}</Heading>
        <div className="absolute bottom-0 left-0 flex bg-main w-full h-[0.1rem]" />
      </header>
      {children}
    </section>
  );
};

export default Section;
