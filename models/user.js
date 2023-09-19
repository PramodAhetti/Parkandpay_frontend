const db=require('mongoose');
const Schema = db.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  college:String,
  password:String
});

const User = db.model('User', userSchema);
module.exports=User;