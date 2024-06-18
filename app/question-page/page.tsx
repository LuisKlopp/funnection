import { fetchQuestions } from "@/api/fetchQuestions";
import { QuestionList } from "@/components/question/question-list";

export default async function QuestionPage() {
  const questions = await fetchQuestions();
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center gap-4">
      <QuestionList initialQuestions={questions} />
    </div>
  );
}
