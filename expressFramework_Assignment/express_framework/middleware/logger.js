const logger =(req,res,next)=>{
  const starttime=Date.now();
  res.on("finish",()=>{
    const endtime=Date.now();
    const duration = endtime-starttime;

    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });
  next();;
};
export default logger;