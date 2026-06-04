import { Button } from "@/shared/ui/button";
import { BoardView } from "./board-view";
import { Filter } from "./filter";
import { Priority } from "./priority";
import { SearchInput } from "./search-input";
import { Plus } from "lucide-react";

export function Subheader() {
  return (
    <div className="grid grid-rows-[repeat(2,min-content)] grid-cols-2 items-center gap-y-4 gap-x-5 py-4 sm:py-6 sm:gap-x-25 lg:grid-cols-[1fr_2fr_100px]">
      <h1 className="text-lg font-bold row-start-1 sm:text-2xl">
        Kanban Board
      </h1>

      <div className="flex items-center flex-wrap gap-3 row-start-2 col-start-1 col-end-3 lg:row-start-1 lg:col-start-2 lg:flex-nowrap">
        <BoardView />
        <Filter />
        <Priority />
        <SearchInput />
      </div>

      {/* <div className="flex items-center justify-center row-start-1">
          <Button className="bg-[#6d5ef8] rounded-md text-white">
            <Plus />
            <span>New Task</span>
          </Button>
        </div> */}
      <Button className="bg-[#6d5ef8] w-32 h-9 justify-self-end rounded-md text-white">
        <Plus />
        <span>New Task</span>
      </Button>
    </div>
  );
}
