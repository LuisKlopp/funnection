import { QuestionList } from "@/components/question/question-list";

export default async function QuestionPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <QuestionList />
    </div>
  );
}
