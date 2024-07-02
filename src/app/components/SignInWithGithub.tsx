//mark this as a client component so as to hydrate on client side
"use client";

import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';

const SignInWithGithub = () => {
  return (
    <Button
    variant="contained"
    sx={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "azure",
      color: "#000",
      p: "10px",
    }}
   onClick={() => signIn('github',{
    //add github provider and call back url
    callbackUrl:`${window.location.origin}`
   })}
    fullWidth
  >
    <Typography>Login with Github</Typography>
    <GitHubIcon />
  </Button>
  )
}

export default SignInWithGithub