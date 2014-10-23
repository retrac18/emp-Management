'use strict';

app.factory( 'loginService', function ( $http ) {
	return {
		login : function ( user ) {
			console.log( user );
			var $promise = $http.post( 'data/user.php', user );

			$promise.then( function( msg ) {
				if ( msg.data === 'success' ) {
					console.log( 'success login' );
				} else {
					console.log( 'error login' );
				}
			} );
		}
	};
} );


// appServices.factory('AuthenticationService', function() {
//     var auth = {
//         isLogged: false
//     };

//     return auth;
// });

// appServices.factory('UserService', function($http) {
//     return {
//         logIn: function(username, password) {
//             return $http.post(options.api.base_url + '/login', { username: username, password: password } );
//         },

//         logOut: function() {

//         }
//     };
// });
