var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../database/db');
var bcrypt = require('bcrypt-nodejs');
var users = db.users,
    DEFAULT_PWD = '1q2w3e4r',
    SALT_WORK_FACTOR = 10;

var UserService = function () {

};

var userService = new UserService();

UserService.prototype.register = function (user, cb) {
    // Check to see if the user already exists
    // Current time this occurred
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("name == " + color.red(user.name));
    users.findOne({

        'name': user.name

    }, function (err, dbUser) {
        console.log("name222 == " + color.red(user.name));
        // If there's an error, log it and return to user
        if (err) {
            return cb(err, dbUser);
        }

        // If the user doesn't exist, create one
        if (!dbUser) {
            console.log('Creating a new user at ' + color.green(time) + ' with the name: ' + color.green(user.name));

            // setup the new user
            var newUser = new users({
                name: user.name,
                password: DEFAULT_PWD

            });

            userService.encrypt(newUser, function (err, newUser) {

                console.log('Begin encrypt a new user at ' + color.green(time) + ' with the name: ' + color.green(newUser));

                if (err) {
                    return cb(err, newUser);
                }
                ;

                // save the user to the database
                newUser.save(function (err, savedUser) {
                    if (err) {
                        console.log('Problem saving the user ' + color.yellow(newUser.name) + ' due to ' + err);
                        return cb(err, newUser);
                    }
                    // Log success and send the filtered user back
                    console.log('Successfully created new user: ' + color.green(newUser.name));

                    return cb(null,newUser);

                });

            });


        }else{
            // reset attempts and lock info
            var updates = {
                $set: {lastAccessTime: Date.now()}
            };
            return dbUser.update(updates, function (err) {
                if (err) return cb(err, dbUser);
                return  cb(null, dbUser);
            });
        }




    });
};

// expose enum on the model, and provide an internal convenience reference
var reasons = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1
};


UserService.prototype.auth = function (user, cb) {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log("name in auth == " + color.red(user.name));
    users.findOne({name: user.name}, function (err, dbUser) {

        console.log("name in auth == " + color.red(dbUser));
        if (err) return cb(err, dbUser);

        console.log("name in auth == " + color.red(dbUser.name));

        // make sure the user exists
        if (!dbUser) {
            return cb(null, null, reasons.NOT_FOUND);
        }
        // test for a matching password
        userService.comparePassword(user, dbUser, function (err, isMatch) {
            if (err) return cb(err, dbUser);
            // check if the password was a match
            if (isMatch) {

                // reset attempts and lock info
                var updates = {
                    $set: {lastAccessTime: Date.now()}
                };
                return dbUser.update(updates, function (err, user) {
                    if (err) return cb(err, dbUser);
                    return cb(null, dbUser);
                });
            }
        });
    });
};

UserService.prototype.encrypt = function (user, cb) {
    // generate salt

    console.log("begin encrypt user.name=" + user.name);

    console.log('Begin encrypt a new user at ' +bcrypt);

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {

        console.log("begin encrypt2 salt=" + salt);
        if (err) {
            console.log("error");
            return cb(err, user);
        }

        console.log("begin3 encrypt user.password=" + user.password);
        // create the hash and store it
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return cb(err, user);
            }
            user.password = hash;
            console.log("hash=" + hash + " user.password=" + user.password);
            return cb(null, user);

        });
    });
};

UserService.prototype.comparePassword = function (user, dbUser, cb) {
    bcrypt.compare(user.password, dbUser.password, function (err, isMatch) {
        if (err) return cb(err, user);
        return cb(null, isMatch);
    });
};


module.exports = userService;
