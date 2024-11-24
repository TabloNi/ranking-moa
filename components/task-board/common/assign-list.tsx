"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomPopover } from "@/components/ui/popover";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
const list = [
  {
    name: "프로티원 단백질쉐이크 파우치형",
  },
  {
    name: "에버콜라겐 인앤업비오틴 셀 4주",
  },
  {
    name: "어노브 대용량 딥 데미지 헤어 트리트먼트 EX",
  }]
const AssignList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const togglePopover = () => setOpen(!open);


  return (
    <CustomPopover
      trigger={
        <Button
          type="button"
          onClick={togglePopover}
          className="text-sm font-medium text-default-500  bg-transparent hover:bg-transparent"
        >
          프로티원 단백질쉐이크...
        </Button>
      }
      open={open}
      className={"left-[unset] right-0"}
      onClose={() => setOpen(false)}
    >
      <div className="flex justify-between items-center bg-default-50  border-b border-default-300 px-3 py-2 ">
        <div className=" text-sm font-medium text-default-900 ">제품 목록 </div>
        <Button
          type="button"
          size="icon"
          className="w-6 h-6 bg-default-400 rounded-full"
          onClick={togglePopover}
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      <div className="p-2">
        <Command>
          <CommandInput
            placeholder="제품 검색"
            inputWrapper="border border-default-200 rounded-md"
            className="h-9"
          ></CommandInput>
          <CommandEmpty>제품을 찾을 수 없습니다.</CommandEmpty>
          <CommandGroup>
            {
              list.map((item, index) => (
                <CommandItem key={`assigned-list-item-${index}`}>
                  {item.name}
                </CommandItem>
              ))
            }

          </CommandGroup>
        </Command>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <div
            className="text-sm font-medium text-default-600 px-4 py-1.5 border-b border-default-200 hover:bg-default-50 hover:underline hover:decoration-primary cursor-pointer">
            제품 생성
          </div>
        </DialogTrigger>
        <DialogContent
          size="lg"
          className="px-0"
        >
          <DialogHeader className="border-b border-default-300">
            <div className="text-lg font-medium text-default-900 text-center pb-4">제품 생성</div>
          </DialogHeader>

          <div className="p-4">
            <Label
              htmlFor="listname"
              className="mb-2"
            >제품명</Label>
            <Input type="text" placeholder="제품명을 입력해 주세요." />
          </div>
          <DialogFooter className=" px-4 sm:justify-center">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline">
                취소
              </Button>
            </DialogClose>
            <Button type="submit">생성</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </CustomPopover>
  );
};

export default AssignList;