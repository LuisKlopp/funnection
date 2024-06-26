import { QuestionType } from "@/types/question.types";

export const fetchQuestionList = async (): Promise<
  QuestionType[]
> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/question`,
    {
      cache: "no-cache",
    },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

export const fetchQuestion = async (
  id: string,
): Promise<QuestionType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/question/${id}`,
    {
      cache: "no-cache",
    },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch question");
  }
  return response.json();
};
