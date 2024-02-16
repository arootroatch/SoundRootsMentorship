import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";
import "normalize.css";
import "@/app/globals.css";

interface postsProps {
  posts: [
    {
      content: string;
      data: {
        layout: string;
        title: string;
        author: string;
        description: string;
        date: string;
        thumbnail: string;
      };
      filePath: string;
    }
  ];
}

export default function Home({ posts }: postsProps) {
  console.log("posts", posts);
  return (
    <>
      <Head>
        <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></Script>
      </Head>
      <header className={styles.header}>
        <Navbar />
        <Image
          className={styles.hero}
          alt='Midas H3000'
          src='/img/H3000.jpeg'
          fill
        />
        <div className={styles.title}>
          <h1>Home Page</h1>
        </div>
      </header>
      <p>
        Click the link below to navigate to a page generated by{" "}
        <code>next-mdx-remote</code>.
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`learn/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              href={`learn/posts/[slug]`}
            >
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export function getStaticProps() {
  const path = require("path");
  const fs = require("fs");
  const matter = require("gray-matter");
  const POSTS_PATH = path.join(process.cwd(), "content");
  const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path: string) => /\.mdx?$/.test(path));
  const posts = postFilePaths.map((filePath: string) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    const dataObj = JSON.stringify(data);

    return {
      content,
      data: JSON.parse(dataObj),
      filePath,
    };
  });

  return { props: { posts } };
}
