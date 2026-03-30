import express from 'express';
const app=express();
app.set("view engine","ejs")
  app.get("/",(req,res)=>{
    res.render("index");
  })
  app.get("/user",(req,res)=>{
   let userData={
    name:"mahak",
    age:"21"
   } 
 res.render("user",{userData});
  })

  app.get("/list",(req,res)=>{
    let arr=["apple","banana","guava"]
    res.render("list",{arr});
  })

  app.listen(3000,()=>{
    console.log("server is running on port 3000");
  })
