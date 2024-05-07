import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <p>Designed and developed by Alex Root-Roatch, Copyright © 2024</p>
          <p>All Rights Reserved</p>
        </div>
        <div>
          <p><a href="#top" className={styles.top}>Back to top</a></p>
          <Link
            href='https://www.facebook.com/soundrootsproductions'
          >
            <FaSquareFacebook className={styles.icon} />
          </Link>
          <Link
            href='https://www.instagram.com/soundrootsproductions/'
            className='navIcon'
          >
            <FaInstagram className={styles.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
