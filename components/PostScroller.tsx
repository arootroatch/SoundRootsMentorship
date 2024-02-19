import { PostsProps } from "@/lib/getPosts";
import Postcard from "./Postcard";
import styles from '@/components/postScroller.module.css'

interface PostScrollerProps {
  title: string;
  category: PostsProps[];
}

export default function PostScroller({ title, category }: PostScrollerProps) {
  return (
    <div>
      <div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.categoryWrapper}>
        {category.map((post) => (
          <Postcard
            key={post.filePath}
            title={post.data.title}
            image={post.data.thumbnail}
            description={post.data.description}
            date={post.data.date}
            as={`learn/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`learn/[slug]`}
          />
        ))}
      </div>
    </div>
  );
}
