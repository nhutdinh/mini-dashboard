import React from "react";
import { Route, Switch } from "react-router-dom";
import { CustomDiv } from "../../components/CustomDiv/CustomDiv";
import { DataTable } from "../../components/DataTable/DataTable";

const DashboardRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={`/dashboard/div`} component={CustomDiv} />
      <Route exact path={"/dashboard"} component={DataTable} />
    </Switch>
  );
};
export default DashboardRoutes;
