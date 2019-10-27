var express = require('express');
var db = require('./../models/db');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('*', function(request, response, next) {

    if (request.cookies['type'] == "admin") {
        console.log("admin granted.")
        next();
    } else {
        response.redirect('/logout');
    }

});
router.get('/', function(request, response) {

    if (request.cookies['username'] != null) {
        response.render('adminhome/index');
    } else {
        response.redirect('/logout');
    }
});
router.get('/adduser', function(request, response) {
    console.log("1");
    response.render('adminhome/adduser');
});

router.post('/adduser', function(request, response) {
    console.log("2");
    var user = {
        username: request.body.username,
        password: request.body.password,
        type: request.body.type,
        personalinfo: request.body.personalinfo
    };
    userModel.insert(user, function(status) {
        if (status) {

            response.render('adminhome/index');
        } else {
            response.redirect('adminhome/adduser');
        }
    });

});




module.exports = router;