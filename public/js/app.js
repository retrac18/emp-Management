'use strict';

var app = angular.module( 'hrApp',
		[ 'ngRoute',
		  'hrApp.loginController',
		  'hrApp.employeesCtrl',
		  'hrApp.aboutController',
		  'hrApp.contactController',
		  'hrApp.addEmpController',
		  'hrApp.empProfileController' ] );

app.config( [ '$routeProvider',	 function( $routeProvider ) {
	$routeProvider
		.when( '/', {
			templateUrl  : 'partials/tpl/login.tpl.html',
			controller   : 'loginController',
			controllerAs : 'logincontroller'
		} )
		.when( '/Employees', {
			templateUrl  : 'partials/tpl/employee.tpl.html',
			controller   : 'employeesCtrl',
			controllerAs : 'employeesCtrl'
		} )
		.when( '/Aboutus', {
			templateUrl  : 'partials/tpl/about.tpl.html',
			controller   : 'aboutController',
			controllerAs : 'aboutController'
		} )
		.when( '/Contactus', {
			templateUrl  : 'partials/tpl/contact.tpl.html',
			controller   : 'contactController',
			controllerAs : 'contactController'
		} )
		.when( '/AddEmployee', {
			templateUrl  : 'partials/tpl/empAdd.tpl.html',
			controller   : 'addEmpController',
			controllerAs : 'addEmpController'
		} )
		.when( '/EmpProfile/:id', {
			templateUrl  : 'partials/tpl/empDetails.tpl.html',
			controller   : 'empProfileController',
			controllerAs : 'empProfileController'
		} )
		.otherwise( {
			redirectTo : '/'
		} );
} ] );
