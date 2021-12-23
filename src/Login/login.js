import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import  axios from "axios"


const user = {
  userMail: "",
  password: "",
}

const getValue = (userKey,event) => {
  user[userKey] = event.target.value
}

const signup = () => {
  axios.post('http://localhost:5000/users/signUp', {
      userMail: user.userMail,
      password:  user.password,
    })
    .then((res) => {
      if(res.data === 'successful') {
        localStorage.setItem('user', user.userMail);
        window.location = "/home"
      }else {
        alert('Sai gmail hoặc mật khẩu')
      }
    })
    .catch( (error) => {
      console.log(error);
    });
}

const login = () => {
  axios.post('http://localhost:5000/users/login', {
      userMail: user.userMail,
      password:  user.password,
    })
    .then((res) => {
      if(res.data === 'successful') {
        localStorage.setItem('user', user.userMail);
        window.location = "/home"
      }else {
        alert('Sai gmail hoặc mật khẩu')
      }
    })
    .catch( (error) => {
      console.log(error);
    });
}

export default function Login() {
  const clientId =
    "28360044120-7fgicc84negovi9o2vmhvhicnnoobh0n.apps.googleusercontent.com";

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    localStorage.setItem('user', res.profileObj.email);
    if(localStorage.getItem('user')) {
      // window.location = "/home"
    }
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    localStorage.removeItem('user');
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
      <Typography variant="h4">Login</Typography>
      <TextField 
        id="outlined-basic" 
        label="Gmail" 
        variant="outlined" 
        onChange = {(e) => getValue('userMail',e)}
      />
      <TextField 
        id="outlined-basic" 
        label="Mật Khẩu..." 
        variant="outlined" 
        onChange = {(e) => getValue('password',e)}
      />
      <Button
        sx={{
          width: "100%",
          bgcolor: "#ffee33",
          color: "#000000",
          height: "50px",
        }}
        onClick={signup}
      >
        Đăng Kí
      </Button>
      <Button
        sx={{
          width: "100%",
          bgcolor: "#ffee33",
          color: "#000000",
          height: "50px",
        }}
        onClick={login}
      >
        Đăng nhập
      </Button>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          theme='dark'
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
          theme='dark'
        ></GoogleLogout>
      ) : null}
    </Container>
  );
}
