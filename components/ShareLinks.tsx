"use client";
import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import styles from "./shareLinks.module.css";

export default function ShareLinks({ pageURL }: { pageURL: string }) {
  return (
    <div className={styles.share}>
      <EmailShareButton url={pageURL}>
        <EmailIcon size={32} round />
      </EmailShareButton>

      <FacebookShareButton url={pageURL} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={pageURL} >
        <XIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={pageURL} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <RedditShareButton url={pageURL} >
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}
