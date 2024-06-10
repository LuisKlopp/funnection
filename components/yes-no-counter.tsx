"use client";

import React, { useState } from "react";
import axios from "axios";
import { QuizType } from "@/types/quiz.types";

type YesNoCounterProps = {
  id: string;
  initialYes: number;
  initialNo: number;
};

const fetchQuizDetail = async (id: string): Promise<QuizType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${id}`
  );
  return response.data;
};

const YesNoCounter = ({ id, initialYes, initialNo }: YesNoCounterProps) => {
  const [yes, setYes] = useState(initialYes);
  const [no, setNo] = useState(initialNo);

  const updateResults = async () => {
    const results = await fetchQuizDetail(id);
    console.log(results);
    setYes(results.yes);
    setNo(results.no);
  };

  return (
    <div className="flex gap-20 flex-col justify-center items-center">
      <div className="flex gap-40">
        <div className="flex flex-col gap-20 items-center">
          <span className="text-9xl text-blue-700 drop-shadow-xl">O</span>
          <span className="text-5xl text-slate-700 font-bold">{yes}</span>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <span className="text-9xl text-red-700 drop-shadow-xl">X</span>
          <span className="text-5xl text-slate-700 font-bold">{no}</span>
        </div>
      </div>
      <div>
        <button
          onClick={updateResults}
          className="bg-slate-500 p-4 rounded-lg text-white font-medium"
        >
          결과 확인
        </button>
      </div>
    </div>
  );
};

export default YesNoCounter;
