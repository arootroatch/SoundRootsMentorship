// 'use client'
import React from "react";
import { useCombobox } from "downshift";
import { Posts } from "@/lib/interfaces";
import styles from "./searchBar.module.css";
import { SearchBarParams } from "@/lib/interfaces";
import Fuse from "fuse.js";

export default function SearchBar({ posts, searchOpen }: SearchBarParams) {
  const [inputItems, setInputItems] = React.useState(posts);
  const fuse = new Fuse(posts, {
    keys: ["data.title", "data.category"],
  });

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      let search = fuse.search(inputValue);
      let searchResults = search.map((result) => result.item);
      setInputItems(searchResults);
    },
  });
  return (
    <div
      className={`${styles.searchBar} ${searchOpen && styles.openSearch} ${
        isOpen && styles.openSearchAndList
      }`}
    >
      {/* <label {...getLabelProps()}>Choose an element:</label> */}
      <div className={styles.inputWrapper}>
        <input
          {...getInputProps()}
          placeholder='Search for an article'
          className={styles.input}
        />
        {/* <button
          type='button'
          {...getToggleButtonProps()}
          aria-label='toggle menu'
        >
          &#8595;
        </button> */}
      </div>
      <ul
        {...getMenuProps()}
        className={`${styles.list} ${isOpen && styles.openList}`}
      >
        {inputItems.map((item, index) => (
          <li
            style={
              highlightedIndex === index ? { backgroundColor: "#bde3ff3f" } : {}
            }
            key={`${item}${index}`}
            {...getItemProps({ item, index })}
            className={styles.listItem}
          >
            <a href={`/learn/${item.filePath.replace(/\.mdx?$/, "")}`}>
              <div>{item.data.title}</div>
              <div className={styles.category}>{item.data.category}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
