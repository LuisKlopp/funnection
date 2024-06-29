import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 px-10 text-3xl text-[#094585] mdl:px-0 mdl:text-4xl">
        <span className="mb-8 px-10 text-4xl text-slate-800 mdl:px-0 mdl:text-6xl">
          Funnection에 오신걸 환영합니다 :)
        </span>
        <span>1. 닉네임은 무슨 의미인가요?</span>
        <span>2. 이번 소셜링에서 기대하는점은 무엇인가요?</span>
        <span>3. 한 줄 자기소개 부탁드려요~</span>
      </div>
      <Link
        href={"/detail-schedule"}
        className="button-base button-active custom-button absolute bottom-5 right-10 mb-4 !bg-white !text-slate-500"
      >
        소셜링 순서로 이동
      </Link>
    </div>
  );
}
