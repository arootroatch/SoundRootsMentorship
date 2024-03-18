import { Posts } from "./interfaces";

const categories = [
  "Amplifiers",
  "Digital",
  "Effects",
  "Interconnect",
  "Loudspeakers",
  "Microphones",
  "Mixers",
  "Mixing",
  "RF Systems",
  "Science of Sound",
  "Signal Flow",
  "Signal Processing",
  "Soft Skills",
  "Soundcheck",
  "Troubleshooting",
];

export default function sortPostsByCategory(posts: Posts[]) {
  let categorized: Posts[][] = [];
  categories.forEach((category) => {
    categorized.push(posts.filter((post) => post.data.category === category));
  });
  categorized = categorized.filter((category) => category.length > 0);
  return categorized;
}
