export const getIsAbledInstaButton = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("isAbledInstaButton");
    return data ? JSON.parse(data) === true : false;
  }
  return false;
};

export const saveIsAbledInstaButton = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("isAbledInstaButton", JSON.stringify(true));
  }
};

export const removeIsAbledInstaButton = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("isAbledInstaButton");
  }
};
