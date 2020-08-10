import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { LandingPage } from "./pages/landing-page/LandingPage";
const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
};
export default Routes;
