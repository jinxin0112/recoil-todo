import * as React from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from './model/state';

const { memo, useState } = React;

let i = 0;
function createUid() {
  return `@__${i++}__@`;
}

function TodoItemCreator() {
  // * input 的状态
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // * 新增一个 task
  const setTodoListState = useSetRecoilState(todoListState);
  const handleAddItem = () => {
    setTodoListState((preList) => [
      {
        id: createUid(),
        task: inputValue,
        isComplete: false,
      },
      ...preList,
    ]);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default memo(TodoItemCreator);
