import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Button, Stack, useTheme, Alert, Snackbar } from "@mui/material";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../store";
import { CartItem } from "./CartItem";
import { MOCK_PRICE } from "../../constats";
import { EmptySavedOrCart } from "../../components/EmptySavedOrCart/EmptySavedOrCart";
import { SubmitModal } from "../../components/SubmitModal/SubmitModal";

export const Cart = observer((): JSX.Element => {
  const { palette } = useTheme();
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    cartStore.initCart();
  }, []);

  const handleClickOpen = (): void => {
    setIsModalOpen(true);
  };

  const handleClose = (): void => {
    setIsModalOpen(false);
  };

  const handleCloseSuccessAlert = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    reason !== "clickaway" && setSuccessAlertOpen(false);
  };

  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Cart
      </Typography>
      {cartStore.itemsInCart.length ? (
        <>
          <SubmitModal isOpen={isModalOpen} handleClose={handleClose} setSuccessAlertOpen={setSuccessAlertOpen} />
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
                <Button variant="contained" fullWidth onClick={handleClickOpen}>
                  Submit my order
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <EmptySavedOrCart />
          <Snackbar open={successAlertOpen} autoHideDuration={6000} onClose={handleCloseSuccessAlert}>
            <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
              Your order was successfully placed
            </Alert>
          </Snackbar>
        </>
      )}
    </Box>
  );
});
