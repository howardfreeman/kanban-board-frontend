"use client";

import { Button } from "@/shared/ui/button";
import { Menu } from "lucide-react";
import { useSideMenu } from "../context";

export function MenuToggle() {
  const { toggle } = useSideMenu();

  return (
    <Button variant="ghost" size="icon" onClick={toggle}>
      <Menu className="h-full w-full" color="#6D5EF8" />
    </Button>
  );
}
