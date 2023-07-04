"use client";

import Image from "next/image";
import Link from "next/link";

type ButtonTypes = {
  text: string;
  linkType: string;
  href: string;
};

const Button = ({ text, linkType, href }: ButtonTypes) => {
  return (
    <Link href={href} aria-label={linkType} target="_blank" rel={"noreferrer"}>
      <button className="flex justify-center align-middle relative px-[1.2rem] py-[0.6rem] space-x-[0.4rem] rounded-[0.8rem] bg-azure">
        <Image
          src={`/ic_${linkType}.svg`}
          width={21}
          height={21}
          alt="buttonIcon"
        />
        <span className="text-[1.4rem] text-white font-medium">{text}</span>
      </button>
    </Link>
  );
};

export default Button;
