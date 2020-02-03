var express = require('express');
var app = express();

app.use('/static', express.static('static'));

app.use('/public', express.static('public'));

app.listen(3000);


--server.js localhost: 3000
--public localhost: 3000 / public
--index.html    localhost: 3000 / public / index.html
--static    localhost: 3000 / static
--me.jpg localhost: 3000 / static / me.jpg
--express.png localhost: 3000 / static / express.png
