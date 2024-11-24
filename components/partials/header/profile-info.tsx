"use client";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const ProfileInfo = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className=" cursor-pointer">
        <div className=" flex items-center  ">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png"
            alt={session?.user?.name ?? ""}
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-0" align="end">
        <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3364/3364044.png"
            alt={session?.user?.name ?? ""}
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <div className="text-sm font-medium text-default-800 capitalize ">
              {session?.user?.name ?? "Mcc Callem"}
            </div>
            <Link
              href="/dashboard"
              className="text-xs text-default-600 hover:text-primary"
            >
              @admin
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {[
            {
              name: "프로필",
              icon: "heroicons:user",
              href:"/user-profile"
            },
          
            {
              name: "세팅",
              icon: "heroicons:paper-airplane",
              href:"/dashboard"
            },
            {
              name: "단축키 설정",
              icon: "heroicons:language",
              href:"/dashboard"
            },
          ].map((item, index) => (
            <Link
              href={item.href}
              key={`info-menu-${index}`}
              className="cursor-pointer"
            >
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                <Icon icon={item.icon} className="w-4 h-4" />
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        
       

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
              <Icon icon="heroicons:phone" className="w-4 h-4" />
              문의하기
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {[
                  {
                    name: "전화",
                  },
                  {
                    name: "메일",
                  },
              
                ].map((item, index) => (
                  <Link href="/dashboard" key={`message-sub-${index}`}>
                    <DropdownMenuItem className="text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                      {item.name}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="mb-0 dark:bg-background" />
        <DropdownMenuItem
          onSelect={() => signOut()}
          className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize my-1 px-3 dark:hover:bg-background cursor-pointer"
        >
          <Icon icon="heroicons:power" className="w-4 h-4" />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileInfo;
