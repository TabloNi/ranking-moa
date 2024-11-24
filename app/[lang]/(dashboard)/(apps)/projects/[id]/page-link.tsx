"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
const pages = [
  {
    text: "overview",
    value: "overview",
    see: "전체개요"
  },
  {
    text: "task",
    value: "task",
    see: "작업"
  },
  {
    text: "docs",
    value: "documents",
    see: "문서"
  },
  {
    text: "files",
    value: "files",
    see: "파일"
  },
  {
    text: "settings",
    value: "settings",
    see: "설정"
  },
];
const PageLink = ({ id }: { id: string }) => {
  const locationName = usePathname();
  return pages.map((item) => (
    <Link
      key={item.value}
      href={`/projects/${id}/${item.value}`}
      className={cn(
        "text-base font-semibold text-default-800 capitalize pb-3 border-b border-transparent cursor-pointer",
        {
          "border-primary": locationName === `/projects/${id}/${item.value}`,
        }
      )}
    >
      {item.see}
    </Link>
  ));
};

export default PageLink;
