import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (
    // eslint-disable-next-line no-unused-vars
    e: ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  style?: React.CSSProperties;
  className?: string;
}

export const TextArea = ({
  placeholder,
  value,
  onChange,
  style,
  className,
}: TextAreaProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <textarea
        className={cn(
          "textarea-custom rounded-lg text-lg",
          className,
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
      />
    </div>
  );
};
