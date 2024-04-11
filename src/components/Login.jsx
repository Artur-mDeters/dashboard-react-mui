import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 

  const handleLogin = (e) => {
    onLogin(email, password)
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        widht: "100px",
      }}
    >
      <Box
        sx={{
          width: "370px",
          border: "1px solid #ddd",
          padding: "25px",
          borderRadius: 5,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="E-mail"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="filled"
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          variant="filled"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 3 }}
        >
          Entrar
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
