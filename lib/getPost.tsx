import { readFileSync } from "fs";
import path from "path"


export default function getPost(slug: string) {
  const POSTS_PATH = path.join(process.cwd(), 'content');
  const filePath = path.resolve(path.join(POSTS_PATH, `${slug}.md`));
  const fileContent = readFileSync(filePath, {encoding: 'utf8'});
  return fileContent;
}


