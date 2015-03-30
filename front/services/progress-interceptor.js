angular.module('app').factory('progressInterceptor', ['$q', function ($q) {
	var depth = 0;
	var loaderClass = 'ajax-loader-' + (Math.floor(Math.random() * (3 - 1 + 1)) + 1);

	var loader = $('#ajax-loader');

	function start () {
		loader.removeClass('hidden').addClass(loaderClass);
	}

	function stop () {
		loader.addClass('hidden').removeClass(loaderClass);
	}

	return {
		request: function request (config) {
			if (++depth == 1) {
				start();
			}

			return config;
		},

		response: function response (response) {
			if (--depth == 0) {
				stop();
			}
			return response;
		},

		responseError: function responseError (rejection) {
			if (--depth == 0) {
				stop();
			}

			return $q.reject(rejection);
		}
	};
}]);
