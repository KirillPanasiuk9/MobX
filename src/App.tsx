import React, { JSX } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";

export function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
