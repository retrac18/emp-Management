'use strict';

var hrApp = angular.module( 'hrApp.empUpdateController',[] );

hrApp.controller( 'empUpdateController', function( $scope, $http, $location, $routeParams ) {
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

	self.updateEmployee = function () {
		$http.put( '/Employees/' + $scope.Employee._id, $scope.Employee )
		.success( function () {
			$location.path( '/' );
		} );
	};

	self.cancel = function () {
		$location.path( '/' );
	};
} );
