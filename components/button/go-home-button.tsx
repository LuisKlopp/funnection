import { LinkButton } from "./link-button";

export const GoHomeButton = () => {
  return (
    <div className="relative mb-4 flex w-full px-4">
      <LinkButton
        href="/"
        title="홈으로"
        className="flex !w-[100px] justify-center text-[14px] drop-shadow-[0_5px_5px_rgba(0,0.4,0,0.3)] mdl:!w-[150px] mdl:text-[20px]"
      />
    </div>
  );
};
