"use client";

import { ChangeEvent, useState } from "react";

import { Button } from "../button/button";
import { TextArea } from "../text-area";
import { saveSubmitUserList } from "@/lib/personalLocalStorage";

interface PersonalSubmitBoxProps {
  personalId: string;
}

export const PersonalSubmitBox = ({
  personalId,
}: PersonalSubmitBoxProps) => {
  const [messageText, setMessageText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/history-user/${personalId}/answers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageText,
        }),
      },
    );

    if (response.ok) {
      setMessageText("");
      setIsSubmitted(true);
      saveSubmitUserList(Number(personalId));
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <TextArea
        placeholder="전하고 싶은말을 적어주세요 :)"
        value={messageText}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setMessageText(e.target.value)
        }
      />
      <Button
        buttonTitle="답변 제출"
        onClick={handleSubmit}
        className="font-normal"
        disabled={messageText === ""}
      />
      {isSubmitted && (
        <div className="flex w-full flex-col items-center">
          <span>게스트님의 정성이 담긴</span>
          <span>메시지가 전달되었습니다!</span>
        </div>
      )}
    </div>
  );
};
