"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import Flatpickr from "react-flatpickr";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import projectLogo from "@/public/images/projects/project-placeholder.jpg";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Settings = () => {
  return (
    <Card>
      <CardHeader className="border-none mb-3 px-7 pt-7">
        <CardTitle>프로젝트 설정</CardTitle>
      </CardHeader>
      <CardContent className="px-7 mt-5 space-y-6">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">
              프로젝트 로고
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="w-28 h-28 shadow-sm rounded-md relative">
              <Image
                src={projectLogo}
                className="w-full h-full object-cover rounded-md"
                alt="프로젝트 로고"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Label
                      htmlFor="프로젝트 로고 변경"
                      className="absolute -top-2 -right-2 w-6 h-6  bg-primary-500 text-primary-foreground rounded-full grid place-content-center"
                    >
                      <>
                        <Pencil className="w-3 h-3" />
                        <Input
                          type="file"
                          placeholder="프로젝트 로고"
                          id="changeProjectLogo"
                          className="hidden"
                        />
                      </>
                    </Label>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>로고 변경</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="mt-2 text-sm font-medium text-default-500">
              사용 가능 확장자: png, jpg, jpeg.
            </div>
          </div>
        </div>
        {/* project name */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectName" className="text-sm font-medium text-default-700">
              프로젝트 이름
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input
              defaultValue="프로티원 단백질쉐이크 파우치형"
              size="lg"
              id="projectName"
            />
          </div>
        </div>
        {/* project Type */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectType" className="text-sm font-medium text-default-700">
              비고
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input id="projectType" defaultValue="내용 입력" size="lg" />
          </div>
        </div>
        {/* project Descriptions */}
        <div className="grid grid-cols-12  gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectDescription" className="text-sm font-medium text-default-700">
              프로젝트 세부 설명
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Textarea
              id="projectDescription"

              defaultValue="[11월올영픽/1+1] 프로티원 단백질쉐이크 파우치형 40g 4종, 챌린저스 600명 광고 프로젝트"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectType" className="text-sm font-medium text-default-700">
              올리브영 제품 링크
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input id="projectType" defaultValue="https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A0000002125712" size="lg" />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectType" className="text-sm font-medium text-default-700">
              무신사 제품 링크
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input id="projectType" defaultValue="https://www.musinsa.com/products/27666411" size="lg" />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectType" className="text-sm font-medium text-default-700">
              카카오 선물하기 제품 링크
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input id="projectType" defaultValue="내용 입력" size="lg" />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectType" className="text-sm font-medium text-default-700">
              네이버 제품 링크
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input id="projectType" defaultValue="내용 입력" size="lg" />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <Label htmlFor="projectType" className="text-sm font-medium text-default-700">
              쿠팡 제품 링크
            </Label>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Input id="projectType" defaultValue="https://www.coupang.com/vp/products/8367621383?itemId=24177935" size="lg" />
          </div>
        </div>
        {/* Due Date */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">시작일</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Flatpickr
              className="w-full bg-background border border-default-300 pl-3 text-default-500 placeholder:text-default-500 text-sm focus:outline-none h-10 rounded-md px-2"
              placeholder="시작일"
              defaultValue="2024-10-01"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">마감일</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Flatpickr
              className="w-full bg-background border border-default-300 pl-3 text-default-500 placeholder:text-default-500 text-sm focus:outline-none h-10 rounded-md px-2"
              placeholder="마감일"
              defaultValue="2024-11-30"
            />
          </div>
        </div>
        {/* Notifications */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">
              관련 알림
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Checkbox className="w-4 h-4" id="email" />
                <Label htmlFor="email">이메일</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="w-4 h-4" id="phone" />
                <Label htmlFor="phone">문자</Label>
              </div>
            </div>
          </div>
        </div>
        {/* Status */}
        <div className="grid grid-cols-12 items-center gap-5">
          <div className="col-span-12 md:col-span-3">
            <div className="text-sm font-medium text-default-700">알림 활성</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center gap-3">
              <Switch defaultChecked id="active" />
              <Label htmlFor="active">활성화</Label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="md:col-span-3"></div>
          <div className="col-span-12 md:col-span-9 flex items-center gap-3">
            <Button variant="outline">취소</Button>
            <Button>저장하기</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Settings;
