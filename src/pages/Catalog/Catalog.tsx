import React, { useState } from "react";
import { Box, Button, Grid, Stack, Typography, IconButton } from "@mui/material";
import {
  CatalogListItemStyled,
  CatalogListStyled,
  ListItemImageStyled,
  SearchBoxStyled,
  SearchStyled,
} from "./Catalog.styled";
import { FavoriteBorder } from "@mui/icons-material";

export const Catalog = (): JSX.Element => {
  const [search, setSearch] = useState("");

  const mockData = [
    {
      image: "Image",
      price: 100,
      title: "Title",
      author: "Author",
    },
  ];

  const handleSearch = (): void => {};
  const handledItemClick = (): void => {};

  return (
    <Box>
      <Typography variant="h3">Catalog</Typography>
      <SearchBoxStyled>
        <SearchStyled
          placeholder="Find the book you want"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </SearchBoxStyled>
      <CatalogListStyled container rowSpacing={5} columnSpacing={{ xs: 10, sm: 2, md: 3 }}>
        {mockData.map((item) => (
          <Grid item xs={5} sm={4} md={3} key={item.title}>
            <CatalogListItemStyled>
              <ListItemImageStyled onClick={handledItemClick}>{item.image}</ListItemImageStyled>
              <Typography variant="body1" fontWeight={700}>
                {item.price} $
              </Typography>
              <Stack>
                <Typography variant="body2" fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography variant="caption">{item.author}</Typography>
              </Stack>
              <Box display="flex" sx={{ justifyContent: "space-between" }}>
                <Button
                  variant="contained"
                  sx={{ padding: "6px", width: "70%", fontWeight: 700, textTransform: "none" }}
                >
                  Add to cart
                </Button>
                <IconButton color="primary">
                  <FavoriteBorder />
                </IconButton>
              </Box>
            </CatalogListItemStyled>
          </Grid>
        ))}
      </CatalogListStyled>
    </Box>
  );
};
