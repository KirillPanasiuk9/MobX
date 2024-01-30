import React, { useState, useEffect } from "react";
import { CatalogListItemStyled, ListItemImageStyled, StyledText } from "./Catalog.styled";
import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { ItemType } from "../../store/catalogStore";
import { MOCK_PRICE } from "../../constats";
import { observer } from "mobx-react-lite";
import cartStore from "../../store/cartStore";

export const CatalogItem = observer(({ item }: { item: ItemType }): JSX.Element => {
  const [isItemInCart, setIsItemInCart] = useState(false);

  useEffect(() => {
    cartStore.itemsInCart.map((el) => el.id).includes(item.id) && setIsItemInCart(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handledItemClick = (): void => {};

  const handleAddToCart = (): void => {
    cartStore.addToCart(item);
    setIsItemInCart(true);
  };

  const handleDeleteFromCart = (): void => {
    cartStore.deleteFromCart(item.id);
    setIsItemInCart(false);
  };

  return (
    <Grid item xs={5} sm={4} md={3} key={item.title}>
      <CatalogListItemStyled>
        <ListItemImageStyled onClick={handledItemClick} component="img" src={item.image} />
        <Typography variant="body1" fontWeight={700}>
          {MOCK_PRICE} $
        </Typography>
        <Stack>
          <StyledText variant="body2" fontWeight={700}>
            {item.title}
          </StyledText>
          <StyledText variant="caption">{item.author}</StyledText>
        </Stack>
        <Box display="flex" sx={{ justifyContent: "space-between" }}>
          {isItemInCart ? (
            <Button
              variant="contained"
              sx={{ padding: "6px", width: "70%", fontWeight: 700, textTransform: "none" }}
              onClick={handleDeleteFromCart}
            >
              In cart
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{ padding: "6px", width: "70%", fontWeight: 700, textTransform: "none" }}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          )}
          <IconButton color="primary">
            <FavoriteBorder />
          </IconButton>
        </Box>
      </CatalogListItemStyled>
    </Grid>
  );
});
