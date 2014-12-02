'use strict';

var hrApp = angular.module( 'hrApp.empProfileController', [] );

hrApp.controller( 'empProfileController', function( $scope, $http, $location, $routeParams ) {

	var self = this;

	self.renderEmployee = function () {
		$scope.getEmployee().then( function( response ){
			$scope.Employee = response.data;
		});
	};

	self.init = function () {
		self.renderEmployee();
	};

	$scope.getEmployee = function () {
		return $http.get( '/Employees/' + $routeParams.id )
		.success( function ( response ) {
			$scope.Employee = response;
		} );
	};

	self.cancel = function () {
		$location.path( '/' );
	};
} );
