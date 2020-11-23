import { atom, selector } from "recoil";

import { TodoItem, TodoListFilterStatus } from "../interface";

// * todo 列表状态
const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: []
});

// * 当前 filter 的状态
const todoListFilterState = atom<TodoListFilterStatus>({
  key: "todoListFilterState",
  default: TodoListFilterStatus.All
});

// * 基于当前 filter 状态筛选后的 todo 列表
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
