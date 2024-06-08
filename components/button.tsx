import { FormEvent } from "react";

interface ButtonProps {
  buttonTitle: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: FormEvent | TouchEvent) => Promise<void>;
}

export const Button = ({ buttonTitle, onClick }: ButtonProps) => {
  const handleClick = (e: FormEvent | TouchEvent) => {
    onClick(e);
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleClick}
        onTouchStart={handleClick}
        type="button"
        className="w-[70%] bg-slate-600 p-4 text-white rounded-lg font-semibold text-base"
      >
        {buttonTitle}
      </button>
    </div>
  );
};
