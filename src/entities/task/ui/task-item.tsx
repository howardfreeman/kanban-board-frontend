import { Task } from "../types";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/shared/ui/item";
import { cn } from "@/shared/lib/utils";
import { TaskAction } from "./task-action";
import { Calendar } from "lucide-react";
import { formatDate } from "../format-dated";
import { Badge } from "@/shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

export function TaskItem({ task }: { task: Task }) {
  const priorityBorderClass = {
    high: "border-0 border-l-3 border-red-400",
    medium: "border-0 border-l-3 border-yellow-300",
    low: "border-0 border-l-3 border-green-300",
  }[task.priority];

  const priorityBadgeClass = {
    high: "bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300",
    medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  }[task.priority];

  return (
    <Item
      className={cn(
        priorityBorderClass,
        "bg-white rounded-l-none shadow-sm dark:bg-gray-700",
      )}
    >
      <ItemContent>
        <ItemTitle>
          <span className="tracking-wide">{task.title}</span>
          <Badge className={cn(priorityBadgeClass, "capitalize")}>
            {task.priority}
          </Badge>
        </ItemTitle>
        {task.deadline && (
          <ItemDescription className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="w-3.5" /> {formatDate(task.deadline)}
          </ItemDescription>
        )}
      </ItemContent>
      <ItemActions>
        <Avatar className="w-6 h-6">
          <AvatarImage
            src="https://github.com/shadcn.png"
            title={task.author.name}
          />
          <AvatarFallback>{task.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <TaskAction />
      </ItemActions>
    </Item>
  );
}
