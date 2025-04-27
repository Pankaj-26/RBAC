import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogPostCard = ({ posts, onDelete, onEdit }) => {

  const [loading, setLoading] = useState(true);

console.log(posts)


  if (!posts && loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center mt-10 text-xl">No posts available yet!</div>;
  }

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content.substring(0, 500)}...</p>
            <div className="text-gray-500 text-sm mb-4">
              Posted by {post.author?.name || "Unknown"} on {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div className="flex justify-between">
              <button
                className="bg-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-600 transition duration-300"
                onClick={() => onEdit(post)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300"
                onClick={() => onDelete(post._id)}
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

export default BlogPostCard;
