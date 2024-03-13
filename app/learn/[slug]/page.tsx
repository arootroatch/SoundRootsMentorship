import Head from "next/head";
import styles from "@/app/learn/styles.module.css";
import "normalize.css";
import Hero from "@/components/Hero";
import getPost from "@/lib/getPost";
import { compileMDX } from "next-mdx-remote/rsc";
import MyProgressBar from "@/components/ProgressBar";
import { FrontmatterProps } from "@/lib/interfaces";


export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const markdown = await getPost(params.slug);
  const { content, frontmatter } = await compileMDX<FrontmatterProps>({
    source: markdown,
    options: { parseFrontmatter: true },
  });
  const date = new Date(frontmatter.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <article>
      <Head>
        <title>{frontmatter.title} | Sound Roots Mentorship</title>
      </Head>
      <header>
        <MyProgressBar />
        <Hero
          src={frontmatter.thumbnail}
          alt={frontmatter.thumbnail}
          h1={frontmatter.title}
          desc={frontmatter.description}
          date={formattedDate}
          author={frontmatter.author}
        />
      </header>
      <main className={styles.main}>{content}</main>
    </article>
  );
}
