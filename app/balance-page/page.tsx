import { BalanceQuizList } from "@/components/balance-list";

export default function BalancePage() {
  return (
    <div className="w-full max-w-xl h-[100dvh] flex flex-col justify-center items-center gap-4">
      <BalanceQuizList />
    </div>
  );
}
