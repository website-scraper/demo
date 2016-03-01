'use strict';

angular.module('app.resources', ['ngResource']);
angular.module('app.templates', []);
angular.module('app.services', []);

angular.module('app', ['ngRoute', 'app.resources', 'app.templates', 'app.services'])
	.config(['$httpProvider', function ($httpProvider) {
			$httpProvider.interceptors.push('progressInterceptor', 'errorInterceptor');
		}])
	.run();
