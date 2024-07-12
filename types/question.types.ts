export interface AnswerType {
  id: number;
  answer: string;
}

export interface QuestionType {
  id: number;
  question: string;
  answers: AnswerType[];
}
