import styles from "./NavBar.module.scss";

export function NavBar() {
  return (

    <nav className={styles.nav}>

      <ul className={styles.list}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </nav>
  );
}
