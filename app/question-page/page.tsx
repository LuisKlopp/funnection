import { QuestionList } from "@/components/question/question-list";

export default function QuestionPage() {
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center gap-4">
      <QuestionList />
    </div>
  );
}
