import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./learnReact.js";
import Navbar from "./components/Navbar";
import Home from "./components/home.js";
import AddPost from "./components/AddBlogPost.js";
import BlogDetails from "./components/ViewBlogPost.js";
import EditBlogPost from "./components/EditBlogPost.js";
import { BlogProvider } from "./context/BlogContext";

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit/:id" element={<EditBlogPost />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
