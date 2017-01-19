var defaults = require('../config/scraper');
var config = require('../config/files');
var _ = require('lodash');
var Promise = require('bluebird');
var url = require('url');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');
var scrapeWebsite = require('website-scraper');
var format = require('string-template');

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

function buildSiteObject(directory) {
	return {
		directory: directory,
		previewPath: format(config.previewPath, {directory: directory}),
		downloadPath: format(config.downloadPath, {directory: directory})
	}
}

function getNotFoundError(directory) {
	return {
		errors: {
			directory: 'Site ' + directory + ' was not found'
		}
	};
}

var service = {
	scrape: function scrape(options) {
		var siteDirname = getSiteDirname(options.url);
		var siteFullPath = getSiteFullPath(siteDirname);

		var scraperOptions = _.extend({}, defaults, {
			urls: [options.url],
			directory: siteFullPath,
			// If defaults object has request property, it will be superseded by options.request
			request: options.request
		});

		return scrapeWebsite(scraperOptions).then(function() {
			return Promise.resolve(buildSiteObject(siteDirname));
		});
	},

	list: function list() {
		return getSitesDirectories().then(function (directories) {
			var list = directories.map(buildSiteObject);
			return Promise.resolve(list);
		})
	},

	find: function find(dirname) {
		return getSitesDirectories().then(function (directories) {
			var found = _.find(directories, function(el) {
				return el === dirname;
			});

			if (!found) {
				return Promise.reject(getNotFoundError(dirname));
			}

			return Promise.resolve(buildSiteObject(found));
		})
	},

	getFullPath: function getFullPath(dirname) {
		return getSitesDirectories().then(function (directories) {
			var exists = directories.indexOf(dirname) > -1;

			if (!exists) {
				return Promise.reject(getNotFoundError(dirname));
			}

			return Promise.resolve(getSiteFullPath(dirname));
		});
	}
};

module.exports = service;
