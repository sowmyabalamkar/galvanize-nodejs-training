var express = require("express");
var app = express();

app.get('/', function (req, res) {
    console.log("I am in here");
})

app.listen(4000);