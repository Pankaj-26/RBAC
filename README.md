# RBAC
 
# Description

This project is a Blog Platform built using React, Node.js, Express.js, and MongoDB. It implements Role-Based Access Control (RBAC), where users can create, read, update, and delete blog posts based on their roles. Admins have full control over the posts, while Users can only read posts. The platform also includes authentication using JWT (JSON Web Tokens).


# Table of Contents

1.Installation

2.Usage

3.API Endpoints

4.Contributing

5.Acknowledgements



# Installation

### Prerequisites

Before running the application, ensure you have the following installed on your machine:

- Node.js (LTS version): Download and install Node.js

- MongoDB: Download and install MongoDB.



### Steps to Set Up Locally

#### 1. Clone the repository
   
- Clone this repository to your local machine:

- git clone https://github.com/your-username/blog-platform.git

cd blog-platform


#### 2. Set up the Backend

- Navigate to the backend directory:

cd backend


- Install backend dependencies:

npm install


- Create a .env file in the backend directory with the following content:

JWT_SECRET_KEY=your_jwt_secret_key

MONGO_URI=mongodb://localhost:27017/blog-platform


JWT_SECRET_KEY: A secret key for JWT authentication. You can generate any random string for this key.

MONGO_URI: The connection string for your MongoDB database.



- Start the backend server:

npm start


### 3. Set up the Frontend

- Navigate to the frontend directory:

cd ../frontend


### Install frontend dependencies:

npm install



### Start the frontend development server:

npm start

The frontend will run on http://localhost:5173.




# Usage

- Once both the frontend and backend servers are running:

- Sign up a new user (Admin or User) to get started.

- Login using your credentials to access the platform.

- Create, Read, Update, and Delete blog posts depending on your user role.

- Access the Admin Dashboard if your role is Admin.



# API Endpoints

 ### Authentication Routes

- #### POST /api/auth/signup: Create a new user

Request body:

{

  "name": "John Doe",
  
  "email": "john.doe@example.com",
  
  "password": "password123",
  
  "role": "user"
  
}




- ##### POST /api/auth/login: Login to get a JWT token

Request body:

{

  "email": "john.doe@example.com",
  
  "password": "password123"
  
}




#### Post Routes (for Admin and User)

- ##### GET /api/blog/: Get all blog posts

- ##### POST /api/blog/create: Create a new blog post (Admin only)

Request body:

{

  "title": "My First Blog Post",
  
  "content": "This is the content of the blog post."
  
}


- ##### PUT /api/blog/update/:id: Update a blog post (Admin only)

Request body:

{

  "title": "Updated Title",
  
  "content": "Updated content of the blog post."
  
}

- ##### DELETE /api/blog/delete/:id: Delete a blog post (Admin only)






# Project Architecture & Flow Documentation

### Architecture Overview

#### This project follows a MERN Stack architecture:

- Frontend: React.js

- Backend: Node.js + Express.js

- Database: MongoDB (using Mongoose ORM)

- Authentication: JWT (JSON Web Tokens)

- Authorization: Role-Based Access Control (RBAC)

- API Communication: Axios (HTTP client)

### The frontend and backend communicate over RESTful APIs.
#### Security is handled via token-based authentication and route protection based on user roles (admin, user).

# Folder Structure


- ### /frontend

  /src
  
    /components
    
    /pages
    
    /context

   /routes
    
    App.jsx
    
    main.jsx
    
  package.json

- ### /backend

  /controller
  
  /models
  
  /routes
  
  /middleware

  /config
  
  server.js
  
  package.json
  
# Application Flow

### 1. 🧍 User Signup / Login
   
- New users sign up by providing their name, email, and password.

- On successful signup:

- Password is hashed using bcrypt.

- A user document is created in MongoDB with default role user.

### During login:

- Credentials are verified.

- A JWT token is generated and sent to the client.

### 2. 🔒 Authentication & Authorization

- JWT Token is stored on the client side (like in localStorage or memory).

- Every protected API request requires a valid token in the headers.

- Protected Routes:

#### Some pages are restricted based on user role (admin vs user).

#### Unauthorized access redirects to /login or /.

### 3. 📝 Blog Post Management

- Admin can Create, Edit, Delete posts.

- Normal users can View posts.

- Blog posts are fetched from the backend API and displayed on the frontend.

### 4. 🛡️ Security Measures

- Passwords are never stored in plain text (only hashed).

- Routes are protected using:

- Authentication Middleware (checks valid token).

- Authorization Middleware (checks user role).

# ⚡ Tech Stack Summary

- Frontend	React.js, Tailwind CSS
- 
- Backend	Node.js, Express.js
- 
- Database	MongoDB + Mongoose
- 
- Authentication	JWT, bcrypt

# 🎯 Conclusion

This project ensures a clean separation between frontend and backend, secure authentication, and proper role-based access control.
It is designed to be scalable, secure, and easy to extend with new features.





