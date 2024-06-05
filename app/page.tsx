import { LoginBox } from "@/components/login-box";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-300">
      <div className="w-full max-w-xl h-[100dvh] flex flex-col justify-center items-center gap-4">
        <div className="drop-shadow-lg mb-5">
          <span className="text-4xl font-bold text-slate-700">Funnection</span>
        </div>
        <LoginBox />
      </div>
    </main>
  );
}
