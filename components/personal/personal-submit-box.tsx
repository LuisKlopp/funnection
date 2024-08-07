"use client";

import { ChangeEvent, useState } from "react";
import { jua, kotra, kyobo } from "@/public/fonts/fonts";
import { pretendard } from "@/public/fonts/fonts";
import { gamja } from "@/public/fonts/fonts";
import { jalnan } from "@/public/fonts/fonts";
import { Button } from "../button/button";
import { TextArea } from "../text-area";
import { saveSubmitUserList } from "@/lib/personalLocalStorage";

interface PersonalSubmitBoxProps {
  personalId: string;
}

const fonts = [
  { fontClass: jua.className, fontText: "Jua" },
  { fontClass: pretendard.className, fontText: "Pretendard" },
  { fontClass: gamja.className, fontText: "Gamja" },
  { fontClass: jalnan.className, fontText: "Jalnan" },
  { fontClass: kyobo.className, fontText: "Kyobo" },
  { fontClass: kotra.className, fontText: "Kotra" },
];

export const PersonalSubmitBox = ({
  personalId,
}: PersonalSubmitBoxProps) => {
  const [messageText, setMessageText] = useState("");
  const [selectedFont, setSelectedFont] = useState(
    fonts[0].fontClass,
  );
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
          font: selectedFont,
        }),
      },
    );

    if (response.ok) {
      setMessageText("");
      setIsSubmitted(true);
      setSelectedFont(fonts[0].fontClass);
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
        className={`${selectedFont}`}
      />
      <div className="flex w-full justify-center gap-4">
        {fonts.map((font) => (
          <button
            key={font.fontClass}
            onClick={() => setSelectedFont(font.fontClass)}
            className={`h-10 w-10 rounded-full border ${
              selectedFont === font.fontClass &&
              "border-2 border-slate-500"
            } ${font.fontClass}`}
          >
            {font.fontText[0]}
          </button>
        ))}
      </div>
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
