# React Blog Post Application

This is a React-based Blog Post application that allows users to add, view, edit, and delete blog posts. It also supports liking and unliking blog posts. The application uses Redux for state management to ensure a predictable and centralized state.

## Features

- **Home Page**: Displays a list of blog posts with options to view, edit, delete, and like/unlike each post.
- **Add Blog Post**: Allows users to create a new blog post by providing a title, content, and author name.
- **View Blog Post**: Displays the details of a selected blog post with options to go back or edit the post.
- **Edit Blog Post**: Allows users to edit the details of an existing blog post.
- **Delete Blog Post**: Allows users to delete a blog post.
- **Like/Unlike Blog Post**: Allows users to like and unlike a blog post with a toggle button.
- **Navbar**: Persistent navigation bar available on all pages.

## Technologies Used

- React
- Redux
- React Router

## Project Structure

- `src/`
  - `components/`
    - `Home.js`: Displays the list of blog posts.
    - `AddBlogPost.js`: Form to add a new blog post.
    - `ViewBlogPost.js`: Displays the details of a selected blog post.
    - `EditBlogPost.js`: Form to edit an existing blog post.
    - `Navbar.js`: Navigation bar component.
  - `css/`
    - `Home.css`: Styles for the Home component.
    - `AddBlogPost.css`: Styles for the AddBlogPost component.
    - `ViewBlogPost.css`: Styles for the ViewBlogPost component.
    - `EditBlogPost.css`: Styles for the EditBlogPost component.
  - `store/`
    - `Actions/`
      - `blogActions.js`: Redux action creators for blog posts.
    - `Reducers/`
      - `blogReducer.js`: Redux reducer for blog posts.
      - `index.js`: Combines all reducers.
    - `store.js`: Redux store configuration.
  - `context/`
    - `BlogContext.js`: Conetxt action for adding new blog posts.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.

## Redux Implementation

### Reducer (blogReducer.js)

Handles the following action types:

- `ADD_BLOG_POST`
- `EDIT_BLOG_POST`
- `DELETE_BLOG_POST`
- `LIKE_BLOG_POST`
- `UNLIKE_BLOG_POST`

### Store (store.js)

Combines reducers and creates the Redux store with support for Redux DevTools.

## Context Implementation
