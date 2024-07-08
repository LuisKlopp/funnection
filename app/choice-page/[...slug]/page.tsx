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
        <div>
          <span className="text-center text-3xl text-slate-700 mdl:hidden">
            OX {choice.id}번 질문
          </span>
        </div>
        <div className="hidden w-full justify-center mdl:flex">
          <span className="break-normal text-center text-4xl font-semibold text-slate-700">
            {choice.id}.&nbsp;
          </span>
          <span className="break-keep text-center text-4xl font-normal text-slate-700">
            {choice.question}
          </span>
        </div>
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
