import path from "path";
import fs from "fs";

import { readFile, access } from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";


async function getPosts() {
  const POSTS_PATH = path.join(process.cwd(), "content");
  const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path: string) => /\.mdx?$/.test(path));
    
  const posts = postFilePaths.map((filePath: string)=>{
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: filePath,
      options: { parseFrontmatter: true },
    });
      // do something with frontmatter, like set metadata or whatever
      return {
        content,
        data: frontmatter,
        filePath
      }
  })
  // const { content, frontmatter } = await compileMDX<{ title: string }>({
  //   source: `---
  //     title: RSC Frontmatter Example
  //     ---
  //     # Hello World
  //     This is from Server Components!
  //   `,
  //   options: { parseFrontmatter: true },
  // });
  // return (
  //   <>
  //     <h1>{frontmatter.title}</h1>
  //     {content}
  //   </>
  // );
}
