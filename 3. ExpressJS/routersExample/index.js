var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    res.send('Get Details ');
});
router.post('/', function (req, res) {
    res.send('POST Details.');
});

//We can post body -- request.body holds the value of the post body
//app.use(express.json());  // after express 4.6.1, before that we need to use body-parser middleware.


//export this router to use in our index.js
module.exports = router;