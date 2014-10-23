'use strict';

var hrApp = angular.module( 'hrApp.loginController', [] );

hrApp.controller( 'loginController', function( $scope, $http, $location ) {
	$scope.getUserDB = function () {
		return $http.get('/Users');
	};

	this.login = function( user ) {

		$http.get( '/Users/' + user.mail )
		.success( function ( response ) {

			if ( response.user === user.mail ) {
				$location.path( '/Employees' );
			} else {
				window.alert( 'Incorrect Information!' );
			}

		} );

	};

} );
