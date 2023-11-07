import { GradientBar } from "@/components/base";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="max-w-[59.5rem] p-[4rem] mx-auto my-0 h-full">
      <header className="absolute left-0 top-0 w-full">
        <GradientBar />
      </header>
      {children}
    </body>
  );
};

export default Layout;
