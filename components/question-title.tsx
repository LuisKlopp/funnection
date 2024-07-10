interface QuestionTitle {
  children: React.ReactNode;
}

const QuestionTitle = ({ children }: QuestionTitle) => {
  return (
    <span className="break-keep text-center text-4xl font-normal text-slate-700">
      {children}
    </span>
  );
};

export default QuestionTitle;
