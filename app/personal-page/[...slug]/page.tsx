import Link from "next/link";
import Image from "next/image";

import { fetchUser } from "@/api/fetchPersonalList";
import { PersonalSubmitBox } from "@/components/personal/personal-submit-box";
import { PersonalCounter } from "@/components/personal/personal-counter";
import { USER_LIST, UserImageType } from "@/constants/user.constants";

type PersonalDetailPageProps = {
  params: { slug: string[] };
};

const PersonalDetailPage = async ({
  params,
}: PersonalDetailPageProps) => {
  const id = params.slug[0];
  const user = await fetchUser(id);
  const userImage = USER_LIST.find((img) => img.id === Number(id));
  const src = (userImage as UserImageType).src;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Link href={"/personal-page"} className="absolute left-5 top-5">
        뒤로가기
      </Link>
      <div className="flex w-full flex-col items-center mdl:hidden">
        <div className="mb-4 w-[70%] text-2xl text-slate-700">
          <span>{user.nickname}님께</span>
        </div>
        <PersonalSubmitBox personalId={id} />
      </div>
      <div className="flex flex-col">
        <div className="hidden flex-col gap-4 mdl:flex">
          <Image
            className="user-list-button pointer-events-none w-[180px] rounded-3xl"
            alt="user-image"
            priority
            src={src}
          />
          <span className="break-normal text-center text-3xl text-slate-700 mdl:text-4xl">
            {user.nickname} 님
          </span>
        </div>
      </div>
      <div className="z-10 hidden mdl:block">
        <PersonalCounter userId={user.id} />
      </div>
    </div>
  );
};

export default PersonalDetailPage;
