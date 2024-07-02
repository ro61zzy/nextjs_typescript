"use client";

import { Button } from '@mui/material'
import { signOut } from 'next-auth/react';
import React from 'react'

const LogOutButton = () => {
  return (
    <Button
    sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#000",
        color: "#fff",
        p: "10px",
      }}
    onClick={() => signOut({callbackUrl:`${window.location.origin}/auth`})}
    >Log out</Button>
  )
}

export default LogOutButton