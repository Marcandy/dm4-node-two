const carCtrl = require( "./carCtrl" );

module.exports = app => {
	app.get( "/api/cars", carCtrl.getCars );
	app.get( "/api/cars/horsepower", carCtrl.getCarsByHorsePower );
	app.get( "/api/cars/:id", carCtrl.getOneCar );
	app.delete( "/api/cars/:id", carCtrl.deleteCar );
	app.post( "/api/cars", carCtrl.addId, carCtrl.postCar );
};
// module.exports = function( app ) { //....
