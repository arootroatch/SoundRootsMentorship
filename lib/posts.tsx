import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { readFile, access } from "fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";

async function getPosts() {
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

  return posts;
}
