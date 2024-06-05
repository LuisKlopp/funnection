import { Input } from "@/components/input";
import { Button } from "@/components/button";

export const LoginBox = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <Input type="nickname" placeholder="문토 닉네임을 입력해주세요 :)" />
      <Input type="nickname" placeholder="mbti를 입력해주세요 :)" />
      <Button buttonTitle="로그인" />
    </div>
  );
};
