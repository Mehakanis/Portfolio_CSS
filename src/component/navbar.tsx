"use client"
import { useState } from "react";
import Link from "next/link";
import styles from "../app/page.module.css";
  

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className="" >
        <h2 className={styles.logo}>Coder.</h2>
      </div>

      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>


      <nav className={`${styles.nav} ${isOpen ? styles.showNav : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
         
        <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
          </header>
  );
}
