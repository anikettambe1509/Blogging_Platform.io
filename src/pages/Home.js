import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ posts, deletePost }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            {/* Card Header */}
            <div className="p-4">
              <Link to={`/post/${post.id}`} className="text-xl font-bold text-blue-600 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
            </div>

            {/* Card Footer: Edit and Delete Buttons */}
            <div className=" px-4 py-2 flex justify-end space-x-4">
              <Link
                to={`/edit/${post.id}`}
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition"
              >
                Edit
              </Link>
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
