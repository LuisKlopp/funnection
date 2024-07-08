import { PersonalList } from "@/components/personal/personal-list";

export default async function PersonalPage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <PersonalList />
    </div>
  );
}
