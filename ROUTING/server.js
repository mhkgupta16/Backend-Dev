import express from 'express';
import userRoute from './router/userRouter.js';
import regestrationRoute from './router/regestration.js';
import dashboardRoute from './router/dashboard.js';
const port=3000;
const app=express();
app.use("/api",userRoute);
;
app.use("/register",regestrationRoute);
app.use("/api",dashboardRoute);

app.listen(port,()=>{
  console.log("server is running on port "+port);
})