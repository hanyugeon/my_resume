import type { Metadata } from "next";

import { Pretendard } from "@/styles/fonts";
import "../styles/globals.css";

import { Layout } from "@/components/template";

export const metadata: Metadata = {
  title: "이력서 - 김재현 (프론트엔드 개발자)",
  description: "resume - harry (FrontEnd Engineer)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${Pretendard.variable} font-pretendard `}>
      <Layout>{children}</Layout>
    </html>
  );
}
