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
        <LinkButton href="/choice-page" title="Funnection OX" />
        <LinkButton href="/question-page" title="Funnection 단답" />
        <LinkButton href="/balance-page" title="Funnection 밸런스" />
      </div>
    </div>
  );
}
