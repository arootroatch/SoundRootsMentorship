"use client";

import { AuthContext } from "@/app/providers";
import React, {
  JSXElementConstructor,
  ReactElement,
  useContext,
  useEffect,
  useState,
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
        <div className={styles.gatedContent}>
          <h3>You need to be logged in to read this article</h3>
          <span>
            Please <a onClick={() => login()}>login</a> or{" "}
            <a href='/#contact'>request access</a>
          </span>
        </div>
      )}
      {!user && <div className={styles.gated}></div>}
      {authReady ? user ? content : <ContentPreview content={content} /> : null}
    </div>
  );
}

function ContentPreview(
  {content}: {content: ReactElement<any, string | JSXElementConstructor<any>>}
) {

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