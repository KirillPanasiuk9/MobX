import { createTheme } from "@mui/material";

const Colors = {
  common: {
    white: "#FFFFFF",
    black: "#000",
  },
  primary: {
    main: "#E16A00",
    contrastText: "#4D2900",
  },
  // secondary: {
  // },
  background: {
    paper: "#FFFAF5",
  },
  error: {
    main: "#DE2F21",
    light: "#FFCCC8",
  },
  warning: {
    main: "#FDDE6F",
  },
  info: {
    main: "#D9E3FF",
  },
  grey: {
    500: "#272829",
    400: "#54585C",
    300: "#787A7C",
    200: "#ABABAB",
    100: "#DADADA",
    50: "#F1F1F1",
    A100: "#FBFBFB",
  },
  // action: {
  //   hover: "#ADC220",
  // },
};

export const theme = createTheme({
  palette: { ...Colors },
  typography: {
    fontFamily: "Oswald, sans-serif",
  },
});
