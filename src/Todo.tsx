import * as React from "react";

import TodoListFilter from "./TodoListFilter";
import TodoItemCreator from "./TodoItemCreator";
import TodoList from "./TodoList";

const { memo, Fragment } = React;

function Todo() {
  return (
    <Fragment>
      <h2>Todo</h2>
      {/* TodoListStatus */}
      {/* TodoListFilter */}
      <TodoListFilter />
      {/* TodoItemCreator */}
      <TodoItemCreator />
      {/* TodoList */}
      <TodoList />
    </Fragment>
  );
}

export default memo(Todo);
