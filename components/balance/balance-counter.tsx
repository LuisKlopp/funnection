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
      <div className="flex w-full flex-col justify-center gap-10 mdl:flex-row mdl:gap-40">
        <BalanceButton
          onClick={incrementLeft}
          answer={leftAnswer}
          counter={leftCount}
          className="break-keep text-2xl text-[#5252de] mdl:text-3xl"
          disabled={!!clicked}
        />

        <BalanceButton
          onClick={incrementRight}
          answer={rightAnswer}
          counter={rightCount}
          className="break-keep text-2xl text-[#18b662] mdl:text-3xl"
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
          className="button-base custom-button button-active w-[150px]"
        >
          결과 확인
        </button>
      </div>
    </div>
  );
};
