"use client";
import React, { useState, useEffect, useTransition } from "react";
import { toast } from "react-hot-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm, Controller } from "react-hook-form";
import Select, { components } from "react-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn, formatDate } from "@/lib/utils";
import { addProjectAction, editProjectAction } from "@/action/project-action";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Calendar as CalendarIcon,
} from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select as UiSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { faker } from "@faker-js/faker";

const assignOption = [
  {
    value: "mahedi",
    label: "Mahedi Amin",
    image: faker.image.avatarLegacy(),
  },
  {
    value: "sovo",
    label: "Sovo Haldar",
    image: faker.image.avatarLegacy(),
  },
  {
    value: "rakibul",
    label: "Rakibul Islam",
    image: faker.image.avatarLegacy(),
  },
  {
    value: "pritom",
    label: "Pritom Miha",
    image: faker.image.avatarLegacy(),
  },
];

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
import { type Project } from "@/app/api/projects/data";

const OptionComponent = ({ data, ...props }: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8 ring-1 ring-border ring-offset-background">
          <AvatarImage src={data.image} />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="text-sm font-medium text-default-900">{data.label}</div>
      </div>
    </components.Option>
  );
};

const schema = z.object({
  title: z.string().min(2, { message: "제목은 2글자 이상 입력해야 합니다." }),
  description: z.string().optional(),
  subtitle: z.string().optional(),
  status: z.string().optional(),
  priority: z.string().optional(),
});

