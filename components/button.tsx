import { FormEvent } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  buttonTitle: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: FormEvent | TouchEvent) => Promise<void>;
  className?: string;
}

export const Button = ({ buttonTitle, onClick, className }: ButtonProps) => {
  const handleClick = (e: FormEvent | TouchEvent) => {
    onClick(e);
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleClick}
        onTouchStart={handleClick}
        type="button"
        className={cn(
          "w-[70%] bg-slate-600 p-4 text-white rounded-lg font-semibold text-base",
          className,
        )}
      >
        {buttonTitle}
      </button>
    </div>
  );
};
