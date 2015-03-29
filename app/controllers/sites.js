var Archiver = require('archiver');
var sites = require('../../core/sites');

module.exports = {
	scrape: function scrape(req, res) {
		return sites.scrape(req.body).then(function(data){
			res.json(data);
		});
	},

	list: function list(req, res) {
		return sites.list().then(function(data){
			res.json(data);
		});
	},

	download: function scrape(req, res) {
		var params = req.params;
		return sites.getDirectory(params).then(function(data) {
			res.writeHead(200, {
				'Content-Type': 'application/zip',
				'Content-disposition': 'attachment; filename=' + params.dirname + '.zip'
			});

			var zip = Archiver('zip');
			zip.pipe(res);
			zip.directory(data.directory, false).finalize();
		});
	}
};
