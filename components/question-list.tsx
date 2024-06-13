import { cn } from "@/lib/utils";
import { QuestionType } from "@/types/question.types";
import axios from "axios";
import Link from "next/link";

const fetchQuestions = async (): Promise<QuestionType[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/question`,
  );
  return response.data;
};

const QuestionList = async () => {
  const questions = await fetchQuestions();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl">펀넥션 박스 선택</h1>
      <div className="flex gap-4 justify-center">
        {questions.map((question) => (
          <Link
            key={question.id}
            className={cn("button-base select-box button-active", {
              "clicked-style": question.isClicked,
            })}
            href={`/question-page/${question.id}`}
          >
            {question.id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
