import { PropsWithChildren } from "react";

import { Catamaran } from "@/styles/fonts";

type HeadingSize = "h1" | "h2" | "h3" | "h4";
type HeadingProps = PropsWithChildren<{
  size: HeadingSize;
}>;

const Heading = ({ size, children }: HeadingProps) => {
  const fontClasses = `${Catamaran.variable} font-catamaran`;

  switch (size) {
    case "h1":
      return (
        <h1 className={fontClasses}>
          {children}
          <span className="text-main">.</span>
        </h1>
      );
    case "h2":
      return (
        <h2 className={fontClasses}>
          {children}
          <span className="text-main">.</span>
        </h2>
      );
    case "h3":
      return (
        <h3 className={fontClasses}>
          {children}
          <span className="text-main">.</span>
        </h3>
      );
    case "h4":
      return (
        <h4 className={fontClasses}>
          {children}
          <span className="text-main">.</span>
        </h4>
      );
  }
};

export default Heading;
