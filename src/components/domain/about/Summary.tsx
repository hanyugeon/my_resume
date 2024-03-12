import Link from "next/link";

import { Title } from "@/components/base";

const Summary = () => {
  return (
    <header className="flex flex-row w-full h-[6.4rem] justify-between">
      <NameAndJob />
      <Contact />
    </header>
  );
};

export default Summary;

const NameAndJob = () => {
  return (
    <hgroup className="flex flex-col gap-[1.3rem] h-full">
      <Title label="김재현" motto="가치를 더하는 개발자" size="xl" />
      <p className="text-dark text-md font-bold">
        UI와 개발 환경에 좋은 경험을 제공합니다.
      </p>
    </hgroup>
  );
};

const Contact = () => {
  return (
    <address className="flex flex-col gap-[0.2rem] h-full text-sm text-dark not-italic">
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/hanyugeon"
          target="_blank"
          rel={"noreferrer"}
          className="underline"
        >
          https://github.com/hanyugeon
        </Link>
      </p>
      <p>
        Blog:{" "}
        <Link
          href="https://hanyugeon.tistory.com/"
          target="_blank"
          rel={"noreferrer"}
          className="underline"
        >
          https://hanyugeon.tistory.com/
        </Link>
      </p>
      <p>E-Mail: hanyugeon@naver.com</p>
      <p>Phone: 010-7593-6115</p>
    </address>
  );
};
