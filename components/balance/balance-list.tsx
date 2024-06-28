"use client";

import { fetchBalanceList } from "@/api/fetchBalanceList";
import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import Image from "next/image";
import Link from "next/link";
import {
  getBalanceList,
  saveBalanceList,
  getClickedBalanceList,
  saveClickedBalanceList,
  deleteBalanceList,
} from "@/lib/balanceLocalStorage";
import { BalanceType } from "@/types/quiz.types";
import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";

export const BalanceList = () => {
  const [balanceList, setBalanceList] = useState<BalanceType[]>([]);
  const [clickedBalanceList, setClickedBalanceList] = useState<
    number[]
  >(getClickedBalanceList());

  const handleBalanceClick = (id: number) => {
    saveClickedBalanceList(id);
    setClickedBalanceList([...clickedBalanceList, id]);
  };

  useEffect(() => {
    const localBalanceList = getBalanceList();
    if (localBalanceList) {
      setBalanceList(localBalanceList);
      return;
    }

    fetchBalanceList().then((data) => {
      setBalanceList(data);
      saveBalanceList(data);
    });
  }, []);

  if (!balanceList.length) return <div>Loading...</div>;

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <h1
        onClick={deleteBalanceList}
        className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl"
      >
        Funnection 밸런스 질문
      </h1>
      <RefreshCcw
        onClick={deleteBalanceList}
        size={32}
        className="absolute right-5 top-6 h-5 w-5 cursor-pointer mdl:h-8 mdl:w-8"
      />
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 md:border-none">
        {balanceList.map((balance) => (
          <Link
            key={balance.id}
            className={cn(
              "button-base mobile-select-box-white button-active",
              {
                "mobile-select-box-red": clickedBalanceList.includes(
                  balance.id,
                ),
              },
            )}
            href={`/balance-page/${balance.id}`}
            onClick={() => handleBalanceClick(balance.id)}
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
                      clickedBalanceList.includes(balance.id),
                  },
                )}
              >
                {balance.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-between px-4">
        <Link
          href="/question-page"
          className="button-base button-active custom-button mb-4 !bg-white !text-slate-500"
        >
          단답 카드로 이동
        </Link>
      </div>
    </div>
  );
};
