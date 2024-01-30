import React, { useEffect } from "react";
import { Typography, Box, Grid, Button, Stack, useTheme } from "@mui/material";
import { observer } from "mobx-react-lite";
import cartStore from "../../store/cartStore";
import { EmptyCartIcon } from "../../assets/EmptyCart";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { MOCK_PRICE } from "../../constats";

export const Cart = observer((): JSX.Element => {
  const { palette } = useTheme();

  useEffect(() => {
    cartStore.initCart();
  }, []);

  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Cart
      </Typography>
      {cartStore.itemsInCart.length ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {cartStore.itemsInCart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </Grid>
          <Grid item xs={12} md={4} maxHeight="260px">
            <Stack
              padding={1}
              justifyContent="space-between"
              height="100%"
              alignItems="center"
              border={`3px solid ${palette.primary.main}`}
              borderRadius={2}
            >
              <Typography>You have {cartStore.itemsInCart.length} books for order</Typography>
              <Typography>Total price: {cartStore.itemsInCart.length * MOCK_PRICE} $</Typography>
              <Button variant="contained" fullWidth>
                Submit my order
              </Button>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Stack
          width="100%"
          alignItems="center"
          justifyContent="center"
          display="flex"
          gap={2}
          sx={{ "& .MuiSvgIcon-root": { fontSize: "200px" } }}
        >
          <EmptyCartIcon />
          <Link to={`/${PATHS.CATALOG}`}>
            <Button variant="contained" size="large">
              Go shopping
            </Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
});
