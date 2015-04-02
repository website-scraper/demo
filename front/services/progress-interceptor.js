angular.module('app').factory('progressInterceptor', ['$q', function ($q) {
	var depth = 0;

	var loader = $('#ajax-loader');
	var minLoaderIndex = 0;
	var maxLoaderIndex = 6;
	var currentLoaderIndex;

	function getLoaderClass(i) {
		return 'ajax-loader-' + i;
	}

	function getLoaderIndex() {
		return Math.floor(Math.random() * (maxLoaderIndex - minLoaderIndex + 1));
	}

	function start () {
		currentLoaderIndex = getLoaderIndex();
		loader.removeClass('hidden').addClass(getLoaderClass(currentLoaderIndex));
	}

	function stop () {
		loader.addClass('hidden').removeClass(getLoaderClass(currentLoaderIndex));
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
