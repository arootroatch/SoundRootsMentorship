"use client";
import React, { useEffect } from "react";
import styles from "@/app/learn/learn.module.css";
import ShareLinks from "./ShareLinks";
import addIdToH2Elements from "@/lib/addIdToH2Elements";
import addH2LinksToSidebar from "@/lib/addH2LinksToSidebar";

export default function PostSidebar({ pageURL }: { pageURL: string }) {
  useEffect(() => {
    const h2Elements = Array.from(document.getElementsByTagName("h2"));
    const sidebar = document.getElementById("sidebar");
    addIdToH2Elements(h2Elements);
    addH2LinksToSidebar(h2Elements, sidebar);
  }, []);
  return (
    <div className={styles.sidebar} id='sidebar'>
      <ShareLinks pageURL={pageURL} />
      <h4>In this article: </h4>
    </div>
  );
}