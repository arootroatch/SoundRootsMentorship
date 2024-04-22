"use client";
import React, { useRef } from "react";
import styles from "./contact.module.css";
import postToDbAndEmail from "@/actions/postToDbAndEmail";
import { useState } from "react";
import DividerNL4 from "../DividerNL4";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  // @ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) {
      alert(`Please complete the captcha`);
      return;
    }
    
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    formData.append("token", token);
    setPending(true);

    if (formData.get("bot-field")) {
      alert(
        "You appear to be a bot. Please unplug from the matrix and try again."
      );
      return;
    }

    await postToDbAndEmail(formData).then((res) => {
      setPending(false);
      captchaRef.current?.resetCaptcha();
      if (res.statusCode === 200) {
        alert("Thank you for your submission!");
      } else {
        alert(res.body || "Something went wrong");
      }
    });
  };

  return (
    <section className={styles.contact} id='contact'>
      <DividerNL4 />
      <h2>Start your live audio career today</h2>
      <form
        onSubmit={handleSubmit}
        name='mentorship-contact-form'
        data-netlify-recaptcha='true'
        data-netlify='true'
        netlify-honeypot='bot-field'
        method='post'
        className={`${styles.form} `}
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
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
          onVerify={(token) => setToken(token)}
          ref={captchaRef}
        />
        <br />
        <div>
          <button id='submit' type='submit' className='btn'>
            {pending ? (
              <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              `Submit`
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
