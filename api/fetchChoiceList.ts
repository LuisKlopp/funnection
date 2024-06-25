import { ChoiceType } from "@/types/quiz.types";

export const fetchChoiceList = async (): Promise<
  ChoiceType[]
> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/choice`,
    {
      cache: "no-cache",
    },
  );
  const data = response.json();
  return data;
};

export const fetchChoice = async (
  id: string,
): Promise<ChoiceType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/choice/${id}`,
    {
      cache: "no-cache",
    },
  );
  const data = response.json();
  return data;
};
