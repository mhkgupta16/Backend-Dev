import express from 'express';
const router=express.Router();

let loginValidation=(req,res,next)=>{
  const token = req.query.token;
  console.log(token);
  if(token=="admin123"){
    next();
  }else{
     return res.send("unauthorized user");
  }
}
router.get("/",(req,res)=>{
  res.send("server is bhaghing");
});
router.get("/signup",(req,res)=>{
  res.send("signup route");
});
router.get("/login",loginValidation,(req,res)=>{
  res.send("login route");
});
  
export default router;