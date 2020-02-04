//1.
var http = require('http');

var emp = [];

var extServerOptions = {
    host: 'dummy.restapiexample.com',
    //port: '8080',
    path: '/api/v1/employees',
    method: 'GET'
};
//3.
function get() {
    http.request(extServerOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            console.log(data);
        });
    }).end();
};

get();

// options--
// includes
// path
// host
// http.request(options, function (res) {

// });