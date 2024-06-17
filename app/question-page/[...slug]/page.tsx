import { QuestionSubmitBox } from "@/components/question-submit-box";
import { ReloadButton } from "@/components/reload-button";
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
      <div className="w-full flex justify-center px-4 gap-4">
        <span className="text-4xl text-slate-700 font-medium text-center break-keep">
          {question.id}. {question.question}
        </span>
      </div>
      <div className="w-full mdl:hidden">
        <QuestionSubmitBox questionId={id} />
      </div>
      <div className="w-[500px] hidden mdl:flex flex-col gap-10 items-center">
        <div className="w-full flex flex-col gap-2">
          {question.answers.map((answer, index) => (
            <div
              key={answer.id}
              className="fade-in-up text-lg text-slate-700 font-semibold font-pretendard"
            >
              <span className="text-slate-500">{index + 1}. </span>
              <span className="text-gray-700">{answer.answer}</span>
            </div>
          ))}
        </div>
        <ReloadButton />
      </div>
    </div>
  );
};

export default QuestionDetailPage;
