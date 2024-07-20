"use client";

import { useEffect, useState } from "react";
import { LinkButton } from "./button/link-button";
import { getIsAbledImageGameButton } from "@/lib/imageGameLocalStorage";

export const ImageGameButton = () => {
  const [isAbled, setIsAbled] = useState(false);

  useEffect(() => {
    const abled = getIsAbledImageGameButton();
    setIsAbled(abled);
  }, []);

  if (!isAbled) {
    return null;
  }

  return (
    <LinkButton href="/image-page" title="Funnection 이미지 게임" />
  );
};
