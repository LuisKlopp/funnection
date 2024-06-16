interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-300 h-[100dvh]">
      {children}
    </main>
  );
};
