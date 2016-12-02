require('pmx').init();

var express = require('express');
var addMiddlewares = require('./app/middlewares');
var addRoutes = require('./app/routes');
var config = require('./config/app');

var app = express();
addMiddlewares(app);
addRoutes(app);

app.listen(config.port);
