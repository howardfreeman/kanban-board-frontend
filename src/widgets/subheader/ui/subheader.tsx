import { Button } from "@/shared/ui/button";
import { BoardView } from "./board-view";
import { Filter } from "./filter";
import { Priority } from "./priority";
import { SearchInput } from "./search-input";
import { Plus } from "lucide-react";

export function Subheader() {
  return (
    <div className="grid w-full grid-cols-[1fr_2fr_100px] items-center gap-25 px-10 py-6">
      <h1 className="text-2xl font-bold">Kanban Board</h1>

      {/* Instruments */}
      <div className="flex items-center gap-3">
        <BoardView />
        <Filter />
        <Priority />
        <SearchInput />
      </div>

      {/* Add Task button */}
      <Button className="bg-[#6d5ef8] rounded-md text-white">
        <Plus />
        <span>New Task</span>
      </Button>
    </div>
  );
}
