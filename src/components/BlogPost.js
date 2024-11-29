import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600 mt-2">{post.content}</p>
    </div>
  );
};

export default BlogPost;
