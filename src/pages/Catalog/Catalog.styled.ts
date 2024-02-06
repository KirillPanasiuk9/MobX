import { styled, Grid, Box, Typography, keyframes } from "@mui/material";

export const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
  
  0%, 100% {
      border: 2px solid red;
  }
  `;

export const SearchBoxStyled = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
})) as typeof Box;

export const CatalogListStyled = styled(Grid)(() => ({
  margin: "20px 0px 40px",
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
})) as typeof Box;

export const ListItemImageStyled = styled(Box)(() => ({
  height: "60%",
  cursor: "pointer",
})) as typeof Box;

export const StyledText = styled(Typography)(() => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
})) as typeof Typography;
