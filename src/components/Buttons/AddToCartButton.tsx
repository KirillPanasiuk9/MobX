import React from "react";
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button/Button";

export const AddToCartButton = (props: ButtonProps): JSX.Element => {
  return (
    <Button variant="outlined" sx={{ padding: "6px", width: "70%", fontWeight: 700, textTransform: "none" }} {...props}>
      Add to cart
    </Button>
  );
};
