import React from "react";
import Image from "next/image";
import styles from "./intro.module.css";
import Link from "next/link";

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
        <p className={styles.p}>Hands-on, personalized private instruction. Like guitar lessons, but the mixing console is your instrument.</p>
        <Image src='/img/SoundRoots_WhiteLogoTransparent.png' width={450} height={300} alt='SoundRoots Logo' className={styles.logo}></Image>
        {/* <p className={styles.p}>
          Get real-world, hands-on, one-on-one live audio training, designed
          specifically for you. My program focuses on your individual skill
          level to get you gig-ready and hireable as quickly as possible &mdash;
          without skimping on the fundamentals. We work with real gear in real
          venues &mdash; not with textbooks in classrooms. <br /> <br />Think of it like guitar
          lessons, but the mixing console is your instrument.
        </p> */}
        <Link href={"www.soundrootsproductions.com"} className={`btn ${styles.btn}`}>Get in Touch</Link>
      </div>
    </section>
  );
}
