'use strict';

var hrApp = angular.module( 'hrApp.employeesCtrl',[] );

hrApp.controller( 'employeesCtrl', function( $scope, $http, $location ) {
	var self = this;

	self.renderEmployees = function () {
		$scope.getEmployeeDB().then( function( response ){
			$scope.Employees = response.data;
		});
	};

	self.init = function () {
		self.renderEmployees();
	};

	$scope.getEmployeeDB = function () {
		return $http.get( '/Employees' );
	};

	this.add = function () {
		$location.path( '/AddEmployee' );
	};

	self.remove = function ( id ) {
		$http.delete( '/Employees/' + id )
		.success( function () {
			self.init();
		} );
	};

	this.info = function ( id ) {
		$location.path( '/EmpProfile/' + id );
	};

	self.update = function () {
		$http.put( '/Employees/' + $scope.Employee._id, $scope.Employee )
		.success( function () {
			self.init();
		} );
	};
	$scope.sortField = 'lastName';
	$scope.reverse   = true;
} );
