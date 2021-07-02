import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = (e) => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div className="container">
      <h3>Focus Screen</h3>
      <hr />

      <input ref={inputRef} className="form-control" placeholder="Name" />

      <button className="btn btn-danger mt-2" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
