import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blog/");
        setPosts(res.data || []); 
      
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center mt-10 text-xl">No posts available yet!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post._id} className="p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="text-gray-500 text-sm">
              Posted by {post.author?.name || "Unknown"} on {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
