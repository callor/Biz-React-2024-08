import Link from "next/link";
import styles from "./page.module.css";
import MainNav from "@/comps/MainNav";
import LoginComps from "@/comps/Login";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainNav />
      <main className={styles.main}>
        <LoginComps />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
