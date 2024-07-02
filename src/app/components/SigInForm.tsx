"use client";

import { Alert, Box, Button, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const SigInForm = () => {
  const [email, setEmail] = useState<null | string>(null);

  async function SignInWithEmail() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult.ok) {
      return <Alert>Didn't work</Alert>;
    }

    return <Alert>Check Your Email for a magic link</Alert>;
  }

  return (
    <form action={SignInWithEmail} style={{ width: "100%" }}>
      <TextField
        label="Email"
        variant="outlined"
        sx={{ backgroundColor: "#fff" }}
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
        //onClick={handleLogin}
        fullWidth
      >
        Login with Email
      </Button>
    </form>
  );
};

export default SigInForm;
