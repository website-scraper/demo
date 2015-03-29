'use strict';

angular.module('webScraperApp', ['ngRoute', 'blockUI', 'webScraperControllers'])
	.config(['$routeProvider', '$locationProvider', 'blockUIConfigProvider',
		function ($routeProvider, $locationProvider, blockUIConfigProvider) {

			$routeProvider
				.when('/', { templateUrl: '/partials/index.html', controller: 'IndexCtrl' })
				.when('/new', { templateUrl: '/partials/index.html', controller: 'IndexCtrl' })
				.when('/list', { templateUrl: '/partials/list.html', controller: 'ListCtrl' })
				.when('/view/:filename', { templateUrl: '/partials/view.html', controller: 'ViewCtrl' })
				.otherwise({ redirectTo: '/' });

			$locationProvider.html5Mode(true);
			blockUIConfigProvider.delay(1000);
		}]);
