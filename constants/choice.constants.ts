interface ChoiceType {
  id: number;
  question: string;
  isClicked: boolean;
}

export const CHOICE_LIST: ChoiceType[] = [
  {
    id: 1,
    question: "나는 지금 배가 고프다.",
    isClicked: true,
  },
  {
    id: 2,
    question: "업무강도에 비해 급여가 만족스럽지 않다!",
    isClicked: true,
  },
  {
    id: 3,
    question: "나는 이 장소에 매력적이라고 느껴지는 이성이 있다!",
    isClicked: true,
  },
  {
    id: 4,
    question: "나는 지금 하는일에 보람을 느낀다!",
    isClicked: true,
  },
  {
    id: 5,
    question: "나는 유튜브에 영상을 하나라도 업로드 해본 적 있다!",
    isClicked: true,
  },
  {
    id: 6,
    question: "나는 5년안에 사업을 하고 싶은 생각이 있다!",
    isClicked: true,
  },
];
