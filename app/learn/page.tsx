import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import styles from "./styles.module.css";
import Postcard from "@/components/Postcard";
import "normalize.css";
import "@/app/globals.css";
import Hero from "@/components/Hero";
import getPosts from "@/lib/getPosts";


export default async function Home() {

  const posts  = await getPosts();

  // sort posts into separate arrays based on category
  const amplifiers = posts.filter(
    (post) => post.data.category === "Amplifiers"
  );
  const digital = posts.filter((post) => post.data.category === "Digital");
  const effects = posts.filter((post) => post.data.category === "Effects");
  const interconnect = posts.filter(
    (post) => post.data.category === "Interconnect"
  );
  const loudspeakers = posts.filter(
    (post) => post.data.category === "Loudspeakers"
  );
  const microphones = posts.filter(
    (post) => post.data.category === "Microphones"
  );
  const mixers = posts.filter((post) => post.data.category === "Mixers");
  const mixing = posts.filter((post) => post.data.category === "Mixing");
  const rfSystems = posts.filter((post) => post.data.category === "RF Systems");
  const science = posts.filter(
    (post) => post.data.category === "Science of Sound"
  );
  const signalFlow = posts.filter(
    (post) => post.data.category === "Signal Flow"
  );
  const signalProcessing = posts.filter(
    (post) => post.data.category === "Signal Processing"
  );
  const softSkills = posts.filter(
    (post) => post.data.category === "Soft Skills"
  );
  const soundcheck = posts.filter(
    (post) => post.data.category === "Soundcheck"
  );
  const troubleshooting = posts.filter(
    (post) => post.data.category === "Troubleshooting"
  );


  return (
    <>
      <Head>
        <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></Script>
      </Head>
      <header>
        <Navbar />
        <Hero alt='Midas H3000' src='/img/H3000.jpeg' h1='Home Page' />
      </header>
      <div className={styles.homeContent}>
        {posts.map((post) => (
          <Postcard
            key={post.filePath}
            title={post.data.title}
            image={post.data.thumbnail}
            description={post.data.description}
            date={post.data.date}
            as={`learn/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`learn/posts/[slug]`}
          />
        ))}
      </div>
    </>
  );
}

