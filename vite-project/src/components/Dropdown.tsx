import { useState } from "react";
import styles from "./Dropdown.module.scss";

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className={styles.nav}>
      <button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>

      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    
  );
}
