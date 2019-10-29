declare type TodoPriority = "low" | "medium" | "high";

declare interface TodoEntry {
  title: string;
  due?: Date;
  priority?: TodoPriority;
  notes?: string;
}
