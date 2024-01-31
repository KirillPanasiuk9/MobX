import React from "react";
import { EmptyCartIcon } from "../../assets/EmptyCart";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { Button, Stack } from "@mui/material";

export const EmptySavedOrCart = (): JSX.Element => {
  return (
    <Stack
      width="100%"
      alignItems="center"
      justifyContent="center"
      display="flex"
      gap={2}
      sx={{ "& .MuiSvgIcon-root": { fontSize: "200px" } }}
    >
      <EmptyCartIcon />
      <Link to={`/${PATHS.CATALOG}`}>
        <Button variant="contained" size="large">
          Go shopping
        </Button>
      </Link>
    </Stack>
  );
};
