import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import { QuizType } from "@/types/quiz.types";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const fetchBalanceQuizzes = async (): Promise<QuizType[]> => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz`);
  return response.data;
};

export const BalanceQuizList = async () => {
  const quizzes = await fetchBalanceQuizzes();

  return (
    <div className="flex flex-col gap-4 items-center h-full">
      <h1 className="text-4xl font-medium text-slate-700 md:pt-32 md:pb-10 pt-5">
        밸런스 카드
      </h1>
      <div className="flex gap-5 md:gap-10 flex-wrap p-4 overflow-y-scroll justify-center border-4 border-t-slate-500 border-b-slate-500 md:border-none">
        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            className={cn("button-base mobile-select-box-white button-active", {
              "mobile-select-box-black": quiz.isClicked,
            })}
            href={`/balance-page/${quiz.id}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={CardSelect}
                alt="card-select"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div
                className={cn(
                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#3c4859]",
                  {
                    "text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]":
                      quiz.isClicked,
                  },
                )}
              >
                {quiz.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href={"/balance-page"}
        className="bg-slate-500 p-4 rounded-lg text-white mb-4"
      >
        O X 게임으로 이동
      </Link>
    </div>
  );
};
