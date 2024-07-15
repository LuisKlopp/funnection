import firstImage from "@/public/4-1.png";
import fourthImage from "@/public/4-4.png";
import seventhImage from "@/public/4-7.png";
import eighthImage from "@/public/4-8.png";
import ManImage from "@/public/man-image.png";
// import WomanImage from "@/public/woman-image.png";
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
    src: ManImage,
  },
  {
    id: 3,
    src: ManImage,
  },
  {
    id: 4,
    src: fourthImage,
  },
  {
    id: 5,
    src: ManImage,
  },
  {
    id: 6,
    src: ManImage,
  },
  {
    id: 7,
    src: seventhImage,
  },
  {
    id: 8,
    src: eighthImage,
  },
];
