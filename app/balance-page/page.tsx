import { BalanceList } from "@/components/balance-list";

export default function BalancePage() {
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center gap-4">
      <BalanceList />
    </div>
  );
}
