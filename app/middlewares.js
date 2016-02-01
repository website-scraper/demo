var express = require('express');
var engine = require('ejs').renderFile;
var bodyParser = require('body-parser');
var path = require('path');
var config = require('../config/app');

module.exports = function(app) {
	app.engine('html', engine);
	app.use(bodyParser.json());
	app.set('views', path.resolve(__dirname, 'views'));

	app.use(config.staticPath, express.static(path.resolve(__dirname, '../public')));
	app.get(config.staticPath + '/*', function(req, res) {
		res.status(404).send('Not found');
	});

};
