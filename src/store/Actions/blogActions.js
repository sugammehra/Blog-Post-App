// export const addBlogPost = (blogPost) => {
//   return {
//     type: "ADD_BLOG_POST",
//     payload: blogPost,
//   };
// };

export const editBlogPost = (blogPost) => {
  return {
    type: "EDIT_BLOG_POST",
    payload: blogPost,
  };
};

export const deleteBlogPost = (id) => {
  return {
    type: "DELETE_BLOG_POST",
    payload: id,
  };
};

export const likeBlogPost = (id) => {
  return {
    type: "LIKE_BLOG_POST",
    payload: id,
  };
};
export const unlikeBlogPost = (id) => {
  return {
    type: "UNLIKE_BLOG_POST",
    payload: id,
  };
};
