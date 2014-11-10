'use strict';

var express    = require( 'express' );
var app        = express();
var bodyParser = require( 'body-parser' );
var mongojs    = require( 'mongojs' );
var db         = mongojs( 'employeedb', [ 'Employees', 'Users' ]);

app.use( express.static( __dirname + '/public' ) );
app.use( bodyParser() );

app.get( '/Aboutus', function( req, res ) {
	console.log('aboutus!');
} );

app.get( '/Contactus', function( req, res ) {
	console.log('aboutus!');
} );

app.get( '/Employees', function( req, res ) {
	db.Employees.find( function ( err, docs ) {
		res.json( docs );
	} );
} );

app.post( '/Employees', function( req, res ) {
	db.Employees.insert( req.body, function( err, doc ) {
		res.json( doc );
	} );
} );

app.delete( '/Employees/:id', function( req, res ) {
	var id = req.params.id;
	db.Employees.remove( { _id : mongojs.ObjectId( id ) },
		function ( err, doc ) {
			res.json( doc );
		} );
} );

app.get( '/Employees/:id', function( req, res ) {
	var id = req.params.id;
	db.Employees.findOne( { _id : mongojs.ObjectId( id ) },
		function( err, doc ) {
			res.json( doc );
		}
	);
} );

app.put( '/Employees/:id', function( req, res ) {
	var id = req.params.id;

	db.Employees.update( { _id : mongojs.ObjectId( id ) },
		{
			firstName   : req.body.firstName,
			lastName    : req.body.lastName,
			address     : req.body.address,
			empNo       : req.body.empNo,
			gender      : req.body.gender,
			dateofbirth : req.body.dateofbirth,
			sssno       : req.body.sssno,
			hdmf        : req.body.hdmf,
			tin         : req.body.tin,
			contactNo   : req.body.contactNo

		}, function ( err, doc ) {
			res.json( doc );
		}
	 );
} );

app.get( '/Users/:user', function( req, res ) {
	var userLogin = req.params.user;
	db.Users.findOne( { user : userLogin },
		function ( err, docs ) {
			res.json( docs );
		}
	);
} );

app.get( '/Users', function( req, res ) {
	db.Users.find( function ( err, docs ) {
		res.json( docs );
	} );
} );

app.listen( 9000 );
