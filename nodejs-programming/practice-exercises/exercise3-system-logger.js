const os = require("os");
const fs = require("fs");

setInterval(() => {
  const info = `
CPU: ${os.cpus()[0].model}
Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Platform: ${os.platform()}
-------------------------
`;

  fs.appendFile("system-info.txt", info, (err) => {
    if (err) console.error("Error writing system info");
  });

  console.log("System info logged");
}, 5000);
