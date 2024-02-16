const express = require ('express');

const { Flightmiddlewares } = require('../../middlewares/index')

const CityController = require ('../../controllers/city-controllers');
const FlightController = require ('../../controllers/flight-controllers');
const AirportController = require ('../../controllers/airport-controllers');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get); 
router.get('/city', CityController.getAll);

router.post(
    '/flights', 
    Flightmiddlewares.validateCreateFlight,
    FlightController.create
); 
router.get('/flights', FlightController.getAll);

router.post('/airports', AirportController.create);


module.exports = router;