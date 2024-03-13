import Head from "next/head";
import Script from "next/script";
import styles from "./styles.module.css";
import PostScroller from "@/components/PostScroller";
import "normalize.css";
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
        <Hero alt='Midas XL4' src='/img/H3000.jpeg' h1='' desc=""/>
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

