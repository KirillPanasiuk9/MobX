import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { Typography, Box, Button } from "@mui/material";
import { CartCountStyled } from "./NavBar.styled";
import { ShoppingCart } from "@mui/icons-material";

export const CartButton = (): JSX.Element => {
  return (
    <Button>
      <Link to={PATHS.CART}>
        <Box display="flex" alignItems="center">
          <ShoppingCart fontSize="large" color="primary" />
          <CartCountStyled>
            <Typography variant="body1">4</Typography>
          </CartCountStyled>
        </Box>
      </Link>
    </Button>
  );
};
