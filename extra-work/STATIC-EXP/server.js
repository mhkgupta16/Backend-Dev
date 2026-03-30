import express from 'express';
const port=3000;
const app=express();
app.use("/static",express.static('public'));
app.get("/",(req,res)=>{
  res.send("server is running");
});
app.listen(port,()=>{
   console.log("server is running on port"+port);
});

