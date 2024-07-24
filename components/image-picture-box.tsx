import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImagePictureBoxProps {
  src: StaticImageData;
}

export const ImagePictureBox = ({ src }: ImagePictureBoxProps) => {
  return (
    <div className="h-10 w-10 cursor-pointer font-medium transition-all duration-100 ease-in-out mdl:h-44 mdl:w-[130px] mdl:rounded-xl mdl:border-[3px] mdl:border-solid mdl:border-[#163b5e] mdl:shadow-[2px_3px_5px_rgb(43,43,43)]">
      <Image
        className="h-full w-full rounded-lg"
        alt="default-image"
        src={src}
        priority
        // width={50}
        // height={50}
        // sizes="100%"
      />
    </div>
  );
};
