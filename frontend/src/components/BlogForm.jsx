
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const BlogForm = ({ editingPost, onFormSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {token}=useContext(AuthContext);

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingPost) {
        await axios.put(`http://localhost:5000/api/blog/update/${editingPost._id}`, { title, content },{
            headers: { Authorization: `Bearer ${token}` },
          });
      } else {
        await axios.post('http://localhost:5000/api/blog/create',{ title, content },{
            headers: { Authorization: `Bearer ${token}` },
          }, );

          setTitle('');
          setContent('');
      }
      onFormSubmit();
    } catch (error) {
      console.error('Failed to save post', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingPost ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default BlogForm;
