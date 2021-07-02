import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  return (
    <div className="container-fluid">
      <h2>Home</h2>
      <hr />
    </div>
  );
};
