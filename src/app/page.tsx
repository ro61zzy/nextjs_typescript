import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "./utils/auth";
import { Box, Button, Typography } from "@mui/material";
import LogOutButton from "./components/LogOutButton";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className={styles.main}>
      <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "20px" }}>
        Task Manager
      </Typography>
      {session ? (
        <Box>
          <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "20px" }}>
            You are logged in
          </Typography>
          <LogOutButton />
        </Box>
      ) : (
        <Box>
          <Typography sx={{ color: "#000", fontWeight: 600, fontSize: "20px" }}>
            Please Log in
          </Typography>
          <Button 
             sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#000",
              color: "#fff",
              p: "10px",
            }}>
            <Link href="/auth">Log In</Link>
          </Button>
        </Box>
      )}
    </main>
  );
}
