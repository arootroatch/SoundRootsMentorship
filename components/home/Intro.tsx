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
          height={500}
          alt='Midas M32'
          className={styles.m32}
          quality={5}
          priority
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAUAAAAAShJCJwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAAMJJREFUCNdjMDQ0FDUwMDWwtLUNcDC3KQ5Li56RXZK/3cfD442DjU0PAxCEhoayMdhbml8J9HT97+vl8d/L0fV/Zln2/8bOpv9hAT7/QwN83iZER+uCFDMYGRpeCPLx+B8e6PM5JMjvR0Rg4K/o0OD/KUnx/1NTUv6nxcf9d3Nz72dQUdcOcXVx/h8aFPjfx9v7v7e3z//AoJCnvr7++9zcPLqtbOxjLS0tIaaamVmGGpmYztPTM4iXVVIyBQoJMqABAGDJQhU5HQH/AAAAAElFTkSuQmCC'
        ></Image>
        <p className={styles.p}>
          Hands-on, personalized private instruction. Like guitar lessons, but
          the mixing console is your instrument.
        </p>

        <Image
          src='/img/SoundRoots_WhiteLogoTransparent.png'
          width={450}
          height={300}
          alt='SoundRoots Logo'
          className={styles.logo}
          layout="responsive"
        ></Image>
        {/* <p className={styles.p}>
          Get real-world, hands-on, one-on-one live audio training, designed
          specifically for you. My program focuses on your individual skill
          level to get you gig-ready and hireable as quickly as possible &mdash;
          without skimping on the fundamentals. We work with real gear in real
          venues &mdash; not with textbooks in classrooms. <br /> <br />Think of it like guitar
          lessons, but the mixing console is your instrument.
        </p> */}
        <Link href={"#contact"} className={`btn ${styles.btn}`}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
