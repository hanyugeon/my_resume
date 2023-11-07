import Image from "next/image";
import Link from "next/link";

type IconTypes = "link" | "github";

export type ButtonProps = {
  label: string;
  icon: string;
  url: string;
};

const Button = ({ label, icon, url }: ButtonProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel={"noreferrer"}
      className="w-[9.2rem] text-white bg-blue rounded-[0.6rem] p-[0.6rem]"
    >
      <button className="flex flex-row gap-[0.3rem] align-center">
        {icon && (
          <Image
            src={`/ic_${icon}.svg`}
            width={17}
            height={17}
            alt={`${label}`}
            className="w-[1.7rem] h-[1.7rem]"
          />
        )}
        <p className="flex w-[6.3rem] justify-center text-md font-bold text-white font-medium">
          {label}
        </p>
      </button>
    </Link>
  );
};

export default Button;
