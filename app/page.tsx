import { LinkButton } from "@/components/link-button";

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-10">
      <span className="text-4xl text-slate-700 mdl:text-6xl">
        Funnection
      </span>
      <div className="flex flex-col">
        <LinkButton href="/choice-page" title="OX 카드로 이동" />
        <LinkButton href="/question-page" title="단답 카드로 이동" />
        <LinkButton href="/balance-page" title="밸런스 카드로 이동" />
      </div>
    </div>
  );
}
