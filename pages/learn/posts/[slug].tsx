import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from "@/pages/learn/styles.module.css";
import "normalize.css";
import { GetStaticProps } from "next/types";
import "@/app/globals.css";
import { agencyFont } from "@/lib/fonts";

interface postProps {
  frontmatter: {
    layout: string;
    title: string;
    author: string;
    description: string;
    date: string;
    thumbnail: string;
    category: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}

export default function PostPage({ frontmatter, mdxSource }: postProps) {
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
      <header className={styles.header}>
        <Navbar />
        <Image
          className={styles.hero}
          src={frontmatter.thumbnail}
          alt={frontmatter.thumbnail}
          fill
        />
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <h1 className={agencyFont.className}>{frontmatter.title}</h1>
            {frontmatter.description && (
              <p className={styles.desc}>{frontmatter.description}</p>
            )}
            <p className={styles.desc}>
              Written by: {frontmatter.author} | {formattedDate}
            </p>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <MDXRemote {...mdxSource} />
      </main>
    </article>
  );
}

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult;
}> = async ({ params }) =>
  // export async function getStaticProps({ params })
  {
    const fs = require("fs");

    const matter = require("gray-matter");
    const fileContent = matter(
      fs.readFileSync(`./content/${params?.slug}.md`, "utf8")
    );
    // need to JSON stringify because the YAML dates can't be parsed unless they are turned into strings
    const frontmatter = JSON.stringify(fileContent.data);
    const mdxSource = await serialize(fileContent.content);

    return {
      props: {
        // Parse from string into JSON
        frontmatter: JSON.parse(frontmatter),
        mdxSource,
      },
    };
  };

export const getStaticPaths = async () => {
  const fs = require("fs");
  const postFilePaths = fs
    .readdirSync("./content")
    // Only include md(x) files
    .filter((path: string) => /\.mdx?$/.test(path));

  const paths = postFilePaths.map((file: string) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false,
  };
};
