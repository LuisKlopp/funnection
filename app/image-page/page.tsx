import ImageGameList from "@/components/image-game/image-game-list";

export default async function ImagePage() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-4">
      <ImageGameList />
    </div>
  );
}
