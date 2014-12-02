'use strict';

var app = angular.module( 'hrApp',
		[ 'ngRoute',
		  'hrApp.employeesCtrl',
		  'hrApp.aboutController',
		  'hrApp.contactController',
		  'hrApp.addEmpController',
		  'hrApp.empProfileController',
		  'hrApp.empUpdateController' ] );

app.config( [ '$routeProvider',	 function( $routeProvider ) {
	$routeProvider
		.when( '/', {
			templateUrl  : 'partials/tpl/employee.tpl.html',
			controller   : 'employeesCtrl',
			controllerAs : 'employeesCtrl'
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
		.when( '/ViewProfile/:id', {
			templateUrl  : 'partials/tpl/empDetails.tpl.html',
			controller   : 'empProfileController',
			controllerAs : 'empProfileController'
		} )
		.when( '/Update/:id', {
			templateUrl  : 'partials/tpl/empUpdate.tpl.html',
			controller   : 'empUpdateController',
			controllerAs : 'empUpdateController'
		} )
		.when( '/DTRView/:id', {
			templateUrl  : 'partials/tpl/dtrView.tpl.html',
			controller   : 'empDTRController',
			controllerAs : 'empDTRController'
		} )
		.otherwise( {
			redirectTo : '/Employees'
		} );
} ] );
