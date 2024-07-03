"use client";

import { ChangeEvent, useState } from "react";

import { Button } from "../button/button";
import { Input } from "../input";

interface QuestionSubmitBoxProps {
  questionId: string;
}

export const QuestionSubmitBox = ({
  questionId,
}: QuestionSubmitBoxProps) => {
  const [answerText, setAnswerText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/question/${questionId}/answer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer: answerText }),
      },
    );

    if (response.ok) {
      setAnswerText("");
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        placeholder="답변을 입력해주세요 :)"
        value={answerText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAnswerText(e.target.value)
        }
      />
      <Button
        buttonTitle="답변 제출"
        onClick={handleSubmit}
        className="font-normal"
        disabled={answerText === ""}
      />
      {isSubmitted && (
        <div className="flex w-full justify-center">
          <span>답변이 완료되었습니다!</span>
        </div>
      )}
    </div>
  );
};
