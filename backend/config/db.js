const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const MONGO_URL=process.env.MONGO_URL;


const connection= async()=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error connecting to MongoDB",err.message);
    }
}


module.exports=connection;