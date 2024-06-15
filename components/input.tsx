import { ChangeEvent } from "react";

interface InputProps {
  type?: "nickname" | "mbti" | "answer";
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <input
        className="input-custom rounded-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
