import { Container, styled } from "@mui/material";

export const FooterStyled = styled("footer")(({ theme: { palette } }) => ({
  position: "absolute",
  height: 80,
  width: "100%",
  background: palette.primary.contrastText,
  color: palette.common.white,
  bottom: 0,
  margin: 0,
  left: 0,
})) as typeof Container;
