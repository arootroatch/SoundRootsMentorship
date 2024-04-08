
import React, { useState } from "react";
import { useCombobox } from "downshift";
import styles from "./searchBar.module.css";
import { SearchBarParams } from "@/lib/interfaces";
import Fuse from "fuse.js";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ posts }: SearchBarParams) {
  const [inputItems, setInputItems] = React.useState(posts);
  const fuse = new Fuse(posts, {
    keys: ["data.title", "data.category"],
  });

  const [searchOpen, setSearchOpen] = useState(false);

  function toggleSearch() {
    setSearchOpen(!searchOpen);
  }

  function clearInputAndCloseMenu() {
    selectItem(null);
    closeMenu();
  }

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    closeMenu
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      let search = fuse.search(inputValue);
      let searchResults = search.map((result) => result.item);
      setInputItems(searchResults);
    },
  });
  return (
    <div className={styles.searchBarWrapper}>
      <IoIosSearch className={styles.search} onClick={toggleSearch} />
      <div
        className={`${styles.searchBar} ${searchOpen && styles.openSearch} ${
          isOpen && styles.openSearchAndList
        }`}
      >
        <div className={styles.inputWrapper}>
          <input
            {...getInputProps()}
            placeholder='Search for an article'
            className={styles.input}
          />
        </div>
        <ul
          {...getMenuProps()}
          className={`${styles.list} ${isOpen && styles.openList}`}
        >
          {inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index
                  ? { backgroundColor: "#bde3ff3f" }
                  : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              className={styles.listItem}
              onClick={clearInputAndCloseMenu}
            >
              <Link onClick={toggleSearch} href={`/learn/${item.filePath.replace(/\.mdx?$/, "")}`}>
                <div>{item.data.title}</div>
                <div className={styles.category}>{item.data.category}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
