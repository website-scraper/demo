'use strict';

angular.module('app').controller('ListCtrl', function ($scope, sites) {
	function fetch() {
		$scope.sites = sites.list();
	}

	fetch();

	$scope.remove = function(site) {
		if (confirm('Are you sure?')) {
			site.$remove().$promise.then(fetch);
		}
	};
});
