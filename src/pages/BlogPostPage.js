import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const BlogPostPage = ({ posts, deletePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found!</p>;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(post.id);
      navigate('/');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-700">{post.content}</p>
      <div className="mt-4 flex space-x-2">
        <Link
          to={`/edit/${post.id}`}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogPostPage;
