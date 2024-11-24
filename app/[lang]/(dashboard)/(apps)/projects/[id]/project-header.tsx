"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import projectImage from "@/public/images/projects/project-1.png";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { faker } from "@faker-js/faker";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import { type Project } from "@/app/api/projects/data";

const ProjectHeader = ({ project }: { project: Project }) => {
  const data = [
    {
      text: "시작일",
      date: "2024년 10월 1일",
    },
    {
      text: "종료일",
      date: "2024년 11월 30일",
    },
    {
      text: "금일 올리브영 랭킹",
      date: "27위",
    },
    {
      text: "금일 무신사 랭킹",
      date: "16위",
    },
  ];
  const users = [
    {
      name: "Nick Jonas",
      value: "userid1",
      image: avatar1,
      lastMessage: "How are you?",
      isUserActive: true,
    },
    {
      name: "Fahim",
      value: "userid2",
      image: avatar2,
      lastMessage: "Are you okay?",
      isUserActive: false,
    },
    {
      name: "Nayeem",
      value: "userid3",
      image: avatar3,
      lastMessage: "",
      isUserActive: true,
    },
    {
      name: "Iftekhar",
      value: "userid4",
      image: avatar4,
      lastMessage: "Is everything fine?",
      isUserActive: false,
    },
  ];
  return (
    <>
      <CardHeader className="flex-row items-center">
        <CardTitle className="flex-1"> {project.title} </CardTitle>
        <div className="flex-none flex items-center gap-3">
      
          {/* elipsis */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" color="secondary">
                <Icon
                  icon="heroicons:ellipsis-horizontal-20-solid"
                  className="w-5 h-5 text-default-500"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[196px]" align="end">
              <DropdownMenuItem>공유</DropdownMenuItem>
              <DropdownMenuItem>설정</DropdownMenuItem>
              <DropdownMenuItem>삭제</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="border-b border-default-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-none">
            <div className="h-[148px] w-[148px] rounded">
              <Image
                src={projectImage}
                alt="제품 이미지"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="text-xl font-medium text-default-950 truncate">
                {" "}
                프로티원 단백질쉐이크 파우치형
              </div>
              <div className="space-x-3 rtl:space-x-reverse ">
                <Badge color="default" variant="outline">
                  {" "}
                  진행 중{" "}
                </Badge>
                <Badge color="info" variant="outline">
                  {" "}
                  낮음{" "}
                </Badge>
              </div>
            </div>
            <div className="text-sm text-default-600 w-full  mt-1">
            [11월올영픽/1+1] 프로티원 단백질쉐이크 파우치형 40g 4종, 챌린저스 600명 광고 프로젝트
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 lg:gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="border border-dashed border-default-300 rounded py-2.5 px-3 min-w-fit lg:min-w-[148px]"
                >
                  <div className="text-sm font-medium text-default-500 capitalize">
                    {item.text}
                  </div>
                  <div className="text-sm font-medium text-default-900">
                    {item.date}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default ProjectHeader;
