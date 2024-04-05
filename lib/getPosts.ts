import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Posts } from "./interfaces";

export default function getPosts() {
  // get all posts in content folder
  const POSTS_PATH = path.join(process.cwd(), "content");
  const postFilePaths = fs
    .readdirSync(POSTS_PATH)
    // Only include md(x) files
    .filter((path: string) => /\.mdx?$/.test(path));

  // create an array of data of all posts
  // attempted to use compileMDX here instead of gray matter, but it requires await and i can't await inside of map
  const posts = postFilePaths.map((filePath: string) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    const dataObj = JSON.stringify(data);

    return {
      content,
      data: JSON.parse(dataObj),
      filePath,
    } as Posts;
  });

  return posts;
}
