import { Box, Typography, TextField, Button, Container } from "@mui/material";
import styles from "../page.module.css";
import SignInWithGithub from "../components/SignInWithGithub";
import { authOptions } from "../utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SigInForm from "../components/SigInForm";


export default async function LoginPage() {
//we cannot use usesate here because this is a server component, so, to avoid hydration error, we brake the sign in to make a client component then call it here
//so we get the session here to avoid user signing in twice
const session = await getServerSession(authOptions)

if (session){
    return redirect ('/')
}

  return (
    <main className={styles.main}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,

        }}
      >
        <Typography
          sx={{ color: "#000", fontWeight: 600, fontSize: "40px" }}
          gutterBottom
        >
          Please Sign In to Access Task Manager
        </Typography>
        <Typography
          sx={{ color: "#000", fontWeight: 400, fontSize: "28px" }}
          gutterBottom
        >
          Authentication Required
        </Typography>
       <SigInForm />
       <SignInWithGithub />
      </Box>
    </main>
  );
}
