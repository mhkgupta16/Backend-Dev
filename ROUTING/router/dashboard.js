import express from 'express';
const router =express.Router();
router.get("/",(req,res)=>{
  res.send("server is bhaghing");
});
router.get("/profile",(req,res)=>{
  res.send("this is dashboard profile page");
});
router.get("/report",(req,res)=>{
res.send("this is dashbaord report page");
});
export default router;
