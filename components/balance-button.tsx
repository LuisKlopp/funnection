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
    <div className="flex flex-col gap-20 items-center">
      <button
        className="bg-white px-10 py-4 rounded-lg shadow-xl w-[90%] mdl:w-auto cursor-pointer mdl:bg-inherit mdl:shadow-none mdl:cursor-default"
        onClick={onClick}
        disabled={disabled}
      >
        <span className={className}>{answer}</span>
      </button>
      <div className="hidden mdl:block">
        <span className="text-5xl text-slate-700 font-bold">{counter}</span>
      </div>
    </div>
  );
};
