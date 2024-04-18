export interface HeroProps {
  alt: string;
  src: string;
  h1: string;
  desc?: string;
  date?: string;
  author?: string;
}
export interface Frontmatter {
  layout: string;
  title: string;
  author: string;
  description: string;
  date: string;
  updated: string;
  thumbnail: string;
  category: string;
}

export interface Posts {
  content: string;
  data: Frontmatter;
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
  category: Posts[];
  allPostsButton?: boolean;
}

export interface SearchBarParams {
  posts: Posts[];
}