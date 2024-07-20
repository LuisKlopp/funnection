"use client";

import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
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
import { GoHomeButton } from "../button/go-home-button";
import { EmojiComponent } from "../emoji-component";

export const QuestionList = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [clickedQuestions, setClickedQuestions] = useState<number[]>(
    getClickedQuestions(),
  );

  const handleQuestionClick = (id: number) => {
    saveClickedQuestion(id);
    setClickedQuestions([...clickedQuestions, id]);
  };

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

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <h1 className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl">
        Funnection 문답 질문
      </h1>
      <RefreshCcw
        onClick={deleteQuestions}
        size={32}
        className="absolute right-5 top-6 h-5 w-5 cursor-pointer mdl:h-8 mdl:w-8"
      />
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 md:border-none">
        {questions.map((question) => (
          <Link
            key={question.id}
            scroll={false}
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
              <EmojiComponent category={question.category} />
            </div>
          </Link>
        ))}
      </div>
      <GoHomeButton />
    </div>
  );
};

export default QuestionList;
