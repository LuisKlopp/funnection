import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import { QuestionType } from "@/types/question.types";
import axios from "axios";
import Image from "next/image";
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
    <div className="flex flex-col gap-4 items-center h-full">
      <h1 className="text-4xl px-5 font-semibold text-slate-700 pt-15">
        질문 카드
      </h1>
      <div className="flex gap-5 md:gap-10 flex-wrap p-4 overflow-y-scroll">
        {questions.map((question) => (
          <Link
            key={question.id}
            className={cn("button-base mobile-select-box-white button-active", {
              "mobile-select-box-black": question.isClicked,
            })}
            href={`/question-page/${question.id}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={CardSelect}
                alt="card-select"
                layout="fill"
                objectFit="cover"
              />
              <div
                className={cn(
                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#3c4859] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]",
                  {
                    "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]":
                      question.isClicked,
                  },
                )}
              >
                {question.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
