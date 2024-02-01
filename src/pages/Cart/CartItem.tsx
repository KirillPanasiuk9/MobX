import React from "react";
import { CartItemStyled } from "./Cart.styled";
import { ItemType } from "../../store/catalogStore";
import { Grid, Typography, Box, Stack, Button } from "@mui/material";
import cartStore from "../../store/cartStore";
import { observer } from "mobx-react-lite";
import { MOCK_PRICE } from "../../constats";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

export const CartItem = observer(({ item }: { item: ItemType }): JSX.Element => {
  const navigate = useNavigate();
  const handledItemClick = (): void => {
    const itemId = item.id;
    navigate(`/${PATHS.ITEM}/${itemId}`);
  };

  const handleDeleteFromCart = (): void => {
    cartStore.deleteFromCart(item.id);
  };

  return (
    <CartItemStyled container spacing={2} direction="row" maxHeight="fit-content">
      <Grid item xs={5} md={4} padding="0px !important" maxHeight="200px">
        <Box onClick={handledItemClick} component="img" src={item.image} />
      </Grid>
      <Grid item xs={7} md={6} padding="0px !important">
        <Typography variant="h4" mb="50px">
          {item.title}
        </Typography>
        <Typography variant="h6">Author: {item.author}</Typography>
      </Grid>
      <Grid xs={12} md={2} padding="0px !important">
        <Stack
          justifyContent="space-between"
          width="100%"
          height="100%"
          alignItems="center"
          sx={{ flexDirection: { xs: "row", md: "column" } }}
        >
          <Typography>{MOCK_PRICE} $</Typography>
          <Button variant="contained" onClick={handleDeleteFromCart}>
            Delete
          </Button>
        </Stack>
      </Grid>
    </CartItemStyled>
  );
});
