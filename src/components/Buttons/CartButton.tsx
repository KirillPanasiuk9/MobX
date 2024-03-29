import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { Typography, Box, Button } from "@mui/material";
import { CartCountStyled } from "../Navbar/NavBar.styled";
import { ShoppingCart } from "@mui/icons-material";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../store";

export const CartButton = observer((): JSX.Element => {
  return (
    <Button>
      <Link to={PATHS.CART}>
        <Box display="flex" alignItems="center">
          <ShoppingCart fontSize="large" color="primary" />
          <CartCountStyled>
            <Typography variant="body1">{cartStore.itemInCartCount}</Typography>
          </CartCountStyled>
        </Box>
      </Link>
    </Button>
  );
});
