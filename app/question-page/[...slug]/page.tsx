import { QuestionSubmitBox } from "@/components/question/question-submit-box";
import { ReloadButton } from "@/components/question/reload-button";
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
          <span className="break-normal text-center text-4xl font-semibold text-slate-700">
            {question.id}.&nbsp;
          </span>
          <span className="break-keep text-center text-4xl font-normal text-slate-700">
            {question.question}
          </span>
        </div>
      </div>
      <div className="w-full mdl:hidden">
        <QuestionSubmitBox questionId={id} />
      </div>
      <div className="hidden w-[500px] flex-col items-center gap-10 mdl:flex">
        <div className="flex w-full flex-col gap-2">
          {question.answers.map((answer, index) => (
            <div
              key={answer.id}
              className="fade-in-up rounded-lg bg-zinc-200 px-4 py-2 text-[22px] shadow-lg"
            >
              <span className="text-slate-500">{index + 1}. </span>
              <span className="font-semibold text-slate-600">
                {answer.answer}
              </span>
            </div>
          ))}
        </div>
        <ReloadButton />
      </div>
    </div>
  );
};

export default QuestionDetailPage;
