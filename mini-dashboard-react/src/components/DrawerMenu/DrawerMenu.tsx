import Drawer from "@material-ui/core/Drawer";
import React from "react";

const DEFAULT_ANCHOR = "left";
interface DrawerMenuProps {
  isOpen?: boolean;
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
  children?: React.ReactNode;
}

const DrawerMenu: React.FC<DrawerMenuProps> = (props: DrawerMenuProps) => {
  return (
    <div>
      <Drawer
        anchor={DEFAULT_ANCHOR}
        open={props.isOpen}
        onClose={props.onClose}
      >
        {props.children}
      </Drawer>
    </div>
  );
};
export default DrawerMenu;
