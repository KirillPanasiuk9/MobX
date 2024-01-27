import { createTheme } from "@mui/material";

const Colors = {
  common: {
    white: "#FFFFFF",
  },
  primary: {
    // main: "#1F2428",
    // light: "#545658",
    // dark: "#293036",
    // contrastText: "#C8DE37",
    main: "#FFFAF5",
    light: "#FFFAF5",
    dark: "#293036",
    contrastText: "#4D2900",
  },
  secondary: {
    // dark: "#E3EF9B",
    // main: "#F3FBC5",
    // light: "#FAFDE9",
    dark: "#E3EF9B",
    main: "#E16A00",
    light: "#FAFDE9",
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
