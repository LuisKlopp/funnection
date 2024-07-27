import Link from "next/link";

export default async function DiningPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <Link
        href={"/insta-page"}
        className="text absolute left-10 top-10 text-lg"
      >
        뒤로가기
      </Link>
      <h1 className="font-medium text-slate-700 md:pb-10 mdl:text-5xl">
        다이닝 타임 (2차)
      </h1>
      <div className="flex flex-col gap-8 text-center">
        <div className="flex">
          <span className="text-xl text-[#478324]">
            2시간 추가 대관
          </span>
          <span className="text-xl">&nbsp;+&nbsp;</span>
          <span className="text-xl text-[#8f1e1e]">
            호스트가 준비한 와인
          </span>
          <span className="text-xl">&nbsp;+&nbsp;</span>
          <span className="text-xl text-[#255099]">
            맥주 or 음료 한 캔 😆
          </span>
        </div>
        <span className="text-xl text-[#2e3135]">
          3333 13 3833842 카카오뱅크 류현
        </span>
      </div>
    </div>
  );
}
