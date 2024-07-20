import Insta from "@/public/insta-image.webp";
import Image from "next/image";

export default async function InstaPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-medium text-slate-700 md:pb-10 mdl:text-4xl">
        바로 맞팔 갑니다~
      </h1>
      <div className="flex flex-col gap-8">
        <span className="text-2xl">호스트 계정 :</span>
        <div className="w-full overflow-hidden rounded-xl border-4 border-black">
          <Image priority width={300} src={Insta} alt="insta-image" />
        </div>
      </div>
    </div>
  );
}
