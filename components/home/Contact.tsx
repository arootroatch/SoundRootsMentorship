"use client";

import React from "react";
import { agencyFont } from "@/lib/fonts";
import styles from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [pending, setPending] = useState(false);
  // @ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    if (formData.get("bot-field")) {
      alert(
        "You appear to be a bot. Please unplug from the matrix and try again."
      );
      return;
    }

    await fetch("/.netlify/functions/postToDbAndEmail", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        experience: formData.get("experience"),
        goals: formData.get("goals"),
        date: new Date().toISOString(),
      }),
    }).then((res) => {
      setPending(false);
      if (res.status === 200) {
        alert("Thank you for your submission!");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    });
  };
  return (
    <section>
      <h2 className={agencyFont.className}>
        Start your live audio career today
      </h2>
      <form
        onSubmit={handleSubmit}
        name='mentorship-contact-form'
        data-netlify-recaptcha='true'
        data-netlify='true'
        netlify-honeypot='bot-field'
        method='post'
        className={`${styles.form} ${agencyFont.className}`}
      >
        <div>
          <label id='name-label' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            maxLength={50}
            className={styles.formControl}
            placeholder='Please enter your name'
            required
          />
        </div>
        <div>
          <label id='email-label' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            maxLength={50}
            className={styles.formControl}
            placeholder='Please enter your email address'
            required
          />
        </div>
        <div style={{ display: "none" }}>
          <label htmlFor='bot-field'>
            I'm a robot: <input name='bot-field' />
          </label>
        </div>
        <div>
          <p>Briefly describe your audio experience</p>
          <textarea
            name='experience'
            placeholder='I make dope beats in Logic 😎'
            required
            maxLength={500}
          ></textarea>
        </div>
        <div>
          <p>What are you looking forward to learning?</p>
          <textarea
            name='goals'
            placeholder='I want to learn about different mixing consoles. What do all those buttons do anyway?! 🎤🎙️'
            required
            maxLength={500}
          ></textarea>
        </div>
        <div>
          <button id='submit' type='submit' className={styles.btn}>
            {pending ? `Loading...` : `Submit`}
          </button>
        </div>
      </form>
    </section>
  );
}
