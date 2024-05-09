import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import MixerSVG from "./svg/MixerSVG";
import MoneySVG from "./svg/MoneySVG";
import MentorshipSVG from "./svg/MentorshipSVG";
import TailorSVG from "./svg/TailorSVG";

export default function About() {
  return (
    <section className={`${styles.about}`}>
      <Image
        className={styles.soundWaveBorder}
        alt='sound-wave-border'
        src='/img/sound-wave-border.png'
        width={1100}
        height={75}
        quality={50}
      />
      <div className={styles.container}>
        <h2>A new way to teach live audio</h2>
        <div className={styles.flexWrapper}>
          <div className={styles.textWrapper}>
            <h3>One-on-one live audio training</h3>
            <p className={styles.p}>
              Most audio programs, especially at four-year universities, focus
              on classroom instruction. With a Sound Roots Mentorship, you'll
              get individualized instruction. You won't be listening to lectures
              wondering how they apply to real gigs. You'll develop real,
              practical skills and learn the science and theory along the way,
              in context.
            </p>
          </div>
          <MentorshipSVG
            className={`${styles.svg} ${styles.svg1}
            `}
          />
        </div>
        <div className={styles.flexWrapper}>
          <TailorSVG className={styles.svg} />

          <div className={styles.textWrapper}>
            <h3>Custom-tailored curriculum</h3>
            <p className={styles.p}>
              I will meet you right where you are. I won't make you sit through
              lessons on topics you already know. I won't rush you through
              topics you might be struggling with in order to fit the program
              into a specific time period (like a semester). This is a
              tailor-made mentorship that's made for your goals on your
              schedule.
            </p>
            <p className={styles.p}>
              I'll start by sitting down one-on-one with you and getting to know
              what you want out of the program. I'll ask you about your audio
              background, if any, and what your live audio goals are. We'll
              create a curriculum together that focuses on what you need to
              achieve your goals.
            </p>
          </div>
        </div>
        <div className={styles.flexWrapper}>
          <div className={styles.textWrapper}>
            <h3>Real gear in real venues</h3>
            <p className={styles.p}>
              From different microphone types to various brands of mixing
              consoles, you'll be handling real equipment in every lesson.
              You'll also have opportunities to go into real venues to learn how
              to set up a real show and see how larger systems work.
            </p>
          </div>
          <MixerSVG className={`${styles.svg} ${styles.mixer}`} />
        </div>
        <div className={styles.flexWrapper}>
          <MoneySVG className={styles.svg} />
          <div className={styles.textWrapper}>
            <h3>Job placement</h3>
            <p className={styles.p}>
              Once you're ready for real, paying gigs, I'll use my resources and
              connections in the industry to help get you making money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
