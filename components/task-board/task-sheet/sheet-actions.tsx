"use client";
import { faker } from "@faker-js/faker";
import TaskDate from "../common/task-date";
import Dependency from "../common/dependency";
import StoryPoint from "../common/story-point";
import AssignTags from "../common/assign-tags";
import { Icon } from "@iconify/react";
import AssignMembers from "../common/assign-members";
import { Check, Hash, List, Plus } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Priority from "../common/priority";
import AssignList from "../common/assign-list";
import { type Task as TaskType } from "@/app/api/tasks/data";

const SheetActions = ({ task, taskId }: {
  task: TaskType
  taskId: TaskType["id"]
}) => {
  return (
    <div className="py-5 px-4 lg:px-6 border-b border-default-200">
      <div className="grid grid-cols-3 gap-2">
        {/* task date */}
        <div>
          <div className="flex items-center gap-1 mb-3">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <Icon
                icon="heroicons:calendar"
                className="text-primary w-3.5 h-3.5"
              />
            </div>
            <span className="text-sm font-medium text-default-900">날짜 선택</span>
          </div>
          <TaskDate />
        </div>

        {/* assigned list */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <List className="text-primary w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-medium text-default-900">제품 설정</span>
          </div>
          <AssignList />
        </div>

        {/* assign tags */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <div className="bg-default-100 h-6 w-6 rounded-full grid place-content-center">
              <Icon
                icon="heroicons:tag"
                className="text-primary w-3.5 h-3.5"
              />
            </div>
            <span className="text-sm font-medium text-default-900">제품 태그</span>
          </div>
          <AssignTags task={task} taskId={taskId} />
        </div>
      </div>
    </div>
  );
};

export default SheetActions;
