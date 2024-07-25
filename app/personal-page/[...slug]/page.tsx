import Link from "next/link";
import Image from "next/image";

import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";

import { fetchUser } from "@/api/fetchPersonalList";
import { PersonalSubmitBox } from "@/components/personal/personal-submit-box";

type PersonalDetailPageProps = {
  params: { slug: string[] };
};

const PersonalDetailPage = async ({
  params,
}: PersonalDetailPageProps) => {
  const id = params.slug[0];
  const user = await fetchUser(id);

  const s3BaseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  const checkIsMan = user.gender === "M" ? ManImage : WomanImage;
  const imageUrl = `${s3BaseUrl}/funnection-${id}.webp`;

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
        <div className="hidden flex-col gap-4 mdl:flex mdl:items-center">
          <div className="mdl:h-48 mdl:w-[150px] mdl:rounded-xl mdl:border-[3px] mdl:border-solid mdl:border-[#163b5e] mdl:shadow-[2px_3px_5px_rgb(43,43,43)]">
            <Image
              className="h-full w-full rounded-lg"
              alt="default-image"
              src={user.checkImagePath ? imageUrl : checkIsMan}
              priority
              width={50}
              height={50}
              sizes="100%"
            />
          </div>
          <span className="break-normal text-center text-3xl text-slate-700 mdl:text-4xl">
            {user.nickname} 님
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailPage;
