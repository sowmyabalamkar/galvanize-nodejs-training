var fs = require("fs");


fs.open('file.txt', function (err, contents) {
    if (err) {
        console.log("Error Aya hei \n", err);
    } else {
        console.log("Error Free Code" + contents);
    }
});


process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node docs)
})