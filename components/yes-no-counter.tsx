"use client";

import React, { useState } from "react";

import { QuizType } from "@/types/quiz.types";
import axios from "axios";

type YesNoCounterProps = {
  id: string;
  initialYes: number;
  initialNo: number;
};

const fetchQuizDetail = async (id: string): Promise<QuizType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${id}`,
  );
  return response.data;
};

export const YesNoCounter = ({
  id,
  initialYes,
  initialNo,
}: YesNoCounterProps) => {
  const [yes, setYes] = useState(initialYes);
  const [no, setNo] = useState(initialNo);

  const updateResults = async () => {
    const results = await fetchQuizDetail(id);
    setYes(results.yes);
    setNo(results.no);
  };

  const incrementYes = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${id}/increment-yes`,
      );
      setYes(response.data.yes);
    } catch (error) {
      console.error("Failed to increment yes", error);
    }
  };

  const incrementNo = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${id}/increment-no`,
      );
      setNo(response.data.no);
    } catch (error) {
      console.error("Failed to increment no", error);
    }
  };

  return (
    <div className="flex gap-20 flex-col justify-center items-center">
      <div className="flex gap-40">
        <div className="flex flex-col gap-20 items-center">
          <span
            className="text-9xl text-blue-700 drop-shadow-xl cursor-pointer"
            onClick={incrementYes}
          >
            O
          </span>
          <span className="text-5xl text-slate-700 font-bold">{yes}</span>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <span
            className="text-9xl text-red-700 drop-shadow-xl cursor-pointer"
            onClick={incrementNo}
          >
            X
          </span>
          <span className="text-5xl text-slate-700 font-bold">{no}</span>
        </div>
      </div>
      <div>
        <button
          onClick={updateResults}
          className="button-base custom-button button-active"
        >
          결과 확인
        </button>
      </div>
    </div>
  );
};
