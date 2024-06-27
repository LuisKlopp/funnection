"use client";

import { useEffect, useState } from "react";
import { fetchQuestionList } from "@/api/fetchQuestionList";
import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import Image from "next/image";
import Link from "next/link";
import { QuestionType } from "@/types/question.types";
import {
  getQuestions,
  saveQuestions,
  getClickedQuestions,
  saveClickedQuestion,
  deleteQuestions,
} from "@/lib/questionLocalStorage";

export const QuestionList = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [clickedQuestions, setClickedQuestions] = useState<number[]>(
    getClickedQuestions(),
  );

  useEffect(() => {
    const localQuestions = getQuestions();
    if (localQuestions) {
      setQuestions(localQuestions);
      return;
    }

    fetchQuestionList().then((data) => {
      setQuestions(data);
      saveQuestions(data);
    });
  }, []);

  const handleQuestionClick = (id: number) => {
    saveClickedQuestion(id);
    setClickedQuestions([...clickedQuestions, id]);
  };

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <h1
        onClick={deleteQuestions}
        className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl"
      >
        Funnection 단답 질문
      </h1>
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 md:border-none">
        {questions.map((question) => (
          <Link
            key={question.id}
            className={cn(
              "button-base mobile-select-box-white button-active",
              {
                "mobile-select-box-black": clickedQuestions.includes(
                  question.id,
                ),
              },
            )}
            href={`/question-page/${question.id}`}
            onClick={() => handleQuestionClick(question.id)}
          >
            <div className="relative h-full w-full">
              <Image
                src={CardSelect}
                alt="card-select"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[#3c4859]",
                  {
                    "text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]":
                      clickedQuestions.includes(question.id),
                  },
                )}
              >
                {question.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-end px-4">
        <Link
          href="/balance-page"
          className="button-base button-active custom-button mb-4 !bg-white !text-slate-500"
        >
          밸런스 카드로 이동
        </Link>
      </div>
    </div>
  );
};

export default QuestionList;
