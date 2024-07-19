"use client";
import { useState } from "react";
import axios from "axios";
import { AnswerType } from "@/types/question.types";

interface QuestionCounterProps {
  questionId: string;
}

export const QuestionCounter = ({
  questionId,
}: QuestionCounterProps) => {
  const [answerData, setAnswerData] = useState<AnswerType[]>([]);

  const handleGetQuestionAnswer = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/question/${questionId}`,
    );
    setAnswerData(response.data.answers);
  };

  return (
    <div className="hidden w-[500px] flex-col items-center gap-10 mdl:flex">
      <div className="flex w-full flex-col gap-2">
        {answerData.map((answer, index) => (
          <div
            key={answer.id}
            className="fade-in-up rounded-lg bg-zinc-200 px-4 py-2 text-[25px] shadow-lg"
          >
            <span className="text-slate-500">{index + 1}. </span>
            <span className="font-normal text-slate-600">
              {answer.answer}
            </span>
          </div>
        ))}
      </div>
      <button
        className="button-base custom-button w-[200px]"
        onClick={handleGetQuestionAnswer}
      >
        답변 확인
      </button>
    </div>
  );
};
