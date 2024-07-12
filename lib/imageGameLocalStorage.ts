import { ImageGameType } from "@/types/imageGame.types";

export const getImageGameList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("imageGameList");
    return data ? JSON.parse(data) : null;
  }
};

export const saveImageGameList = (imageGameList: ImageGameType[]) => {
  if (typeof window !== "undefined") {
    const data = imageGameList.map(({ id }) => ({
      id,
    }));
    localStorage.setItem("imageGameList", JSON.stringify(data));
  }
};

export const deleteImageGameList = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("imageGameList");
    localStorage.removeItem("clickedImageGameList");
    window.location.reload();
  }
};

export const getClickedImageGameList = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("clickedImageGameList");
    return data ? JSON.parse(data) : [];
  }
};

export const saveClickedImageGameList = (id: number) => {
  if (typeof window !== "undefined") {
    const clickedImageGameList = getClickedImageGameList();
    if (!clickedImageGameList.includes(id)) {
      clickedImageGameList.push(id);
      localStorage.setItem(
        "clickedImageGameList",
        JSON.stringify(clickedImageGameList),
      );
    }
  }
};
