interface InputProps {
  type: "nickname" | "mbti" | "answer";
  placeholder: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <input className="input-custom rounded-lg" placeholder={placeholder} />
    </div>
  );
};
