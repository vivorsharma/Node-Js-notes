let express=require("express");
let app=express();
let mongoose=require("mongoose");
let userModel=require("./schema")
mongoose.connect("mongodb://127.0.0.1:27017/akdb");
mongoose.connection.once("open",()=>console.log("db is connected...."));
mongoose.connection.on("error",()=>console.log("db is not connected.."))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.text());
app.use(express.static(__dirname));


app.get("/login",(req,res)=>{
res.sendFile(__dirname+"/index.html");
})

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})


// app.post("/login",async(req,res)=>{
//     let result=await userModel.findOne({email:req.body.email})
//     if(result){
//         res.send("your login")
//     }else{
//         res.send("user is not login")
//     }
// })

app.post("/login",async(req,res)=>{
    let result=await userModel.findOne({email:req.body.email})
    console.log(result)
    if(result){
        res.redirect("/about.html")
    }else{
        res.redirect("/login")
    }
})


app.post("/register",async(req,res)=>{
    if(req.body.password == req.body.password){
        let result = await userModel.create({email:req.body.email,name:req.body.name,password:req.body.password});
         console.log(result);
         res.redirect("/login") 
    }else{
        console.log("password did not match");
        res.redirect("/register")
    }
})


app.listen(4000,()=>{
    console.log("start server")
})



