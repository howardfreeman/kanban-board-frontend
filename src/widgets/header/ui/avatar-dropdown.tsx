"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

export function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 focus:outline-none ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="hidden sm:flex flex-col items-start text-left">
            <div className="text-sm font-medium">User Name</div>
            <div className="text-xs text-muted-foreground">
              user@example.com
            </div>
          </div>
          <div className="w-4">
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
