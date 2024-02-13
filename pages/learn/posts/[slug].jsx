import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { MDXRemote} from "next-mdx-remote";
import Head from "next/head";
import Navbar from "@/components/Navbar";


export default function PostPage({ frontmatter, mdxSource }) {
  console.log(frontmatter);
  return (
    <>
      <header>
        <Head>
          <title>{frontmatter.title}</title>
        </Head>
        <Navbar />
        {/* <nav>
          <Link href="/learn" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav> */}
      </header>
      <div className="post-header">
        <h1>{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="description">{frontmatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...mdxSource}/>
      </main>
    </>
  );
}


export async function getStaticProps({ params }) {

  const fs = require("fs");

  const matter = require("gray-matter");
  const fileContent = matter(
    fs.readFileSync(`./content/${params.slug}.mdx`, "utf8")
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
