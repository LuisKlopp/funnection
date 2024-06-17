import { ChoiceCounter } from "@/components/choice-counter";
import { ChoiceType } from "@/types/quiz.types";
import axios from "axios";
import Link from "next/link";

type ChoiceDetailPageProps = {
  params: { slug: string[] };
};

const fetchChoiceDetail = async (id: string): Promise<ChoiceType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/choice/${id}`,
  );
  return response.data;
};

const ChoiceDetailPage = async ({ params }: ChoiceDetailPageProps) => {
  const id = params.slug[0];
  const choice = await fetchChoiceDetail(id);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <Link href={"/choice-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex justify-center break-words whitespace-normal px-4 gap-4">
        <span className="text-4xl text-slate-700 font-semibold text-center break-normal">
          {choice.id}.
        </span>
        <span className="text-4xl text-slate-700 font-normal text-center break-keep">
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
