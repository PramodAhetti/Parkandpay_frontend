const express=require('express');
const app=express.Router();
const auth_user=require("./middleware");

app.post('/new',auth_user,(req,res)=>{
    res.send("hi")
})
module.exports=app;