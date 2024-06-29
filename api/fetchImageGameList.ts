import {
  ImageGameType,
  ImageGameDetailType,
} from "@/types/imageGame.types";

export const fetchImageGameList = async (): Promise<
  ImageGameType[]
> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/image-game`,
    {
      cache: "no-cache",
    },
  );
  const data = response.json();
  return data;
};

export const fetchImageGame = async (
  id: string,
): Promise<ImageGameDetailType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/image-game/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch question");
  }
  return response.json();
};
