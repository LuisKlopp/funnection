import QuestionList from "@/components/question-list";

export default function QuestionPage() {
  return (
    <div className="w-full max-w-xl h-[100dvh] flex flex-col justify-center items-center gap-4">
      <QuestionList />
    </div>
  );
}
