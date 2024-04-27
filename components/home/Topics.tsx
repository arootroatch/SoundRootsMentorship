'use client';

import React, { useEffect, useState } from "react";
import DividerTRS from "../DividerTRS";
import Marquee from "react-fast-marquee";
import styles from "./topics.module.css";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Topics() {
  const {theme} = useTheme();
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    theme === "light" ? setLightMode(true) : setLightMode(false);
  }, [theme]);

  return (
    <section>
      <DividerTRS />
      <h2>Some of the topics we'll cover</h2>
      <Marquee
        pauseOnHover
        pauseOnClick
        speed={55}
        className={styles.marquee}
      >
        <ul className={styles.ul}>
          <li>Amplifiers</li>
          <li>Connector types</li>
          <li>Digital audio and protocols</li>
          <li>Effects and Signal Processing</li>
          <li>
            <Image
              src={
                lightMode
                  ? "/img/SoundRoots_BlackLogoTransparent.png"
                  : "/img/SoundRoots_WhiteLogoTransparent.png"
              }
              alt='Sound Roots Logo'
              width={100}
              height={70}
              className={styles.logo}
            />
          </li>
        </ul>
      </Marquee>
      <Marquee
        pauseOnHover
        pauseOnClick
        speed={45}
        className={styles.marquee}
      >
        <ul className={styles.ul}>
          <li>Soft skills for audio engineers</li>
          <li>Loudspeakers</li>
          <li>Microphones</li>
          <li>Mixers</li>
          <li>Mixing techniques</li>
          <li>
            <Image
              src={
                lightMode
                  ? "/img/SoundRoots_BlackLogoTransparent.png"
                  : "/img/SoundRoots_WhiteLogoTransparent.png"
              }
              alt='Sound Roots Logo'
              width={100}
              height={70}
              className={styles.logo}
            />
          </li>
        </ul>
      </Marquee>
      <Marquee
        pauseOnHover
        pauseOnClick
        speed={70}
        className={styles.marquee}
      >
        <ul className={styles.ul}>
          <li>Music Theory for audio engineers</li>
          <li>RF/Wireless systems</li>
          <li>Science of Sound</li>
          <li>Signal Flow</li>
          <li>Soundchecking </li>
          <li>Troubleshooting</li>
          <li>
            <Image
              src={
                lightMode
                  ? "/img/SoundRoots_BlackLogoTransparent.png"
                  : "/img/SoundRoots_WhiteLogoTransparent.png"
              }
              alt='Sound Roots Logo'
              width={100}
              height={70}
              className={styles.logo}
            />
          </li>
        </ul>
      </Marquee>
      {/* <p>
        I'll make sure you have a solid foundation in all these topics, and from
        there we can go as deep as you'd like according to your career goals and
        interests. I have a wide network of venues, production companies, rental
        houses, and top-level audio engineers of different specialties to make
        sure you have access to the equipment and expertise you need.
      </p> */}
    </section>
  );
}
