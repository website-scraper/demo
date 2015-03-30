angular.module('app').config(['$routeProvider', '$locationProvider',
	function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', { templateUrl: 'sites/create.html', controller: 'CreateCtrl' })
			.when('/new', { templateUrl: 'sites/create.html', controller: 'CreateCtrl' })
			.when('/list', { templateUrl: 'sites/list.html', controller: 'ListCtrl' })
			.when('/view/:directory', { templateUrl: 'sites/view.html', controller: 'ViewCtrl' })
			.otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
	}
]);
