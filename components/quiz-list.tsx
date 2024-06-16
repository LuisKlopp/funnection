import { cn } from "@/lib/utils";
import { QuizType } from "@/types/quiz.types";
import axios from "axios";
import Link from "next/link";

const fetchBalanceQuizzes = async (): Promise<QuizType[]> => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz`);
  return response.data;
};

const balanceQuizList = async () => {
  const quizzes = await fetchBalanceQuizzes();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl">펀넥션 박스 선택</h1>
      <div className="flex gap-4 justify-center">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            className={cn("button-base select-box button-active", {
              "clicked-style": quiz.isClicked,
            })}
            href={`/balance-page/${quiz.id}`}
          >
            {quiz.id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default balanceQuizList;
