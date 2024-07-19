import { cn } from "@/lib/utils";

interface ChoiceButtonProps {
  onClick: () => Promise<void>;
  className: string;
  disabled: boolean;
  choiceType: "O" | "X";
  count: number;
}

export const ChoiceButton = ({
  onClick,
  className,
  disabled,
  choiceType,
  count,
}: ChoiceButtonProps) => {
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
        <span className={className}>{choiceType}</span>
      </button>
      <div className="fade-in-up hidden mdl:block">
        <span className="text-5xl font-bold text-slate-700">
          {count}
        </span>
      </div>
    </div>
  );
};
