import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextFieldProps as MuiTextFieldProps, TextField as MuiTextField } from "@mui/material";
import { FieldsNames, OrderFormType } from "./SubmitModal";

type TextFieldProps = {
  control: Control<OrderFormType>;
  name: FieldsNames;
} & MuiTextFieldProps;

export const TextField = (props: TextFieldProps): JSX.Element => {
  const { control, name, label } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={(): JSX.Element => {
        return <MuiTextField fullWidth required={true} variant="outlined" size="small" label={label} />;
      }}
    />
  );
};
