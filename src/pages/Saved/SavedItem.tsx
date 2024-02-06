import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { MOCK_PRICE } from "../../constats";
import { CartItemStyled } from "../Cart/Cart.styled";
import { observer } from "mobx-react-lite";
import { ItemType, cartStore, savedStore } from "../../store";
import { Favorite } from "@mui/icons-material";
import { DeleteFromCartButton } from "../../components/Buttons/DeleteFromCartButton";
import { AddToCartButton } from "../../components/Buttons/AddToCartButton";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

export const SavedItem = observer(({ item }: { item: ItemType }): JSX.Element => {
  const navigate = useNavigate();
  const handledItemClick = (): void => {
    const itemId = item.id;
    navigate(`/${PATHS.ITEM}/${itemId}`);
  };

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
      <CartItemStyled container spacing={2} direction="row" height="300px">
        <Grid item xs={5} md={4}>
          <Box onClick={handledItemClick} component="img" src={item.image} />
        </Grid>
        <Grid item xs={7} md={5}>
          <Typography variant="h5" mb="20px">
            {item.title}
          </Typography>
          <Typography variant="body1">Author: {item.author}</Typography>
          <Typography>{MOCK_PRICE} $</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
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
              <Typography mr={1}>Delete</Typography>
              <Favorite />
            </Button>
          </Stack>
        </Grid>
      </CartItemStyled>
    </Grid>
  );
});
