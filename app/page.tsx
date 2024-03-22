import styles from "@/app/page.module.css";
import Intro from "@/components/home/Intro";
import About from "@/components/home/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <About />
    </main>
  );
}
