"use client";

import { useRouter } from "next/navigation";

import { Button } from "../button/button";
import { cn } from "@/lib/utils";

interface RoloadButtonProps {
  className?: string;
}

export const ReloadButton = ({ className }: RoloadButtonProps) => {
  const router = useRouter();

  return (
    <div className={cn(className, { "w-[300px]": !className })}>
      <Button
        buttonTitle="결과 확인"
        onClick={() => router.refresh()}
        className="font-normal"
      />
    </div>
  );
};
