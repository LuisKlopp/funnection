export interface AnswerType {
  id: number;
  answer: string;
}

export interface QuestionType {
  id: number;
  question: string;
  category: "primary" | "love" | "adult" | "none";
  answers: AnswerType[];
}
