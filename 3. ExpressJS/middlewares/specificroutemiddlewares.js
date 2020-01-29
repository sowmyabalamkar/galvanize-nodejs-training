var express = require('express');
var app = express();

//Middleware function to log request protocol
app.use('/data', function (req, res, next) {
    console.log("Request recieved at " + Date.now() + " for data.");
    //Logging
    next();
});

// Route handler that sends the response
app.get('/data', function (req, res) {
    //business logic
    res.send('data');
});

app.get('/details', function (req, res) {
    res.send('details');
});

app.listen(3002);