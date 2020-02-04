var fs = require("fs");
var data = 'Vibranium Brigade, We are a Brand. I am Biswa Ranjan';
// Create a writable stream
var writerStream = fs.createWriteStream('../6.Streams/files/output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data, 'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function () {
    console.log("Write completed.");
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});

