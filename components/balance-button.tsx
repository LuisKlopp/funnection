interface BalanceButtonProps {
  onClick: () => Promise<void>;
  answer: string;
  counter: number;
  className: string;
}

export const BalanceButton = ({
  onClick,
  answer,
  counter,
  className,
}: BalanceButtonProps) => {
  return (
    <div className="flex flex-col gap-20 items-center">
      <div
        className="bg-white px-10 py-4 rounded-lg shadow-xl w-[90%] mdl:w-auto cursor-pointer mdl:bg-inherit mdl:shadow-none mdl:cursor-default"
        onClick={onClick}
      >
        <span className={className}>{answer}</span>
      </div>
      <div className="hidden mdl:block">
        <span className="text-5xl text-slate-700 font-bold">{counter}</span>
      </div>
    </div>
  );
};
