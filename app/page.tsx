import styles from "@/app/home.module.css";
import Intro from "@/components/home/Intro";
import About from "@/components/home/About";
import Instructor from "@/components/home/Instructor";
import Topics from "@/components/home/Topics";
import Contact from "@/components/home/Contact";
import PostScroller from "@/components/PostScroller";
import getMostRecentPosts from "@/lib/getMostRecentPosts";
import getPosts from "@/lib/getPosts";

export default function Home() {
  const posts = getPosts();
  const recent = getMostRecentPosts(posts, 5);
  return (
    <main className={styles.main}>
      <Intro />
      <About />
      <Instructor />
      <Topics />
      <Contact />
      <PostScroller title={"Start learning now"} category={recent} allPostsButton={true}/>
    </main>
  );
}
