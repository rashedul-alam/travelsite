var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {

    //request.session.un = null;
    response.clearCookie('username');
    response.clearCookie('type');
    response.redirect('/login');
});

module.exports = router;