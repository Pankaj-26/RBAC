const express = require('express');
const router = express.Router();
const {login,signup,getMe}=require("../controller/authController.js");
const authMiddleware = require('../middleware/auth.js');


router.post("/signup",signup);
router.post("/login",login);
router.get("/me",authMiddleware,  getMe);

module.exports=router;