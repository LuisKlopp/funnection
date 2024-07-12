"use client";

import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { fetchImageGameList } from "@/api/fetchImageGameList";
import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import Image from "next/image";
import Link from "next/link";
import { ImageGameType } from "@/types/imageGame.types";
import {
  getImageGameList,
  saveImageGameList,
  getClickedImageGameList,
  saveClickedImageGameList,
  deleteImageGameList,
} from "@/lib/imageGameLocalStorage";
import { GoHomeButton } from "../button/go-home-button";

export const ImageGameList = () => {
  const [imageGames, setImageGames] = useState<ImageGameType[]>([]);
  const [clickedImageGames, setClickedImageGames] = useState<
    number[]
  >(getClickedImageGameList());

  const handleQuestionClick = (id: number) => {
    saveClickedImageGameList(id);
    setClickedImageGames([...clickedImageGames, id]);
  };

  useEffect(() => {
    const localImageGames = getImageGameList();
    if (localImageGames) {
      setImageGames(localImageGames);
      return;
    }

    fetchImageGameList().then((data) => {
      setImageGames(data);
      saveImageGameList(data);
    });
  }, []);

  if (!imageGames.length) return <div>Loading...</div>;

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <Link
        className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl"
        href="/personal-page"
      >
        Funnection 이미지 게임
      </Link>
      <RefreshCcw
        onClick={deleteImageGameList}
        size={32}
        className="absolute right-5 top-6 h-5 w-5 cursor-pointer mdl:h-8 mdl:w-8"
      />
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 md:border-none">
        {imageGames.map((imageGame) => (
          <Link
            key={imageGame.id}
            className={cn(
              "button-base mobile-select-box-white button-active",
              {
                "mobile-select-box-green": clickedImageGames.includes(
                  imageGame.id,
                ),
              },
            )}
            href={`/image-page/${imageGame.id}`}
            onClick={() => handleQuestionClick(imageGame.id)}
          >
            <div className="relative h-full w-full">
              <Image
                src={CardSelect}
                alt="card-select"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-[#3c4859]",
                  {
                    "text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]":
                      clickedImageGames.includes(imageGame.id),
                  },
                )}
              >
                {imageGame.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <GoHomeButton />
    </div>
  );
};

export default ImageGameList;
