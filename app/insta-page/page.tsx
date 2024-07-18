import Insta from "@/public/insta-image.webp";
import Image from "next/image";

export default async function InstaPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <h1 className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl">
        인스타 공유 합시다!
      </h1>
      <Image priority width={300} src={Insta} alt="insta-image" />
    </div>
  );
}
