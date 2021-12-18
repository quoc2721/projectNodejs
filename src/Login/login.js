import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function Login() {
  const clientId =
    "28360044120-7fgicc84negovi9o2vmhvhicnnoobh0n.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

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
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </Container>
  );
}
