export interface BalanceType {
  id: number;
  question: string;
  leftAnswer: string;
  rightAnswer: string;
  leftCount: number;
  rightCount: number;
  category: "primary" | "love" | "adult" | "none";
}

export interface ResultsType {
  O: number;
  X: number;
}

export interface ChoiceType {
  id: number;
  question: string;
  yesCount: number;
  noCount: number;
  category: "primary" | "love" | "adult" | "none";
}
