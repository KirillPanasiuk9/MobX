import React, { useState } from "react";
import { ContainerStyled, LogoTextStyled } from "./NavBar.styled";
import { AppBar, Box, Menu, Typography, Button, MenuItem } from "@mui/material";
import { LogoIcon } from "../../assets/LogoIcon";
import IconButton from "@mui/material/IconButton";
import { Menu as MenuIcon } from "@mui/icons-material";
import { PATHS } from "../../router/paths";
import { Link } from "react-router-dom";
import { CartButton } from "./CartButton";
import { MENU_PAGES } from "../../constats";

export const NavBar = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <ContainerStyled sx={{ px: { xs: "10px", sm: "30px", lg: "200px" } }}>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {MENU_PAGES.map((page) => (
              <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                <Link to={page.linkTo}>{page.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Link to={PATHS.HOME}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 1 }}>
              <LogoIcon fontSize="large" />
            </Box>
            <LogoTextStyled variant="h6" noWrap>
              Bookshop
            </LogoTextStyled>
          </Box>
        </Link>

        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
          {MENU_PAGES.map((page) => (
            <Button
              key={page.title}
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block", textDecoration: "none" }}
            >
              <Link to={page.linkTo}>
                <Typography variant="body1" color="inherit">
                  {page.title}
                </Typography>
              </Link>
            </Button>
          ))}
        </Box>

        <CartButton />
      </ContainerStyled>
    </AppBar>
  );
};
