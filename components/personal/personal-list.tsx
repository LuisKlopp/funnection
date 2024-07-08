"use client";

import { fetchUserList } from "@/api/fetchPersonalList";
import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";
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
        {userList.map((user) => (
          <Link key={user.id} href={`/personal-page/${user.id}`}>
            <div className="button-base relative w-[100px] mdl:w-[150px]">
              <Image
                className="h-full w-full rounded-lg"
                alt="default-image"
                priority
                src={user.gender === "M" ? ManImage : WomanImage}
              />
              <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 transform text-center text-sm text-white mdl:text-2xl">
                {user.nickname}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <GoHomeButton />
    </div>
  );
};
