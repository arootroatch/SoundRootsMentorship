"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { mixbox, handlee, agencyFont } from "@/lib/fonts";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openNestedNav, setOpenNestedNav] = useState(false);
  function handleClick() {
    setOpen(!open);
    openNestedNav ? setOpenNestedNav(false) : null;
  }
  function toggleNestedNav() {
    setOpenNestedNav(!openNestedNav);
  }
  function closeNav() {
    setOpen ? setOpen(false) : null;
    openNestedNav ? setOpenNestedNav(false) : null;
  }

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
          <div
            className={`${styles.linkWrapper} ${open && styles.open} ${
              openNestedNav && styles.heightFull
            }`}
          >
            <ul
              className={`${agencyFont.className} ${
                openNestedNav && styles.openNestedNav
              }`}
            >
              <li className={`${styles.nestedParent} `}>
                <Link
                  className={styles.nestedHeading}
                  href=''
                  onClick={toggleNestedNav}
                >
                  Home
                </Link>
                <div className={styles.arrowUp}></div>
                <div className={styles.nestedBackground}></div>
                <ul className={styles.nestedNav}>
                  <li className={styles.nestedLi}>
                    <Link
                      href='https://www.soundrootsproductions.com/'
                      onClick={closeNav}
                    >
                      Sound Roots Productions
                    </Link>
                  </li>
                  <li className={styles.nestedLi}>
                    <Link href='/' onClick={closeNav}>
                      Sound Roots Mentorship
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.navLink}>
                <Link href='/learn' onClick={closeNav}>
                  Learn
                </Link>
              </li>
              <li className={styles.navLink}>
                <Link href='' onClick={closeNav}>
                  Contact
                </Link>
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
            <Link href='' onClick={handleClick}>
              <RxHamburgerMenu className={styles.hamburger} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
