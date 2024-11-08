import { CoverLetter, Profile } from "@/components/domain/about";
import {
  Section,
  Dadok,
  DadokBeta,
  CryptoKeycap,
  NextjsKr,
  DevCourse,
  Wku,
} from "@/components/domain/experience";

export default function Home() {
  return (
    <main className="flex flex-col gap-[2.4rem] justify-center">
      <Profile />
      <CoverLetter />

      <Section label="프로젝트">
        <Dadok />
        <DadokBeta />
        <CryptoKeycap />
      </Section>
      <Section label="활동">
        <NextjsKr />
      </Section>

      <Section label="학력">
        <DevCourse />
        <Wku />
      </Section>
    </main>
  );
}
