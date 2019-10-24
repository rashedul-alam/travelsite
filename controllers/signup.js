var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();


router.get('/', function(request, response) {
    response.render('signup/index');
});
router.post('/', function(request, response) {

    var user = {
        username: request.body.username,
        password: request.body.password,
        type: request.body.type,
        personalinfo: request.body.personalinfo
    };
    userModel.insert(user, function(status) {
        if (status) {

            response.render('login/index');
        } else {
            response.redirect('signup/index');
        }
    });



});

module.exports = router;