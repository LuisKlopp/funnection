import Link from "next/link";

const BalanceEventPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Link href={"/balance-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex w-full justify-center px-12">
        <span className="text-2xl text-slate-700">
          이 페이지를 보셨다면 <br />
          가장 먼저 손을 들어주세요! <br /> 🙋🏻‍♂️🙋🏻‍♀️
        </span>
      </div>
    </div>
  );
};

export default BalanceEventPage;
