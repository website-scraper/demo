var controller = require('app-controller');

var index = require('./controllers/index');
var sites = controller(require('./controllers/sites'));

module.exports = function(app) {

	app.get('/sites', sites.list);
	app.post('/sites', sites.scrape);
	app.get('/sites/:dirname', sites.find);
	app.get('/sites/:dirname/download', sites.download);

	app.get('/', index.index);
	app.get('*', index.index);

};
