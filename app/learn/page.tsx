import Head from "next/head";
import Script from "next/script";
import styles from "./styles.module.css";
import PostScroller from "@/components/PostScroller";
import Hero from "@/components/Hero";
import getPosts from "@/lib/getPosts";
import sortPostsByCategory from "@/lib/sortPostsByCategory";
import getMostRecentPosts from "@/lib/getMostRecentPosts";

export default async function Home() {
  const posts = await getPosts();
  const categorized = sortPostsByCategory(posts);
  const recent = getMostRecentPosts(posts, 5);

  return (
    <>
      <Head>
        <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></Script>
      </Head>
      <header>
        <Hero
          alt='Analog tape machine'
          src='/img/road-cases.jpeg'
          h1='Welcome to the warehouse!'
          desc='Browse all of our posts, sorted by category.'
        />
      </header>
      <div className={styles.homeContent}>
        <PostScroller title='Recent' category={recent} />
        {categorized.map((category) => (
          <PostScroller
            key={category[0].data.title}
            title={category[0].data.category}
            category={category}
          />
        ))}
      </div>
    </>
  );
}
