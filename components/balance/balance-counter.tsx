"use client";

import React, { useState } from "react";

import { BalanceType } from "@/types/quiz.types";
import axios from "axios";

import { BalanceButton } from "./balance-button";

type BalanceCounterProps = {
  id: string;
  initialLeft: number;
  initialRight: number;
  leftAnswer: string;
  rightAnswer: string;
};

const fetchBalanceDetail = async (
  id: string,
): Promise<BalanceType> => {
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
  const [clicked, setClicked] = useState<string | null>(null);
  const [isBalanced, setIsBalanced] = useState(false);

  const updateResults = async () => {
    const results = await fetchBalanceDetail(id);
    setLeftCount(results.leftCount);
    setRightCount(results.rightCount);

    setIsBalanced(
      results.leftCount === results.rightCount &&
        results.leftCount !== 0,
    );
  };

  const incrementLeft = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/balance/${id}/increment-left`,
      );
      setLeftCount(response.data.leftCount);
      setClicked("left");
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
      setClicked("right");
    } catch (error) {
      console.error("Failed to increment no", error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-20">
      <div className="text-shadow-04 flex w-full flex-col justify-center gap-10 mdl:flex-row mdl:gap-40">
        <BalanceButton
          onClick={incrementLeft}
          answer={leftAnswer}
          counter={leftCount}
          className="text-shadow-01 break-keep text-2xl text-[#5252ff] mdl:text-3xl"
          disabled={!!clicked}
        />

        <BalanceButton
          onClick={incrementRight}
          answer={rightAnswer}
          counter={rightCount}
          className="text-shadow-01 break-keep text-2xl text-[#3a9e69] mdl:text-3xl"
          disabled={!!clicked}
        />
      </div>
      {!!clicked && (
        <div className="flex w-full justify-center mdl:hidden">
          <span>답변이 제출되었습니다!</span>
        </div>
      )}
      <div className="hidden mdl:block">
        <button
          onClick={updateResults}
          className="button-base custom-button box-shadow-03 w-[150px]"
        >
          결과 확인
        </button>
        {isBalanced && (
          <div className="absolute mb-10 ml-40 hidden animate-grow-rotate flex-col mdl:flex">
            <span className="text-3xl text-red-700">Balance!!!</span>
            <span className="text-3xl text-red-700">Balance!!!</span>
          </div>
        )}
      </div>
    </div>
  );
};
