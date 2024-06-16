import { MouseEvent } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  buttonTitle: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  buttonTitle,
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick(e);
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleClick}
        type="button"
        className={cn(
          "w-[70%] bg-slate-600 p-4 text-white rounded-lg font-semibold text-base",
          {
            "bg-slate-400": disabled,
          },
          className,
        )}
        disabled={disabled}
      >
        {buttonTitle}
      </button>
    </div>
  );
};
