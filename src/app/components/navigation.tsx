import Link from "next/link";
import React from "react";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className="font-mono">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className={styles.link}>
            home
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/photo">Photo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
