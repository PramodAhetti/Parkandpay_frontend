
const express=require('express');
const db=require('mongoose');
const morgan=require('morgan');
const app=express();
require('dotenv').config();


//display routes hit
app.use(morgan('dev'));


//connection database
db.connect(process.env.DB_URI);


//body parser 
app.use(express.json());

//routes
app.get('/check',(req,res)=>{
    res.send("hi this a api or connecting with people around you");
})


app.use('/user',require('./routes/user'));
app.use('/find',require('./routes/find'));

const PORT=5000;
app.listen(PORT,()=>{
    console.log('server start at port:',PORT)
})