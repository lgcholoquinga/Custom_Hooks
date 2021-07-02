import React, { useState } from "react";

import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <h4>Real Example Ref</h4>
      <hr />
      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-dark mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};
