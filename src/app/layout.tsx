import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이력서 - 김재현 (FE 개발자)",
  description: "나의 첫 이력서, my first resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body>
        <div className="flex bg-gradient-to-r from-lavender to-mint w-full h-[1rem] mb-[2.8rem]" />
        {children}
      </body>
    </html>
  );
}
