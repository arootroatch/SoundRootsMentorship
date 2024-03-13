import { PostsProps } from "./interfaces";

export default function getMostRecentPosts(posts: PostsProps[], amount: number) {
  return posts
    .toSorted(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    )
    .slice(0, amount);
}