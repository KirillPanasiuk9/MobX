import React, { JSX } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import { AppStyledContainer } from "./App.styled";

export function App(): JSX.Element {
  return (
    <AppStyledContainer>
      <NavBar />
      <Outlet />
    </AppStyledContainer>
  );
}
