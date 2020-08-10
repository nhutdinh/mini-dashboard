import React from "react";
import {
  LandingPageStyled,
  LandingPageIntroStyled,
  LandingPageExploreBtnStyled,
} from "./LandingPage.styled";
import { Link } from "react-router-dom";

export const LandingPage: React.FC = (): React.ReactElement => {
  return (
    <LandingPageStyled>
      <LandingPageIntroStyled>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          elit, ullamcorper sit amet mattis sit amet, tempus vitae lectus.
          Phasellus blandit mauris id dapibus efficitur. Pellentesque
          ullamcorper, erat eu fringill
        </h1>
        <Link to="/dashboard/">
          <LandingPageExploreBtnStyled
            type="button"
            className="btn btn-primary"
          >
            Explore
          </LandingPageExploreBtnStyled>
        </Link>
      </LandingPageIntroStyled>
    </LandingPageStyled>
  );
};
