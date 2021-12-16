import React from "react";
import View from "./Views/view.js";
import { Grid, Typography, Box } from "@material-ui/core";
import ApartmentIcon from "@mui/icons-material/Apartment";

export default function ViewList() {
  return (
    <Box my={6}>
      <Typography variant="h4" gutterBottom component="div">
        Các công ty hàng đầu
        <ApartmentIcon />
      </Typography>
      <Grid container spacing={2} align="center">
        <Grid item sx={12} sm={4}>
          <View />
        </Grid>
        <Grid item sx={12} sm={4}>
          <View />
        </Grid>
        <Grid item sx={12} sm={4}>
          <View />
        </Grid>
      </Grid>
    </Box>
  );
}
