import { fetchImageGame } from "@/api/fetchImageGameList";
import Link from "next/link";

import { ImageGameCounter } from "@/components/image-game/image-game-counter";
import { QuestionTitle } from "@/components/question-title";

type ImageGameDetailPageProps = {
  params: { slug: string[] };
};

const ImageGameDetailPage = async ({
  params,
}: ImageGameDetailPageProps) => {
  const id = params.slug[0];
  const imageGame = await fetchImageGame(id);
  const imageQuestion = imageGame.question;
  const imageUsers = imageGame.users;

  const removeElioUser = imageUsers.filter((user) => user.id !== 28);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Link href={"/image-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div>
        <span className="text-center text-3xl text-slate-700 mdl:hidden">
          이미지게임 {id}번 질문
        </span>
      </div>
      <div className="hidden justify-center gap-4 whitespace-normal break-words px-4 mdl:mb-14 mdl:flex">
        <QuestionTitle>{imageQuestion.id}.</QuestionTitle>
        <QuestionTitle>{imageQuestion.question}</QuestionTitle>
      </div>
      <ImageGameCounter
        imageId={imageQuestion.id}
        initialImageUsers={removeElioUser}
      />
    </div>
  );
};

export default ImageGameDetailPage;
