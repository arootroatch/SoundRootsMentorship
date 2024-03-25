import React from "react";
import { agencyFont } from "@/lib/fonts";
import styles from "./instructor.module.css";

export default function Instructor() {
  return (
    <section className={styles.section}>
      <h2 className={agencyFont.className}>Meet your instructor</h2>
      <p>
        I'm Alex Root-Roatch. I'm the owner of Sound Roots Productions, a
        production company that provides a full-service production to staff to
        bars and clubs, from providing sound engineers to installing and
        programming lighting and audio rigs. I have a Bachelor's of Music in
        Recording Technology and 10 years of live audio engineering experience.
        Before Sound Roots Productions, I worked at a large production company
        called VER (now PRG), where I assembled and prepped the audio systems
        for large tours like:
      </p>
      <div className={styles.ulWrapper}>
        <ul className={styles.ul}>
          <li className='li'>Twenty One Pilots</li>
          <li className='li'>OneRepublic</li>
          <li className='li'>Judah and the Lion</li>
        </ul>
        <ul>
          <li className='li'>Journey</li>
          <li className='li'>Dierks Bentley</li>
          <li className='li'>...and many more!</li>
        </ul>
      </div>
      <p>
        I've been blessed to personally have run sound for many great artists,
        including:
      </p>
      <div className={styles.ulWrapper}>
        <ul>
          <li className='li'>Ashley McBryde</li>
          <li className='li'>Kacey Musgraves</li>
          <li className='li'>The Brummies</li>
        </ul>
        <ul>
          <li className='li'>LA Guns</li>
          <li className='li'>Tom Keifer</li>
          <li className='li'>Lucie Silvas</li>
        </ul>
      </div>
      <p>
        As the owner of Sound Roots Productions, I hire, train, and schedule
        audio engineers for 5 venues. In my 5 years running the company, I've
        noticed that the students from large University audio programs are some
        of the least gig-ready job applicants. I found myself devising training
        programs to get these students' skills up to snuff as quickly as
        possible through hands-on experience and focused exercises that targeted
        the skills they needed to improve. It was then that I realized that
        there was a better way to do live audio education than what college
        programs were offering.
      </p>
    </section>
  );
}
