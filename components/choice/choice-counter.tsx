"use client";

import React, { useState } from "react";

import { ChoiceType } from "@/types/quiz.types";
import axios from "axios";

import { ChoiceButton } from "./choice-button";

type ChoiceCounterProps = {
  id: string;
  initialLeft: number;
  initialRight: number;
};

const fetchChoiceDetail = async (id: string): Promise<ChoiceType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/choice/${id}`,
  );
  return response.data;
};

export const ChoiceCounter = ({
  id,
  initialLeft,
  initialRight,
}: ChoiceCounterProps) => {
  const [yesCount, setYesCount] = useState(initialLeft);
  const [noCount, setNoCount] = useState(initialRight);
  const [clicked, setClicked] = useState<string | null>(null);

  console.log(yesCount);

  const updateResults = async () => {
    const results = await fetchChoiceDetail(id);
    setYesCount(results.yesCount);
    setNoCount(results.noCount);
  };

  const incrementYes = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/choice/${id}/increment-yes`,
      );
      setYesCount(response.data.yesCount);
      setClicked("yes");
    } catch (error) {
      console.error("Failed to increment yes", error);
    }
  };

  const incrementNo = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/choice/${id}/increment-no`,
      );
      setNoCount(response.data.noCount);
      setClicked("no");
    } catch (error) {
      console.error("Failed to increment no", error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-20">
      <div className="flex w-full flex-col justify-center gap-10 mdl:flex-row mdl:gap-40">
        <ChoiceButton
          onClick={incrementYes}
          choiceType="O"
          count={yesCount}
          className="text-4xl text-blue-700 mdl:text-9xl"
          disabled={!!clicked}
        />
        <ChoiceButton
          onClick={incrementNo}
          choiceType="X"
          count={noCount}
          className="text-4xl text-red-700 mdl:text-9xl"
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
