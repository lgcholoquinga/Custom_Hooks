import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a generar");
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => {
          increment(5);
        }}
      >
        Increment
      </button>
    </div>
  );
});
