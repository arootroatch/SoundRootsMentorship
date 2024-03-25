import React from "react";
import { agencyFont } from "@/lib/fonts";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2 className={`${agencyFont.className} ${styles.h2}`}>
        A new way to teach live audio
      </h2>
      <h3 className={`${agencyFont.className} ${styles.h3}`}>
        The problem with audio education today
      </h3>
      <p className={styles.p}>
        I see it all the time: recent graduates of audio programs, many of them
        with Bachelor's degrees and student loan debt, apply for a job only to
        discover that their education didn't prepare them for real gigs.
        Discouraged, they embark on a journey to gain the real-world experience
        needed for their success, often wondering why they paid so much money
        for their education.
      </p>
      <p className={styles.p}>
        So why is this happening? A few reasons:
        <ul>
          <li className={styles.li}>
            Most audio programs, especially at four-year universities, primarily
            focus on the recording studio environment, not the live environment,
            despite the fact that most of the jobs are in live event production.
            Students are enamored with the idea of being in the studio, so the
            universities sell what the students want, not what the industry
            needs.
          </li>
          <li className={styles.li}>
            Would you take guitar lessons where you aren't able to play the
            guitar during your lesson? Of course not! But most college audio
            classes teach it like that &mdash; in a classroom taking a written
            exam instead of testing the student's actual skills.
          </li>
          <li className={styles.li}>
            The college educational model takes a one-size-fits-all approach.
            Every student is expected to learn equally well and in the same
            amount of time while being taught with a watered-down approach that
            doesn't take individual differences into account.
          </li>
        </ul>
      </p>
      <h3 className={`${agencyFont.className} ${styles.h3}`}>
        The Sound Roots Alternative
      </h3>
      <h4 className={agencyFont.className}>Your curriculum, your pace</h4>
      <p className={styles.p}>
        I will meet you right where you are. I won't make you sit through
        lessons on topics you already know. I won't rush you through topics you
        might be struggling with in order to fit the program into a specific
        time period (like a semester). This is a tailor-made mentorship that's
        made for your goals on your schedule.
      </p>
      <p className={styles.p}>
        I'll start by sitting down one-on-one with you and getting to know what
        you want out of the program. I'll ask you about your audio background,
        if any, and what your live audio goals are. We'll create a curriculum
        together that focuses on what you need to achieve your goals.
      </p>
      <h4 className={agencyFont.className}>Real gear in real venues</h4>
      <p className={styles.p}>
        You won't be sitting in a classroom while I ramble at you, watching the
        clock and fighting sleep. We're going to be in real venues and
        production companies, seeing and handling real-world equipment in
        context. I'll still make sure you understand the theory and the
        fundamentals you need, but we'll cover those topics in context so they
        actually make sense.
      </p>
    </div>
  );
}
