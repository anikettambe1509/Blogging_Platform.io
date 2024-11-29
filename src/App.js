import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPostPage from './pages/BlogPostPage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';

function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts
      ? JSON.parse(savedPosts)
      : [
          {
            id: 1,
            title: 'My First Blog Post',
            excerpt: 'This is a short description of my first post.',
            content: 'This is the detailed content of my first blog post.',
          },
          {
            id: 2,
            title: 'Learning React.js',
            excerpt: 'How I got started with React.js.',
            content: 'React.js is a powerful JavaScript library for building UI.',
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // Add new post
  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  // Update post
  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  // Delete post
  const deletePost = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home posts={posts} deletePost={deletePost} />} />
            <Route
              path="/post/:id"
              element={<BlogPostPage posts={posts} deletePost={deletePost} />}
            />
            <Route path="/create" element={<CreatePostPage addPost={addPost} />} />
            <Route
              path="/edit/:id"
              element={<EditPostPage posts={posts} updatePost={updatePost} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

