import * as React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";

import Todo from "./Todo";

function App() {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
}

render(<App />, document.getElementById("root"));
