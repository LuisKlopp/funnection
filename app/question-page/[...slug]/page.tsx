import { QuestionTitle } from "@/components/question-title";
import { QuestionCounter } from "@/components/question/question-counter";
import { QuestionSubmitBox } from "@/components/question/question-submit-box";
import { QuestionType } from "@/types/question.types";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type QuestionDetailPageProps = {
  params: { slug: string[] };
};

const fetchQuestionDetail = async (
  id: string,
): Promise<QuestionType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/question/${id}`,
    {
      cache: "no-store",
    },
  );
  const data = response.json();
  return data;
};

const QuestionDetailPage = async ({
  params,
}: QuestionDetailPageProps) => {
  const id = params.slug[0];
  const question = await fetchQuestionDetail(id);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Link
        href={"/question-page"}
        className="absolute left-10 top-5"
      >
        <MoveLeft size={48} />
      </Link>
      <div className="flex w-full justify-center gap-4 px-4">
        <div>
          <span className="text-center text-3xl text-slate-700 mdl:hidden">
            단답 {question.id}번 질문
          </span>
        </div>
        <div className="hidden w-full justify-center mdl:flex">
          <QuestionTitle>{question.id}.&nbsp;</QuestionTitle>
          <QuestionTitle>{question.question}</QuestionTitle>
        </div>
      </div>
      <div className="w-full mdl:hidden">
        <QuestionSubmitBox questionId={id} />
      </div>
      <QuestionCounter questionId={id} />
    </div>
  );
};

export default QuestionDetailPage;
