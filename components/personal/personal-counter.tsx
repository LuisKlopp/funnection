"use client";

import { UserAnswerType } from "@/types/userAnswer.types";
import axios from "axios";
import { useState } from "react";

interface PersonalCounterProps {
  userId: number;
}

export const PersonalCounter = ({ userId }: PersonalCounterProps) => {
  const [userAnswers, setUserAnswers] = useState<UserAnswerType[]>(
    [],
  );

  const handleShowResults = async () => {
    const userData = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user-answers/user/${userId}`,
    );
    const userAnswerData = userData.data;

    setUserAnswers(userAnswerData);
  };

  const halfIndex = Math.ceil(userAnswers.length / 2);
  const leftAnswers = userAnswers.slice(0, halfIndex);
  const rightAnswers = userAnswers.slice(halfIndex);

  return (
    <div>
      <div className="translate absolute bottom-1/2 right-1/2 flex w-[70%] translate-x-1/2 translate-y-1/2 transform justify-between text-lg text-slate-800">
        <div className="flex flex-col gap-20">
          {leftAnswers.map((userAnswer, index) => (
            <div key={userAnswer.id}>
              {index + 1}. {userAnswer.message}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-20">
          {rightAnswers.map((userAnswer, index) => (
            <div key={userAnswer.id}>
              {index + leftAnswers.length + 1}.{userAnswer.message}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleShowResults}
        className="button-base custom-button w-[150px]"
      >
        결과 확인
      </button>
    </div>
  );
};
