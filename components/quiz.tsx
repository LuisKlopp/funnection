import { QuizType } from "@/types/quiz.types";
import axios from "axios";
import Link from "next/link";

const fetchQuizzes = async (): Promise<QuizType[]> => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz`);
  return response.data;
};

const QuizPage = async () => {
  const quizzes = await fetchQuizzes();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl">펀넥션 박스 선택</h1>
      <div className="flex gap-4 justify-center">
        {quizzes.map((q) => (
          <Link
            key={q.id}
            className="border-2 bg-white border-slate-500 px-2 cursor-pointer text-lg"
            href={`/main-page/${q.id}`}
          >
            {q.id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
