import { BalanceType } from "@/types/quiz.types";

export const getBalanceList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("balanceList");
    return data ? JSON.parse(data) : null;
  }
};

export const saveBalanceList = (balanceList: BalanceType[]) => {
  if (typeof window !== "undefined") {
    const data = balanceList.map(({ id, isClicked }) => ({
      id,
      isClicked,
    }));
    localStorage.setItem("balanceList", JSON.stringify(data));
  }
};

export const deleteBalanceList = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("balanceList");
    localStorage.removeItem("clickedBalanceList");
  }
};

export const getClickedBalanceList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("clickedBalanceList");
    return data ? JSON.parse(data) : [];
  }
};

export const saveClickedBalanceList = (id: number) => {
  if (typeof window !== "undefined") {
    const clickedBalanceList = getClickedBalanceList();
    if (!clickedBalanceList.includes(id)) {
      clickedBalanceList.push(id);
      localStorage.setItem(
        "clickedBalanceList",
        JSON.stringify(clickedBalanceList),
      );
    }
  }
};
