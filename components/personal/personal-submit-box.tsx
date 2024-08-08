"use client";

import { ChangeEvent, useState } from "react";
import {
  jua,
  kotra,
  kyobo,
  pretendard,
  gamja,
  jalnan,
} from "@/public/fonts/fonts";
import { Button } from "../button/button";
import { TextArea } from "../text-area";
import { saveSubmitUserList } from "@/lib/personalLocalStorage";

interface PersonalSubmitBoxProps {
  personalId: string;
  userNickname: string;
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
  userNickname,
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
    <div className="flex w-full flex-col gap-10">
      <TextArea
        placeholder={`${userNickname}님께 전하고 싶은말을 적어주세요 :)`}
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
            className={`box-shadow-03 h-10 w-10 rounded-full border border-slate-600 ${
              selectedFont === font.fontClass && "border-[3px]"
            } ${font.fontClass}`}
          >
            F
          </button>
        ))}
      </div>
      {isSubmitted ? (
        <div className="flex w-full flex-col items-center">
          <span>게스트님의 정성이 담긴</span>
          <span>메시지가 전달되었습니다!</span>
        </div>
      ) : (
        <Button
          buttonTitle="메시지 보내기"
          onClick={handleSubmit}
          className="box-shadow-03 font-normal"
          disabled={messageText === ""}
        />
      )}
    </div>
  );
};
