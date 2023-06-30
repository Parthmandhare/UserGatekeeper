import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <ul className={styles.navbar_menu}>
        <li className={styles.navbar_item}>
            <Link to="/" className={styles.navbar_link}>
              Home
            </Link>
          </li>
          <li className={styles.navbar_item}>
            <Link to="/login" className={styles.navbar_link}>
              Login
            </Link>
          </li>
          <li className={styles.navbar_item}>
            <Link to="/register" className={styles.navbar_link}>
              Register
            </Link>
          </li>
          <li className={styles.navbar_link}>
            <Link to="/about" className={styles.navbar_link}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar