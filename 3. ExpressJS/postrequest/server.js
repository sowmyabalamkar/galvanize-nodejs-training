var express = require('express');
var app = express();
const port = 3010;
//app.use(express.bodyParser()); -- Use this for express version less than 3.0
app.use(express.json())



app.post('/employee/:id/details', function (req, res) {
    //Read the post req body and path params and query strings
    var id = req.params.id;
    var area = req.query.area;
    var postbody = req.body;
    console.log(postbody);
    console.log("Request received for id " + id + "and area " + area);
    //    res.send("Request received for id " + id + "and area " + area);
    res.json(postbody);
});

app.listen(port, function (req, res) {
    console.log("Listening at port" + port);
});



