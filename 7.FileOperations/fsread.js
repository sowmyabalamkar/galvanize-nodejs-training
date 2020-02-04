var fs = require("fs");

// Asynchronous read
fs.readFile('../7.FileOperations/files/input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('../7.FileOperations/files/input.txt');
console.log("Synchronous Read: " + data.toString());

