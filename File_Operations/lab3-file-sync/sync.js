const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "source");
const destDir = path.join(__dirname, "destination");

fs.readdir(srcDir, (err, files) => {
  if (err) return console.error("Source read error:", err.code);

  files.forEach((file) => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);

    fs.copyFile(srcFile, destFile, (err) => {
      if (err) {
        console.error("Sync error:", err.code);
      } else {
        console.log(`${file} synchronized`);
      }
    });
  });
});
