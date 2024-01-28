import { Container, styled } from "@mui/material";

export const AppStyledContainer = styled(Container)(({ theme: { palette } }) => ({
  position: "relative",
  paddingTop: 120,
  paddingBottom: 120,
  maxWidth: "100% !important",
  minHeight: "100vh",
  maxHeight: "100%",
  background: palette.background.paper,
})) as typeof Container;
