import React from "react";
import Image from "next/image";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introWrapper}>
      <h1 className={` ${styles.h1}`}>Your own personal live audio mentor</h1>
        <div className={styles.lightBlue}></div>
        <div className={styles.darkBlue}></div>
        <Image
          src='/img/m32.png'
          width={900}
          height={600}
          alt='Midas M32'
          className={styles.m32}
          quality={10}
          priority
        ></Image>
        <div className={styles.textWrapper}>
          <p className={styles.p}>One on one live audio training</p>
          <p className={styles.p}>Custom tailored curriculum</p>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.p}>The perfect balance of practical skills and book smarts</p>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.p}>Real gear in real venues</p>
        </div>
        {/* <p className={styles.p}>
          Get real-world, hands-on, one-on-one live audio training, designed
          specifically for you. My program focuses on your individual skill
          level to get you gig-ready and hireable as quickly as possible &mdash;
          without skimping on the fundamentals. We work with real gear in real
          venues &mdash; not with textbooks in classrooms. <br /> <br />Think of it like guitar
          lessons, but the mixing console is your instrument.
        </p> */}
      </div>
    </section>
  );
}
