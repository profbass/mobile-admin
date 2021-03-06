
/**
 * Module dependencies.
 */


var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var about = require('./routes/about');
var http = require('http');
var path = require('path');



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.set('layout', 'layout');
app.enable('view cache');
app.engine('html', require('hogan-express'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));
//Parse App Vars
app.get('http://www.parsecdn.com/js/parse-1.2.8.min.js');
app.locals.parseApplicationId = 'bzxMfkPDky6xy8G6rTjH39N2GG3U08G6NaSjPTLg';
app.locals.parseJavascriptKey = 'WuQ4EQv7CW1IVX8wrdOnTOYeEUovU0vqWOGZxZfp';

// development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

//setting routs
app.get('/', routes.index);
app.get('/about', about.bio);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
