"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { UploadCloud, Search, LayoutGrid, List } from "lucide-react";
import React from "react";
import SingleFileCard from "./single-file-card";
import ninja from "@/public/images/files/imageninja.png";
import mountain from "@/public/images/files/imagemountain.png";
import temple from "@/public/images/files/imagetemple.jpg";
import ListFileCard from "./list-file-card";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";
const files = [
  {
    id: faker.string.uuid(),
    ext: "pdf",
    heading: "올리브영 UI 디자인 가이드.pdf",
    date: "2024년 10월 1일",
    size: "200MB",
  },
  {
    id: faker.string.uuid(),
    ext: "html",
    heading: "올리브영 웹사이트 리뉴얼.html",
    date: "2024년 10월 5일",
    size: "320MB",
  },
  {
    id: faker.string.uuid(),
    ext: "ai",
    heading: "올리브영 새로운 로고 디자인.ai",
    date: "2024년 10월 10일",
    size: "450MB",
  },
  {
    id: faker.string.uuid(),
    ext: "fig",
    heading: "올리브영 모바일 앱 프로토타입.fig",
    date: "2024년 10월 15일",
    size: "380MB",
  },
  {
    id: faker.string.uuid(),
    ext: "pdf",
    heading: "올리브영 연간 보고서.pdf",
    date: "2024년 10월 20일",
    size: "500MB",
  },
  {
    id: faker.string.uuid(),
    ext: "png",
    heading: "올리브영 가을 배경.png",
    date: "2024년 10월 25일",
    size: "150MB",
    background: ninja,
  },
  {
    id: faker.string.uuid(),
    ext: "zip",
    heading: "올리브영 파로젝트 파일.zip",
    date: "2024년 10월 30일",
    size: "300MB",
  },
  {
    id: faker.string.uuid(),
    ext: "html",
    heading: "올리브영 이벤트 페이지.html",
    date: "2024년 10월 12일",
    size: "250MB",
  },
  {
    id: faker.string.uuid(),
    ext: "ai",
    heading: "올리브영 광고 배너.ai",
    date: "2024년 10월 18일",
    size: "400MB",
  },
  {
    id: faker.string.uuid(),
    ext: "pdf",
    heading: "올리브영 마케팅 전략.pdf",
    date: "2024년 10월 22일",
    size: "350MB",
  },
  {
    id: faker.string.uuid(),
    ext: "fig",
    heading: "올리브영 UX 디자인.fig",
    date: "2024년 10월 28일",
    size: "270MB",
  },
  {
    id: faker.string.uuid(),
    ext: "png",
    heading: "올리브영 겨울 배경.png",
    date: "2024년 10월 3일",
    size: "180MB",
    background: mountain,
  },
  {
    id: faker.string.uuid(),
    ext: "html",
    heading: "올리브영 블로그 포스트.html",
    date: "2024년 10월 7일",
    size: "220MB",
  },
  {
    id: faker.string.uuid(),
    ext: 'png',
    heading: "올리브영 여름 배경.png",
    date: "2024년 10월 11일",
    size: "160MB",
    background: temple,
  },
  {
    id: faker.string.uuid(),
    ext: 'zip',
    heading: "올리브영 데이터 백업.zip",
    date: "2024년 10월 16일",
    size: "410MB",
  }
];

export type File = (typeof files)[number];

const ViewFiles = () => {
  const [fileView, setFileView] = React.useState<"grid" | "list">("grid");



  return (
    <Card className="mt-6">
      <CardHeader className="mb-0 border-none p-6">

        <div className="flex flex-wrap justify-between gap-4">

          <div className="flex-1">
            <div className="text-lg font-medium text-default-900 whitespace-nowrap">
              프로젝트 파일
            </div>
            <div className="text-xs lg:text-sm font-medium text-default-600 whitespace-nowrap">
              총 15 파일, 약 3GB 사용
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="icon"
              variant="outline"
              className={cn("hover:bg-transparent  ", {
                "hover:border-primary hover:text-primary": fileView === "grid",
                "hover:border-muted-foreground hover:text-muted-foreground":
                  fileView !== "grid",
              })}
              color={fileView === "grid" ? "primary" : "secondary"}
              onClick={() => setFileView("grid")}
            >
              <LayoutGrid className="h-5 w-5" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className={cn("hover:bg-transparent  ", {
                "hover:border-primary hover:text-primary": fileView === "list",
                "hover:border-muted-foreground hover:text-muted-foreground":
                  fileView !== "list",
              })}
              color={fileView === "list" ? "primary" : "secondary"}
              onClick={() => setFileView("list")}
            >
              <List className="h-5 w-5" />
            </Button>

            <div className="relative">
              <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2 text-default-400" />
              <Input placeholder="파일 이름 검색" className="ltr:pl-7 rtl:pr-8" />
            </div>
            <Select>
              <SelectTrigger className="w-[124px]">
                <SelectValue placeholder="전체" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="image">이미지</SelectItem>
                <SelectItem value="file">파일</SelectItem>
                <SelectItem value="audio">오디오</SelectItem>
                <SelectItem value="video">비디오</SelectItem>
              </SelectContent>
            </Select>

            <Label htmlFor="fileUpload">
              <Button asChild>
                <span className="cursor-pointer flex items-center gap-1">
                  <UploadCloud className="h-4 w-4" />
                  파일 업로드  </span>
              </Button>
              <Input type="file" className="hidden" id="fileUpload" />
            </Label>

          </div>
        </div>
      </CardHeader>

      <CardContent>
        {fileView === "grid" && (
          <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {files?.map((item, i) => (
              <SingleFileCard item={item} key={i} />
            ))}
          </div>
        )}
        {fileView === "list" && <ListFileCard files={files} />}
      </CardContent>
    </Card>
  );
};

export default ViewFiles;
