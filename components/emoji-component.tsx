import { EMOJI_LIST } from "@/constants/emoji.constants";

interface EmojiComponentProps {
  category: string;
}

export const EmojiComponent = ({ category }: EmojiComponentProps) => {
  const handleDisplayEmoji = (category: string) =>
    EMOJI_LIST[category];

  return (
    <div className="absolute right-[-10px] top-[-25px] h-5 w-5">
      {handleDisplayEmoji(category)}
    </div>
  );
};
