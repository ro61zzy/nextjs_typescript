import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { authOptions } from "./utils/auth";

export default async function Home() {

const session = await getServerSession(authOptions)

  return (
    <main className={styles.main}>
      <h1>Task Manager</h1>
      {session ? (
        <h1>You are logged in</h1>
      ): (
        <h1>Please Log in</h1>       
      )}
    </main>
  );
}
