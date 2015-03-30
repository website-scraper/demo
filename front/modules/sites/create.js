'use strict';

angular.module('app').controller('CreateCtrl', function ($scope, $http, $location, sites, userAgents) {
	$scope.userAgents = userAgents.list();
	$scope.showAdvancedOptions = false;

	$scope.toggleAdvancedOptions = function() {
		$scope.showAdvancedOptions = !$scope.showAdvancedOptions;
	};

	$scope.add = function () {
		sites.save($scope.data).$promise.then(function siteScraped (site) {
			$location.path('/view/' + site.directory);
		});
	};

	$scope.reset = function () {
		$scope.setDefaults();
		$scope.scraperForm.$setPristine();
	};

	$scope.setDefaults = function () {
		var defaults = {
			url: '' ,
			request: {
				headers: {
					'User-Agent': $scope.userAgents[0].userAgent
				}
			}
		};
		$scope.data = angular.copy(defaults);
	};

	$scope.setDefaults();
});
