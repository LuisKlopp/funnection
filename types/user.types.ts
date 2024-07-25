export interface UserType {
  id: number;
  nickname: string;
  gender: string;
  generateString: string;
  visitCount: string;
  checkImagePath: number;
}

export interface UserMessageType {
  id: number;
  message: string;
}

export interface UserMessageAndInfoType {
  messages: UserMessageType[];
  user: UserType;
}
