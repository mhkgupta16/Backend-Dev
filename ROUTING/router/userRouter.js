import express from 'express';
const router=express.Router();
let logging =(req,res,next)=>{
  console.log("this is a midlewsre");
  console.log(req.url);
  next()
}
router.use(logging)

router.get("/",(req,res)=>{
  res.send("server bhgaaging");
});
router.get("/user",(req,res)=>{
  res.send("user  route");
});
export default router;