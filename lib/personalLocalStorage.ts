import { UserType } from "@/types/user.types";

export const getUserList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : null;
  }
};

export const saveUserList = (users: UserType[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export const deleteUserList = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("users");
    window.location.reload();
  }
};

export const getSubmitUserList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("checkSubmitUsers");
    return data ? JSON.parse(data) : [];
  }
};

export const saveSubmitUserList = (id: number) => {
  if (typeof window !== "undefined") {
    if (typeof window !== "undefined") {
      const clickedImageGameList = getSubmitUserList();
      if (!clickedImageGameList.includes(id)) {
        clickedImageGameList.push(id);
        localStorage.setItem(
          "checkSubmitUsers",
          JSON.stringify(clickedImageGameList),
        );
      }
    }
  }
};
