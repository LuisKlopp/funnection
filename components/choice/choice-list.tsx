"use client";

import { fetchChoiceList } from "@/api/fetchChoiceList";
import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import Image from "next/image";
import Link from "next/link";
import {
  getChoiceList,
  saveChoiceList,
  getClickedChoiceList,
  saveClickedChoiceList,
  deleteChoiceList,
} from "@/lib/choiceLocalStorage";
import { useEffect, useState } from "react";
import { ChoiceType } from "@/types/quiz.types";
import { RefreshCcw } from "lucide-react";
import { GoHomeButton } from "../button/go-home-button";

export const ChoiceList = () => {
  const [choiceList, setChoiceList] = useState<ChoiceType[]>([]);
  const [clickedChoiceList, setClickedChoiceList] = useState<
    number[]
  >(getClickedChoiceList());
  const [isLoading, setIsLoading] = useState(false);

  const handleChoiceListClick = (id: number) => {
    saveClickedChoiceList(id);
    setClickedChoiceList([...clickedChoiceList, id]);
  };

  useEffect(() => {
    const localChoiceList = getChoiceList();
    if (localChoiceList) {
      setChoiceList(localChoiceList);
      return;
    }

    fetchChoiceList().then((data) => {
      setChoiceList(data);
      saveChoiceList(data);
    });
  }, []);

  if (!choiceList.length) return <div>Loading...</div>;

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <h1
        onClick={deleteChoiceList}
        className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl"
      >
        Funnection OX 질문
      </h1>
      <RefreshCcw
        onClick={deleteChoiceList}
        size={32}
        className="absolute right-5 top-6 h-5 w-5 cursor-pointer mdl:h-8 mdl:w-8"
      />
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 mdl:border-none">
        {choiceList.map((choice) => (
          <Link
            key={choice.id}
            className={cn(
              "button-base mobile-select-box-white button-active",
              {
                "mobile-select-box-purple":
                  clickedChoiceList.includes(choice.id),
              },
            )}
            href={`/choice-page/${choice.id}`}
            onClick={() => handleChoiceListClick(choice.id)}
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
                      clickedChoiceList.includes(choice.id),
                  },
                )}
              >
                {choice.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <GoHomeButton />
    </div>
  );
};
