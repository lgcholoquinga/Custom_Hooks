import React from "react";

export const Small = React.memo(({ counterValue }) => {
  console.log("Small Called...");
  return <small>{counterValue}</small>;
});
