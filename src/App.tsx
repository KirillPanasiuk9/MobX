import React, { JSX } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";
import { AppStyledContainer } from "./App.styled";
import { Footer } from "./components/Footer/Footer";

export function App(): JSX.Element {
  return (
    <AppStyledContainer sx={{ px: { xs: "10px", sm: "30px", lg: "200px" } }}>
      <NavBar />
      <Footer />
      <Outlet />
    </AppStyledContainer>
  );
}
