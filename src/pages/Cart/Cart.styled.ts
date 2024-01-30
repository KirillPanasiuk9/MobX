import { styled, Grid } from "@mui/material";
export const CartItemStyled = styled(Grid)(({ theme: { palette } }) => ({
  width: "100%",
  background: palette.common.white,
  padding: 25,
  margin: 0,
  marginBottom: 20,
  boxShadow: `0px 4px 15px 0px rgba(0, 0, 0, 0.25)`,
  borderRadius: 8,
})) as typeof Grid;
