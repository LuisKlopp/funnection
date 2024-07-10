import { fetchBalance } from "@/api/fetchBalanceList";
import { BalanceCounter } from "@/components/balance/balance-counter";
import QuestionTitle from "@/components/question-title";
import Link from "next/link";

type BalanceDetailPageProps = {
  params: { slug: string[] };
};

const BalanceDetailPage = async ({
  params,
}: BalanceDetailPageProps) => {
  const id = params.slug[0];
  const balance = await fetchBalance(id);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Link href={"/balance-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex justify-center gap-4 whitespace-normal break-words px-4 text-3xl mdl:text-4xl">
        <QuestionTitle>{balance.id}.</QuestionTitle>
        <QuestionTitle>{balance.question}</QuestionTitle>
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
