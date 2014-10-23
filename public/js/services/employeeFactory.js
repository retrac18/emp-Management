( function () {
	var employeeFactory = function ( $http ) {
		var factory = { };

		// factory.getCustomers  = function () {
		// 	return $http.get( '/getcustomers' );
		// };

		factory.addEmployee = function( newEmployee ) {
			return $http.post( '/Employees', newEmployee );
		};

		// factory.getCustomerOrder = function ( customerId ) {
		// 	return $http.get( '/orders/' + customerId );
		// };

		// factory.getOrders = function () {
		// 	return $http.get( '/orders' );
		// };

		// factory.deleteCustomer = function ( customerId ) {
		// 	return $http.delete( '/customer/' + customerId );
		// };

		return factory;

	};

	employeeFactory.$inject = [ '$http' ];

	angular.module( 'hrApp' ).factory( 'employeeFactory', employeeFactory );

} () );