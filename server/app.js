var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//app.use('/', routes);



/**
 * Development Settings
 */
if (app.get('env') === 'development') {
    console.log("------------------development--------------");
    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/app')));
    app.use(express.static(path.join(__dirname, '../client/.tmp')));

   // app.use(favicon(path.join(__dirname, '../client/app/images/yeoman.png')));

    console.log("__dirname=%s",path.join(__dirname, '../client/app'));
    // Error Handling
    app.use(function(err, req, res, next) {
        console.log("------------------development2--------------");
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {
    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, 'dist')));
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        console.log("------------------production2--------------");
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

module.exports = app;
