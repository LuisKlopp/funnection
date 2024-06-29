interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between bg-[#c3d3fb] mdl:pl-40 mdl:pr-40">
      {children}
    </main>
  );
};
