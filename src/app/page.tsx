import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "./utils/auth";
import { Box, Typography } from "@mui/material";

export default async function Home() {

const session = await getServerSession(authOptions)

  return (
    <main className={styles.main}>
      <Typography sx={{color:"#000", fontWeight:600, fontSize:"20px"}}>Task Manager</Typography>
      {session ? (
        <Typography sx={{color:"#000", fontWeight:600, fontSize:"20px"}}>You are logged in</Typography>
      ): (
        <Typography sx={{color:"#000", fontWeight:600, fontSize:"20px"}}>Please Log in</Typography>       
      )}
    </main>
  );
}
