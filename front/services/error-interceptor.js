angular.module('app').factory('errorInterceptor', ['$rootScope', '$q',
	function ($rootScope, $q) {
		return {
			responseError: function responseError (rejection) {
				$rootScope.hasErrors = true;
				return $q.reject(rejection);
			}
		};
}]);
