import { QuestionType } from "@/types/question.types";
import axios from "axios";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type QuestionDetailPageProps = {
  params: { slug: string[] };
};

const fetchQuestionDetail = async (id: string): Promise<QuestionType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/question/${id}`,
  );
  return response.data;
};

const QuestionDetailPage = async ({ params }: QuestionDetailPageProps) => {
  const id = params.slug[0];
  const question = await fetchQuestionDetail(id);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <Link href={"/question-page"} className="absolute left-10 top-5">
        <MoveLeft size={48} />
      </Link>
      <div className="flex justify-center break-words whitespace-normal">
        <span className="text-4xl text-slate-700 font-semibold text-center font-pretendard">
          {question.question}
        </span>
      </div>
      <div className="w-[500px] flex justify-center overflow-hidden break-words whitespace-normal">
        <span className="text-lg text-slate-700 font-semibold text-center font-pretendard">
          {question.answers.map((answer) => (
            <div key={answer.id} className="fade-in-up">
              {answer.answer}
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
