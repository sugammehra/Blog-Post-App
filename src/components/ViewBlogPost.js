// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "../css/ViewBlogPost.css";

// const ViewBlogPost = () => {
//   const { id } = useParams();
//   const blogPosts = useSelector((state) => state.blog.blogPosts);
//   const blogPost = blogPosts.find((post) => post.id === parseInt(id));

//   if (!blogPost) {
//     return <div>Blog post not found</div>;
//   }

//   return (
//     <div>
//       <h1>{blogPost.title}</h1>
//       <p>{blogPost.content}</p>
//       <p>
//         <i>By {blogPost.author}</i>
//       </p>
//       <div className="like-count">Likes: {blogPost.likes}</div>
//       <div>
//         <Link to={`/`}>
//           <button>Back</button>
//         </Link>
//         <Link to={`/edit/${blogPost.id}`}>
//           <button>Edit</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ViewBlogPost;
// src/components/ViewBlogPost.js

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/ViewBlogPost.css";

const ViewBlogPost = () => {
  const { id } = useParams();
  const blogPosts = useSelector((state) => state.blog.blogPosts);
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="view-post-container">
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
      <p>
        <i>By {blogPost.author}</i>
      </p>
      <div className="like-count">Likes: {blogPost.likes}</div>
      <div className="button-container">
        <Link to={`/`}>
          <button>Back</button>
        </Link>
        <Link to={`/edit/${blogPost.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewBlogPost;
