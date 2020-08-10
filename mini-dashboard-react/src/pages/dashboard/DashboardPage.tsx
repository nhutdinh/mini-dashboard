import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { DashboardPageStyled } from "./DashboardPage.styled";
import DashboardRoutes from "./DashboarPage.routes";

export const DashboardPage: React.FC = (): React.ReactElement => {
  return (
    <DashboardPageStyled>
      <NavigationBar></NavigationBar>
      <div style={{ marginTop: "4.5rem", padding: "0 1.5rem" }}>
        <DashboardRoutes></DashboardRoutes>
      </div>
    </DashboardPageStyled>
  );
};
