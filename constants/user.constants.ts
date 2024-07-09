import firstImage from "@/public/3-1.png";
import thirdImage from "@/public/3-3.png";
import fourthImage from "@/public/3-4.png";
import fifthImage from "@/public/3-5.png";
import sixthImage from "@/public/3-6.png";
import eighthImage from "@/public/3-8.png";
import ManImage from "@/public/man-image.png";
import WomanImage from "@/public/woman-image.png";
import { StaticImageData } from "next/image";

export interface UserImageType {
  id: number;
  src: StaticImageData;
}

export const USER_LIST: UserImageType[] = [
  {
    id: 1,
    src: firstImage,
  },
  {
    id: 2,
    src: WomanImage,
  },
  {
    id: 3,
    src: thirdImage,
  },
  {
    id: 4,
    src: fourthImage,
  },
  {
    id: 5,
    src: fifthImage,
  },
  {
    id: 6,
    src: sixthImage,
  },
  {
    id: 7,
    src: ManImage,
  },
  {
    id: 8,
    src: eighthImage,
  },
];
