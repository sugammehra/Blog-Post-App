// src/components/EditBlogPost.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editBlogPost } from "../store/Actions/blogActions";
import "../css/EditBlogPost.css";

const EditBlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.blog.blogPosts);
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  const [author, setAuthor] = useState(blogPost.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: blogPost.id,
      title,
      content,
      author,
      likes: blogPost.likes,
    };
    dispatch(editBlogPost(updatedPost));
    navigate(`/`); // Navigate back to the home page
  };

  return (
    <div className="edit-post-container">
      <h2>Edit Post</h2>
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
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditBlogPost;
