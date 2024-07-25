import Image from "next/image";
import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";

interface ImagePictureBoxProps {
  userId: number;
  checkImage: number;
  gender: string;
}

export const ImagePictureBox = ({
  userId,
  checkImage,
  gender,
}: ImagePictureBoxProps) => {
  const s3BaseUrl = process.env.NEXT_PUBLIC_S3_BASE_URL;
  const checkIsMan = gender === "M" ? ManImage : WomanImage;
  const imageUrl = `${s3BaseUrl}/funnection-${userId}.webp`;

  return (
    <div className="h-12 w-12 cursor-pointer font-medium transition-all duration-100 ease-in-out mdl:h-44 mdl:w-[130px] mdl:rounded-xl mdl:border-[3px] mdl:border-solid mdl:border-[#163b5e] mdl:shadow-[2px_3px_5px_rgb(43,43,43)]">
      <Image
        className="h-full w-full rounded-lg"
        alt="default-image"
        src={checkImage ? imageUrl : checkIsMan}
        priority
        width={50}
        height={50}
        sizes="100%"
      />
    </div>
  );
};
