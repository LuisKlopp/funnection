"use client";

import Image from "next/image";
import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";
import { ImageGameUserType } from "@/types/imageGame.types";
import axios from "axios";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

  const handleShowResults = () => {
    const sortedUsers = [...imageUsers].sort(
      (a, b) => b.votes - a.votes,
    );
    const maxVotes = sortedUsers[0].votes;

    const topVoters = sortedUsers
      .filter((user) => user.votes === maxVotes)
      .map((user) => user.id);

    setTopVoters(topVoters);
  };

  return (
    <div className="flex w-full flex-col gap-20">
      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 mdl:flex-row mdl:gap-10">
        {imageUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => handleAddVote(user.id)}
            className={cn(
              "mdl:w-26 user-button flex w-[70%] cursor-pointer items-center gap-8 rounded-lg bg-white shadow-xl mdl:pointer-events-none mdl:w-auto mdl:flex-col mdl:bg-inherit mdl:shadow-none",
              {
                "pointer-events-none bg-[#bbbbcf]": clicked,
                "border-4 border-slate-700": topVoters.includes(
                  user.id,
                ),
              },
            )}
          >
            <div className="w-10 rounded-lg mdl:w-24">
              <Image
                className="rounded-lg"
                alt="default-image"
                src={user.gender === "M" ? ManImage : WomanImage}
              />
            </div>
            <div className="flex flex-row items-center gap-4 mdl:flex-col">
              <span className="text-base text-blue-800 mdl:text-lg">
                {user.nickname}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden w-full justify-center mdl:flex">
        <button
          onClick={handleShowResults}
          className="button-base custom-button w-[150px]"
        >
          결과 확인
        </button>
      </div>
    </div>
  );
};
