import styles from "./NavBar.module.scss";

export function NavBar() {
  return (

    <nav className={styles.navStyle}>
      <ul className={styles.list}>
      <li className={styles.linkStyle}>
        <a href="#">Link 1</a>
    </li>

      <li className={styles.linkStyle}>
        <a href="#">Link 2</a>
      </li>
      <li className={styles.linkStyle}>
        <a href="#">Link 3</a>
      </li>

      </ul>
    </nav>

  );
}

