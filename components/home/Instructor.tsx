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
            quality={30}
            loading='lazy'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAMAAAD3JJ6EAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAACAAAAACygoaWAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NDMzPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjU3NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K9jzbdwAAAHhQTFRFAAAAAAAA/wAA//8A/////4CA////VVVVqqqqAABAgEBAmWYzgIBVqoCAs4BmW0kk2LKbypp9c0w1q5WJq5GJiGxjkGZMf2VbrI19gWZVgVc6Zz4iYzsid1pGiV5DaEEpUhEAVSsTYDUbZUg9az4mek41g1U6noqDwBIzgQAAACB0Uk5TAAEBAQECAgMDBAQFBgYKDiE1b3N5i6WpsMPK2tvf5uuYMFHyAAAARElEQVQIHR3BBQKAIAAAsUNBsbu7//9D0Q1DguSnKQs0n4iqIcRQpN2UoQCf+r56XLCJ5/0cPQQ4tM+6JFgQkB/boBAvZ3YDJC/wXlkAAAAASUVORK5CYII='
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
            loading='lazy'
            quality={20}
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAYGBgYGBgoGBgoOCgoKDhIODg4OEhcSEhISEhccFxcXFxcXHBwcHBwcHBwiIiIiIiInJycnJywsLCwsLCwsLCz/2wBDAQcHBwsKCxMKChMuHxofLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi7/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwMF/8QAIxAAAgEDAwQDAAAAAAAAAAAAAQIDAAQRBRIxBhMhQUKi0f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwDDvNCm70txrdrLsQF5Gt5ZVQOcs25FICk59Dn3irx9LaY8asLq4AIBwZpwR9qfNQijKyAqDuRc+OfDc0bvZWZckwR8n4j8oYxyngzk/9k='
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
          <Marquee
            className={styles.marquee}
            pauseOnClick
            pauseOnHover
            speed={40}
          >
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
            src={"/img/MidasPro2.jpeg"}
            alt={"Alex mixing FOH at Marathon Music Works"}
            width={400}
            height={340}
            className={styles.blurredImage}
            loading='lazy'
            placeholder='blur'
            quality={20}
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAICAgICAgMCAgMFAwMDBQYFBQUFBggGBgYGBggKCAgICAgICgoKCgoKCgoMDAwMDAwODg4ODg8PDw8PDw8PDw//2wBDAQICAgQEBAcEBAcQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAjEAACAQIGAgMAAAAAAAAAAAABAgMEEgAFBgcTMQghERQi/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAgEQABAwQCAwAAAAAAAAAAAAABAgMhAAQRMQUSMkFx/9oADAMBAAIRAxEAPwCYcn1Jt9o/byrzEZhFS5qaiRYUl41lKWqV+QS7SxoSLvwCCfV1wGJ1i8nNUxxJHNp+gqZFUBpfutFyED23GWBS7u09dYYYucuTcXLly75LUrOIEKIgDAGvVMeHVKGxoAfZAO6//9k='
          ></Image>
        </div>
      </div>
    </section>
  );
}
