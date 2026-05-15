"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Ellipsis, Plus } from "lucide-react";
import { Task, TaskItem } from "@/entities/task";
import { ThemedIcon } from "@/shared/ui/themed-icon";

export function BoardItem({
  title,
  color,
  tasks,
}: {
  title: string;
  color: string;
  tasks: Task[];
}) {
  return (
    <Card className="bg-gray-100 h-min dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14">
            <circle cx="7" cy="7" r="6" fill={color} />
          </svg>
          {title}
          <Badge className="bg-gray-200 dark:bg-gray-600" variant="secondary">
            {tasks.length}
          </Badge>
        </CardTitle>
        <CardAction>
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
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </CardContent>
      <CardFooter className="border-none bg-transparent">
        <Button className="text-gray-600 hover:bg-gray-200" variant="ghost">
          <Plus color="#4a5565" />
          <span>Add task</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
