import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-10">
      <span className="text-4xl text-slate-700 mdl:text-6xl">
        Funnection
      </span>
      <Link
        href="/choice-page"
        className="button-base mb-4 flex w-[150px] items-center justify-center !bg-white !text-slate-500 mdl:w-[250px]"
      >
        시작하기
      </Link>
    </div>
  );
}
