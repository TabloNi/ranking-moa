"use client";

import { Input } from "@/components/ui/input";
import { Plus, Search, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const TaskHeader = ({ taskViewHandler, openCreateBoard, taskView }: {
  taskViewHandler: (value: "kanban" | "list") => void,
  openCreateBoard: () => void,
  taskView: string

}) => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <div className="flex-1 flex items-center  gap-4">
        {/* search task */}
        <div className="relative min-w-[240px]">
          <span className="absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2">
            <Search className="w-4 h-4 text-default-500" />
          </span>
          <Input
            type="text"
            placeholder="검색"
            className="ltr:pl-7 rtl:pr-7"
            size="lg"
          />
        </div>
        {/* filter task */}
        <div className="relative">
          <Icon
            icon="heroicons:swatch"
            className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2.5 text-default-600"
          />
          <Select>
            <SelectTrigger className="pl-9 min-w-[120px] whitespace-nowrap py-0">
              <SelectValue placeholder="제품 정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="task_1">프로티원 단백질 쉐이크 파우치형</SelectItem>
              <SelectItem value="task_2">에버콜라겐 인앤업비오틴 셀 4주</SelectItem>
              <SelectItem value="task_3">어노브 대용량 딥 데미지 헤어 트리트먼트 EX</SelectItem>
              <SelectItem value="task_4">마녀공장 퓨어 클렌징 오일</SelectItem>
              <SelectItem value="task_5">좋은느낌 오리지널 울트라날개 생리대</SelectItem>
              <SelectItem value="task_6">롬앤 더 쥬시 래스팅 틴트</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Group By */}
        <div className="relative">
          <Icon
            icon="heroicons:swatch"
            className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-2.5 text-default-600"
          />
          <Select>
            <SelectTrigger className="pl-9 min-w-[160px] whitespace-nowrap">
              <SelectValue placeholder="상태 정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="task_1">Todo</SelectItem>
              <SelectItem value="task_2">Working</SelectItem>
              <SelectItem value="task_3">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* right */}
      <div className="flex-none flex items-center gap-4">
        <div className="relative">
          <span className="absolute top-1/2 -translate-y-1/2 right-2.5 text-default-600 w-8 h-full border-l border-default-200 flex justify-center items-center">
            <Settings className="w-4 h-4 " />
          </span>
          <Select onValueChange={taskViewHandler}>
            <SelectTrigger className="pr-11 min-w-[160px]">
              <SelectValue placeholder="보기 방식" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kanban">칸반 보드</SelectItem>
              <SelectItem value="list">리스트 형태</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={openCreateBoard}>
          <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> 보드 만들기
        </Button>
      </div>
    </div>
  );
};

export default TaskHeader;
