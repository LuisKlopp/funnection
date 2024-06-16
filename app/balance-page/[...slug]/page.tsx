import { BalanceCounter } from "@/components/balance-counter";
import { BalanceType } from "@/types/quiz.types";
import axios from "axios";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type BalanceDetailPageProps = {
  params: { slug: string[] };
};

const fetchBalanceDetail = async (id: string): Promise<BalanceType> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/balance/${id}`,
  );
  return response.data;
};

const BalanceDetailPage = async ({ params }: BalanceDetailPageProps) => {
  const id = params.slug[0];
  const balance = await fetchBalanceDetail(id);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <Link href={"/balance-page"} className="absolute left-10 top-5">
        <MoveLeft size={48} />
      </Link>
      <div className="flex justify-center break-words whitespace-normal">
        <span className="text-5xl text-slate-700 font-semibold text-center font-pretendard">
          {balance.question}
        </span>
      </div>
      <div>
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
