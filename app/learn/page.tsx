import Head from "next/head";
import Script from "next/script";
import styles from "./styles.module.css";
import PostScroller from "@/components/PostScroller";
import "normalize.css";
import Hero from "@/components/Hero";
import getPosts from "@/lib/getPosts";
import { PostsProps } from "@/lib/getPosts";

export default async function Home() {
  const posts = await getPosts();
  const categorized = sortPostsByCategory(posts);
  const recent = posts
    .toSorted(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    )
    .slice(0, 5);

  return (
    <>
      <Head>
        <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></Script>
      </Head>
      <header>
        <Hero alt='Midas XL4' src='/img/H3000.jpeg' h1='Home Page' />
      </header>
      <div className={styles.homeContent}>
        <PostScroller title='Recent' category={recent} />
        {categorized.map((category) => (
          <PostScroller
            key={category[0].data.title}
            title={category[0].data.category}
            category={category}
          />
        ))}
      </div>
    </>
  );
}

function sortPostsByCategory(posts: PostsProps[]) {
  let categorized = [];
  const amplifiers = posts.filter(
    (post) => post.data.category === "Amplifiers"
  );
  if (amplifiers.length > 0) {
    categorized.push(amplifiers);
  }

  const digital = posts.filter((post) => post.data.category === "Digital");
  if (digital.length > 0) {
    categorized.push(digital);
  }

  const effects = posts.filter((post) => post.data.category === "Effects");
  if (effects.length > 0) {
    categorized.push(effects);
  }

  const interconnect = posts.filter(
    (post) => post.data.category === "Interconnect"
  );
  if (interconnect.length > 0) {
    categorized.push(interconnect);
  }

  const loudspeakers = posts.filter(
    (post) => post.data.category === "Loudspeakers"
  );
  if (loudspeakers.length > 0) {
    categorized.push(loudspeakers);
  }

  const microphones = posts.filter(
    (post) => post.data.category === "Microphones"
  );
  if (microphones.length > 0) {
    categorized.push(microphones);
  }

  const mixers = posts.filter((post) => post.data.category === "Mixers");
  if (mixers.length > 0) {
    categorized.push(mixers);
  }

  const mixing = posts.filter((post) => post.data.category === "Mixing");
  if (mixing.length > 0) {
    categorized.push(mixing);
  }

  const rfSystems = posts.filter((post) => post.data.category === "RF Systems");
  if (rfSystems.length > 0) {
    categorized.push(rfSystems);
  }

  const science = posts.filter(
    (post) => post.data.category === "Science of Sound"
  );
  if (science.length > 0) {
    categorized.push(science);
  }

  const signalFlow = posts.filter(
    (post) => post.data.category === "Signal Flow"
  );
  if (signalFlow.length > 0) {
    categorized.push(signalFlow);
  }

  const signalProcessing = posts.filter(
    (post) => post.data.category === "Signal Processing"
  );
  if (signalProcessing.length > 0) {
    categorized.push(signalProcessing);
  }

  const softSkills = posts.filter(
    (post) => post.data.category === "Soft Skills"
  );
  if (softSkills.length > 0) {
    categorized.push(softSkills);
  }

  const soundcheck = posts.filter(
    (post) => post.data.category === "Soundcheck"
  );
  if (soundcheck.length > 0) {
    categorized.push(soundcheck);
  }

  const troubleshooting = posts.filter(
    (post) => post.data.category === "Troubleshooting"
  );
  if (troubleshooting.length > 0) {
    categorized.push(troubleshooting);
  }
  return categorized;
}
