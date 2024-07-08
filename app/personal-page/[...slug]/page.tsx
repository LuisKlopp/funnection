import Link from "next/link";

import { fetchUser } from "@/api/fetchPersonalList";

type PersonalDetailPageProps = {
  params: { slug: string[] };
};

const PersonalDetailPage = async ({
  params,
}: PersonalDetailPageProps) => {
  const id = params.slug[0];
  const user = await fetchUser(id);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Link href={"/personal-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex justify-center gap-4 whitespace-normal break-words px-4 mdl:mb-14">
        <span className="break-normal text-center text-3xl font-semibold text-slate-700 mdl:text-4xl">
          {user.nickname}님에게 하고 싶은 말
        </span>
      </div>
    </div>
  );
};

export default PersonalDetailPage;
