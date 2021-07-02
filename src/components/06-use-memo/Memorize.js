/* REACT */
import React, { useState } from "react";

/* COMPONENTS */
import { Small } from "../06-use-memo/Small";

/* HOOKS */
import { useCounter } from "../../hooks/useCounter";

export const Memorize = () => {
  const { state: counter, increment } = useCounter(0);
  const [show, setshow] = useState(true);

  return (
    <div className="container">
      <h4>
        Memorize Counter: <Small counterValue={counter} />
      </h4>
      <hr />

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
