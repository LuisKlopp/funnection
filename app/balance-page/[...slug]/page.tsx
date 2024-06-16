import YesNoCounter from "@/components/yes-no-counter";
import { QuizType } from "@/types/quiz.types";
import axios from "axios";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type BalanceDetailPageProps = {
  params: { slug: string[] };
};

const fetchBalanceDetail = async (id: string): Promise<QuizType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${id}`,
  );
  return response.data;
};

const BalanceDetailPage = async ({ params }: BalanceDetailPageProps) => {
  const id = params.slug[0];
  const quiz = await fetchBalanceDetail(id);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <Link href={"/balance-page"} className="absolute left-10 top-5">
        <MoveLeft size={48} />
      </Link>
      <div className="flex justify-center break-words whitespace-normal">
        <span className="text-5xl text-slate-700 font-semibold text-center font-pretendard">
          {quiz.question}
        </span>
      </div>
      <div>
        <YesNoCounter id={id} initialYes={quiz.yes} initialNo={quiz.no} />
      </div>
    </div>
  );
};

export default BalanceDetailPage;
