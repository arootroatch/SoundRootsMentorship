import styles from "./navbar.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { mixbox, handlee, agencyFont } from "@/lib/fonts";
import NestedNav from "./NestedNav";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div className={styles.leftWrapper}>
          <span className={`${styles.soundRoots} ${mixbox.className}`}>
            Sound Roots
          </span>
          <span className={`${handlee.className} ${styles.mentorship}`}>
            Mentorship
          </span>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.linkWrapper}>
            <ul className={agencyFont.className}>
              <NestedNav />
              <li className={styles.navLink}>
                <Link href='/learn'>Learn</Link>
              </li>
              <li className={styles.navLink}>
                <Link href=''>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.iconWrapper}>
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
            <IoCloseOutline className={styles.close} />
            <IoIosSearch className={styles.search} />
            <RxHamburgerMenu className={styles.hamburger} />
          </div>
        </div>
      </div>
    </nav>
  );
}
