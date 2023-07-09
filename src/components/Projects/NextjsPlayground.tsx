import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";

const NextjsPlayground = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <span>2023.02 - 2023.05</span>
          <span>(2개월)</span>
          <span>개인 프로젝트</span>
        </div>
        <div className="flex flex-col w-full gap-[0.8rem]">
          <LinkButton
            label="배포 주소"
            icon="link"
            url="https://next-js-13-playground-eight.vercel.app/"
          />
          <LinkButton
            label="와이어프레임"
            icon="link"
            url="https://www.figma.com/file/DYOIDHAtCfq2tnOBoVVCjY/NEXT.js13-PLAYGROUND?type=design&node-id=0%3A1&t=eIW7WIvbc8K0bjdi-1"
          />
          <LinkButton
            label="깃허브"
            icon="github"
            url="https://github.com/hanyugeon/NextJS13_Playground"
          />
          <LinkButton
            label="웹 성능 측정"
            icon="web"
            url="https://pagespeed.web.dev/analysis/https-next-js-13-playground-eight-vercel-app/wmwsoomsg6?form_factor=desktop"
          />
        </div>
      </SubContentsContainer>
      <MainContentsContainer>
        <div className="grid gap-[0.4rem]">
          <div className="flex gap-[0rem]">
            <span className="text-black text-[2.4rem] font-bold">
              NextJS13 Playground
              <span className="text-azure">.</span>
            </span>
          </div>
          <span className="text-black text-[1.8rem] font-semibold">
            Next.js(app), 성능 개선 등 새로운것을 시도하는 토이 프로젝트
          </span>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            주요 기능 구현
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span> - 반응형 UI</span>
            <span> - 모바일전용 사이드바 구현</span>
            <span> - SSR, ISR(SSG) 적용</span>
            <span> - 스켈레톤UI 및 Suspense 적용</span>
            <span> - vercel을 활용한 배포 환경 구축</span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            페이지 성능 개선 (CLS, LCP, TTI)
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span>
              - 컨탠츠 영역의 사이즈를 사전에 정의 및 확보 → LayoutShift 차단
            </span>
            <span>
              - LazyLoading 적용 → 초기 렌더링시 네트워크 통신 부담 감소
            </span>
            <span> - .avif 이미지 최적화 (.webp fallback 지원)</span>
            <span> - .woff2 폰트, 로컬 단일 폰트를 적용</span>
            <span>
              - 사전에 이미지 사이즈를 정의 → 렌더링시 서버측 부담 감소
            </span>
          </div>
        </div>
        <div className="grid gap-[0.4rem]">
          <span className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </span>
          <div className="grid gap-[0rem] text-gray text-[1.4rem] font-medium">
            <span>TypeScript, Next.js(app), emotion, Recoil, vercel</span>
          </div>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default NextjsPlayground;
