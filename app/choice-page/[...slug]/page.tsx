import { fetchChoice } from "@/api/fetchChoiceList";
import { ChoiceCounter } from "@/components/choice/choice-counter";
import Link from "next/link";

type ChoiceDetailPageProps = {
  params: { slug: string[] };
};

const ChoiceDetailPage = async ({
  params,
}: ChoiceDetailPageProps) => {
  const id = params.slug[0];
  const choice = await fetchChoice(id);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Link href={"/choice-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex justify-center gap-4 whitespace-normal break-words px-4">
        <span className="break-normal text-center text-3xl font-semibold text-slate-700 mdl:text-4xl">
          {choice.id}.
        </span>
        <span className="break-keep text-center text-3xl font-normal text-slate-700 mdl:text-4xl">
          {choice.question}
        </span>
      </div>
      <div className="w-full">
        <ChoiceCounter
          id={id}
          initialLeft={choice.yesCount}
          initialRight={choice.noCount}
        />
      </div>
    </div>
  );
};

export default ChoiceDetailPage;
