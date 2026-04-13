const fs = require("fs");

const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const log = `${new Date().toISOString()} | ${req.method} ${req.url} | ${res.statusCode} | ${Date.now() - start}ms\n`;
    fs.appendFileSync("logs.txt", log);
  });

  next();
};

module.exports = logger;