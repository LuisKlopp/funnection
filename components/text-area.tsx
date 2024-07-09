import { ChangeEvent } from "react";

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (
    // eslint-disable-next-line no-unused-vars
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

export const TextArea = ({
  placeholder,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <textarea
        className="textarea-custom rounded-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
