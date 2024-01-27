import React, { JSX } from "react";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

export function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
