const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.js');
const blogRoutes = require('./routes/blog.js');
const connection = require('./config/db.js');


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());


app.use("/api/auth",authRoutes);
app.use("/api/blog",blogRoutes);

const PORT = process.env.PORT || 5000;


connection();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})