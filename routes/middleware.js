const jwt=require("jsonwebtoken");
const userauth=async (req,res,next)=>{
     const userid=await jwt.verify(req.body.token,process.env.SECRETKEY);  
     console.log(userid);
     next();
    }
module.exports=userauth;