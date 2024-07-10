interface QuestionTitleProps {
  children: React.ReactNode;
}

export const QuestionTitle = ({ children }: QuestionTitleProps) => {
  return (
    <span className="break-keep text-center text-4xl font-normal text-slate-700">
      {children}
    </span>
  );
};
