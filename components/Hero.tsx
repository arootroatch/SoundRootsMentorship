import styles from "@/components/hero.module.css";
import Image from "next/image";
import { HeroProps } from "@/lib/interfaces";

export default function Hero(props: HeroProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.hero}
        alt={props.alt}
        src={props.src}
        sizes='100vw'
        fill
        priority
        quality={50}
      />
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <h1 >{props.h1}</h1>
          {props.desc && <p className={styles.desc}>{props.desc}</p>}
          {props.date && (
            <p className={styles.desc}>
              Written by: {props.author} | {props.date ? props.date : null}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
