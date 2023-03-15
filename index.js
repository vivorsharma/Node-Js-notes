// let http=require("http");
// http.createServer((req,res)=>{
//     res.write("hello ankeshghjufsug xik");
//     res.end();
// }).listen(12,()=>console.log("start server port no :3000"))

// let express=require("express");
// let app=express();
// let port=3000;
// app.get("/:n/:m",(req,res)=>{  
//       let myName=req.params.n
//      let age=req.params.m
    
//       res.send(`${myName} ${age}`);
// })

// app.listen(port,()=>console.log(`listening on port no:${port}`))


// const express = require("express");
// const app = express();

// app.get("",(req,resp)=>{
//     console.log("data sent by brow browser =>>>",req.query.name)
//     resp.send("welcome, this is a home page");

// })



// let express=require('express');
// let app=express();
// let port=3000;

// params
 
// app.get("/:a/:b/:c",(req,res)=>{
//   let {a,b,c}=req.params;
//   let myData=`${a} ${b}  ${c}`
// res.send(myData);
// console.log(myData);

// })

// app.get("/",(req,res)=>{
//     let result=req.query;
//     res.send(result);
//     console.log(result)
// })

// let server=app.listen(port,"127.0.0.1",()=>{
//   host=server.address().address;
//   port=server.address().port
//   console.log(`start server http://${host}:${port}`);
// })


// let express = require("express")
// let server = express();
// server.listen(1000,()=>
//       console.log("start server")
// )



// let fs=require("fs");
// fs.mkdirSync("vivhor");
// fs.writeFileSync("vivhor/code.text","hii vivhor how are you");
// fs.writeFileSync("vivhor/code.text","hii deepak how are you")

// fs.appendFileSync("vivhor/code.text","hii aman kya haal chal h")
// let buffer = fs.readFileSync("vivhor/code.text","utf-8");
// console.log(buffer);


// fs.copyFileSync("ankesh/ank.text","deepak/an.text")

// fs.renameSync("ankesh/ank.text","ankesh/data.text");
// fs.renameSync("ankesh","rajesh");
// fs.unlinkSync("rajesh/data.text");
// fs.rmdirSync("rajesh");
// let a=fs.fchmod();
// console.log(a)


// let express=require('express');
// // let bodyParser = require("body-parser")
// let fs=require("fs");
// let app=express();
// // app.use(bodyParser.json());
// app.use(express.urlencoded({extended:false}));

// let port=3000;




// app.get("/",(req,res)=>{5
//     res.send("hello")
//     res.write("hello \n");
//     res.write("deepak");
//     res.end();

// })

// app.get("/:name",(req,res)=>{
//      res.send(req.params.name)
// })
// app.get("/",(req,res)=>{
//     res.send(req.query)
// })







// app.get("/:a/:b/:c",(req,res)=>{
//       let {a,b,c}=req.params;
//   let myData=`${a} ${b}  ${c}`
// res.send(myData);-+

// console.log(myData);

// })

// app.get("/",(req,res)=>{
//         let result=req.query;
//         res.send(result);
//         console.log(result)
//     })



// app.post("/register",(req,res)=>{

// let result=req.body
// let data={
//     name:result.name,
//     age:result.age,
//     phone:result.mobile
// };
// if(`${data.name}`){
//     fs.mkdirSync(`${data.name}`);
//     // fs.writeFileSync("rajesh/rajesh.json","")
// }
// let a=JSON.stringify(data)
// if(`${data.name}/${data.name}.json`){
//   fs.appendFile(`${data.name}/${data.name}.json`,`${a}, \n`,()=>{
//     res.send("data add");
//   })
// }

// });



// let server=app.listen(port,"127.0.0.1",()=>{
//   host=server.address().address;
//   port=server.address().port
//   console.log(`start server http://${host}:${port}`);
// }) 







// let express=require("express");
// let server=express();
// server.listen(1000,()=>console.log("strat server..."))



// let fs=require("fs");
// let path = require("path");

// fs.mkdir(path.join(__dirname,'rajesh'),
// {recursive:true},(err)=>{
// if (err){
//     return console.log(err);
// }
// console.log('Directory created Successfully')
// });

// let data = "hey Rajesh How are you"

// fs.writeFile("rajesh/rajesh.text",data,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file Written successfully/n");
//         console.log("the Written has the followingcontent");
//         console.log(fs.readFileSync("rajesh.text","utf8"))
//     }
// })


// fs.mkdirSync("deepak");
// fs.writeFileSync("ankesh/ank.text","hii deepak kese ho");
// fs.writeFileSync("ankesh/ank.text","hii rajesh kese ho");

// fs.appendFileSync("ankesh/ank.text"," hii aman kya hal hai");
// let buffer=fs.readFileSync("ankesh/ank.text","utf-8");
// console.log(buffer);

// fs.copyFileSync("ankesh/ank.text","deepak/an.text")

// fs.renameSync("ankesh/ank.text","ankesh/data.text");
// fs.renameSync("ankesh","rajesh");
// fs.unlinkSync("rajesh/data.text");
// fs.rmdirSync("rajesh");

// let a=fs.fchmod();
// console.log(a)

// let fs=require('fs');
// fs.mkdir("ankesh1",()=>console.log("folde created..."))
// fs.readFile("rajesh/rajesh.text","utf-8",(err,data)=>{
//       if(err)throw err
//       console.log(data)
// })



