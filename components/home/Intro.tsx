import React from "react";
import Image from "next/image";
import styles from "./intro.module.css";
import { agencyFont } from "@/lib/fonts";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.lightBlue}></div>
      <div className={styles.darkBlue}></div>
      <h1 className={`${agencyFont.className} ${styles.h1}`}>
        Your own personal live audio mentor
      </h1>
      <div className={styles.introWrapper}>
        <Image
          src='/img/m32.png'
          width={870}
          height={600}
          alt='Midas M32'
          className={styles.m32}
          quality={10}
          priority
        ></Image>
        <p className={styles.p}>
          Get real-world, hands-on, one-on-one live audio training, designed
          specifically for you. My program focuses on your individual skill
          level to get you gig-ready and hireable as quickly as possible &mdash;
          without skimping on the fundamentals. We work with real gear in real
          venues &mdash; not in textbooks in classrooms. Think of it like guitar
          lessons, but the mixing console is your instrument.
        </p>
      </div>
    </div>
  );
}
