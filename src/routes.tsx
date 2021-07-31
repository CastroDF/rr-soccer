import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "components/routes";

const wrapWithNav = (component?: JSX.Element) => (
  <>
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
    </Switch>
  );
};

export default Routes;
