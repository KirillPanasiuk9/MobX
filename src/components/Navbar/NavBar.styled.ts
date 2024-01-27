import { Container, Typography, styled, Button, Box } from "@mui/material";

export const ContainerStyled = styled(Container)(({ theme: { palette } }) => ({
  height: 80,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: palette.primary.main,
  background: palette.primary.contrastText,
  "& a:link": {
    textDecoration: "none",
    textTransform: "none",
    color: "white",
  },
})) as typeof Container;

export const LogoTextStyled = styled(Typography)(({ theme: { palette } }) => ({
  marginRight: 3,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  color: palette.primary.main,
})) as typeof Typography;

export const CartButtonStyled = styled(Button)(() => ({
  display: "flex",
  color: "white",
})) as typeof Button;

export const CartCountStyled = styled(Box)(({ theme: { palette } }) => ({
  width: 25,
  height: 25,
  display: "flex",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  background: palette.secondary.main,
  borderRadius: 9,
})) as typeof Box;
