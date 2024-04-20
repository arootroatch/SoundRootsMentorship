import { Posts } from "./interfaces";

export default function getMostRecentPosts(posts: Posts[], amount: number) {
  return posts
    .toSorted(
      (a, b) =>
        new Date(b.data.updated).getTime() - new Date(a.data.updated).getTime()
    )
    .slice(0, amount);
}
