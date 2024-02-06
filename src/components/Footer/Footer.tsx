import React from "react";
import { FooterStyled } from "./Footer.styled";

export const Footer = (): JSX.Element => {
  return <FooterStyled sx={{ px: { xs: "10px", sm: "30px", lg: "200px" } }} />;
};
