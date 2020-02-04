var http = require('http');

var employee = JSON.stringify({
    'name': 'Training',
    'salary': '52000',
    'age': '23'
});

//5
var postData = {
    host: 'dummy.restapiexample.com',
    //port: '3752',
    path: '/api/v1/create',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': employee.length
    }
};


//6
var postRequest = http.request(postData, function (res) {
    console.log("response statusCode: ", res.statusCode);
    res.on('data', function (data) {
        console.log('Posting Result:\n');
        process.stdout.write(data);
        console.log('\n\nPOST Operation Completed');
    });
});

// 7
postRequest.write(employee);
postRequest.end();
postRequest.on('error', function (e) {
    console.error(e);
});

//get();