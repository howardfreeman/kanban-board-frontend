"use client";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenu,
} from "@/shared/ui/dropdown-menu";
import { ThemedIcon } from "@/shared/ui/themed-icon";
import { Ellipsis } from "lucide-react";

export function TaskAction() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hover:bg-gray-200" variant="ghost">
          <ThemedIcon Icon={Ellipsis} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Action 1</DropdownMenuLabel>
          <DropdownMenuItem>Action 2</DropdownMenuItem>
          <DropdownMenuItem>Action 3</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
