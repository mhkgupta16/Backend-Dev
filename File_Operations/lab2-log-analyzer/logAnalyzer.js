const fs = require("fs");
const path = require("path");

let errorCount = 0;
let totalLines = 0;

const readStream = fs.createReadStream(
  path.join(__dirname, "app.log"),
  { encoding: "utf8" }
);

readStream.on("data", (chunk) => {
  const lines = chunk.split("\n");
  lines.forEach((line) => {
    totalLines++;
    if (line.includes("ERROR")) {
      errorCount++;
    }
  });
});

readStream.on("end", () => {
  console.log("Log Analysis Report");
  console.log("Total lines:", totalLines);
  console.log("Error count:", errorCount);
});

readStream.on("error", (err) => {
  console.error("Stream error:", err.code);
});
