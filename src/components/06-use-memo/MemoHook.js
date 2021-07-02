/* REACT */
import React, { useMemo, useState } from "react";

/* HOOKS */
import { useCounter } from "../../hooks/useCounter";

/* HELPERS */
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(100);
  const [show, setshow] = useState(true);

  const memoProceso = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className="container">
      <h1 className="text-center">MemoHook</h1>
      <h4>
        Counter: <small>{counter}</small>
      </h4>
      <hr />

      <p>{memoProceso}</p>

      <button className="btn btn-success" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-warning"
        onClick={() => {
          setshow(!show);
        }}
      >
        Show/Hide: {JSON.stringify(show)}
      </button>
    </div>
  );
};
