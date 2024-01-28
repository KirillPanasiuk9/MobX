import { styled, TextField, Grid, Box } from "@mui/material";

export const SearchBoxStyled = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
})) as typeof Box;

export const SearchStyled = styled(TextField)(() => ({
  width: "80%",
})) as typeof TextField;

export const CatalogListStyled = styled(Grid)(() => ({
  margin: 0,
  marginTop: 20,
})) as typeof Grid;

export const CatalogListItemStyled = styled(Box)(({ theme: { palette } }) => ({
  width: 185,
  height: 350,
  background: palette.common.white,
  padding: 25,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  boxShadow: `0px 4px 15px 0px rgba(0, 0, 0, 0.25)`,
  "div: first-of-type": {
    height: "60%",
  },
})) as typeof Box;

export const ListItemImageStyled = styled(Box)(() => ({})) as typeof Box;
