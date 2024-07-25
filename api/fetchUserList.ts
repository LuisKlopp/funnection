import { UserMessageAndInfoType, UserType } from "@/types/user.types";

export const fetchUserList = async (): Promise<UserType[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/history-user`,
    {
      cache: "no-cache",
    },
  );
  const data = response.json();
  return data;
};

export const fetchUser = async (
  generateString: string,
): Promise<UserMessageAndInfoType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/history-user/${generateString}/messages`,
    {
      cache: "no-cache",
    },
  );
  if (!response.ok) {
    throw new Error(`Error fetching user with ID ${generateString}`);
  }
  const data = await response.json();
  return data;
};
