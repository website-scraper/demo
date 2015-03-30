'use strict';

angular.module('app.resources', ['ngResource']);
angular.module('app.templates', []);
angular.module('app.services', []);

angular.module('app', ['ngRoute', 'app.resources', 'app.templates', 'app.services'])
	.config(['$routeProvider', '$locationProvider', '$httpProvider',
		function ($routeProvider, $locationProvider, $httpProvider) {

			$httpProvider.interceptors.push(
				'progressInterceptor'
			);

			//blockUIConfigProvider.delay(1000);
		}])
	.run(['$rootScope', '$location', '$http', function($rootScope, $location, $http) {}]);
