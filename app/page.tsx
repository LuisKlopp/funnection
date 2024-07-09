import { LinkButton } from "@/components/button/link-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center gap-10">
      <Link
        href="/image-page"
        className="cursor-default text-5xl text-slate-700 mdl:text-6xl"
      >
        Funnection
      </Link>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <LinkButton href="/choice-page" title="OX 카드" />
        <LinkButton href="/question-page" title="단답 카드" />
        <LinkButton href="/balance-page" title="밸런스 카드" />
        <LinkButton href="/personal-page" title="퍼스널 카드" />
      </div>
    </div>
  );
}
