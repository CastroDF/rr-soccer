import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home, Login } from "components/routes";
import { Header } from "components/layout";

const wrapWithNav = (component?: JSX.Element) => (
  <>
    <Header />
    {component}
  </>
);

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home">
        {wrapWithNav(<Home />)}
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
