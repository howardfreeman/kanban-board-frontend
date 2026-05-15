import { BoardItem } from "./board-item";
import { Task } from "@/entities/task";

const list: Task[] = [
  {
    id: "1",
    title: "Design the UI",
    priority: "high",
    deadline: new Date("2024-07-01"),
    author: {
      id: "1",
      name: "Howard",
      avatar: "",
    },
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Implement authentication",
    priority: "medium",
    author: {
      id: "1",
      name: "Howard",
      avatar: "",
    },
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Write documentation",
    priority: "low",
    author: {
      id: "1",
      name: "Howard",
      avatar: "",
    },
    createdAt: new Date(),
  },
];

const list2: Task[] = [
  {
    id: "4",
    title: "Set up database",
    priority: "high",
    author: {
      id: "1",
      name: "Howard",
      avatar: "",
    },
    createdAt: new Date(),
  },
  {
    id: "5",
    title:
      "Create API endpoints for tasks management and user authentication with Express.js and MongoDB",
    priority: "medium",
    deadline: new Date("2024-07-15"),
    author: {
      id: "1",
      name: "Howard",
      avatar: "",
    },
    createdAt: new Date(),
  },
];

export function Board() {
  return (
    <div className="grid grid-cols-3 gap-4 px-10 mb-5">
      {/* To Do */}
      <BoardItem title="To Do" color="#bbbdc8" tasks={list} />

      {/* In Progress */}
      <BoardItem title="In Progress" color="#5397f5" tasks={list2} />

      {/* Completed */}
      <BoardItem title="Completed" color="#60bc77" tasks={[]} />
    </div>
  );
}
