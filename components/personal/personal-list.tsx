"use client";

import { fetchUserList } from "@/api/fetchPersonalList";
import {
  USER_LIST,
  UserImageType,
} from "../../constants/user.constants";
import Image from "next/image";
import Link from "next/link";
import {
  getUserList,
  saveUserList,
  deleteUserList,
} from "@/lib/personalLocalStorage";
import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { GoHomeButton } from "../button/go-home-button";
import { UserType } from "@/types/user.types";

export const PersonalList = () => {
  const [userList, setUserList] = useState<UserType[]>([]);

  useEffect(() => {
    const localChoiceList = getUserList();
    if (localChoiceList) {
      setUserList(localChoiceList);
      return;
    }

    fetchUserList().then((data) => {
      setUserList(data);
      saveUserList(data);
    });
  }, []);

  if (!userList.length) return <div>Loading...</div>;

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <h1 className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl">
        Funnection 퍼스널 페이퍼
      </h1>
      <RefreshCcw
        onClick={deleteUserList}
        size={32}
        className="absolute right-5 top-6 h-5 w-5 cursor-pointer mdl:h-8 mdl:w-8"
      />
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 mdl:border-none">
        {userList.map((user) => {
          const userImage = USER_LIST.find(
            (img) => img.id === user.id,
          );

          const src = (userImage as UserImageType).src;

          return (
            <Link
              key={user.id}
              href={`/personal-page/${user.id}`}
              className="flex flex-col gap-4"
            >
              <div className="user-list-button h-36 w-[100px] mdl:h-48 mdl:w-[150px]">
                <Image
                  className="h-full w-full rounded-lg"
                  alt="default-image"
                  priority
                  src={src}
                />
              </div>
              <div className="text-center text-sm text-[#2s2s2s] mdl:text-2xl">
                {user.nickname}
              </div>
            </Link>
          );
        })}
      </div>
      <GoHomeButton />
    </div>
  );
};
