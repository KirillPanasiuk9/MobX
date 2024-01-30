import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { Typography, Box, Button } from "@mui/material";
import { CartCountStyled } from "./NavBar.styled";
import { ShoppingCart } from "@mui/icons-material";
import { observer } from "mobx-react-lite";
import cartStore from "../../store/cartStore";

export const CartButton = observer((): JSX.Element => {
  const [inCartCount, setInCartCount] = useState(0);

  useEffect(() => {
    setInCartCount(cartStore.getItemInCartCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartStore.itemsInCart]);

  return (
    <Button>
      <Link to={PATHS.CART}>
        <Box display="flex" alignItems="center">
          <ShoppingCart fontSize="large" color="primary" />
          <CartCountStyled>
            <Typography variant="body1">{inCartCount}</Typography>
          </CartCountStyled>
        </Box>
      </Link>
    </Button>
  );
});
