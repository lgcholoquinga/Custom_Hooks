import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  return (
    <div className="container-fluid">
      <h2>About</h2>
      <hr />
    </div>
  );
};
