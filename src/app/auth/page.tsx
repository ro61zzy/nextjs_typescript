import { Box, Typography, TextField, Button, Container } from "@mui/material";
import styles from "../page.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function LoginPage() {
//we cannot use usesate here because this is a server component, so, to avoid hydration error, we brake the sign in to make a client component then call it here

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
        <TextField
          label="Email"
          variant="outlined"
          sx={{ backgroundColor: "#fff" }}
          //   value={email}
          // onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000",
            p: "10px",
          }}
          //onClick={handleLogin}
          fullWidth
        >
          Login with Email
        </Button>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "azure",
            color: "#000",
            p: "10px",
          }}
          //onClick={handleLogin}
          fullWidth
        >
          <Typography>Login with Github</Typography>
          <GitHubIcon />
        </Button>
      </Box>
    </main>
  );
}
