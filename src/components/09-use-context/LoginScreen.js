import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSetUser = () => {
    setUser({
      id: 123,
      username: "lgcholoquinga",
      email: "luisger3434@gmail.com",
    });
  };

  return (
    <div className="container-fluid">
      <h2>Login</h2>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-primary" onClick={handleSetUser}>
        CLICK
      </button>
    </div>
  );
};
