var express = require('express');
var app = express();

app.all('/test', function (req, res) {
    res.send("No Effect on this route!");
});
//Show the output in postman on how it works.

app.listen(3003);
