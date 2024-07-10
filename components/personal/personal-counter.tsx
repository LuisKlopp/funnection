"use client";

import { UserAnswerType } from "@/types/userAnswer.types";
import axios from "axios";
import { useState } from "react";
import { PersonalMessageBox } from "../personal-message-box";

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
      <div className="translate absolute bottom-1/2 right-1/2 -z-[5] flex w-[80%] translate-x-1/2 translate-y-1/2 transform justify-between text-lg">
        <div className="flex flex-col gap-10">
          {leftAnswers.map((userAnswer, index) => (
            <PersonalMessageBox
              key={userAnswer.id}
              index={index}
              message={userAnswer.message}
            />
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {rightAnswers.map((userAnswer, index) => (
            <PersonalMessageBox
              key={userAnswer.id}
              index={index + leftAnswers.length}
              message={userAnswer.message}
            />
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
