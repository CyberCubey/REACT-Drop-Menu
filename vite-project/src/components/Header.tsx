import styles from "./Header.module.scss";
import { NavBar } from "./NavBar";

export function Header() {
  return (

    <header className={styles.header}>
      <h1 className={styles.title}>Min React App</h1>
      <NavBar />

    </header>
  );
}