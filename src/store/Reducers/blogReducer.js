const initialState = {
  blogPosts: [
    {
      id: 1,
      title: "Understanding React Hooks",
      content:
        "React Hooks are functions that let you use state and other React features without writing a class. They enable you to add React state and lifecycle features to function components. With hooks, you can reuse stateful logic across components without changing the component hierarchy.",
      author: "Sugam Mehra",
      likes: 0,
    },
    {
      id: 2,
      title: "A Guide to Redux",
      content:
        "edux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. It provides a centralized store for state management, allowing you to manage the entire state of your application in one place.",
      author: "Sugam Mehra",
      likes: 0,
    },
    {
      id: 3,
      title: "Getting Started with Context API",
      content:
        "The Context API is a feature in React that allows you to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered global for a tree of React components",
      author: "Sugam Mehra",
      likes: 0,
    },
    {
      id: 4,
      title: "CSS Grid Layout",
      content:
        "CSS Grid Layout is a two-dimensional layout system for the web. It lets you layout items in rows and columns, making complex layouts easier to create...",
      author: "John ",
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
  ],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_BLOG_POST":
    //   return {
    //     ...state,
    //     blogPosts: [...state.blogPosts, action.payload],
    //   };

    case "EDIT_BLOG_POST":
      const updatedPosts = state.blogPosts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      return {
        ...state,
        blogPosts: updatedPosts,
      };

    case "DELETE_BLOG_POST":
      const filteredPosts = state.blogPosts.filter(
        (post) => post.id !== action.payload
      );
      return {
        ...state,
        blogPosts: filteredPosts,
      };

    case "LIKE_BLOG_POST":
      const likedPosts = state.blogPosts.map((post) =>
        post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
      );
      return {
        ...state,
        blogPosts: likedPosts,
      };
    case "UNLIKE_BLOG_POST":
      const unlikedPosts = state.blogPosts.map((post) =>
        post.id === action.payload ? { ...post, likes: post.likes - 1 } : post
      );
      return {
        ...state,
        blogPosts: unlikedPosts,
      };

    default:
      return state;
  }
};

export default blogReducer;
