import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote} from "next-mdx-remote";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from '@/pages/learn/styles.module.css'
import 'normalize.css';



export default function PostPage({ frontmatter, mdxSource }) {
  console.log(frontmatter);
  return (
    <article>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <header className={styles.header}>
        <Navbar />
        <Image className={styles.hero}
          src={frontmatter.thumbnail}
          fill
        />
        <div className={styles.title}>
          <h1>{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="description">{frontmatter.description}</p>
          )}
        </div>
      </header>
      <main className={styles.main}>
        <MDXRemote {...mdxSource}/>
      </main>
    </article>
  );
}


export async function getStaticProps({ params }) {

  const fs = require("fs");

  const matter = require("gray-matter");
  const fileContent = matter(
    fs.readFileSync(`./content/${params.slug}.md`, "utf8")
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
}

export const getStaticPaths = async () => {
  const fs = require("fs");
  const postFilePaths = fs
    .readdirSync("./content")
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

  const paths = postFilePaths.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false,
  };
};
