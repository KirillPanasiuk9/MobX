import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { MOCK_PRICE } from "../../constats";
import { CartItemStyled } from "../Cart/Cart.styled";
import cartStore from "../../store/cartStore";
import savedStore from "../../store/savedStore";
import { observer } from "mobx-react-lite";
import { ItemType } from "../../store/catalogStore";
import { Favorite } from "@mui/icons-material";
import { DeleteFromCartButton } from "../../components/Buttons/DeleteFromCartButton";
import { AddToCartButton } from "../../components/Buttons/AddToCartButton";

export const SavedItem = observer(({ item }: { item: ItemType }): JSX.Element => {
  const handledItemClick = (): void => {};

  const handleAddToCart = (): void => {
    cartStore.addToCart(item);
  };

  const handleDeleteFromCart = (): void => {
    cartStore.deleteFromCart(item.id);
  };

  const handleDeleteFromSaved = (): void => {
    savedStore.deleteFromSaved(item.id);
  };

  return (
    <Grid item xs={12} md={6}>
      <CartItemStyled container spacing={2} direction="row" maxHeight="fit-content">
        <Grid item xs={5} md={4} padding="0px !important" maxHeight="200px">
          <Box onClick={handledItemClick} component="img" src={item.image} />
        </Grid>
        <Grid item xs={7} md={5} padding="0px !important">
          <Typography variant="h4" mb="50px">
            {item.title}
          </Typography>
          <Typography variant="h6">Author: {item.author}</Typography>
          <Typography>{MOCK_PRICE} $</Typography>
        </Grid>
        <Grid item xs={12} md={3} padding="0px !important">
          <Stack
            justifyContent="space-between"
            width="100%"
            height="100%"
            alignItems="center"
            sx={{ flexDirection: { xs: "row", md: "column" } }}
            gap="30px"
          >
            {cartStore.isItemInCart(item.id) ? (
              <DeleteFromCartButton onClick={handleDeleteFromCart} />
            ) : (
              <AddToCartButton onClick={handleAddToCart} />
            )}
            <Button variant="contained" onClick={handleDeleteFromSaved}>
              Delete from Saved
              <Favorite />
            </Button>
          </Stack>
        </Grid>
      </CartItemStyled>
    </Grid>
  );
});
