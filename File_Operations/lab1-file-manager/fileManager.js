const fs = require("fs");
const path = require("path");

// Read file
fs.readFile(path.join(__dirname, "sample.txt"), "utf8", (err, data) => {
  if (err) {
    console.error("Read error:", err.code);
    return;
  }
  console.log("File content:", data);
});

// Write file
fs.writeFile(
  path.join(__dirname, "output.txt"),
  "This is written using async fs",
  "utf8",
  (err) => {
    if (err) return console.error("Write error:", err.code);
    console.log("File written successfully");
  }
);

// Copy file
fs.copyFile(
  path.join(__dirname, "output.txt"),
  path.join(__dirname, "copy.txt"),
  (err) => {
    if (err) return console.error("Copy error:", err.code);
    console.log("File copied");
  }
);

// Delete file
fs.unlink(path.join(__dirname, "copy.txt"), (err) => {
  if (err) return console.error("Delete error:", err.code);
  console.log("File deleted");
});

// List directory
fs.readdir(__dirname, (err, files) => {
  if (err) return console.error("Read dir error:", err.code);
  console.log("Directory files:", files);
});
