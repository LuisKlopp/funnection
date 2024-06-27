import { ChoiceType } from "@/types/quiz.types";

export const getChoiceList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("choiceList");
    return data ? JSON.parse(data) : null;
  }
};

export const saveChoiceList = (choiceList: ChoiceType[]) => {
  if (typeof window !== "undefined") {
    const data = choiceList.map(({ id, isClicked }) => ({
      id,
      isClicked,
    }));
    localStorage.setItem("choiceList", JSON.stringify(data));
  }
};

export const deleteChoiceList = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("choiceList");
    localStorage.removeItem("clickedChoiceList");
  }
};

export const getClickedChoiceList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("clickedChoiceList");
    return data ? JSON.parse(data) : [];
  }
};

export const saveClickedChoiceList = (id: number) => {
  if (typeof window !== "undefined") {
    const clickedChoiceList = getClickedChoiceList();
    if (!clickedChoiceList.includes(id)) {
      clickedChoiceList.push(id);
      localStorage.setItem(
        "clickedChoiceList",
        JSON.stringify(clickedChoiceList),
      );
    }
  }
};
