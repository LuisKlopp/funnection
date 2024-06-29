import Link from "next/link";

export default async function IntroducePage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 text-4xl text-[#094585]">
        <span className="mb-8 text-6xl text-slate-800">
          반가워요~
        </span>
        <span>1. 닉네임은 무슨 의미인가요?</span>
        <span>2. 이번 소셜링에서 기대하는점은 무엇인가요?</span>
        <span>3. 한 줄 자기소개 부탁드려요~</span>
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
