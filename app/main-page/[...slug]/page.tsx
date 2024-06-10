"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { QuizType } from "@/types/quiz.types";

export default function QuizDetailPage() {
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  const pathName = usePathname();
  const parts = pathName.split("/");
  const questionId = Number(parts[parts.length - 1]);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/quiz`
        );
        setQuiz(response.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, []);

  const detailQuiz = quiz.find((item) => questionId === item.id);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10 overflow-x-hidden">
      <div className="w-[50%] flex justify-center items-center break-words">
        <span className="text-5xl text-slate-700 font-semibold text-center">
          {detailQuiz?.question}
        </span>
      </div>
      <div className="flex gap-36">
        <div className="flex flex-col gap-20 items-center">
          <span className="text-9xl text-blue-700">O</span>
          <span>0</span>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <span className="text-9xl text-red-700">X</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
