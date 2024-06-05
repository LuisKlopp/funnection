import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-slate-300">
      <div className="w-full max-w-xl h-[100dvh] flex flex-col justify-center items-center gap-4">
        <div>
          <span className="text-4xl font-bold text-slate-700 text-shad drop-shadow-md">
            Funnection
          </span>
        </div>
        <Input type="nickname" placeholder="문토 닉네임을 입력해주세요 :)" />
        <Input type="nickname" placeholder="mbti를 입력해주세요 :)" />
        <Button buttonTitle="로그인" />
      </div>
    </main>
  );
}
