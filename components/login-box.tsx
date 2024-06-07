"use client";

import { ChangeEvent, useState } from "react";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

export const LoginBox = () => {
  const [nickname, setNickname] = useState("");
  const [mbti, setMbti] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, mbti }),
      }
    );
    const data = await response.json();

    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
    } else {
      console.error("Access token not found in response");
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <Input
        type="nickname"
        placeholder="문토 닉네임을 입력해주세요 :)"
        value={nickname}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNickname(e.target.value)
        }
      />
      <Input
        type="mbti"
        placeholder="mbti를 입력해주세요 :)"
        value={mbti}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setMbti(e.target.value)}
      />
      <Button buttonTitle="로그인" onClick={handleSubmit} />
    </div>
  );
};
