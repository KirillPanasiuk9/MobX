import React from "react";
import { CatalogListItemStyled, ListItemImageStyled, StyledText } from "./Catalog.styled";
import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { CatalogItemType } from "../../store/catalogStore";
import { MOCK_PRICE } from "../../constats";

export const CatalogItem = ({ item }: { item: CatalogItemType }): JSX.Element => {
  const handledItemClick = (): void => {};

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
          <Button variant="contained" sx={{ padding: "6px", width: "70%", fontWeight: 700, textTransform: "none" }}>
            Add to cart
          </Button>
          <IconButton color="primary">
            <FavoriteBorder />
          </IconButton>
        </Box>
      </CatalogListItemStyled>
    </Grid>
  );
};
