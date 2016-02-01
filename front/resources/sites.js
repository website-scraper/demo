angular.module('app.resources').factory('sites', function ($resource) {
	return $resource('/sites/:directory', { directory: '@directory' }, {
		list: { method: 'GET', isArray: true },
		get: { method: 'GET' },
		create: { method: 'POST' }
	});
});
