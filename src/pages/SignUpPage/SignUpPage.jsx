// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Box,
} from "@mui/material";

function SignUpPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password, role }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "50px" }}>
      <Box
        sx={{
          backgroundColor: "#008000",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff", marginBottom: "20px" }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            fullWidth
            sx={{ backgroundColor: "#fff", marginBottom: "20px" }}
          />
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
          <FormControl
            fullWidth
            required
            sx={{ backgroundColor: "#fff", marginBottom: "20px" }}
          >
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="professor">Professor</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="secondary">
            Sign Up
          </Button>
          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </form>
        <Typography variant="body1" sx={{ marginTop: "20px", color: "#fff" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "secondary", textDecoration: "none" }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignUpPage;
