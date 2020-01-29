var express = require('Express');
var app = express();

var details = require('./index.js');

//both index.js and things.js should be in same directory
app.use('/details', details);

app.listen(4000);