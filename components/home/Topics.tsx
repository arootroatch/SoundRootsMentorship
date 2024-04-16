import React from "react";
import DividerTRS from "../DividerTRS";

export default function Topics() {
  return (
    <section>
      <DividerTRS />
      <h2 >What you can learn</h2>
      <p>We'll cover a wide variety of topics, including:</p>
      <div className='ulWrapper'>
        <ul>
          <li>Amplifiers</li>
          <li>Interpersonal and professional skills for audio engineers</li>
          <li>Digital protocols and how digital audio works</li>
          <li>Effects and Signal Processing</li>
          <li>Connector types</li>
          <li>Loudspeakers</li>
          <li>Microphones</li>
        </ul>
        <ul>
          <li>Mixers</li>
          <li>Mixing techniques</li>
          <li>Music Theory for audio engineers</li>
          <li>RF/Wireless systems</li>
          <li>Science of Sound</li>
          <li>Signal Flow</li>
          <li>Soundchecking </li>
          <li>Troubleshooting</li>
        </ul>
      </div>
      <p>I'll make sure you have a solid foundation in all these topics, and from there we can go as deep as you'd like according to your career goals and interests. I have a wide network of venues, production companies, rental houses, and top-level audio engineers of different specialties to make sure you have access to the equipment and expertise you need.</p>
    </section>
  );
}
