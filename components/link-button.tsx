import { cn } from "@/lib/utils";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  title: string;
  className?: string;
}

export const LinkButton = ({
  href,
  title,
  className,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "button-base button-active custom-button mb-4 w-[250px] !bg-white !text-slate-500 mdl:w-[250px]",
        className,
      )}
    >
      {title}
    </Link>
  );
};
