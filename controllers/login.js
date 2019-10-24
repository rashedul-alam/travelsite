var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response) {
    response.render('login/index');
});

router.post('/', function(request, response) {

    var user = {
        username: request.body.username,
        password: request.body.password,
        type: request.body.type
    };

    userModel.validate(user, function(status) {
        if (status) {
            response.cookie('username', request.body.username);
            response.cookie('type', request.body.type);
            if (request.body.type == 'admin') {
                console.log("admin");
                response.redirect('/adminhome');
            } else if (request.body.type == 'scout') {
                console.log("scot");
                response.redirect('/scouthome');

            } else if (request.body.type == 'guser') {
                console.log("guser");
                response.redirect('/guserhome');

            }

        } else {
            response.send('invalid username/password');
        }
    });

});

module.exports = router;