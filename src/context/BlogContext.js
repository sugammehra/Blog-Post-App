// src/context/BlogContext.js
import React, { createContext, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Understanding React Hooks",
      content:
        "React Hooks are functions that let you use state and other React features without writing a class...",
      author: "John Doe",
      likes: 0,
    },
    {
      id: 2,
      title: "A Guide to Redux",
      content:
        "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently...",
      author: "Jane Smith",
      likes: 0,
    },
    {
      id: 3,
      title: "Getting Started with TypeScript",
      content:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type-checking along with the latest JavaScript features...",
      author: "Emily Johnson",
      likes: 0,
    },
    {
      id: 4,
      title: "CSS Grid Layout",
      content:
        "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, making complex layouts easier to create...",
      author: "Michael Brown",
      likes: 0,
    },
    {
      id: 5,
      title: "Mastering JavaScript ES6",
      content:
        "ES6 brought many significant changes to JavaScript. This article covers the key features introduced in ES6, such as arrow functions, classes, template literals...",
      author: "Sarah Wilson",
      likes: 0,
    },
  ]);

  const addBlogPost = (newPost) => {
    setBlogPosts([...blogPosts, newPost]);
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
