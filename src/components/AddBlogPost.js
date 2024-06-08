// src/components/AddPost.js

import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlogPost } from "../store/Actions/blogActions";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import "../css/AddBlogPost.css";

const AddPost = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const blogPosts = useSelector((state) => state.blog.blogPosts);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const { blogPosts, addBlogPost } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: blogPosts.length ? blogPosts[blogPosts.length - 1].id + 1 : 1,
      title,
      content,
      author,
      likes: 0,
    };
    // dispatch(addBlogPost(newPost));
    console.log(newPost);
    addBlogPost(newPost);
    navigate("/");

    // setTitle("");
    // setContent("");
    // setAuthor("");
    // history.push("/");
  };

  return (
    <div className="add-post-container">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
