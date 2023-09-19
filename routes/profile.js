const express=require('express');
const app=express.Router();
app.get('/new',(req,res)=>{
    res.send("profile new route")
})
module.exports=app;