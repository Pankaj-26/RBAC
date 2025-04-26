import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BlogPostCard from '../components/BlogPostCard';
import BlogForm from '../components/BlogForm';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
const {token}=useContext(AuthContext);

  const getPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog");
      setPosts([res.data]);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blog/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }});
      
    getPosts();

    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

 
  const handleEdit = (post) => {
    setEditPost(post);
  };

 
  const handleSubmit = () => {
    getPosts();
    setEditPost(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

    
      <BlogForm editingPost={editPost} onFormSubmit={handleSubmit} />

    
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <BlogPostCard
            key={post._id}
            posts={post}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
