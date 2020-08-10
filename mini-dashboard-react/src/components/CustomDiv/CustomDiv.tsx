import React from "react";
import { CustomDivStyled } from "./CustomDiv.styled";

export const CustomDiv: React.FC = (): React.ReactElement => {
  return (
    <CustomDivStyled>
      <div contentEditable>How has your day been?...</div>
    </CustomDivStyled>
  );
};
