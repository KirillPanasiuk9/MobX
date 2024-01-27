import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { Typography, Box } from "@mui/material";
import { CartButtonStyled, CartCountStyled } from "./NavBar.styled";
import { ShoppingCart } from "@mui/icons-material";

export const CartButton = (): JSX.Element => {
  return (
    <CartButtonStyled>
      <Link to={PATHS.CART}>
        <Box display="flex" alignItems="center">
          <ShoppingCart fontSize="large" color="secondary" />
          <CartCountStyled>
            <Typography variant="body1">4</Typography>
          </CartCountStyled>
        </Box>
      </Link>
    </CartButtonStyled>
  );
};
