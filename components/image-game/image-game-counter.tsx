"use client";

import { ImageGameUserType } from "@/types/imageGame.types";
import axios from "axios";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImagePictureBox } from "../image-picture-box";
import { fetchImageGame } from "@/api/fetchImageGameList";

interface ImageGameCounterProps {
  imageId: number;
  initialImageUsers: ImageGameUserType[];
}

export const ImageGameCounter = ({
  imageId,
  initialImageUsers,
}: ImageGameCounterProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [topVoters, setTopVoters] = useState<
    { id: number; votes: number }[]
  >([]);
  const [imageUsers, setImageUsers] =
    useState<ImageGameUserType[]>(initialImageUsers);

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
    const imageData = await fetchImageGame(String(imageId));

    const users = imageData.users.filter((user) => user.id !== 28);

    const sortedUsers = [...users].sort((a, b) => b.votes - a.votes);
    const maxVotes = sortedUsers[0].votes;

    const topVoters = sortedUsers
      .filter((user) => user.votes === maxVotes)
      .map((user) => ({ id: user.id, votes: user.votes }));

    setTopVoters(topVoters);
    setImageUsers(users);
  };

  return (
    <div className="flex w-full flex-col gap-24">
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 mdl:flex-row mdl:gap-10">
        {imageUsers.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => handleAddVote(user.id)}
              className={cn(
                "mdl:w-26 user-button flex w-[70%] cursor-pointer items-center gap-4 rounded-lg bg-white shadow-xl mdl:pointer-events-none mdl:w-auto mdl:flex-col mdl:bg-inherit mdl:shadow-none",
                {
                  "pointer-events-none bg-[#bbbbcf]": clicked,
                  "mdl:bg-[#3238ad]": topVoters.some(
                    (topVoter) => topVoter.id === user.id,
                  ),
                },
              )}
            >
              <ImagePictureBox
                userId={user.id}
                checkImage={user.checkImagePath}
                gender={user.gender}
              />
              <div className="p-2">
                <span
                  className={cn(
                    "text-base text-slate-700 mdl:text-lg",
                    {
                      "mdl:text-white": topVoters.some(
                        (topVoter) => topVoter.id === user.id,
                      ),
                    },
                  )}
                >
                  {user.nickname}
                </span>
              </div>
              <div
                className={cn("hidden pb-2 text-lg", {
                  "text-white mdl:block": topVoters.some(
                    (topVoter) => topVoter.id === user.id,
                  ),
                })}
              >
                <span>{user.votes}</span>
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
