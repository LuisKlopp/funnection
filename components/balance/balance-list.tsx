import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import { BalanceType } from "@/types/quiz.types";
import Image from "next/image";
import Link from "next/link";

const fetchBalanceList = async (): Promise<BalanceType[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/balance`, {
    cache: "no-store",
  });
  const data = response.json();
  return data;
};

export const BalanceList = async () => {
  const balanceList = await fetchBalanceList();

  return (
    <div className="flex flex-col gap-4 items-center h-full">
      <Link href="/question-page" className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <h1 className="text-2xl mdl:text-4xl font-medium text-slate-700 md:pt-32 md:pb-10 pt-5">
        Funnection Balance
      </h1>
      <div className="flex gap-5 md:gap-10 flex-wrap p-4 overflow-y-scroll justify-center border-4 border-t-slate-500 border-b-slate-500 md:border-none border-x-0">
        {balanceList.map((balance) => (
          <Link
            key={balance.id}
            className={cn("button-base mobile-select-box-white button-active", {
              "mobile-select-box-red": balance.isClicked,
            })}
            href={`/balance-page/${balance.id}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={CardSelect}
                alt="card-select"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div
                className={cn(
                  "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#3c4859]",
                  {
                    "text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]":
                      balance.isClicked,
                  },
                )}
              >
                {balance.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-end px-4">
        <Link
          href={"/choice-page"}
          className="mb-4 button-base button-active custom-button !bg-white !text-slate-500"
        >
          OX 카드로 이동
        </Link>
      </div>
    </div>
  );
};
