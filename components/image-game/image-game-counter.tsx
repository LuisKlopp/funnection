"use client";

import { ImageGameUserType } from "@/types/imageGame.types";
import { USER_LIST, UserImageType } from "@/constants/user.constants";
import axios from "axios";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImagePictureBox } from "../image-picture-box";

interface ImageGameCounterProps {
  imageId: number;
  imageUsers: ImageGameUserType[];
}

export const ImageGameCounter = ({
  imageId,
  imageUsers,
}: ImageGameCounterProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [topVoters, setTopVoters] = useState<number[]>([]);

  const handleAddVote = async (userId: number) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/votes/${userId}/${imageId}`,
      );
      setClicked(true);
    } catch (error) {
      console.error("Failed to increment no", error);
    }
  };

  const handleShowResults = async () => {
    const imageData = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/image-game/${imageId}`,
    );

    const users = imageData.data.users;

    const sortedUsers = [...users].sort((a, b) => b.votes - a.votes);
    const maxVotes = sortedUsers[0].votes;

    const topVoters = sortedUsers
      .filter((user) => user.votes === maxVotes)
      .map((user) => user.id);

    setTopVoters(topVoters);
  };

  return (
    <div className="flex w-full flex-col gap-20">
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 mdl:flex-row mdl:gap-10">
        {imageUsers.map((user) => {
          const userImage = USER_LIST.find(
            (userImage) => userImage.id === user.id,
          );
          const src = (userImage as UserImageType).src;
          return (
            <div
              key={user.id}
              onClick={() => handleAddVote(user.id)}
              className={cn(
                "mdl:w-26 user-button flex w-[70%] cursor-pointer items-center gap-8 rounded-lg bg-white shadow-xl mdl:pointer-events-none mdl:w-auto mdl:flex-col mdl:bg-inherit mdl:shadow-none",
                {
                  "pointer-events-none bg-[#bbbbcf]": clicked,
                  "mdl:bg-[#2c3c8d]": topVoters.includes(user.id),
                },
              )}
            >
              <ImagePictureBox src={src} />
              <div className="flex flex-row items-center gap-4 mdl:flex-col">
                <span
                  className={cn(
                    "text-base text-slate-700 mdl:text-lg",
                    {
                      "mdl:text-white": topVoters.includes(user.id),
                    },
                  )}
                >
                  {user.nickname}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden w-full justify-center mdl:flex">
        <button
          onClick={handleShowResults}
          className="button-base custom-button box-shadow-03 w-[150px]"
        >
          결과 확인
        </button>
      </div>
    </div>
  );
};
