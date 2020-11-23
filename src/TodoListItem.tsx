import * as React from "react";
import { useRecoilState } from "recoil";

import { TodoItem } from "./interface";
import { todoListState } from "./model/state";

const { memo, useState, useEffect, useRef } = React;

function replaceItemAtIndex(
  list: TodoItem[],
  index: number,
  nextItem: TodoItem
) {
  return [...list.slice(0, index), nextItem, ...list.slice(index + 1)];
}

function removeItemAtIndex(list: TodoItem[], index: number) {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

function TodoListItem(props: TodoItem) {
  const { id, task, isComplete } = props;

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(({ id: itemId }) => itemId === id);

  /* eidt */

  // 是否处于编辑状态
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(task);
  const inputRef = useRef<HTMLInputElement>();

  // 当切换到编辑状态时默认 focus
  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleToggleEditMode = () => {
    setIsEdit(true);
  };

  const handleEdit = () => {
    const nextTodoList = replaceItemAtIndex(todoList, index, {
      ...props,
      task: inputValue,
      isComplete: isComplete && inputValue === task
    });
    setTodoList(nextTodoList);
    setIsEdit(false);
  };

  const handleToggleComplete = () => {
    const nextTodoList = replaceItemAtIndex(todoList, index, {
      ...props,
      isComplete: !isComplete
    });
    setTodoList(nextTodoList);
  };

  const handleRemoveItem = () => {
    const nextTodoList = removeItemAtIndex(todoList, index);
    setTodoList(nextTodoList);
  };

  return (
    <li>
      {isEdit ? (
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleEdit}
        />
      ) : (
        <span
          style={{ color: isComplete ? "green" : "red" }}
          onClick={handleToggleEditMode}
        >
          {task}
        </span>
      )}

      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleToggleComplete}
      />
      <button onClick={handleRemoveItem}>x</button>
    </li>
  );
}

export default memo(TodoListItem);
