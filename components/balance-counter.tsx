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
    <div className="flex gap-20 flex-col justify-center items-center w-full">
      <div className="flex flex-col mdl:flex-row gap-10 mdl:gap-40 w-full justify-center">
        {!clicked || clicked === "left" ? (
          <BalanceButton
            onClick={incrementLeft}
            answer={leftAnswer}
            counter={leftCount}
            className="text-2xl text-blue-700"
            disabled={!!clicked}
          />
        ) : null}
        {!clicked || clicked === "right" ? (
          <BalanceButton
            onClick={incrementRight}
            answer={rightAnswer}
            counter={rightCount}
            className="text-2xl text-red-700"
            disabled={!!clicked}
          />
        ) : null}
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
