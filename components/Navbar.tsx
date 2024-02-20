
import styles from './navbar.module.css';
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { mixbox, handlee, agencyFont } from "@/lib/fonts";


export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div>
          <span className={`${styles.soundRoots} ${mixbox.className}`}>
            Sound Roots
          </span>
          <span className={`${handlee.className} ${styles.mentorship}`}>
            Mentorship
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul className={agencyFont.className}>
            <li className={`${styles.nestedParent} ${styles.navLink}`}>
              Home
              <ul className={styles.nestedNav}>
                <div className={styles.arrowUp}></div>
                <li className={styles.nested}>
                  <Link href='https://www.soundrootsproductions.com/'>
                    Sound Roots Productions
                  </Link>
                </li>
                <li className={styles.nested}>
                  <Link href='/'>Sound Roots Mentorship</Link>
                </li>
              </ul>
            </li>
            <li className={styles.navLink}>
              <Link href='/learn'>Learn</Link>
            </li>
            <li className={styles.navLink}>
              <Link href=''>Contact</Link>
            </li>
          </ul>
          <Link
            href='https://www.facebook.com/soundrootsproductions'
            className={styles.navIcon}
          >
            <FaSquareFacebook className={styles.icon} />
          </Link>
          <Link
            href='https://www.instagram.com/soundrootsproductions/'
            className='navIcon'
          >
            <FaInstagram className={styles.instagram} />
          </Link>
          <span className={styles.separator}>|</span>
          <IoIosSearch className={styles.search} />
        </div>
      </div>
    </nav>
  );
}
