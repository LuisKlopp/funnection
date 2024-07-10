import { cn } from "@/lib/utils";

interface ResponsiveComponentProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveComponent = ({
  children,
  className,
}: ResponsiveComponentProps) => {
  return (
    <div className={(cn("hidden mdl:block"), className)}>
      {children}
    </div>
  );
};
