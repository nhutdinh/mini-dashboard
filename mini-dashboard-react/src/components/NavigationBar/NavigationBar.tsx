import {
  AppBar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import { NavigationBarMenuButtonStyled } from "./NavigationBar.styled";

const MENU_ITEMS = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Customised div", path: "/dashboard/div" },
  { name: "Back to Home", path: "/" },
];

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let location = useLocation();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };
  const getPageTitle = (path: string) => {
    const foundRoute = MENU_ITEMS.find((item) => item.path === path);
    return foundRoute ? foundRoute.name : "";
  };
  const menuItem = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
        {MENU_ITEMS.map((item) => (
          <Link to={item.path} key={item.name}>
            <ListItem button>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <AppBar position="fixed">
      <Toolbar>
        <NavigationBarMenuButtonStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
        </NavigationBarMenuButtonStyled>
        <Typography variant="h6" noWrap>
          {getPageTitle(location.pathname)}
        </Typography>
      </Toolbar>
      <DrawerMenu isOpen={isOpen} onClose={toggleDrawer(false)}>
        {menuItem()}
      </DrawerMenu>
    </AppBar>
  );
};
export default NavigationBar;
