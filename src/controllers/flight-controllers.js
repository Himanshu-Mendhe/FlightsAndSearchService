const {FlightService} = require ('../services/index');
const {SuccessCodes} = require('../utils/error-codes')

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        } // so that extra request body should not bulk our data (GOOD PRACTICE)
        
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message:"successfully created a flight"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to create a flight",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:"successfully fetched flight"
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch flights",
            err: error
        })      
    }
}

module.exports = {
    create,
    getAll
}