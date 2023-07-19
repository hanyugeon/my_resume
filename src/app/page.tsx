import { Programmers, WonKwang } from "@/components/Education/";
import { ArticleContainer, ArticleTitle } from "@/components/Experience";
import { Introduction, Prologue } from "@/components/Header";
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
    <main className="grid gap-[3rem] justify-center">
      <ArticleContainer>
        <Introduction />
        <Prologue />
      </ArticleContainer>
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
