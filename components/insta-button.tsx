"use client";
import { useEffect, useState } from "react";
import { LinkButton } from "./button/link-button";
import { getIsAbledInstaButton } from "@/lib/instaLocalStorage";

export const InstaButton = () => {
  const [isAbled, setIsAbled] = useState(false);

  useEffect(() => {
    const abled = getIsAbledInstaButton();
    setIsAbled(abled);
  }, []);

  if (!isAbled) {
    return null;
  }

  return <LinkButton href="/insta-page" title="인스타 공유" />;
};
