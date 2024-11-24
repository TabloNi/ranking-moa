"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import ContactList from "./contact-list";
import { type Contact as ContactType } from "@/app/api/chat/data";
const taskFilters = [
  {
    icon: "heroicons:document-text",
    label: "내 할일",
    value: "mytask",
  },
  {
    icon: "heroicons:star",
    label: "중요한 일",
    value: "working",
  },
  {
    icon: "heroicons:check",
    label: "완료",
    value: "completed",
  },
  {
    icon: "heroicons:trash",
    label: "휴지통",
    value: "trash",
  },
];
const priorityFilters = [
  {
    label: "높음",
    value: "high",
    color: "destructive",
    total: "01",
  },
  {
    label: "중간",
    value: "medium",
    color: "warning",
    total: "02",
  },
  {
    label: "낮음",
    value: "low",
    color: "info",
    total: "01",
  },
];
const TaskSidebar = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <>
      <ul>
        {taskFilters.map((item, index) => (
          <li
            key={`filter-key-${index}`}
            className={cn(
              "cursor-pointer flex items-center gap-1.5 p-3 rounded group hover:bg-primary/10"
            )}
          >
            <Icon
              icon={item.icon}
              className={cn(
                "w-4 h-4 text-default-600 group-hover:text-primary",
                ""
              )}
            />
            <span
              className={cn(
                "text-sm font-medium text-default-600 group-hover:text-primary",
                ""
              )}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="border border-dashed mt-3 border-default-300"></div>
      <div className="mt-3 md:px-4 px-2">
        <div className="text-xs font-medium text-default-800 uppercase">
          중요도
        </div>
        <ul className="mt-3">
          {priorityFilters.map((item, index) => (
            <li
              key={`priority-item-${index}`}
              className="flex justify-between gap-2 space-y-4 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    `w-2 h-2 rounded-full block bg-${item.color} ring-${item.color}`,
                    {}
                  )}
                ></span>
                <span className="text-sm font-medium text-default-600">
                  {item.label}
                </span>
              </div>
              <span className="text-sm font-medium text-default-600">
                {item.total}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-dashed mt-5 border-default-300"></div>
      <div className="text-xs font-medium text-default-800 uppercase my-3 px-4">
        {" "}
      
      </div>

      {contacts && Array.isArray(contacts) && contacts.map((contact: ContactType, index: number) => (
        <ContactList key={`contact-${index}`} contact={contact} />
      ))}
    </>
  );
};

export default TaskSidebar;
