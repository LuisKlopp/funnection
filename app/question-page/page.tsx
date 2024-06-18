import { QuestionList } from "@/components/question/question-list";
import { QuestionType } from "@/types/question.types";

const fetchQuestions = async (): Promise<QuestionType[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/question`, {
    cache: "no-store",
  });
  const data = response.json();
  return data;
};

export default async function QuestionPage() {
  const questions = await fetchQuestions();
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center gap-4">
      <QuestionList questions={questions} />
    </div>
  );
}
