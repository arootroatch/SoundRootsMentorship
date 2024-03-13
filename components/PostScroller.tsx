import Postcard from "./Postcard";
import styles from '@/components/postScroller.module.css'
import { agencyFont } from "@/lib/fonts";
import { PostScrollerProps } from "@/lib/interfaces";


export default function PostScroller({ title, category }: PostScrollerProps) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={`${styles.title} ${agencyFont.className}`}>{title}</h2>
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
