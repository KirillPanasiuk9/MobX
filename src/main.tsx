import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { appRouter } from "./router/appRouter";
import { ErrorHandlingProvider } from "./errorHandling";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorHandlingProvider>
        <CssBaseline />
        <RouterProvider router={appRouter} />
      </ErrorHandlingProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
