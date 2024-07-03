"use client";

import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUpWithCredentials: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful signup (e.g., redirect)
        console.log("Signup successful!");
      } else {
        // Handle signup failure
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <label>
          Email:
          <TextField
            label="Email"
            variant="outlined"
            sx={{ backgroundColor: "#fff" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </label>
        <br />
        <label>
          Password:
          <TextField
            label="Password"
            variant="outlined"
            sx={{ backgroundColor: "#fff" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </label>
        <br />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#000",
            p: "10px",
            mt: "15px",
          }}
          fullWidth
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpWithCredentials;
