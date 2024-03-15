"use client";
import Link from "next/link";
import styles from "@/components/nestedNav.module.css";
import { useState } from "react";

export default function NestedNav() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
    console.log(open);
  }

  return (
    <li className={`${styles.nestedParent} `}>
      <Link className={styles.nestedHeading} href='' onClick={handleClick}>
        Home
      </Link>
        <div className={`${styles.nestedWrapper} ${open && styles.open}`}>
          <ul className={styles.nestedNav}>
            <div className={styles.arrowUp}></div>
            <li className={styles.nestedLi}>
              <Link href='https://www.soundrootsproductions.com/'>
                Sound Roots Productions
              </Link>
            </li>
            <li className={styles.nestedLi}>
              <Link href='/'>Sound Roots Mentorship</Link>
            </li>
          </ul>
        </div>
    </li>
  );
}
