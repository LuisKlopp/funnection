export interface BalanceType {
  id: number;
  question: string;
  leftAnswer: string;
  rightAnswer: string;
  leftCount: number;
  rightCount: number;
  isClicked: boolean;
}

export interface ResultsType {
  O: number;
  X: number;
}