const ProjectsSheet = ({
  open,
  project,
  onClose,
  selectedId,
}: {
  open: boolean;
  project: Project;
  onClose: () => void;
  selectedId: string;
}) => {
  // form state
  const [assign, setAssign] = React.useState<any | []>([]);
  const [selectedFile, setSelectedFile] = useState<any | null>(null);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const ResetForm = async () => {
    reset();
  };

  const onSubmit = (data: any) => {
    data.assign = assign;
    data.assignDate = formatDate(startDate);
    data.dueDate = formatDate(endDate);
    const updatedProject = {
      ...project,
      title: data.title,
      assign: data.assign,
      assignDate: data.assignDate,
      dueDate: data.dueDate,
      description: data.description,
      status: data.status,
      priority: data.priority,
    };
    var result;

    if (project) {
      startTransition(async () => {
        result = await editProjectAction(selectedId, updatedProject);
        toast.success("업데이트가 완료되었습니다.");
      });
    } else {
      startTransition(async () => {
        result = await addProjectAction(data);
        toast.success("추가가 완료되었습니다.");
      });
    }

    onClose();
    reset();
  };

  useEffect(() => {
    setValue("title", project?.title || "");
    setValue("description", project?.description || "");
    setValue("assign", project?.assign || []);
    setValue("priority", project?.priority || "");
    setValue("status", project?.status || "");
    const parsedAssignDate = project?.assignDate
      ? new Date(project.assignDate)
      : null;
    const parsedDueDate = project?.dueDate ? new Date(project.dueDate) : null;
    // Set state for startDate and endDate
    setStartDate(parsedAssignDate ?? new Date());
    setEndDate(parsedDueDate ?? new Date());
  }, [open]);

  return (
    <>
      <Sheet open={open}>
        <SheetContent
          onClose={() => {
            ResetForm();
            onClose();
          }}
          className="px-6"
        >
          <SheetHeader className="px-0">
            <SheetTitle>
              {project ? "제품 수정" : "새 제품 생성"}
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100%-40px)]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-4">
                  <div className="text-xs font-medium text-default-600">
                    이미지 업로드
                  </div>

                  <Controller
                    name="file"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Label
                          htmlFor="projectLogo"
                          className="h-12 w-12 flex justify-center items-center bg-default-100 rounded"
                        >
                          <Plus className="w-6 h-6 text-default-400" />
                        </Label>
                        <Input
                          type="file"
                          id="projectLogo"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              const file = e.target.files[0];
                              setSelectedFile(file);
                              toast.success(`파일 선택됨: ${file.name}`);
                              console.log("Selected file:", file.name);
                            }
                          }}
                        />
                      </>
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="projectName" className="mb-1.5">
                    제품 이름
                  </Label>
                  <Input
                    type="text"
                    {...register("title")}
                    placeholder="제품 이름을 입력해 주세요."
                    className={cn("", {
                      "border-destructive focus:border-destructive": errors.title,
                    })}
                  />
                  {errors.title && (
                    <span className="text-destructive text-sm">
                      {errors.title?.message?.toString() || ""}
                    </span>
                  )}
                </div>
                <div>
                  <Label htmlFor="description" className="mb-1.5">
                    세부 설명
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="세부 설명을 입력해 주세요"
                    {...register("description")}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="status" className="mb-1.5">
                      상태
                    </Label>
                    <Controller
                      name="status"
                      control={control}
                      render={({ field }) => (
                        <UiSelect
                          value={field.value}
                          onValueChange={(value) => {
                            console.log("Status changed to:", value);
                            field.onChange(value);
                          }}
                      
                        >
                          <SelectTrigger onClick={() => console.log("Status dropdown clicked")}>
                            <SelectValue placeholder="상태" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="todo">할 일</SelectItem>
                            <SelectItem value="in progress">진행 중</SelectItem>
                            <SelectItem value="urgent">긴급</SelectItem>
                            <SelectItem value="completed">완료됨</SelectItem>
                          </SelectContent>
                        </UiSelect>
                      )}
                    />
                  </div>
                  <div>
                    <Label htmlFor="priority" className="mb-1.5">
                      중요도
                    </Label>
                    <Controller
                      name="priority"
                      control={control}
                      render={({ field }) => (
                        <UiSelect
                          value={field.value}
                          onValueChange={(value) => {
                            console.log("중요도 수정", value);
                            field.onChange(value);
                          }}
                  
                        >
                          <SelectTrigger onClick={() => console.log("Priority dropdown clicked")}>
                            <SelectValue placeholder="중요도" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">낮음</SelectItem>
                            <SelectItem value="medium">중간</SelectItem>
                            <SelectItem value="high">높음</SelectItem>
                          </SelectContent>
                        </UiSelect>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description" className="mb-1.5">
                    올리브영 링크
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="올리브영 제품 링크를 붙여넣어 주세요"
                    {...register("description")}
                  />
                </div>
                <div>
                  <Label htmlFor="naver_description" className="mb-1.5">
                    네이버 링크
                  </Label>
                  <Textarea
                    id="naver_description"
                    placeholder="네이버 제품 링크를 붙여넣어 주세요"
                    {...register("naver_description")}
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="mb-1.5">
                    무신사 링크
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="무신사 제품 링크를 붙여넣어 주세요"
                    {...register("description")}
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="mb-1.5">
                    카카오 링크
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="카카오 제품 링크를 붙여넣어 주세요"
                    {...register("description")}
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="mb-1.5">
                    쿠팡 링크
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="쿠팡 제품 링크를 붙여넣어 주세요"
                    {...register("description")}
                  />
                </div>
         
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="startDate" className="mb-1.5">
                      시작 날짜
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-between text-left font-normal border-default-300 bg-background ",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          {startDate ? (
                            formatDate(startDate,)
                          ) : (
                            <span>날짜를 선택해 주세요.</span>
                          )}
                          <CalendarIcon className="h-4 w-4 " />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Controller
                          name="startDate"
                          control={control}
                          render={({ field }) => (
                            <Calendar
                              mode="single"
                              selected={startDate}
                              onSelect={(date) => setStartDate(date as Date)}
                              initialFocus
                            />
                          )}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="endDate" className="mb-1.5">
                      종료 날짜
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-between text-left font-normal border-default-300 bg-background",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          {endDate ? (
                            formatDate(endDate)
                          ) : (
                            <span>날짜를 선택해 주세요.</span>
                          )}
                          <CalendarIcon className="h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Controller
                          name="endDate"
                          control={control}
                          render={({ field }) => (
                            <Calendar
                              mode="single"
                              selected={endDate}
                              onSelect={(date) => setEndDate(date as Date)}
                              initialFocus
                            />
                          )}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-6">
                <Button
                  color="warning"
                  variant="soft"
                  className="flex-1"
                  onClick={() => {
                    onClose();
                  }}
                >
                  취소
                </Button>

                <Button type="submit" disabled={isPending} className="flex-1">
                  {project ? "제품 업데이트" : "제품 추가"}
                </Button>
              </div>
            </form>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProjectsSheet;
