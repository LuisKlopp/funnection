import { ChoiceList } from "@/components/choice/choice-list";

export default async function ChoicePage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <ChoiceList />
    </div>
  );
}
