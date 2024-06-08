// src/components/Home.js
import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlogPost } from "../store/Actions/blogActions";
import { likeBlogPost, unlikeBlogPost } from "../store/Actions/blogActions";
import { BlogContext } from "../context/BlogContext";
import "../css/Home.css";

//REACT REDUX
const Home = () => {
  const blogPosts = useSelector((state) => state.blog.blogPosts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlogPost(id));
    console.log(id);
  };
  const handleLikes = (post) => {
    if (post.likes > 0) {
      dispatch(unlikeBlogPost(post.id));
    } else {
      dispatch(likeBlogPost(post.id));
    }
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>Blog Posts</h1>
        <Link to="/add-post">
          <button className="create-button">Create New Blog</button>
        </Link>
      </div>
      <ul className="blog-list">
        {blogPosts.map((post) => (
          <li key={post.id} className="blog-post-card">
            <div className="blog-post-content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p id="author">By {post.author}</p>
            </div>
            <div className="blog-post-options">
              <Link to={`/blog/${post.id}`}>
                <button>View Blog</button>
              </Link>
              <Link to={`/edit/${post.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              {/* make toggle button like unlike */}
              <button onClick={() => handleLikes(post)}>
                {post.likes > 0 ? "Unlike" : "Like"}
              </button>
            </div>
            {/* <div className="like-count">
              <h3>Likes: {post.likes}</h3>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
