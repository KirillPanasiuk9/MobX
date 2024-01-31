import React from "react";
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button/Button";

export const DeleteFromCartButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button
      variant="contained"
      sx={{ padding: "6px", width: "70%", fontWeight: 700, textTransform: "none" }}
      {...props}
    >
      In cart
    </Button>
  );
};
