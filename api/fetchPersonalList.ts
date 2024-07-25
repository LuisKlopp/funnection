import { UserType } from "@/types/user.types";

export const fetchUserList = async (): Promise<UserType[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/history-user/current-users`,
    {
      cache: "no-cache",
    },
  );
  const data = await response.json();
  return data;
};

export const fetchUser = async (id: string): Promise<UserType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/history-user/${id}`,
    {
      cache: "no-cache",
    },
  );
  if (!response.ok) {
    throw new Error(`Error fetching user with ID ${id}`);
  }
  const data = await response.json();
  return data;
};
