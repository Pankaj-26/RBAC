# RBAC
 
Description
This project is a Blog Platform built using React, Node.js, Express.js, and MongoDB. It implements Role-Based Access Control (RBAC), where users can create, read, update, and delete blog posts based on their roles. Admins have full control over the posts, while Users can only read posts. The platform also includes authentication using JWT (JSON Web Tokens).


Table of Contents

1.Installation
2.Usage
3.API Endpoints
4.Contributing
5.Acknowledgements


Installation
Prerequisites
Before running the application, ensure you have the following installed on your machine:

Node.js (LTS version): Download and install Node.js
MongoDB: Download and install MongoDB.

Steps to Set Up Locally
1. Clone the repository
Clone this repository to your local machine:

git clone https://github.com/your-username/blog-platform.git
cd blog-platform


2. Set up the Backend
Navigate to the backend directory:
cd backend


Install backend dependencies:
npm install


Create a .env file in the backend directory with the following content:

JWT_SECRET_KEY=your_jwt_secret_key
MONGO_URI=mongodb://localhost:27017/blog-platform


JWT_SECRET_KEY: A secret key for JWT authentication. You can generate any random string for this key.
MONGO_URI: The connection string for your MongoDB database.


Start the backend server:
npm start


3. Set up the Frontend
Navigate to the frontend directory:

cd ../frontend


Install frontend dependencies:

npm install

Start the frontend development server:

npm start
The frontend will run on http://localhost:5173.


Usage
Once both the frontend and backend servers are running:
Sign up a new user (Admin or User) to get started.
Login using your credentials to access the platform.
Create, Read, Update, and Delete blog posts depending on your user role.
Access the Admin Dashboard if your role is Admin.


API Endpoints
Authentication Routes
POST /api/auth/signup: Create a new user

Request body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "user"
}




POST /api/auth/login: Login to get a JWT token

Request body:
{
  "email": "john.doe@example.com",
  "password": "password123"
}




Post Routes (for Admin and User)
GET /api/posts: Get all blog posts

POST /api/blog/create: Create a new blog post (Admin only)

Request body:

{
  "title": "My First Blog Post",
  "content": "This is the content of the blog post."
}
PUT /api/blog/update/:id: Update a blog post (Admin only)

Request body:

{
  "title": "Updated Title",
  "content": "Updated content of the blog post."
}
DELETE /api/blog/delete/:id: Delete a blog post (Admin only)



Acknowledgements
React: Frontend framework.
Node.js: Backend runtime environment.
Express.js: Web framework for Node.js.
MongoDB: Database for storing user data and blog posts.
JWT: Authentication using JSON Web Tokens.
