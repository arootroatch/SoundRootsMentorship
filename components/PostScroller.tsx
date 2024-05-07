import Postcard from "./Postcard";
import styles from "@/components/postScroller.module.css";
import { PostScrollerProps } from "@/lib/interfaces";
import Link from "next/link";

export default function PostScroller({ title, category, allPostsButton }: PostScrollerProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={`${styles.title}`}>{title}</h2>
      </div>
      <div className={styles.categoryWrapper}>
        {category.map((post) => (
          <Postcard
            key={post.filePath}
            title={post.data.title}
            image={post.data.thumbnail}
            description={post.data.description}
            date={post.data.date}
            as={`/learn/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/learn/[slug]`}
          />
        ))}
      </div>
      {allPostsButton && <Link href={'/learn'} className={`${styles.btn} btn`}>Browse All Posts</Link>}
    </div>
  );
}
