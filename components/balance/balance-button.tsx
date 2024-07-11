import { cn } from "@/lib/utils";

interface BalanceButtonProps {
  onClick: () => Promise<void>;
  answer: string;
  counter: number;
  className: string;
  disabled: boolean;
}

export const BalanceButton = ({
  onClick,
  answer,
  counter,
  className,
  disabled,
}: BalanceButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-20">
      <button
        className={cn(
          "w-[90%] cursor-pointer rounded-lg bg-white px-10 py-4 shadow-xl mdl:pointer-events-none mdl:w-auto mdl:bg-inherit mdl:shadow-none",
          {
            "button-base": !disabled,
          },
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <span className={className}>{answer}</span>
      </button>
      <div className="hidden mdl:block">
        <span className="text-shadow-02 text-5xl font-bold text-slate-700">
          {counter}
        </span>
      </div>
    </div>
  );
};
