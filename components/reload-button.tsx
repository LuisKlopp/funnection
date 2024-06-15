"use client";

import { useRouter } from "next/navigation";

import { Button } from "./button";

export const ReloadButton = () => {
  const router = useRouter();

  return (
    <div className="">
      <Button buttonTitle="결과 확인" onClick={() => router.refresh()} />
    </div>
  );
};
