interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-300">
      {children}
    </main>
  );
};

export default MainLayout;
