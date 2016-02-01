angular.module('app').config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', { templateUrl: 'sites/create.html', controller: 'CreateCtrl' })
			.when('/new', { templateUrl: 'sites/create.html', controller: 'CreateCtrl' })
			.when('/list', {
				templateUrl: 'sites/list.html',
				controller: 'ListCtrl',
				resolve: {
					sites: function (sites) {
						return sites.list().$promise;
					}
				}
			})
			.when('/view/:directory', {
				templateUrl: 'sites/view.html',
				controller: 'ViewCtrl',
				resolve: {
					site: function ($route, sites) {
						return sites.get({ directory: $route.current.params.directory }).$promise;
					}
				}
			})
			.otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
	}
]);
