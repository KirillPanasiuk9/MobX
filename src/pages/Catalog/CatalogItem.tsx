import React from "react";
import { CatalogListItemStyled, ListItemImageStyled, StyledText } from "./Catalog.styled";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { ItemType } from "../../store/catalogStore";
import { MOCK_PRICE } from "../../constats";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import cartStore from "../../store/cartStore";
import savedStore from "../../store/savedStore";
import { DeleteFromCartButton } from "../../components/Buttons/DeleteFromCartButton";
import { AddToCartButton } from "../../components/Buttons/AddToCartButton";
import { PATHS } from "../../router/paths";

export const CatalogItem = observer(({ item }: { item: ItemType }): JSX.Element => {
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

  const handleAddToSaved = (): void => {
    savedStore.addToSaved(item);
  };

  const handleDeleteFromSaved = (): void => {
    savedStore.deleteFromSaved(item.id);
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
          {cartStore.isItemInCart(item.id) ? (
            <DeleteFromCartButton onClick={handleDeleteFromCart} />
          ) : (
            <AddToCartButton onClick={handleAddToCart} />
          )}
          {savedStore.isItemSaved(item.id) ? (
            <IconButton color="primary" onClick={handleDeleteFromSaved}>
              <Favorite />
            </IconButton>
          ) : (
            <IconButton color="primary" onClick={handleAddToSaved}>
              <FavoriteBorder />
            </IconButton>
          )}
        </Box>
      </CatalogListItemStyled>
    </Grid>
  );
});
