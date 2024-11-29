import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border-b p-4">
          <Link to={`/post/${post.id}`} className="text-xl font-bold">{post.title}</Link>
          <p className="text-gray-600">{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
