angular.module('app.resources').factory('sites', ['$resource', '$http',
	function ($resource, $http) {
		return $resource('/sites/:directory', { directory: '@directory' }, {
			list: { method: 'GET', isArray: true },
			create: { method: 'POST' }
		});
	}
]);