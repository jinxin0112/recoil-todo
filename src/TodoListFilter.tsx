import * as React from "react";
import { useSetRecoilState } from "recoil";

import { todoListFilterState } from "./model/state";
import { TodoListFilterStatus } from "./interface";

const { memo } = React;

function TodoListFilter() {
  const setFilter = useSetRecoilState(todoListFilterState);

  // * 展示全部
  const handleShowAll = () => {
    setFilter(TodoListFilterStatus.All);
  };

  // * 展示已完成
  const handleShowCom = () => {
    setFilter(TodoListFilterStatus.Complete);
  };

  // * 展示未完成
  const handleShowUnCom = () => {
    setFilter(TodoListFilterStatus.UnComplete);
  };
  return (
    <div>
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCom}>Show Com</button>
      <button onClick={handleShowUnCom}>Show UnCom</button>
    </div>
  );
}

export default memo(TodoListFilter);
