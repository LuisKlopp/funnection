import { QuestionType } from "@/types/question.types";

export const getQuestions = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("questions");
    return data ? JSON.parse(data) : null;
  }
};

export const saveQuestions = (questions: QuestionType[]) => {
  if (typeof window !== "undefined") {
    const data = questions.map(({ id, category }) => ({
      id,
      category,
    }));
    localStorage.setItem("questions", JSON.stringify(data));
  }
};

export const deleteQuestions = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("questions");
    localStorage.removeItem("clickedQuestions");
    window.location.reload();
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
