declare type TodoPriority = null | "low" | "medium" | "high";

declare interface TodoEntry {
  title: string;
  due?: string;
  priority?: TodoPriority;
  notes?: string;
}
