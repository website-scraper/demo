var express = require('express');
var engine = require('ejs').renderFile;
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
	app.engine('html', engine);
	app.use(bodyParser.json());
	app.set('views', path.resolve(__dirname, 'views'));
	app.use(express.static(path.resolve(__dirname, '../public')));

};
