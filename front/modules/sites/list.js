'use strict';

angular.module('app').controller('ListCtrl', function ($scope, sites) {
	$scope.sites = sites;
});
