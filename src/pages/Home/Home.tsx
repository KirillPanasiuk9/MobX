import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { AttachMoney, DeliveryDining, MenuBook, SupportAgent } from "@mui/icons-material";

export const Home = (): JSX.Element => {
  const { palette } = useTheme();

  const shopFeatures = [
    {
      icon: <AttachMoney sx={{ fontSize: 45 }} />,
      text: "Affordable prices",
    },
    {
      icon: <MenuBook sx={{ fontSize: 45 }} />,
      text: "Best quality",
    },
    {
      icon: <SupportAgent sx={{ fontSize: 45 }} />,
      text: "24/7 customers service",
    },
    {
      icon: <DeliveryDining sx={{ fontSize: 45 }} />,
      text: "Free delivery",
    },
  ];

  return (
    <>
      <Box display="flex" gap={6} alignItems="center" height="50vh">
        <Stack sx={{ maxWidth: { xs: "100%", sm: "50%" } }} gap={5}>
          <Typography variant="h1">Bookshop</Typography>
          <Typography variant="body1">
            In our store you can find a book for every taste. A large assortment. Nice prices. Interesting stories.
          </Typography>
          <Button variant="contained">
            <Typography variant="body1">Start exploring</Typography>
          </Button>
        </Stack>
        <Box maxWidth="50%" sx={{ display: { xs: "none", sm: "block" }, margin: "0 auto" }}>
          <img src="src/assets/ReadingGirlImage.jpg" width="300px" height="300px" />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{ flexDirection: { xs: "column", sm: "row" }, gap: { xs: 4, sm: 0 } }}
      >
        {shopFeatures.map((feature) => (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ width: "160px", height: "160px", background: `${palette.primary.main}`, borderRadius: "50%" }}
          >
            <Box>{feature.icon}</Box>
            <Typography>{feature.text}</Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};
