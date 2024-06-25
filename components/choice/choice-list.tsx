import { fetchChoiceList } from "@/api/fetchChoiceList";
import { cn } from "@/lib/utils";
import CardSelect from "@/public/card-select.svg";
import Image from "next/image";
import Link from "next/link";

export const ChoiceList = async () => {
  const choiceList = await fetchChoiceList();

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <h1 className="pt-5 text-2xl font-medium text-slate-700 md:pb-10 md:pt-32 mdl:text-4xl">
        Funnection OX 질문
      </h1>
      <div className="flex flex-wrap justify-center gap-5 overflow-y-scroll border-4 border-x-0 border-b-slate-500 border-t-slate-500 p-4 md:gap-10 mdl:border-none">
        {choiceList.map((choice) => (
          <Link
            key={choice.id}
            className={cn(
              "button-base mobile-select-box-white button-active",
              {
                "mobile-select-box-purple":
                  choice.isClicked,
              },
            )}
            href={`/choice-page/${choice.id}`}
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
                      choice.isClicked,
                  },
                )}
              >
                {choice.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-between px-4">
        <Link
          href={"/balance-page"}
          className="button-base button-active custom-button mb-4 !bg-white !text-slate-500"
        >
          밸런스 카드로 이동
        </Link>
      </div>
    </div>
  );
};
