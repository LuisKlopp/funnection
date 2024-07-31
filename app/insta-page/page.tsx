import Insta from "@/public/insta-image.webp";
import Image from "next/image";
import Link from "next/link";

export default async function InstaPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <Link
        href={"/"}
        className="text absolute left-10 top-10 text-lg"
      >
        뒤로가기
      </Link>
      <Link
        href={"dining-page/"}
        className="absolute right-10 top-10 text-lg"
      >
        다이닝
      </Link>
      <h1 className="text-2xl font-medium text-slate-700 md:pb-10 mdl:text-4xl">
        호스트 인스타
      </h1>
      <div className="flex gap-72">
        <div className="flex flex-col gap-8">
          <span className="text-2xl">호스트 엘리오 계정 :</span>
          <div className="w-full overflow-hidden rounded-xl border-4 border-black">
            <Image
              priority
              height={300}
              src={Insta}
              alt="insta-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
