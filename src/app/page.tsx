import { ArticleContainer, ArticleTitle } from "@/components/Experience";
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
    </main>
  );
}
