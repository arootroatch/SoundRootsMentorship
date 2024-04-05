// 'use client'
import React from "react";
import { useCombobox } from "downshift";
import { Posts } from "@/lib/interfaces";


export default function SearchBar({ posts }: { posts: Posts[] }) {
  const [inputItems, setInputItems] = React.useState(posts);

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
      setInputItems(
        posts.filter((post) =>
          post.data.title.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });
  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <div>
        <input {...getInputProps()} />
        <button
          type='button'
          {...getToggleButtonProps()}
          aria-label='toggle menu'
        >
          &#8595;
        </button>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              <span>{item.data.title}</span>
              <span>{item.data.category}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
