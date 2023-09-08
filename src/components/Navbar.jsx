import React from "react";
import styles from'./Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <a>Profile</a>
        </li>

        <li className={styles.item}>
          <a>Messages</a>
        </li>
        <li className={styles.item}>
          <a>News</a>
        </li>
        <li className={styles.item}>
          <a>Music</a>
        </li>
        <li className={styles.item}>
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;