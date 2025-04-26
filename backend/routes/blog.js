const express=require('express');
const router=express.Router();
const {createPost,getPost,updatePost,deletePost}=require("../controller/blogController.js");
const auth=require('../middleware/auth.js');
const role=require('../middleware/role.js');

router.get("/",getPost);
router.post("/create",auth,role(["admin"]),createPost);
router.put("/update/:id",auth,role(["admin"]),updatePost);
router.delete("/delete/:id",auth,role(["admin"]),deletePost);

module.exports=router; 