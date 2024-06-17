"use client";

import { useRouter } from "next/navigation";

import { Button } from "./button";

export const ReloadButton = () => {
  const router = useRouter();

  return (
    <div className="w-[300px]">
      <Button
        buttonTitle="결과 확인"
        onClick={() => router.refresh()}
        className="font-normal"
      />
    </div>
  );
};
