/**
 * This handles the signing up of users
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var userService = require('../service/UserService');


// The POST /user route
router.post('/register', function (req, res) {

    // The posted information from the front-end
    var body = req.body;


    var user = {name: body.name};
    userService.register(user, function (err, user) {
        if (err) {
            return res.status(500).json({message: err})
        }
        console.log(color.green(_.pick(user, "id","name")));
        res.status(200).json(_.pick(user, "id","name"));
    });


});

router.post('/auth', function (req, res) {

    // The posted information from the front-end
    var body = req.body;
    // Current time this occurred
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    var user = {name: body.name, password: '1q2w3e4r'};
    userService.auth(user, function (err, user) {
        if (err) {
            return res.status(500).json({message: err})
        }
        res.status(200).json(_.pick(user, "id","name"))
    });
});

module.exports = router;