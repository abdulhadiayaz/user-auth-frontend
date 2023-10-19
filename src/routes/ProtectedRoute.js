import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import PageNotFound from "../screens/PageNotFound/PageNotFound";

function ProtectedRoute({ path, component }) {
  const state = useSelector((state) => state);
  const { isAuthenticated } = state.oemAuth;

  const ResultantComponent = isAuthenticated ? (
    <Switch>
      <Route path={path} exact component={component} />
      <Route path="*" exact component={PageNotFound} />
    </Switch>
  ) : (
    <Redirect to="/login" />
  );
  return ResultantComponent;
}

export default ProtectedRoute;
