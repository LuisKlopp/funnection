import { LinkButton } from "./link-button";

export const GoHomeButton = () => {
  return (
    <div className="relative mb-4 flex w-full px-4">
      <LinkButton
        href="/"
        title="홈으로"
        className="flex !w-[150px] justify-center text-[18px] mdl:text-[20px]"
      />
    </div>
  );
};
