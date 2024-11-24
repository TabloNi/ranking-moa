
"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { CalendarDays, X } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "react-select";

const users = [
  { value: "202", label: "프로티원 단백질쉐이크 파우치형" },
  { value: "203", label: "에버콜라겐 인앤업비오틴 셀 4주" },
  { value: "204", label: "어노브 대용량 딥 데미지 헤어 트리트먼트 EX" },
  { value: "205", label: "마녀공장 퓨어 클렌징 오일" },
  { value: "206", label: "좋은느낌 오리지널 울트라날개 생리대" },
  { value: "207", label: "롬앤 더 쥬시 래스팅 틴트" },
];
const statuses = [
  { value: "todo", label: "할 일" },
  { value: "inprogress", label: "진행 중" },
  { value: "completed", label: "완료" },
];
const prioriy = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const styles = {
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const CreateTask = ({ open, onClose }: {
  open: boolean,
  onClose: () => void
}) => {

  const [openDate, setOPenDate] = useState<boolean>(true);







  return (
    <Sheet
      open={open}
      onOpenChange={onClose}
    >
      <SheetContent className="pt-5">
        <SheetHeader className="flex-row items-center justify-between mb-4">
          <span className="text-lg font-semibold text-default-900">작업 생성</span>
        </SheetHeader>
        <form className=" h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">작업 이름</Label>
              <Input id="boardTitle" placeholder="작업 이름" />
            </div>
            <div>
              <Label htmlFor="assignedMember" className="mb-1.5 text-default-600">제품 선택</Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={users}
                styles={styles}
                isMulti
              />
            </div>

            <div>
              <Label
                htmlFor="status"
                className="mb-1.5 text-default-600">
                Status
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={statuses}
                styles={styles}
              />
            </div>
            <div>
              <Label
                htmlFor="priority"
                className="mb-1.5 text-default-600">
                Priority
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={prioriy}
                styles={styles}
              />
            </div>

            <div>
              <Label
                htmlFor="priority"
                className="mb-1.5 text-default-600">
                Due Date
              </Label>

              <div className="relative">
                <Input
                  placeholder="Select Date"

                />

                <CalendarDays
                  className="w-4 h-4 text-default-400 absolute top-1/2 right-2 -translate-y-1/2"
                />
                <div
                  className={cn("absolute bottom-10 left-0 w-[300px] bg-background z-20 hidden", {
                    "block": openDate
                  })}
                >

                </div>
              </div>
            </div>
          </div>
          <SheetFooter className="pb-10">
            <SheetClose asChild>
              <Button type="button" color="warning">취소</Button>
            </SheetClose>
            <Button>작업 추가</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTask;

