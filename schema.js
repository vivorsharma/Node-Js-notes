let mongoose=require("mongoose");
let userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    mobile:Number,
    email:String,
})

let userModel=mongoose.model("user",userSchema,"user");

module.exports=userModel;