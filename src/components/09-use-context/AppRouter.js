import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/* PAGES */
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";

/* COMPONENTS */
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/about" exact>
            <AboutScreen />
          </Route>
          <Route path="/login" exact>
            <LoginScreen />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
