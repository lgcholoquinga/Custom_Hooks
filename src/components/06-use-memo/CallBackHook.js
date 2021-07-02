import React, { useCallback, useState } from "react";

import { ShowIncrement } from "../06-use-memo/ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div className="container">
      <h2>Use CallBack Hook: {counter}</h2>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
