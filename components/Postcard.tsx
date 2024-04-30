import Image from "next/image";
import styles from "@/components/postcard.module.css";
import Link from "next/link";
import { PostcardProps } from "@/lib/interfaces";

export default function Postcard(props: PostcardProps) {
  const date = new Date(props.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div className={styles.postcard}>
      <Link as={props.as} href={props.href}>
        <div className={styles.image}>
          <Image
            alt={props.image}
            src={props.image}
            fill
            className={styles.image}
            quality={5}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.date}>{formattedDate}</p>
          <h3 >{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
        </div>
      </Link>
    </div>
  );
}
