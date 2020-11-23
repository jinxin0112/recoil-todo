import * as React from "react";
import { useRecoilValue } from "recoil";

import TodoListItem from "./TodoListItem";
import { filteredTodoListState } from "./model/state";

const { memo } = React;

function TodoList() {
  const list = useRecoilValue(filteredTodoListState);
  return (
    <ul>
      {list.map((item) => (
        <TodoListItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default memo(TodoList);
