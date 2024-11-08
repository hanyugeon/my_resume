import { GradientBar } from "@/components/base";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const responsiveClasses = "md:p-[4rem] p-[2rem]";

  return (
    <body
      className={`max-w-[59.5rem] mx-auto my-0 h-full ${responsiveClasses}`}
    >
      <GradientBar />
      {children}
    </body>
  );
};

export default Layout;
