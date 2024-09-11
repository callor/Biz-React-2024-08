import styles from "./page.module.css";
import MainNav from "@/comps/MainNav";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainNav />
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
