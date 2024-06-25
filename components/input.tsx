import { ChangeEvent } from "react";

interface InputProps {
  type?: "nickname" | "mbti" | "answer";
  placeholder: string;
  value: string;
  onChange: (
    // eslint-disable-next-line no-unused-vars
    e: ChangeEvent<HTMLInputElement>,
  ) => void;
}

export const Input = ({
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <input
        className="input-custom rounded-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
