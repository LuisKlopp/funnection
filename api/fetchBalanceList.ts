import { BalanceType } from "@/types/quiz.types";

export const fetchBalanceList = async (): Promise<BalanceType[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance`, {
    cache: "no-cache",
  });
  const data = response.json();
  return data;
};

export const fetchBalance = async (id: string): Promise<BalanceType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/balance/${id}`,
    {
      cache: "no-cache",
    },
  );
  const data = response.json();
  return data;
};
