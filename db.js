// const { response } = require("express");
// let express=require("express");
// let app=express();
// let mongoose=require("mongoose");
// let userModel=require("./schema")
// mongoose.connect("mongodb://127.0.0.1:27017/akdb");
// mongoose.connection.once("open",()=>console.log("db is connected...."));
// mongoose.connection.on("error",()=>console.log("db is not connected.."))
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(express.text());
// // app.post("/add",async(req,res)=>{

// const { appendFile } = require("fs");

    

// app.get("/find",async(req,res)=>{
//       let result=await userModel.findOne();
//       res.send(result);
//       console.log(result)
//     })

// app.post("/findss",async(req,res)=>{
//     let result=await userModel.find({age:req.body.age});
//     console.log(result)
//     res.send(result)
// })
// app.post("/finds1",async(req,res)=>{
//     let result=await userModel.findOne({age:req.body.age});
//     console.log(result)
//     res.send(result)
// })

// app.patch("/update",async(req,res)=>{
//    let result= await userModel.find({age:req.body.age});
//    if(result){
//     let up= await userModel.deleteOne({
//         $set:{
//             name:req.body.name,
//             age:req.body.age,
//             mobile:req.body.mobile

//         }
//     })
//    }
// })

//middleware
    //  let result=await userModel.create({name,age,mobile,email}=req.body);
    //  res.send(result);
// })

// app.listen(3000,()=>console.log("server start"));



// app.post("/add",async(req,res)=>{
//     let result = await userModel.findOne();
//     res.send()
//     console.log(result)
// })

// app.post("/register",async(req,res)=>{
//     let result = req.body
//     let data = await
//     userModel.create(result)
//     res.send(data)
// })



// app.delete("/delete",async(req,res)=>{
//     let deleteData= await userModel.deleteOne({age:req.body.age})
//     console.log(deleteData);
//     res.send(deleteData)
    
// })

// app.listen(3000,()=>console.log("server start"));