module.exports = {
	getCars( req, res ) {
		return res.status( 200 ).json( cars );
	}
	// getCars: function( req, res ) { //...
	, postCar( req, res ) {
		console.log( "postCar" );
		cars.push( req.body );
		return res.status( 203 ).json( cars );
	}
	, getOneCar( req, res ) {
		for ( let i = 0; i < cars.length; i++ ) {
			if ( parseInt( req.params.id ) === cars[ i ]._id ) {
				return res.status( 200 ).json( cars[ i ] );
			}
		}
		return res.status( 404 ).json( { error: "id not found" } );
	}
	, deleteCar( req, res ) {
		for ( let i = 0; i < cars.length; i++ ) {
			if ( parseInt( req.params.id ) === cars[ i ]._id ) {
				cars.splice( i, 1 );
				return res.status( 200 ).json( cars );
			}
		}
		return res.status( 404 ).json( { error: "id not found" } );
	}
	, addId( req, res, next ) {
		console.log( "addId" );
		req.body._id = cars[ cars.length -1 ]._id + 1;
		next();
	}
	, getCarsByHorsePower( req, res ) {
		const results = cars.filter( car => car.horsePower >= parseInt ( req.query.horsePower ) );
		// var results = cars.filter( function( car ) {
		// 	return car.horsePower >= parseInt( req.query.horsePower );
		// } );
		res.status( 200 ).json( results );
	}
};

const cars = [
	{
		name: "Mini Cooper"
		, year: 2016
		, horsePower: 130
		, _id: 0
	}
	, {
		name: "Mustang"
		, year: 1969
		, horsePower: 9000
		, _id: 1
	}
	, {
		name: "Hyundai Accent"
		, year: 2015
		, horsePower: 1
		, _id: 2
	}
];
