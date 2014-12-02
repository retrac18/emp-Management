'use strict';

var hrApp = angular.module( 'hrApp.addEmpController',[] );

hrApp.controller( 'addEmpController', function( $scope, $http, $location ) {

	this.create = function () {
		$http.post( '/Employees', this.Employee )
		.success( function () {
			$location.path( '/' );
		} );
	};

	this.cancel = function () {
		$location.path( '/' );
	};
} );
