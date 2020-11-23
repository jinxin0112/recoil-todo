import * as React from "react";
import { useSetRecoilState } from "recoil";

import { todoListState } from "./model/state";

const { memo, useState } = React;

let i = 0;
function createUid() {
  return `@__${i++}__@`;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoListState = useSetRecoilState(todoListState);

  const handleAddItem = () => {
    setTodoListState((preList) => [
      {
        id: createUid(),
        task: inputValue,
        isComplete: false
      },
      ...preList
    ]);
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default memo(TodoItemCreator);
