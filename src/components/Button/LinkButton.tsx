import Image from "next/image";
import Link from "next/link";

type IconTypes = "link" | "github" | "web";

type LinkButtonProps = {
  label: string;
  icon?: IconTypes;
  url: string;
};

const LinkButton = ({ label, icon, url }: LinkButtonProps) => {
  return (
    <Link href={url} target="_blank" rel={"noreferrer"}>
      <button className="flex justify-left align-middle px-[1.2rem] py-[0.6rem] space-x-[0.4rem] rounded-[0.8rem] bg-azure">
        {icon && (
          <Image
            src={`/ic_${icon}.svg`}
            width={21}
            height={21}
            alt="buttonIcon"
          />
        )}
        <span className="text-[1.4rem] text-white font-medium">{label}</span>
      </button>
    </Link>
  );
};

export default LinkButton;
