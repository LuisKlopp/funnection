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
    <div className="flex flex-col gap-20 items-center">
      <button
        className="bg-white px-10 py-4 rounded-lg shadow-xl w-[90%] mdl:w-auto cursor-pointer mdl:bg-inherit mdl:shadow-none mdl:pointer-events-none"
        onClick={onClick}
        disabled={disabled}
      >
        <span className={className}>{choiceType}</span>
      </button>
      <div className="hidden mdl:block">
        <span className="text-5xl text-slate-700 font-bold">{count}</span>
      </div>
    </div>
  );
};
