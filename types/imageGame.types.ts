export interface ImageGameType {
  id: number;
  question: string;
  isClicked: boolean;
}

export interface ImageGameUserType {
  id: number;
  nickname: string;
  votes: number;
  gender: string;
}

export interface ImageGameDetailType {
  question: ImageGameType;
  users: ImageGameUserType[];
}
