import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  const { login,token } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [role, setRole] = useState('user');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { name,email, password,role });
      login(response.data.token);  
      if(response.data.user.role === 'admin') {
        navigate('/dashboard'); 
      }else{

          navigate('/'); 
      } 
    } catch (err) {
      setError('Failed to sign up');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl mb-4">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="name" className="block">Name</label>
          <input
            type="string"
            id="name"
            className="w-full p-2 mt-1 border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mt-1 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 mt-1 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block">Role</label>
          <select
            id="role"
            className="w-full p-2 mt-1 border"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;


