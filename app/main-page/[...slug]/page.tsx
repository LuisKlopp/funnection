"use client";

import { usePathname } from "next/navigation";

export default function QuizDetailPage() {
  const pathName = usePathname();
  const parts = pathName.split("/");
  const questionId = Number(parts[parts.length - 1]);

  return <div>main-page test</div>;
}
