import React from "react";
import { Box, CircularProgress, CircularProgressProps } from "@mui/material";

type LoaderType = CircularProgressProps & {
  mt?: string;
};
export const Loader = ({ mt, ...props }: LoaderType): JSX.Element => {
  return (
    <Box width="100%" display="flex" justifyContent="center" alignItems="center" mt={mt}>
      <CircularProgress size={60} {...props} />
    </Box>
  );
};
