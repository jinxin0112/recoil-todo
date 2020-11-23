enum TodoListFilterStatus {
  All = "all",
  Complete = "complete",
  UnComplete = "unComplete"
}

interface TodoItem {
  id: string;
  task: string;
  isComplete: boolean;
}

export { TodoItem, TodoListFilterStatus };
