import { GradientBar } from "@/components/base";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="max-w-[59.5rem] sm:p-[4rem] p-[2rem] mx-auto my-0 h-full">
      <header className="absolute left-0 top-0 w-full">
        <GradientBar />
      </header>
      <p className="text-center text-md font-dark italic sm:pb-[4rem] pb-[2rem]">
        해당 웹페이지는 A4용지에 최적화되어 있습니다.
      </p>
      {children}
    </body>
  );
};

export default Layout;
