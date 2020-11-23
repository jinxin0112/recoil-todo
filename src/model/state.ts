import { atom, selector } from "recoil";

import { TodoItem, TodoListFilterStatus } from "../interface";

const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: []
});

const todoListFilterState = atom<TodoListFilterStatus>({
  key: "todoListFilterState",
  default: TodoListFilterStatus.All
});

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case TodoListFilterStatus.Complete:
        return list.filter((item) => item.isComplete);
      case TodoListFilterStatus.UnComplete:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
});

export { todoListState, todoListFilterState, filteredTodoListState };
