import { BalanceCounter } from "@/components/balance/balance-counter";
import { BalanceType } from "@/types/quiz.types";
import Link from "next/link";

type BalanceDetailPageProps = {
  params: { slug: string[] };
};

const fetchBalanceDetail = async (id: string): Promise<BalanceType> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/balance/${id}`,
    {
      cache: "no-store",
    },
  );
  const data = response.json();
  return data;
};

const BalanceDetailPage = async ({ params }: BalanceDetailPageProps) => {
  const id = params.slug[0];
  const balance = await fetchBalanceDetail(id);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <Link href={"/balance-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex justify-center break-words whitespace-normal px-4 gap-4">
        <span className="text-4xl text-slate-700 font-semibold text-center break-normal">
          {balance.id}.
        </span>
        <span className="text-4xl text-slate-700 font-normal text-center break-keep">
          {balance.question}
        </span>
      </div>
      <div className="w-full">
        <BalanceCounter
          id={id}
          initialLeft={balance.leftCount}
          initialRight={balance.rightCount}
          leftAnswer={balance.leftAnswer}
          rightAnswer={balance.rightAnswer}
        />
      </div>
    </div>
  );
};

export default BalanceDetailPage;
