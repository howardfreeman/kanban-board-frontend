export interface Task {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  deadline?: Date;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: Date;
  updatedAt?: Date;
}
