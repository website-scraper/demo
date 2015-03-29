'use strict';

angular.module('app.resources', ['ngResource']);
angular.module('app.templates', []);

angular.module('app', ['ngRoute', 'blockUI', 'app.resources', 'app.templates'])
	.config(['$routeProvider', '$locationProvider', 'blockUIConfigProvider',
		function ($routeProvider, $locationProvider, blockUIConfigProvider) {

			$routeProvider
				.when('/', { templateUrl: 'sites/create.html', controller: 'CreateCtrl' })
				.when('/new', { templateUrl: 'sites/create.html', controller: 'CreateCtrl' })
				.when('/list', { templateUrl: 'sites/list.html', controller: 'ListCtrl' })
				.when('/view/:directory', { templateUrl: 'sites/view.html', controller: 'ViewCtrl' })
				.otherwise({ redirectTo: '/' });

			$locationProvider.html5Mode(true);
			blockUIConfigProvider.delay(1000);
		}])
	.run(['$rootScope', '$location', '$http', function($rootScope, $location, $http) {}]);
