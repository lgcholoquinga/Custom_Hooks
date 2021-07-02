import React, { useState } from "react";

/* CONTEXT */
import { UserContext } from "./UserContext";

/* ROUTER */
import { AppRouter } from "./AppRouter";

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
