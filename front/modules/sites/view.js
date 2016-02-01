'use strict';

angular.module('app').controller('ViewCtrl', function ($scope, $http, $location, $routeParams, sites) {
	$scope.site = sites.get({ directory: $routeParams.directory });
});
