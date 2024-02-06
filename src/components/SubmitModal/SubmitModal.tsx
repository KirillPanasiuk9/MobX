import React, { Dispatch } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { observer } from "mobx-react-lite";
import { SubmitHandler, useForm } from "react-hook-form";
import { cartStore } from "../../store";
import { TextField } from "./TextField";

type ModalPropsType = {
  isOpen: boolean;
  handleClose: () => void;
  setSuccessAlertOpen: Dispatch<React.SetStateAction<boolean>>;
};

export enum FieldsNames {
  CITY = "city",
  STREET = "street",
  NAME = "name",
  SURNAME = "surname",
}

export type OrderFormType = {
  city: string;
  street: string;
  name: string;
  surname: string;
};

export const SubmitModal = observer((props: ModalPropsType): JSX.Element => {
  const { isOpen, handleClose, setSuccessAlertOpen } = props;

  const { control, handleSubmit } = useForm<OrderFormType>({
    mode: "onSubmit",
    defaultValues: {
      city: "",
      street: "",
      name: "",
      surname: "",
    },
  });

  const onSubmit: SubmitHandler<OrderFormType> = (): void => {
    cartStore.clearCart();
    setSuccessAlertOpen(true);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <DialogTitle id="alert-dialog-title">Please, enter your data</DialogTitle>
      <DialogContent
        sx={{
          width: "100%",
          gap: "10px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <TextField control={control} name={FieldsNames.CITY} label="City" />
        <TextField control={control} name={FieldsNames.STREET} label="Street" />
        <TextField control={control} name={FieldsNames.NAME} label="Name" />
        <TextField control={control} name={FieldsNames.SURNAME} label="Surname" />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Back to cart
        </Button>
        <Button variant="contained" type="submit">
          Confirm order
        </Button>
      </DialogActions>
    </Dialog>
  );
});
