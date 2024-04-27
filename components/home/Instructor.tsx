"use client";
import React from "react";
import Image from "next/image";
import styles from "./instructor.module.css";
import DividerXLR from "../DividerXLR";
import Marquee from "react-fast-marquee";

export default function Instructor() {
  return (
    <section className={styles.instructor}>
      <DividerXLR />
      <h2>Meet your instructor</h2>
      <div className={styles.flexWrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.p}>
            I'm Alex Root-Roatch. I'm the owner of Sound Roots Productions, a
            production company that provides a full-service production to staff
            to bars and clubs, from providing sound engineers to installing and
            programming lighting and audio rigs. I have a Bachelor's of Music in
            Recording Technology and 10 years of live audio engineering
            experience.
          </p>
          <br />
          <p className={styles.p}>
            Before Sound Roots Productions, I worked at a large production
            company called VER (now PRG), where I assembled and prepped the
            audio systems for large tours like:
          </p>
        </div>
        <div>
          <Image
            src='/img/alexPortrait.png'
            alt={"Alex Root-Roatch"}
            width={650}
            height={500}
            className={styles.portrait}
          />
        </div>
      </div>
      <div className={styles.flexWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={"/img/meyer-callisto.jpeg"}
            alt={"Meyer Callisto racks"}
            width={350}
            height={350}
            className={styles.blurredImage}
          ></Image>
          <div></div>
        </div>
        <div className={styles.textWrapper}>
          <Marquee className={styles.marquee} pauseOnClick pauseOnHover>
            <ul>
              <li>Twenty One Pilots</li>
              <li>OneRepublic</li>
              <li>Judah and the Lion</li>
              <li>Journey</li>
              <li>Dierks Bentley</li>
              <li>Stevie Wonder</li>
              <li>...and many more!</li>
            </ul>
          </Marquee>
          <p>
            I've been blessed to personally have run sound for many great
            artists, including:
          </p>
          <Marquee className={styles.marquee} pauseOnClick pauseOnHover speed={40}> 
            <ul>
              <li>Ashley McBryde</li>
              <li>Kacey Musgraves</li>
              <li>The Brummies</li>
              <li>LA Guns</li>
              <li>Tom Keifer</li>
              <li>Lucie Silvas</li>
              <li>Gavin DeGraw</li>
              <li>Colbie Caillat</li>
            </ul>
          </Marquee>
        </div>
      </div>
      <div className={styles.flexWrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.leftParagraph}>
            In my time running Sound Roots Productions, I've noticed that the
            students from large University audio programs are some of the least
            gig-ready job applicants.
          </p>
          <br />
          <p className={styles.leftParagraph}>
            I found myself devising training programs to get these students'
            skills up to snuff as quickly as possible through hands-on
            experience and focused exercises that targeted the skills they
            needed to improve.
          </p>

          <br />
          <p className={styles.leftParagraph}>
            That's when I realized that there was a better way to do live audio
            education than what college programs were offering.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <div> </div>
          <Image
            src={"/img/LiveOnTheGreen.jpeg"}
            alt={"Alex mixing FOH at Live On The Green Festival"}
            width={350}
            height={350}
            className={styles.blurredImage}
          ></Image>
        </div>
      </div>
    </section>
  );
}
