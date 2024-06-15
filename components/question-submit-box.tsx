"use client";

import { ChangeEvent, useState } from "react";

import { Button } from "./button";
import { Input } from "./input";

export const QuestionSubmitBox = () => {
  const [answerText, setAnswerText] = useState("");

  const handleSubmit = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/question/${1}/answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: answerText }),
    });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        placeholder="답변을 입력해주세요 :)"
        value={answerText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAnswerText(e.target.value)
        }
      />
      <Button buttonTitle="답변 제출" onClick={handleSubmit} />
    </div>
  );
};
