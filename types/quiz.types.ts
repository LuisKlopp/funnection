export interface QuizType {
  id: number;
  question: string;
  yes: number;
  no: number;
  isClicked: boolean;
}

export interface ResultsType {
  O: number;
  X: number;
}
