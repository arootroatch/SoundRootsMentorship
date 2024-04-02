import styles from "@/app/home.module.css";
import Intro from "@/components/home/Intro";
import About from "@/components/home/About";
import Instructor from "@/components/home/Instructor";
import Topics from "@/components/home/Topics";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <About />
      <Instructor />
      <Topics />
      <Contact />
    </main>
  );
}
