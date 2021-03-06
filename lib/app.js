
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
const initRoutes = require("../app/routes");
const skyway=path.join(__dirname, '../views');
const dbManager=require('./dbManager')
var app = express();

console.log("skyway"+skyway);

// view engine setup
//  app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir:path.join(__dirname, '../views/layouts')}));
app.set('view engine', 'pug');
app.set('views',skyway);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

app.use(express.static(`${__dirname}/../public`));
const port = process.env.PORT || 8010;
const server = require('http').Server(app);


// start server
server.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

initRoutes(app);
dbManager();

// catch 404 and forward to error handler

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
