interface ButtonProps {
  buttonTitle: string;
}

export const Button = ({ buttonTitle }: ButtonProps) => {
  return (
    <div className="w-full flex justify-center">
      <button className="w-[70%] bg-slate-600 p-4 text-white rounded-lg font-semibold text-base">
        {buttonTitle}
      </button>
    </div>
  );
};
