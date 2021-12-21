import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

export default function Login() {
  return (
    <Container
      sx={{
        width: 300,
        height: 400,
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4">ĐĂNG NHẬP</Typography>
      <TextField id="outlined-basic" label="Gmail" variant="outlined" />
      <TextField id="outlined-basic" label="Mật Khẩu..." variant="outlined" />
      <Button
        sx={{
          width: "100%",
          bgcolor: "#ffee33",
          color: "#000000",
          height: "50px",
        }}
      >
        ĐĂNG NHẬP
      </Button>
    </Container>
  );
}
