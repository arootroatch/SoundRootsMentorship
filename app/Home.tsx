import styles from "@/app/page.module.css";
import Intro from "@/components/home/Intro";
import About from "@/components/home/About";
import Instructor from "@/components/home/Instructor";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <About />
      <Instructor />
      <Topics />
    </main>
  );
}
