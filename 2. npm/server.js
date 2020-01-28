var http = require("http");

http.createServer(function (request, response) {
    console.log("We are galvanites.");
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('"We are galvanites."\n');
}).listen(8090);

console.log("Server running at http://localhost:8090");