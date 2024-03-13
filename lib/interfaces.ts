export interface HeroProps {
  alt: string;
  src: string;
  h1: string;
  desc?: string;
  date?: string;
  author?: string;
}
export interface FrontmatterProps {
  layout: string;
  title: string;
  author: string;
  description: string;
  date: string;
  thumbnail: string;
  category: string;
}

export interface PostsProps {
  content: string;
  data: FrontmatterProps;
  filePath: string;
}

export interface PostcardProps {
  key: string;
  title: string;
  image: string;
  description: string;
  date: string;
  as: string;
  href: string;
}

export interface PostScrollerProps {
  title: string;
  category: PostsProps[];
}
