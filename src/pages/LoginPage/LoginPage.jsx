// eslint-disable-next-line no-unused-vars
/* eslint-disable */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container, Box } from "@mui/material";

function LoginPage({ handleAuthentication }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        handleAuthentication();
        navigate("/");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#008000",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", marginBottom: "20px" }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            sx={{ backgroundColor: "#fff", marginBottom: "20px" }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            sx={{ backgroundColor: "#fff", marginBottom: "20px" }}
          />
          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </form>
        <Typography variant="body1" sx={{ marginTop: "20px", color: "#fff" }}>
          Does not have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "secondary", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default LoginPage;
