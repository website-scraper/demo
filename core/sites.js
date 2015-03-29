var defaults = require('../config/scraper');
var config = require('../config/files');
var _ = require('lodash');
var Promise = require('bluebird');
var url = require('url');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var scraper = require('website-scraper');

function getSiteDirname (siteUrl) {
	var urlObj = url.parse(siteUrl);
	var domain = urlObj.host;
	return domain + '-' + new Date().getTime();
}

function getSiteFullPath (siteDirname) {
	return path.resolve(config.directory, siteDirname);
}

function getSitesDirectories() {
	var root = config.directory;
	var directories = [];
	return fs.readdirAsync(root).then(function(files) {
		return Promise.map(files, function(file) {
			return fs.statAsync(root + '/' + file).then(function(stat){
				if (stat.isDirectory()) {
					directories.push(file);
				}
			});
		}).then(function() {
			return Promise.resolve(directories);
		});
	});
}

var service = {
	scrape: function scrape(options) {
		var siteDirname = getSiteDirname(options.url);
		var siteFullPath = getSiteFullPath(siteDirname);

		var scraperOptions = _.extend(defaults, {
			urls: [options.url],
			directory: siteFullPath,
			request: options.request
		});

		return scraper.scrape(scraperOptions).then(function(scrapedPagesArray) {
			var data = scrapedPagesArray[0];
			delete data.filename;
			data.directory = siteDirname;
			return Promise.resolve(data);
		});
	},

	list: function list() {
		return getSitesDirectories().then(function (directories) {
			var list = directories.map(function (directory) {
				return { directory: directory };
			});
			return Promise.resolve(list);
		})
	},

	getDirectory: function getDirectory(options) {
		return getSitesDirectories().then(function (directories) {
			var siteDirname = options.dirname;
			var exists = directories.indexOf(siteDirname) > -1;
			var localDirectory = getSiteFullPath(siteDirname);

			if (!exists) {
				return Promise.reject('Site ' + siteDirname + ' was not found');
			}

			return Promise.resolve({ directory: localDirectory });
		});
	}
};

module.exports = service;
