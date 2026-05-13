"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group";
import { SearchIcon } from "lucide-react";

export function SearchInput() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search tasks..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
