const fs = require("fs");

const logger = (req, res, next) => {
    const log = req.method + " " + req.url + "\n";

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing log");
        }
    });

    next();
};

module.exports = logger;