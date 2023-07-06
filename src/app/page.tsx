import { Programmers, WonKwang } from "@/components/Education/";
import { ArticleContainer, ArticleTitle } from "@/components/Experience";
import { CryptoKeycap, NextjsTranslate } from "@/components/Others";
import {
  NextjsPlayground,
  DadokDadok,
  SWithMe,
  HarryGemz,
  SpringBootWebService,
} from "@/components/Projects";

export default function Home() {
  return (
    <main className="grid gap-[2.8rem] justify-center">
      <ArticleContainer>
        <ArticleTitle title="프로젝트" />
        <NextjsPlayground />
        <DadokDadok />
        <SWithMe />
        <HarryGemz />
        <SpringBootWebService />
      </ArticleContainer>
      <ArticleContainer>
        <ArticleTitle title="이외 활동" />
        <NextjsTranslate />
        <CryptoKeycap />
      </ArticleContainer>
      <ArticleContainer>
        <ArticleTitle title="교육 활동" />
        <Programmers />
        <WonKwang />
      </ArticleContainer>
    </main>
  );
}
