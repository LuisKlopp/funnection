"use client";

import { fetchUserList } from "@/api/fetchPersonalList";
import Image from "next/image";
import Link from "next/link";
import {
  getUserList,
  saveUserList,
  deleteUserList,
  getSubmitUserList,
} from "@/lib/personalLocalStorage";
import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { GoHomeButton } from "../button/go-home-button";
import { UserType } from "@/types/user.types";
import { saveIsAbledInstaButton } from "@/lib/instaLocalStorage";
import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";

export const PersonalList = () => {
  const [userList, setUserList] = useState<UserType[]>([]);

  useEffect(() => {
    const localChoiceList = getUserList();
    if (localChoiceList) {
      const updatedList = moveUserToEnd(localChoiceList, 28);
      setUserList(updatedList);
      return;
    }

    fetchUserList().then((data) => {
      const updatedList = moveUserToEnd(data, 28);
      setUserList(updatedList);
      saveUserList(updatedList);
    });
  }, []);

  const moveUserToEnd = (list: UserType[], id: number) => {
    const userToMove = list.filter((user) => user.id === id);
    const remainingUsers = list.filter((user) => user.id !== id);
    return [...remainingUsers, ...userToMove];
  };

  if (!userList.length) return <div>Loading...</div>;

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <h1
        onClick={saveIsAbledInstaButton}
        className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl"
      >
        Funnection 퍼스널 페이퍼
      </h1>
      <RefreshCcw
        onClick={deleteUserList}
        size={32}
        className="absolute right-5 top-6 h-5 w-5 cursor-pointer mdl:h-8 mdl:w-8"
      />
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 mdl:border-none">
        {userList.map((user) => {
          const s3BaseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
          const checkIsMan =
            user.gender === "M" ? ManImage : WomanImage;
          const imageUrl = `${s3BaseUrl}/funnection-${user.id}.webp`;
          return (
            <Link
              key={user.id}
              href={`/personal-page/${user.id}`}
              className="flex flex-col gap-4"
            >
              <div className="user-list-button relative h-36 w-[100px] mdl:h-48 mdl:w-[150px]">
                {getSubmitUserList().includes(user.id) && (
                  <div className="absolute h-full w-full bg-gray-800 opacity-60">
                    <span className="absolute bottom-0 text-white">
                      &nbsp;작성완료
                    </span>
                  </div>
                )}
                <Image
                  className="h-full w-full rounded-lg"
                  alt="default-image"
                  priority
                  src={user.checkImagePath ? imageUrl : checkIsMan}
                  width={50}
                  height={50}
                  sizes="100%"
                />
              </div>
              <div className="text-center text-sm text-slate-700 mdl:text-2xl">
                {user.nickname}
              </div>
            </Link>
          );
        })}
      </div>
      <GoHomeButton href="/image-page" title="이미지 게임" />
    </div>
  );
};
