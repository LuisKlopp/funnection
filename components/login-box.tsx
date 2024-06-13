"use client";

import { ChangeEvent, useState } from "react";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";

export const LoginBox = () => {
  const [nickname, setNickname] = useState("");
  const [mbti, setMbti] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nickname, mbti }),
      },
    );
    const data = await response.json();

    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
      router.push("/question-page", { scroll: false });
    } else {
      console.error("Access token not found in response");
      setLoading(false);
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
      <Button
        buttonTitle={loading ? "로딩중..." : "로그인"}
        onClick={handleSubmit}
      />
    </div>
  );
};
