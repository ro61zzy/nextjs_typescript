"use client";

import { Alert, Box, Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");

  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const signInResult = await signIn("email", {
        email: email,
        callbackUrl: `${window.location.origin}`,
        redirect: false,
      });

      if (!signInResult.ok) {
        setAlertMessage("Sign-in failed. Please try again.");
      } else {
        setAlertMessage("Check your email for a magic link.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setAlertMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSignIn} style={{ width: "100%" }}>
      <TextField
        label="Email"
        variant="outlined"
        sx={{ backgroundColor: "#fff" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
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
        Login with Email
      </Button>

      {/* Display alert if alertMessage is set */}
      {alertMessage && (
        <Box mt={2}>
          <Alert severity={alertMessage.includes("failed") ? "error" : "success"}>
            {alertMessage}
          </Alert>
        </Box>
      )}
    </form>
  );
};

export default SignInForm;
