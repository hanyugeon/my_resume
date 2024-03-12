import { useMemo } from "react";

import { Catamaran } from "@/styles/fonts";

type SizeTypes = "xl" | "lg";

type TitleProps = {
  size: SizeTypes;
  label: string;
  motto?: string;
};

const getTitleSize = (size: SizeTypes) => {
  switch (size) {
    case "xl":
      return "text-xl";
    case "lg":
      return "text-lg";
  }
};

const STATIC_CLASS = "flex flex-row font-bold";

const Title = ({ size, label, motto }: TitleProps) => {
  const computedClasses = useMemo(() => {
    const sizeClass = getTitleSize(size);

    return [sizeClass].join("");
  }, [size]);

  return (
    <div
      className={`${STATIC_CLASS} ${computedClasses} ${Catamaran.variable} font-catamaran`}
    >
      <p className="text-black">{label}</p>
      {motto && (
        <>
          <p className="text-blue mx-[0.4rem]">|</p>
          <p className="text-black">{motto}</p>
        </>
      )}
      <p className="text-blue">.</p>
    </div>
  );
};

export default Title;
