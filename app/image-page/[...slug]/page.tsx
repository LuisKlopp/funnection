import { fetchImageGame } from "@/api/fetchImageGameList";
import Link from "next/link";

type ImageGameDetailPageProps = {
  params: { slug: string[] };
};

const ImageGameDetailPage = async ({
  params,
}: ImageGameDetailPageProps) => {
  const id = params.slug[0];
  const imageGame = await fetchImageGame(id);
  const imageQuestion = imageGame.question;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Link href={"/image-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex justify-center gap-4 whitespace-normal break-words px-4">
        <span className="break-normal text-center text-3xl font-semibold text-slate-700 mdl:text-4xl">
          {imageQuestion.id}.
        </span>
        <span className="break-keep text-center text-3xl font-normal text-slate-700 mdl:text-4xl">
          {imageQuestion.question}
        </span>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default ImageGameDetailPage;
