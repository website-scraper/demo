'use strict';

angular.module('app').controller('ViewCtrl', function ($scope, $http, $location, $routeParams) {
	$scope.site = { directory: $routeParams.directory };

	$scope.downloadSrc = '/sites/' + $scope.site.directory + '/download/';
	$scope.previewSrc = '/files/' + $scope.site.directory;
});

