import Link from "next/link";

export default async function DetailSchedule() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 px-10 text-3xl text-[#094585] mdl:px-0 mdl:text-4xl">
        <span className="mb-8 px-10 text-4xl text-slate-800 mdl:px-0 mdl:text-6xl">
          소셜링 순서는?
        </span>
        <span>1. 자기소개</span>
        <span>2. Funnection OX</span>
        <span>3. Funnection 단답</span>
        <span>4. Funnection 밸런스</span>
        <span>5. (비공개)</span>
        <span>6. 롤링페이퍼</span>
      </div>
      <Link
        href={"/choice-page"}
        className="button-base button-active custom-button absolute bottom-5 right-10 mb-4 !bg-white !text-slate-500"
      >
        OX 카드로 이동
      </Link>
    </div>
  );
}
