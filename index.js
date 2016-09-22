const express = require( "express" );
const { json } = require( "body-parser" );
const app = express();
const port = 4000;

function addTimeStamp( req, res, next ) {
	console.log( "addTimeStamp" );
	req.body.timeStamp = new Date();
	next();
}

app.use( json() );
app.use( addTimeStamp );


const carRoutes = require( "./features/cars/carRoutes" );
carRoutes( app );


// function getCars( req, res ) {
// 	return res.status( 200 ).json( [] );
// }
//
// function carRoutes( app ) {
// 	app.get( "/api/cars", getCars );
// 	app.post( "")
// 	app.delete( "")
// }
//
// carRoutes( app );

app.listen( port, () => console.log( `Listening on ${ port }` ) );


// GET ALL USERS
// POST A USER
// GET A USER BY ID
// {
// 	name: "Some String"
// 	, age: 99
//  , _id: 0
// }
// MIDDLEWARE TO ADD A TIMESTAMP