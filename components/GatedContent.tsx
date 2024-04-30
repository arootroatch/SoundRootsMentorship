"use client";

import { AuthContext } from "@/app/providers";
import React, {
  JSXElementConstructor,
  ReactElement,
  useContext,
  useEffect,
} from "react";
import styles from "@/components/gated.module.css";

export default function GatedContent({
  content,
}: {
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  const { user, login, authReady } = useContext(AuthContext);

  return (
    <div className={`${styles.main}  ${!user && styles.preview}`} id='main'>
      {!user && (
        <div className={styles.gated}>
          <div className={styles.gatedText}>
            <h3>This article is for students of the mentorship program only</h3>
            <span>
              Please <a onClick={() => login()}>login</a> or{" "}
              <a href='/#contact'>request access</a>
            </span>
          </div>
        </div>
      )}
      {authReady ? user ? content : <ContentPreview content={content} /> : null}
    </div>
  );
}

function ContentPreview({
  content,
}: {
  content: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
  useEffect(() => {
    const paragraphs = document
      .getElementById("main")
      ?.getElementsByTagName("p");
    console.log(paragraphs);

    if (paragraphs) {
      for (let i = 1; i < paragraphs.length; i++) {
        paragraphs[i].remove();
      }
    }
  }, []);
  return content;
}
