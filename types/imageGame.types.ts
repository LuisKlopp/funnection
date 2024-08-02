export interface ImageGameType {
  id: number;
  question: string;
}

export interface ImageGameUserType {
  id: number;
  nickname: string;
  votes: number;
  gender: string;
  generateString: string;
  visitCount: string;
  checkImagePath: number;
  isCurrentUser: number;
}

export interface ImageGameDetailType {
  question: ImageGameType;
  users: ImageGameUserType[];
}
