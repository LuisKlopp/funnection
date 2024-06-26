import { QuestionType } from "@/types/question.types";

export const getQuestions = () => {
  const data = localStorage.getItem("questions");
  return data ? JSON.parse(data) : null;
};

export const saveQuestions = (questions: QuestionType[]) => {
  localStorage.setItem("questions", JSON.stringify(questions));
};

export const getClickedQuestions = () => {
  const data = localStorage.getItem("clickedQuestions");
  return data ? JSON.parse(data) : [];
};

export const saveClickedQuestion = (id: number) => {
  const clickedQuestions = getClickedQuestions();
  if (!clickedQuestions.includes(id)) {
    clickedQuestions.push(id);
    localStorage.setItem(
      "clickedQuestions",
      JSON.stringify(clickedQuestions),
    );
  }
};
