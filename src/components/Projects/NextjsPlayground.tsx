import { LinkButton } from "@/components/Button";
import {
  MainContentsContainer,
  SectionContainer,
  SubContentsContainer,
} from "@/components/Experience";
import { List, ListItem } from "@/components/List";

const NextjsPlayground = () => {
  return (
    <SectionContainer>
      <SubContentsContainer>
        <div className="flex flex-col gap-[0rem] w-full text-gray text-[1.4rem]">
          <text>2023.02 - 2023.05</text>
          <text>(2개월)</text>
          <text>개인 프로젝트</text>
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
            <text className="text-black text-[2.4rem] font-bold">
              NextJS13 Playground
              <text className="text-azure">.</text>
            </text>
          </div>
          <text className="text-black text-[1.8rem] font-semibold">
            Next.js(app), 성능 개선 등 새로운것을 시도하는 토이 프로젝트
          </text>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            주요 기능 구현
          </text>
          <List>
            <ListItem>{`반응형 UI`}</ListItem>
            <ListItem>{`모바일전용 사이드바 구현`}</ListItem>
            <ListItem>{`SSR, ISR(SSG) 적용`}</ListItem>
            <ListItem>{`스켈레톤UI 및 Suspense 적용`}</ListItem>
            <ListItem>{`vercel을 활용한 배포 환경 구축`}</ListItem>
          </List>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            페이지 성능 개선 (CLS, LCP, TTI)
          </text>
          <List>
            <ListItem>{`컨탠츠 영역의 사이즈를 사전에 정의 및 확보 → LayoutShift 차단`}</ListItem>
            <ListItem>{`LazyLoading 적용 → 초기 렌더링시 네트워크 통신 부담 감소`}</ListItem>
            <ListItem>{`.avif 이미지 최적화 (.webp fallback 지원)</span>`}</ListItem>
            <ListItem>{`.woff2 폰트, 로컬 단일 폰트를 적용</span>`}</ListItem>
            <ListItem>{`사전에 이미지 사이즈를 정의 → 렌더링시 서버측 부담 감소`}</ListItem>
          </List>
        </div>
        <div className="grid gap-[0.4rem]">
          <text className="text-black text-[1.6rem] font-semibold">
            기술 스택
          </text>
          <List>
            <ListItem>{`TypeScript, Next.js(app), emotion, Recoil, vercel`}</ListItem>
          </List>
        </div>
      </MainContentsContainer>
    </SectionContainer>
  );
};

export default NextjsPlayground;
