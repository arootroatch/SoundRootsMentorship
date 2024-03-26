

import React from "react";
import { agencyFont } from "@/lib/fonts";
import styles from "./contact.module.css";

export default function Contact() {

  return (
    <section>
      <h2 className={agencyFont.className}>
        Start your live audio career today
      </h2>
      <form
        action='/hiddenForm.html'
        name='mentorship-contact-form'
        data-netlify-recaptcha='true'
        data-netlify='true'
        netlify-honeypot='bot-field'
        method='post'
        className={`${styles.form} ${agencyFont.className}`}
      >
        <input type="hidden" name="form-name" value="mentorship-contact-form" />
        <div >
          <label id='name-label' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className={styles.formControl}
            placeholder='Please enter your name'
            required
          />
        </div>
        <div >
          <label id='email-label' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
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
        <div >
          <p>Briefly describe your audio experience</p>
          <textarea
            name='experience'
            placeholder='I make dope beats in Logic 😎'
            required
          ></textarea>
        </div>
        <div >
          <p>What are you looking forward to learning?</p>
          <textarea
            name='goals'
            placeholder='I want to learn about different mixing consoles. What do all those buttons do anyway?! 🎤🎙️'
            required
          ></textarea>
        </div>
        {/* <div
          data-netlify-recaptcha='true'
        ></div> */}
        <div >
          <button id='submit' type='submit' className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
