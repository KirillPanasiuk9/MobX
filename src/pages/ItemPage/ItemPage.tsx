import React, { useEffect } from "react";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import itemSore from "../../store/itemSore";
import { useParams } from "react-router-dom";
import { useErrorHandling } from "../../errorHandling";
import { Loader } from "../../components/Loader/Loader";
import catalogStore, { ItemType } from "../../store/catalogStore";
import { MOCK_PRICE } from "../../constats";
import cartStore from "../../store/cartStore";
import { DeleteFromCartButton } from "../../components/Buttons/DeleteFromCartButton";
import { AddToCartButton } from "../../components/Buttons/AddToCartButton";
import savedStore from "../../store/savedStore";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const ItemPage = observer((): JSX.Element => {
  const { id = "" } = useParams();
  const { setError } = useErrorHandling();

  useEffect(() => {
    itemSore.fetchItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    catalogStore.isError ? setError("Some error happened") : setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemSore.isError]);

  const handleAddToCart = (item: ItemType): void => {
    cartStore.addToCart(item);
  };

  const handleDeleteFromCart = (id: string): void => {
    cartStore.deleteFromCart(id);
  };

  const handleAddToSaved = (item: ItemType): void => {
    savedStore.addToSaved(item);
  };

  const handleDeleteFromSaved = (id: string): void => {
    savedStore.deleteFromSaved(id);
  };

  return (
    <>
      {!itemSore.isLoading && itemSore.item ? (
        <Grid container spacing={4}>
          <Grid item xs={12} display={{ xs: "block", md: "none" }}>
            <Typography variant="h3">{itemSore.item.title}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src={itemSore.item.image} width="100%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack gap={4}>
              <Typography variant="h3" display={{ xs: "none", md: "block" }}>
                {itemSore.item.title}
              </Typography>
              <Typography>Author: {itemSore.item.author}</Typography>
              <Typography>Category: {itemSore.item.category}</Typography>
              <Typography>{MOCK_PRICE} $</Typography>
              <Box display="flex" sx={{ justifyContent: "space-between" }}>
                {cartStore.isItemInCart(itemSore.item.id) ? (
                  <DeleteFromCartButton onClick={() => itemSore.item && handleDeleteFromCart(itemSore.item.id)} />
                ) : (
                  <AddToCartButton onClick={() => itemSore.item && handleAddToCart(itemSore.item)} />
                )}
                {savedStore.isItemSaved(itemSore.item.id) ? (
                  <IconButton color="primary" onClick={() => itemSore.item && handleDeleteFromSaved(itemSore.item.id)}>
                    <Favorite />
                  </IconButton>
                ) : (
                  <IconButton color="primary" onClick={() => itemSore.item && handleAddToSaved(itemSore.item)}>
                    <FavoriteBorder />
                  </IconButton>
                )}
              </Box>
              <Typography>{itemSore.item.description}</Typography>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        <Loader mt="50px" />
      )}
    </>
  );
});
