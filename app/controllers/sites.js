var Archiver = require('archiver');
var sites = require('../../core/sites');

module.exports = {
	scrape: sites.scrape,
	list: sites.list,

	download: function scrape(params, req, res) {
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
