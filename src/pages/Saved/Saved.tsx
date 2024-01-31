import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import savedStore from "../../store/savedStore";
import { EmptySavedOrCart } from "../../components/EmptySavedOrCart/EmptySavedOrCart";
import { SavedItem } from "./SavedItem";
import { observer } from "mobx-react-lite";

export const Saved = observer((): JSX.Element => {
  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Books I've saved
      </Typography>
      {savedStore.savedItems.length ? (
        <Grid container rowSpacing={5} columnSpacing={{ xs: 10, sm: 2, md: 3 }}>
          {savedStore.savedItems.map((item) => (
            <SavedItem item={item} key={item.id} />
          ))}
        </Grid>
      ) : (
        <EmptySavedOrCart />
      )}
    </Box>
  );
});
