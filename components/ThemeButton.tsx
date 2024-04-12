// 'use client';
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from "./themeButton.module.css";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <span className={styles.tooltip}>{theme === "light" ? "Set Dark Mode" : "Set Light Mode"}</span>
    </div>
  );
}
