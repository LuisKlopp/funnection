"use client";

import React, { useState } from "react";

import { BalanceType } from "@/types/quiz.types";
import axios from "axios";

type BalanceCounterProps = {
  id: string;
  initialLeft: number;
  initialRight: number;
  leftAnswer: string;
  rightAnswer: string;
};

const fetchBalanceDetail = async (id: string): Promise<BalanceType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/balance/${id}`,
  );
  return response.data;
};

export const BalanceCounter = ({
  id,
  initialLeft,
  initialRight,
  leftAnswer,
  rightAnswer,
}: BalanceCounterProps) => {
  const [leftCount, setLeftCount] = useState(initialLeft);
  const [rightCount, setRightCount] = useState(initialRight);

  const updateResults = async () => {
    const results = await fetchBalanceDetail(id);
    setLeftCount(results.leftCount);
    setRightCount(results.rightCount);
  };

  const incrementLeft = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/balance/${id}/increment-left`,
      );
      setLeftCount(response.data.leftCount);
    } catch (error) {
      console.error("Failed to increment yes", error);
    }
  };

  const incrementRight = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/balance/${id}/increment-right`,
      );
      setRightCount(response.data.rightCount);
    } catch (error) {
      console.error("Failed to increment no", error);
    }
  };

  return (
    <div className="flex gap-20 flex-col justify-center items-center w-full">
      <div className="flex flex-col mdl:flex-row gap-10 mdl:gap-40 w-full justify-center">
        <div className="flex flex-col gap-20 items-center">
          <div className="bg-white px-10 py-4 rounded-lg shadow-xl w-[90%] mdl:w-auto">
            <span
              className="text-2xl text-blue-700 cursor-pointer"
              onClick={incrementLeft}
            >
              {leftAnswer}
            </span>
          </div>
          <div className="hidden mdl:block">
            <span className="text-5xl text-slate-700 font-bold">
              {leftCount}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-20 items-center">
          <div className="bg-white px-10 py-4 rounded-lg shadow-xl w-[90%] mdl:w-auto">
            <span
              className="text-2xl text-red-700 cursor-pointer"
              onClick={incrementRight}
            >
              {rightAnswer}
            </span>
          </div>
          <div className="hidden mdl:block">
            <span className="text-5xl text-slate-700 font-bold">
              {rightCount}
            </span>
          </div>
        </div>
      </div>
      <div className="hidden mdl:block">
        <button
          onClick={updateResults}
          className="button-base custom-button button-active w-[150px]"
        >
          결과 확인
        </button>
      </div>
    </div>
  );
};
