import { QuestionType } from "@/types/question.types";

export const getQuestions = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("questions");
    return data ? JSON.parse(data) : null;
  }
};

export const saveQuestions = (questions: QuestionType[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("questions", JSON.stringify(questions));
  }
};

export const getClickedQuestions = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("clickedQuestions");
    return data ? JSON.parse(data) : [];
  }
};

export const saveClickedQuestion = (id: number) => {
  if (typeof window !== "undefined") {
    const clickedQuestions = getClickedQuestions();
    if (!clickedQuestions.includes(id)) {
      clickedQuestions.push(id);
      localStorage.setItem(
        "clickedQuestions",
        JSON.stringify(clickedQuestions),
      );
    }
  }
};
