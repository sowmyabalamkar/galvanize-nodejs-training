var express = require('express');
var app = express();


// app.get('/:id', function (req, res) {
//     res.send('ID you searched for is ' + req.params.id);
// });


// app.get('/employees/:id', function (req, res) {
//     res.send('Search is made for employee ID ' + req.params.id);
// });

// app.get('/employees/:dept/:id', function (req, res) {
//     res.send('Search is made for employee id' + req.params.id + 'and department ' + req.params.dept);
// });

//Pattern matched routes
// app.get('/employees/:id([0-9]{5})', function (req, res) {
//     res.send('Search is made for employee ID: ' + req.params.id);
// });


app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(5000);